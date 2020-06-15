<template>
  <div class="container is-fluid">
    <div class="columns is-gapless">
      <div v-for="rsd of remoteStreamIds" :key="rsd.peerId" class="column is-1">
        <video
          :id="rsd.peerId + '-vd'"
          class="sub"
          controls
          autoplay
          playsinline
          muted
          :srcObject.prop="main.remoteStreams[rsd.streamId]"
        />
      </div>
    </div>
    <div class="columns">
      <div class="column is-2">
        <div class="card">
          <div class="card-header">
            <p class="card-header-title">
              Interpreter: {{ $store.state.peerName }} 
              <span class="has-text-red">{{ ipStatus }}</span>
            </p>
          </div>
          <div class="card-content">
            <div class="columns is-gapless">
              <div class="column is-half">
                <ul>
                  <li>
                    <button
                      class="button is-primary is-fullwidth"
                      @click="handOver"
                      :disabled="!canHandover">{{ handoverBtn }}</button>
                  </li>
                </ul>
              </div>
              <div class="column is-half">
                <pre>{{ speakStack.join('\n') }}</pre>
              </div>
            </div>
            <div class="card-footer">
              <audio id="ip-voice" muted controls/>
              <div v-if="handOverRequested">
                <h4>交代可能ですか？ 残り：{{ handOverTime/1000 }}</h4>
                <ul class="is-inline-flex">
                  <li>
                    <button class="button is-success is-small" @click="acceptHandOver">
                      ACCEPT
                    </button>
                  </li>
                  <li>
                    <button class="button is-danger is-small" @click="rejectHandOver">
                      REJECT NOW
                    </button>
                  </li>
                </ul>
              </div>
              <div v-if="handOverRequesting">
                <h4>交代確認中...</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-10">
        <h3 v-if="speakStack.length > 0">{{ speakStack[0] }} is speaking</h3>
        <video
          id="top"
          class="top-video"
          controls
          autoplay
          playsinline
          :srcObject.prop="broadcasting === null ? mock : broadcasting"
        />
      </div>
    </div>
  </div>
</template>

<script>

const setVols = (allVol) => {
  const videoEls = document.querySelectorAll('video')
  for (const videoEl of videoEls) {
    videoEl.volume = allVol
  }
}

