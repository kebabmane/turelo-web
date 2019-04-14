<template>
  <div>
<div>
  <b-container>
    <b-card>
        <h1>{{ feedEntry.FeedEntryTitle }}</h1>
        <br>
        <p class="card-text">
          {{ feedEntry.FeedEntryContentSanitized }}
        </p>
        <br>
        <a :href="feedEntry.FeedEntryLink" target="_blank"><b-button >Link to Article</b-button></a>
        <div slot="footer">
          {{ feedEntry.FeedEntryAuthor }} | {{ feedEntry.FeedEntryPublished | moment("dddd, MMM Do") }}
        </div> 
    </b-card>
   </b-container>
</div>


  </div>
</template>

<script>
import Amplify, { API } from 'aws-amplify';
import awsmobile from '../aws-exports';

Amplify.configure(awsmobile);

let apiName = 'ApiGatewayRestApi';

export default {
  name: 'feedEntry',
  data() {
    return {
      feedEntry: [],
    };
  },
  created() {
     this.id = this.$route.params.id;
  },
  mounted() {
  let path = '/feedEntry/' + this.id; 
  API.get(apiName, path).then(response => {
      this.feedEntry = response.data;
    }).catch(error => {
    console.log(error.response)
   });
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article-container{
  background-color: white;
}
</style>