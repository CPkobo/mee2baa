<template>
  <div class="container is-fluid">
    <div class="columns is-gapless">
      <div class="column is-1">
        <video
          id="mine"
          class="sub"
          controls
          autoplay
          playsinline
          muted
          :srcObject.prop="myStream"
        />
      </div>
      <div v-for="rsd of remoteStreamIds" :key="rsd.peerId" class="column is-1">
        <video
          :id="rsd.peerId + '-vd'"
          class="sub"
          controls
          autoplay
          playsinline
          :srcObject.prop="main.remoteStreams[rsd.streamId]"
        />
      </div>
    </div>
    <div class="columns">
      <div class="column is-2">
        <div class="card">
          <div class="card-header">
            <p class="card-header-title">
              Speaker: {{ $store.state.peerName }}
            </p>
          </div>
          <div class="card-content">
            <div class="columns is-gapless">
              <div class="column is-half">
                <ul>
                  <li>
                    <button class="button is-primary is-fullwidth" @click="raiseToSpeak">{{ speakBtn }}</button>
                  </li>
                  <li>
                    <button class="button is-warning is-fullwidth" @click="shareScreen">Share Screen</button>
                  </li>
                  <li>
                    <button class="button is-black is-fullwidth" @click="freeDiscussion">{{ discBtn }}</button>
                  </li>
                </ul>
              </div>
              <div class="column is-half">
                <pre>{{ speakStack.join('\n') }}</pre>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <h3>{{ ipStatus }}</h3>
            <audio id="ip-voice" controls></audio>
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

const setVols = (myLang, allVol) => {
  const myLangVol = allVol === undefined ? 1.0 : allVol
  const anotherLangVol = allVol === undefined ? 0.1 : allVol
  const videoEls = document.querySelectorAll('video')
  const ipAudio = document.getElementById('ip-voice')
  for (const videoEl of videoEls) {
    if (videoEl.id === 'mine') {
      ipAudio.volume = 0.0
      ipAudio.pause()
    } else if (videoEl.id.startsWith(myLang)) {
      videoEl.volume = myLangVol
      ipAudio.volume = 0.0
      ipAudio.pause()
    } else {
      videoEl.volume = anotherLangVol
      ipAudio.volume = 1.0
      ipAudio.play()
    }
  }
}