export default {
  props: ['con'],
  data () {
    return {
      speakStack: [],
      myStream: null,
      mock: null,
      broadcasting: null,
      main: null,
      remoteStreamIds: [],
      ip: null,
      canHandover: false,
      myTurn: false,
      handoverBtn: 'HAND',
      handOverRequested: false,
      handOverRequesting: false,
      handOverTime: 0,
      handingOver: null
    }
  },
  computed: {
    ipStatus() {
      return this.myTurn ? '〇' : ''
    }
  },
  methods: {
    startDiscussion() {
      this.speakStack.unshift('Free Discussion')
      setVols(1.0)
    },
    closeDiscussion() {
      this.speakStack.shift(0)
      setVols(0.0)
      if (this.speakStack.length === 0) {
        this.broadcasting = null
      } else {
        this.setBroadcastStream(this.speakStack[0])
      }
    },
    setBroadcastStream(peerId) {
      for (const rsd of this.remoteStreamIds) {
        if (rsd.peerId === peerId) {
          this.broadcasting = this.main.remoteStreams[rsd.streamId]
          break
        }
      }
    },
    handOver() {
      this.ip.send({
        type: 'handover'
      })
      this.canHandover = false
      this.handOverRequesting = true
    },
    acceptHandOver() {
      clearInterval(this.handingOver)
      this.ip.send({
        type: 'accept-hand'
      })
      this.canHandover = true
      this.handOverRequested = false
      this.handOverTime = 0
      this.myTurn = true
      this.processTurn()
    },
    rejectHandOver() {
      clearInterval(this.handingOver)
      this.ip.send({
        type: 'reject-hand'
      })
      this.handOverRequested = false
      this.handOverTime = 0
      this.myTurn = false
      this.processTurn()
    },
    processTurn() {
      if (this.myTurn) {
        this.myStream.getAudioTracks()[0].enabled = true
        document.getElementById('ip-voice').volume = 0.0
        document.getElementById('ip-voice').pause()
      } else {
        this.myStream.getAudioTracks()[0].enabled = false
        document.getElementById('ip-voice').volume = 1.0
        document.getElementById('ip-voice').play()
      }
    }
  },
  async created () {
    const self = this
    self.myStream = await navigator.mediaDevices.getUserMedia({video: false, audio: true})
    self.main = self.con.joinRoom('main', {
      mode: 'sfu',
      stream: null,
    })
    self.main.on('open', () => {
      if (self.main.members.length > 0) {
        self.main.send({
          type: 'ask-stack',
          info: self.main.members[0]
        })
      }
    })
    self.main.on('peerJoin', peerId => {
      console.log(peerId)
    })
    self.main.on('stream', stream => {
      self.remoteStreamIds.push({
        streamId: stream.id,
        peerId: stream.peerId,
        lang: stream.peerId.substr(0, 2)
      })
    })
    self.main.on('peerLeave', peerId => {
      self.remoteStreamIds = self.remoteStreamIds.filter(val => {
        return val.peerId !== peerId
      })
      if (peerId === this.speakStack[0]) {
        this.speakStack.shift(0)
        if (this.speakStack.length > 0) {
          this.setBroadcastStream(this.speakStack[0])
        } else {
          this.broadcasting = null
        }
      } else {
        this.speakStack = this.speakStack.filter(val => {
          return val !== peerId
        })
      }
    })
    self.main.on('data', ({src, data}) => {
      switch (data.type) {
        case 'ask-stack':
          if (data.info === this.$store.state.peerName) {
            self.main.send({
              type: 'ans-stack',
              info: self.speakStack
            })
          }
          break

        case 'ans-stack':
          self.speakStack = data.info
          break

        case 'book-speak':
          this.speakStack.push(src)
          if (this.speakStack.length === 1) {
            this.setBroadcastStream(src)
          }
          break

        case 'close-speak':
          this.speakStack = this.speakStack.filter(val => {
            return val !== src
          })
          if (this.speakStack.length === 0) {
            this.broadcasting = null
          } else {
            this.setBroadcastStream(this.speakStack[0])
          }
          break

        case 'withdraw-speak':
          this.speakStack = this.speakStack.filter(val => {
            return val !== src
          })
          break

        case 'free-discussion':
          this.startDiscussion()
          break

        case 'close-discussion':
          this.closeDiscussion()
          break
      
        default:
          break
      }
    })
    self.ip = self.con.joinRoom('ip', {
      mode: 'sfu',
      stream: self.myStream
    })
    self.ip.on('open', () => {
      if (self.ip.members.length === 0) {
        self.myTurn = true
      }
      self.processTurn()
    })
    self.ip.on('peerJoin', () => {
      self.canHandover = true
    })
    self.ip.on('peerLeave', () => {
      if (self.ip.members.length === 0) {
        self.myTurn = true
        self.canHandover = false
      } else if (self.ip.members[0] === this.$store.state.peerName) {
        self.myTurn = true
      }
    })
    self.ip.on('stream', stream => {
      document.getElementById('ip-voice').srcObject = stream
      if (!self.myTurn) {
        document.getElementById('ip-voice').volume = 1.0
      }
    })
    self.ip.on('data', ({src, data}) => {
      console.log(src)
      console.log(data)
      switch (data.type) {
        case 'handover':
          self.handOverTime = 10000
          self.handOverRequested = true
          self.handingOver = setInterval(() => {
            self.handOverTime -= 1000
            if (self.handOverTime < 0) {
              clearInterval(self.handingOver)
            }
          }, 1000)
          break

        case 'accept-hand':
          self.handOverRequesting = false
          self.myTurn = false
          self.processTurn()
          break

        case 'reject-hand':
          self.handOverRequesting = false
          self.canHandover = true
          self.handOverRejected()
          break
      
        default:
          break
      }
    })
  },
}
</script>

<style scoped>
  video.sub {
    width: 2fr;
    height: 2fr;
  }

  video.top-video {
    height: 80vh;
  }

</style>