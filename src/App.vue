<template>
  <div id="app">
    <hero-bar
      v-if="!peerOpened"
    />
    <div class="columns" v-if="!peerOpened">
      <div class="column is-3"></div>
      <div class="column is-6">
        <login-form
          @apikey-ok="peerConnect"
        />
      </div>
      <div class="column is-3"></div>
    </div>
    <section class="section" v-if="peerOpened">
      <main-room v-if="role==='Speaker'" :con="peer" />
      <ip-room v-if="role==='IP'" :con="peer" />
    </section>
    <footer-bar />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Peer from 'skyway-js'
import HeroBar from './components/HeroBar.vue'
import FooterBar from './components/FooterBar.vue'
import LoginForm from './components/LoginForm.vue'
import MainRoom from './components/MainRoom.vue'
import IpRoom from './components/IpRoom.vue'

export default {
  name: 'app',
  data () {
    return {
      peer: null,
      peerOpened: false,
      role: 'Speaker'
    }
  },
  components: {
    HeroBar,
    FooterBar,
    LoginForm,
    MainRoom,
    IpRoom
  },
  methods: {
    peerConnect () {
      if (this.$store.state.myLang === 'IP') {
        this.role = 'IP'
      }
      this.peer = new Peer( this.$store.state.peerName, {
        key: this.$store.state.apiKey,
        debug: 1
      })
      this.peer.on('open', () => {
        this.peerOpened = true
      })
    }
  }
}
</script>

<style lang="scss">
@import "../node_modules/bulma/bulma.sass";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
