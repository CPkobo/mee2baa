<template>
  <div class="container is-fluid">
    <audio id="ip-voice" />
    <div class="columns">
      <div v-for="rs of remoteStreamIds" :key="rs.peerId" class="column is-1">
        <video
          :id="rs.peerId + '-vd'"
          class="sub"
          controls
          autoplay
          playsinline
          :srcObject.prop="main.remoteStreams[rs.streamId]"
        />
      </div>
    </div>
    <div class="columns">
      <div class="column is-2">
        <p>Controllers here</p>
      </div>
      <div class="column is-10">
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

// const setVols = (myLang, allVol) => {
//   const myLangVol = allVol === undefined ? 1.0 : allVol
//   const anotherLangVol = allVol === undefined ? 0.1 : allVol
//   const videoEls = document.querySelectorAll('video')
//   for (const videoEl of videoEls) {
//     if (videoEl.id === 'mine') {
//       continue
//     } else if (videoEl.id.startsWith(myLang)) {
//       videoEl.volume = myLangVol
//     } else {
//       videoEl.volume = anotherLangVol
//     }
//   }
// }

export default {
  props: ['con'],
  data () {
    return {
      myStream: null,
      broadcasting: null,
      main: null,
      remoteStreamIds: [],
      ip: null,
    }
  },
  methods: {
  },
  async created () {
    const self = this
    self.myStream = await navigator.mediaDevices.getUserMedia(this.$store.state.avGetter)
    self.myStream.getAudioTracks()[0].enabled = false
    self.main = self.con.joinRoom('main', {
      mode: 'sfu',
      stream: null,
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
    })
    // self.main.on('data', ({src, data}) => {
    //   console.log(src)
    //   switch (data.type) {
    //     case 'to-speak':
    //       if (self.speaking) {
    //         self.toSpeak()
    //       }
    //       break;
      
    //     default:
    //       break;
    //   }
    // })
    self.ip = self.con.joinRoom('ip', {
      mode: 'sfu',
      stream: self.myStream
    })
    self.ip.on('open', () => {
      if (self.ip.members.length > 1) {
        self.myStream.getAudioTracks()[0].enabled = false
      }
    })
    self.ip.on('stream', stream => {
      document.getElementById('ip-voice').srcObject = stream
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

  audio#ip-voice {
    visibility: hidden;
  }
</style>