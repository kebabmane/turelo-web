<template>
  <div>
<div>
  <b-container>
    <b-card-group columns>
    <div v-for="category in categories">
  <b-card :title="category.CategoryName"
          img-src="https://lorempixel.com/400/200/"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2">
    <p class="card-text">
      {{ category.CategoryDescription }}
    </p>
    <b-button :to="{ name: 'CategoryView', params: { id: category.CategoryID } }">Go to Category</b-button>
  </b-card>
 </div>
  </b-card-group>
   </b-container>

     <!-- Modal Component -->
  <b-modal ref="myModalRef" id="modal1" hide-footer centered title="Add new category">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="inputGroup1"
                    label="Category Name"
                    label-for="categoryName">
        <b-form-input id="categoryNameInput"
                      type="text"
                      v-model="form.categoryName"
                      required>
        </b-form-input>
      </b-form-group>
     <b-form-group id="inputGroup2"
                    label="Category Cover Image URL"
                    label-for="categoryCoverImageURL">
        <b-form-input id="categoryImageURL"
                      type="text"
                      v-model="form.categoryImageURL"
                      required>
        </b-form-input>
      </b-form-group>
           <b-form-group id="inputGroup3"
                    label="Description"
                    label-for="categoryDescription">
        <b-form-input id="categoryDescriptionInput"
                      type="text"
                      v-model="form.categoryDescription"
                      required>
        </b-form-input>
      </b-form-group>
      <hr>
      <b-button type="submit" variant="primary" @click="hideModal">Submit</b-button>
      <b-button type="reset" variant="danger" @click="hideModal">Reset</b-button>
    </b-form>
  </b-modal>
</div>


  </div>
</template>

<script>
import Amplify, { API } from 'aws-amplify';
import awsmobile from '../aws-exports';

Amplify.configure(awsmobile);

let apiName = 'ApiGatewayRestApi';
let path = '/categories'; 

export default {
  name: 'categories',
  data() {
    return {
      categories: [],
      loading: false,
      form: {
      },
      show: true,
    };
  },
  mounted() {
  API.get(apiName, path).then(response => {
      console.log(response)
      this.categories = response.data;
    }).catch(error => {
    console.log(error.response)
   });
  },

  methods: {
    onSubmit (evt) {
      evt.preventDefault();
      console.log("form data: ", this.form)
      newCategory(this.form);
    },
    onReset (evt) {
      evt.preventDefault();
      /* Reset our form values */
      this.form.email = '';
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    },
    hideModal () {
      this.$refs.myModalRef.hide()
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>