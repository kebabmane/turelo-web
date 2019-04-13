<template>
<div>
  <b-container>
    <br>
    <b-card-group columns>
    <div v-for="feedEntry in feedEntries">
  <b-card :title="feedEntry.FeedEntryTitle"
          img-src="https://lorempixel.com/400/200/"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
       {{ feedEntry.FeedEntryContentSanitized | truncate(100) }}
    </p>
    <b-button :to="{ name: 'FeedEntry', params: { id: feedEntry.FeedEntryID } }">Go to Entry</b-button>
    <div slot="footer">
      {{ feedEntry.FeedEntryAuthor }} | {{ feedEntry.FeedEntryPublished | moment("dddd, MMM Do") }}
    </div>  
</b-card>
 </div>
  </b-card-group>
   </b-container>
</div>
</template>

<script>
import router from '@/router'
import Amplify, { API } from 'aws-amplify';
import awsmobile from '../aws-exports';

Amplify.configure(awsmobile);

let apiName = 'ApiGatewayRestApi';

export default {
  name: 'feedView',
  data() {
    return {
      feedEntries: [],
    };
  },
  created() {
     this.id = this.$route.params.id;
  },
  mounted() {
  let path = '/feedEntries/' + this.id; 
  API.get(apiName, path).then(response => {
      console.log(response)
      this.feedEntries = response.data;
    }).catch(error => {
    console.log(error.response)
   });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
