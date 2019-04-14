<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="primary">
    <b-navbar-brand href="/">turelo</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto right-padding">
        <b-nav-item class="text-padding" v-on:click="discovery">Discover</b-nav-item>
        <b-nav-item class="text-padding" v-on:click="feeds">Feeds</b-nav-item>
        <b-nav-item class="text-padding" v-on:click="categories">Categories</b-nav-item>
        <b-nav-form class="search-padding">
          <b-form-input class="mr-sm-2" placeholder="Search"></b-form-input>
        </b-nav-form>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template slot="button-content"><font-awesome-icon icon="user" size="lg" /></template>
          <b-dropdown-item v-on:click="profile">Profile</b-dropdown-item>
          <b-dropdown-item v-on:click="signOut">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>

import AmplifyStore from '../store/store';


export default {
  name: 'AppNav',
  data () {
    return {}
  },
  computed: {
    user() { 
      return AmplifyStore.state.user
    }
  },
  methods: {
    home: function() {
        this.$router.push('/')
    },
    discovery: function() {
        this.$router.push('/discovery')
    },
    feeds: function() {
        this.$router.push('/feeds')
    }, 
    categories: function() {
        this.$router.push('/categories')
    },        
    profile: function() {
        this.$router.push('/profile')
    },
    signOut: function() {
        this.$router.push('/auth/signOut')
    }
  }
}
</script>

<style>

.navbar {
  min-height: 80px;
}

.navbar-brand {
  padding-left: 140px;
}

.right-padding {
  padding-right: 140px;
}

.search-padding {
  padding-right: 25px;
  padding-left: 25px;
}

.text-padding {
  padding-right: 10px;
  padding-left: 10px;
}

</style>