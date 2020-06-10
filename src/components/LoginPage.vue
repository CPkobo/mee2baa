<template>
    <div>
        <hero-bar />
        <login-form />
    </div>
</template>

<script>
import HeroBar from './HeroBar.vue'
import LoginForm from './LoginForm.vue'

export default {
    components: {
        LoginForm,
        HeroBar,
    }
}
</script>