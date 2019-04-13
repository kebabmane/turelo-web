<template>
<div>
  <b-container>
    <b-card-group columns>
    <div v-for="feed in feeds">
  <b-card :title="feed.FeedName"
          img-src="https://lorempixel.com/400/200/"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      {{ feed.FeedDescription }}
    </p>
    <b-button :to="{ name: 'FeedView', params: { id: feed.FeedID } }">Go to Feed</b-button>
</b-card>
 </div>
  </b-card-group>
  </b-container>
        <!-- Modal Component -->
  <b-modal id="modal1" centered title="Bootstrap-Vue">
    <p class="my-4">Hello from modal!</p>
  </b-modal>
</div>
</template>

<script>
import Amplify, { API } from 'aws-amplify';
import awsmobile from '../aws-exports';

Amplify.configure(awsmobile);

let apiName = 'ApiGatewayRestApi';
let path = '/feeds'; 

export default {
  name: 'feeds',
  data() {
    return {
      feeds: [],
    };
  },
  mounted() {
    API.get(apiName, path).then(response => {
    // Add your code here
     console.log(response)
      this.feeds = response.data;
    }).catch(error => {
      console.log(error.response)
  });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>