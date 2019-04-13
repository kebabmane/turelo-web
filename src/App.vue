<template>
  <div id="app">
    <AppNav></AppNav>
    <br><br>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src

import AppNav from '@/components/AppNav.vue'

export default {
  name: 'home',
  components: {
    AppNav,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