export default {
  props: ['con'],
  data () {
    return {
      speakBtn: 'Speak',
      discBtn: 'Free Disc.',
      speakMode: 'watching',
      speakStack: [],
      myStream: null,
      mock: null,
      broadcasting: null,
      main: null,
      remoteStreamIds: [],
      ip: null,
      // ipStream: null
    }
  },
  computed: {
    ipStatus() {
      let status = 'No Ip.'
      if (this.ip !== null) {
        for (const iid of this.ip.members) {
          if (iid.startsWith('IP')) {
            status = 'Ip. OK'
            break
          }
        }
      }
      return status
    }
  },
  methods: {
    raiseToSpeak () {
      switch (this.speakMode) {
        case 'discussion':
          switch (this.speakBtn) {
            case 'Speak':
              this.bookSpeak()
              break
            
            case 'Please wait':
              this.withdrawSpeak()  
              break

            case 'End':
              this.closeSpeak()
              break
          
            default:
              break;
          }
          break

        case 'watching':
          this.bookSpeak()
          break

        case 'waiting':
          this.withdrawSpeak()
          break

        case 'speaking':
          this.speakMode = 'watching'
          this.closeSpeak()
          break
      
        default:
          break;
      }
    },
    startSpeak () {
      // this.main.send('data', {
      //   type: 'start-speak'
      // })
      this.speakMode = 'speaking'
      this.speakBtn = 'End'
      this.broadcasting = this.myStream
      this.myStream.getAudioTracks()[0].enabled = true
      document.getElementById('top').volume = 0
      document.getElementById('ip-voice').volume = 0
      document.getElementById('ip-voice').pause()
    },
    bookSpeak () {
      this.main.send({
        type: 'book-speak'
      })
      if (this.speakMode !== 'discussion') {
        this.speakMode = 'waiting'
      }
      this.speakBtn = 'Please wait'
      this.speakStack.push(this.$store.state.peerName)
      if (this.speakStack.length === 1) {
        this.startSpeak()
      }
    },
    closeSpeak () {
      this.main.send({
        type: 'close-speak',
      })
      this.speakStack = this.speakStack.filter(val => {
        return val !== this.$store.state.peerName
      })
      if (this.speakMode !== 'discussion') {
        this.speakMode = 'watching'
      }
      this.speakBtn = 'Speak'
      this.myStream.getAudioTracks()[0].enabled = false
      if (this.speakStack.length === 0) {
        this.broadcasting = null
      } else {
        this.setBroadcastStream(this.speakStack[0])
      }
    },
    withdrawSpeak() {
      this.main.send({
        type: 'withdraw-speak',
      })
      this.speakStack = this.speakStack.filter(val => {
        return val !== this.$store.state.peerName
      })
      if (this.speakMode !== 'discussion') {
        this.speakMode = 'watching'
      }
      this.speakBtn = 'Speak'
    },
    shareScreen() {
      const self = this
      navigator.mediaDevices.getDisplayMedia({
        audio: true,
        video: {
          frameRate: 10
        }  
      }).then( async scrStream => {
        const combinedStream = new MediaStream(
          [...scrStream.getTracks(), ...self.myStream.getAudioTracks()]
        )
        // 成功時にvideo要素にカメラ映像をセットし、再生
        self.myStream = combinedStream
        self.main.replaceStream(combinedStream)
        if (self.speakMode === 'speaking') {
          document.getElementById('top').srcObject = combinedStream
        }
        scrStream.getVideoTracks()[0].onended = async () => {
          self.myStream = await navigator.mediaDevices.getUserMedia(self.$store.state.avGetter);
          document.getElementById('top').srcObject = self.myStream
          self.main.replaceStream(self.myStream)
          scrStream = null;
        }
      });
    },
    freeDiscussion() {
      if (this.speakMode === 'discussion') {
        this.main.send({
          type: 'close-discussion'
        })
        this.closeDiscussion()
      } else {
        this.main.send({
          type: 'free-discussion'
        })
        this.startDiscussion()
      }
    },
    startDiscussion() {
      this.broadcasting = null
      this.speakStack.unshift('Free Disc.')
      this.speakMode = 'discussion'
      this.discBtn = 'Close Disc.'
      this.myStream.getAudioTracks()[0].enabled = true
      setVols('all', 1.0)
    },
    closeDiscussion() {
      this.speakStack.shift(0)
      this.discBtn = 'Free Disc.'
      this.myStream.getAudioTracks()[0].enabled = false
      setVols('all', 0.0)
      if (this.speakStack.length === 0) {
        this.speakMode = 'watching'
        this.broadcasting = null
      } else if (this.speakStack[0] === this.$store.state.peerName) {
        this.startSpeak()
      } else {
        this.setBroadcastStream(this.speakStack[0])
        if (this.speakBtn === 'Please wait') {
          this.speakMode = 'waiting'
        } else {
          this.speakMode = 'watching'
        }
      }
    },
    setBroadcastStream(peerId) {
      for (const rsd of this.remoteStreamIds) {
        if (rsd.peerId === peerId) {
          this.broadcasting = this.main.remoteStreams[rsd.streamId]
          if (rsd.lang !== this.$store.state.myLang) {
            document.getElementById('top').volume = 0.1
            document.getElementById('ip-voice').volume = 1.0
          } else {
            document.getElementById('top').volume = 1.0
            document.getElementById('ip-voice').volume = 0.1
          }
          break
        }
      }
    }
  },
  async created () {
    const self = this
    const cv = document.createElement('canvas')
    const cx = cv.getContext('2d')
    cx.fillText('No image...', 0, 100)
    self.mock = cv.captureStream(1);
    self.myStream = await navigator.mediaDevices.getUserMedia(this.$store.state.avGetter)
    self.main = self.con.joinRoom('main', {
      mode: 'sfu',
      stream: self.myStream !== null ? self.myStream : self.mock,
    })
    self.myStream.getAudioTracks()[0].enabled = false
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
      self.$nextTick().then(() => {
        setVols(this.$store.state.myLang)
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
          } else if (this.speakStack[0] === this.$store.state.peerName) {
            this.startSpeak()
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
      stream: null
    })
    self.ip.on('stream', stream => {
      const ipAudio = document.getElementById('ip-voice')
      ipAudio.srcObject = stream
      ipAudio.play()
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