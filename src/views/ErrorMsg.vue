<template>
  <div>
        <br><br>
    <b-container>
    <h1>Error</h1><hr>
    <p>An error occurred while processing the request.</p>
    <pre>{{message}}</pre>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'error',
  components: {
  },
  computed: {
    message () {
      return this.$route.params.message
    }
  }
}
</script>