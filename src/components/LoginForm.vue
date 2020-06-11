<template>
  <form class="card">
    <div class="card-content">
      <div class="field is-horizontal">
        <div class="field-label">
          <label class="label is-large" for="meeting-ID">Meeting ID</label>
        </div>
        <div class="field-body">
          <input
            v-model="meetingID"
            name="meeting-ID"
            type="text"
            placeholder="Meeting ID"
            class="input"
          >
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <label class="label is-normal" for="user-name">Your Name</label>
        </div>
        <div class="field-body">
          <input
            v-model="userName"
            name="user-name"
            type="text"
            placeholder="Your Name"
            class="input"
          >
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <label class="label is-normal" for="password">Password</label>
        </div>
        <div class="field-body">
          <input
            v-model="password"
            name="password"
            type="password"
            placeholder="password"
            class="input"
          >
        </div>
      </div>
      <div class="field is-horizontal">
        <div class="field-label">
          <label class="label is-normal">Your Language</label>
        </div>
        <div class="field-body">
          <select
            v-model="language"
            class="select"
          >
            <option v-for="lang in languageOptions" :key="lang">
              {{ lang }}
            </option>
          </select>
        </div>
      </div>
      <p class="label">
        Microphone: {{ foundAudioInput }} / Camera: {{ foundVideoInput }}
      </p>
      <div class="is-horizontal has-text-centered">
        <button class="button is-info" :disabled="canOpen" @click.prevent.stop="getApiKey">
          {{ buttonDisp }}
        </button>
        <button class="button is-success" @click.prevent.stop="superEnter">
          {{ buttonDisp }}
        </button>
        <button class="button is-success" @click.prevent.stop="ipEnter">
          Im an interpreter
        </button>
      </div>
    </div>
  </form>
</template>

<script>
// import Peer from 'skyway-js'

export default {
  props: {
    reqDevs: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      result: 'Please input your meeting-ID, name and password for login',
      meetingID: '',
      userName: '',
      password: '',
      language: 'Japanese',
      languageOptions: ['Japanese', 'Chinese'],
      foundAudioInput: 'None',
      foundVideoInput: 'None',
      canOpen: true,
      canStart: true,
      buttonDisp: 'OPEN'
    }
  },
  created () {
    const avGetter_ = {
      audio: false,
      video: false
    }
    navigator.mediaDevices.enumerateDevices().then((devs) => {
      for (const dev of devs) {
        if (dev.kind === 'audioinput') {
          this.foundAudioInput = 'OK'
          avGetter_.audio = true
        } else if (dev.kind === 'videoinput') {
          this.foundVideoInput = 'OK'
          avGetter_.video = {
            width: {
              min: 160,
              max: 640
            },
            height: {
              min: 120,
              max: 480
            },
            frameRate: {
              min: 5,
              max: 15
            }
          }
        }
      }
      this.$store.commit('setAvGetter', avGetter_)
      switch (this.reqDevs) {
        case 'av':
          this.canOpen = !(this.foundVideoInput === 'OK' && this.foundAudioInput === 'OK')
          break

        case 'a':
          this.canOpen = !(this.foundAudioInput === 'OK')
          break

        case 'v':
          this.canOpen = !(this.foundVideoInput === 'OK')
          break

        default:
          this.canOpen = false
          break
      }
    })
  },
  methods: {
    superEnter () {
      const myLang = this.language === this.languageOptions[0] ? 'L1' : 'L2'
      this.$store.commit('setPeerName', `${myLang}-${this.userName}`)
      this.$emit('apikey-ok');
    },
    ipEnter () {
      this.$store.commit('setPeerName', `IP-${this.userName}`)
      this.$emit('apikey-ok');
    },
    getApiKey () {
      const self = this
      const data = {
        name: self.meetingID,
        user: self.userName,
        pw: self.password
      }
      fetch(self.$store.state.loginEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain'
        },
        mode: 'cors',
        body: JSON.stringify(data)
      }).then((res) => {
        if (res.status === 200) {
          self.buttonDisp = ' Please wait...'
          res.text().then((t) => {
            self.$store.commit('setApiKey', t)
            const myLang = this.language === this.languageOptions[0] ? 'L1' : 'L2'
            this.$store.commit('setPeerName', `${myLang}-${this.userName}`)
            this.$emit('apikey-ok');
          })
        } else {
          console.log('login failed')
        }
      })
    }
  }
}
</script>
