<template>
  <div class="header">
    <nuxt-link to="/" exact>Home</nuxt-link>
    <nuxt-link to="/about">About</nuxt-link>
    <nuxt-link v-if="!isAuthenticated" to="/auth/login">Login</nuxt-link>
    <nuxt-link v-if="!isAuthenticated" to="/auth/register">register</nuxt-link>
    <nuxt-link v-else to="/auth/logout">Logout</nuxt-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isAuthenticated'])
  }
}
</script>

<style scoped>
.header {
  display: flex;
  width: 100%;
  padding: 20px;
  background-color: rgba(0,0,0,0.5)
}
a {
  margin-right: 20px;
  font-size: 14px;
  color: #999;
  text-decoration: none;
  text-transform: uppercase;
  padding-top: 2px;
  padding-bottom: 2px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  transition: color .25s;
  font-weight: 400;
  padding: 10px;
  line-height: normal;
}
a:hover {
  color: #333;
}
a.nuxt-link-active {
  color: #333;
  border-top: 1px solid #333;
  border-bottom: 1px solid #333;
  font-weight: 600;
}
</style>
