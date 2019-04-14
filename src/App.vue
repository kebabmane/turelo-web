<template>
   <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <AppNav/><br><br>
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
  font-family: 'Open Sans', sans-serif;
}

</style>

