<template>
  <div class="container is-fluid">
    <audio id="ip-voice" muted/>
    <div class="columns">
      <!-- <div class="column is-1">
        <video
          id="mine"
          class="sub"
          controls
          autoplay
          playsinline
          muted
          :srcObject.prop="myStream"
        />
      </div> -->
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
            </p>
          </div>
          <div class="card-content">
            <pre>{{ speakStack.join('\n') }}</pre>
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
    videoEl.volume = 1.0
  }
}

export default {
  props: ['con'],
  data () {
    return {
      // speakBtn: 'Speak',
      // discBtn: 'Free Discussion',
      // speakMode: 'watching',
      speakStack: [],
      myStream: null,
      mock: null,
      // broadcasting: null,
      main: null,
      remoteStreamIds: [],
      ip: null,
      // ipStream: null
    }
  },
  methods: {
    // raiseToSpeak () {
    //   switch (this.speakMode) {
    //     case 'discussion':
    //       break

    //     case 'watching':
    //       this.bookSpeak()
    //       break

    //     case 'waiting':
    //       this.withdrawSpeak()
    //       break

    //     case 'speaking':
    //       this.speakMode = 'watching'
    //       this.closeSpeak()
    //       break
      
    //     default:
    //       break;
    //   }
    // },
    // startSpeak () {
      // this.main.send('data', {
      //   type: 'start-speak'
      // })
      // this.speakMode = 'speaking'
      // this.speakBtn = 'End'
      // this.broadcasting = this.myStream
      // this.myStream.getAudioTracks()[0].enabled = true
      // document.getElementById('top').volume = 0
    // },
    // bookSpeak () {
    //   this.main.send({
    //     type: 'book-speak'
    //   })
    //   this.speakMode = 'waiting'
    //   this.speakBtn = 'Please wait'
    //   this.speakStack.push(this.$store.state.peerName)
    //   if (this.speakStack.length === 1) {
    //     this.startSpeak()
    //   }
    // },
    // closeSpeak () {
    //   this.main.send({
    //     type: 'close-speak',
    //   })
    //   this.speakStack.shift(0)
    //   this.speakMode = 'watching'
    //   this.speakBtn = 'Speak'
    //   this.myStream.getAudioTracks()[0].enabled = false
    //   if (this.speakStack.length === 0) {
    //     this.broadcasting = null
    //   } else {
    //     this.setBroadcastStream(this.speakStack[0])
    //   }
    // },
    // withdrawSpeak() {
    //   this.main.send({
    //     type: 'withdraw-speak',
    //   })
    //   this.speakStack = this.speakStack.filter(val => {
    //     return val !== this.$store.state.peerName
    //   })
    //   this.speakMode = 'watching'
    //   this.speakBtn = 'Speak'
    // },
    // shareScreen() {
    //   const self = this
    //   navigator.mediaDevices.getDisplayMedia({
    //     audio: true,
    //     video: {
    //       frameRate: 10
    //     }  
    //   }).then( async scrStream => {
    //     const combinedStream = new MediaStream(
    //       [...scrStream.getTracks(), ...self.myStream.getAudioTracks()]
    //     )
    //     // 成功時にvideo要素にカメラ映像をセットし、再生
    //     self.myStream = combinedStream
    //     self.main.replaceStream(combinedStream)
    //     if (self.speakMode === 'speaking') {
    //       document.getElementById('top').srcObject = combinedStream
    //     }
    //     scrStream.getVideoTracks()[0].onended = async () => {
    //       self.myStream = await navigator.mediaDevices.getUserMedia(self.$store.state.avGetter);
    //       self.main.replaceStream(self.myStream);
    //       scrStream = null;
    //     }
    //   });
    // },
    // freeDiscussion() {
    //   if (this.speakMode === 'discussion') {
    //     this.main.send({
    //       type: 'close-discussion'
    //     })
    //     this.closeDiscussion()
    //   } else {
    //     this.main.send({
    //       type: 'free-discussion'
    //     })
    //     this.startDiscussion()
    //   }
    // },
    startDiscussion() {
      this.speakStack.unshift('Free Discussion')
      // this.speakMode = 'discussion'
      // this.discBtn = 'Close Discussion'
      // this.myStream.getAudioTracks()[0].enabled = true
      setVols(1.0)
    },
    closeDiscussion() {
      this.speakStack.shift(0)
      // this.discBtn = 'Free Discussion'
      // this.myStream.getAudioTracks()[0].enabled = false
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
          // if (rsd.lang !== this.$store.state.myLang) {
          //   document.getElementById('top').volume = 0.1
          //   document.getElementById('ip-voice').volume = 1.0
          // } else {
          //   document.getElementById('top').volume = 1.0
          //   document.getElementById('ip-voice').volume = 0.1
          // }
          break
        }
      }
    }
  },
  async created () {
    const self = this
    self.myStream = await navigator.mediaDevices.getUserMedia({video: false, audio: true})
    // self.myStream.getAudioTracks()[0].enabled = false
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
      // self.$nextTick().then(() => {
      //   setVols(this.$store.state.myLang)
      // })
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
          this.speakStack.shift(0)
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
    self.ip.on('stream', stream => {
      document.getElementById('ip-voice').srcObject = stream
    })
  },
  mounted () {
    const cv = document.createElement('canvas')
    const cx = cv.getContext('2d')
    cx.fillText('No image...', 0, 100)
    this.mock = cv.captureStream(10);
    console.log('mounted')
  }
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

  audio#ip-voice {
    visibility: hidden;
  }
</style>