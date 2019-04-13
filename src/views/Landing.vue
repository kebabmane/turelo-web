<template>
<body>
    <div class="site-wrapper">

      <div class="site-wrapper-inner">

        <div class="cover-container">

          <div class="masthead clearfix">
            <div class="inner">
              <nav class="nav nav-masthead">
                <a class="nav-link active" href="/landing">Home</a>
              </nav>
             <nav class="nav nav-masthead-right">
                <button class="btn btn-lg btn-txt-color" v-if="!isAuthenticated" @click="authenticate()">Log On</button>
                <button class="btn btn-lg btn-txt-color" v-if="!isAuthenticated" @click="signup()">Sign Up</button>
              </nav>  
            </div>
          </div>

          <div class="inner cover">
            <h1 class="cover-heading">turelo</h1><br>
            <p class="lead">This is an example webapp written in VueJS to show how Apigee and Cognito can provide a user credential store experience</p><br>
            <p class="lead">

            </p>
          </div>

          <div class="mastfoot">
            <div class="inner">
              <p>turelo 2018</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  </div>
  </body>
</template>

<script>
import auth from '../auth/auth';

import 'vue-awesome/icons/sign-in';
import Icon from 'vue-awesome/components/Icon.vue';

export default {
  name: 'landing',
  components: {
    Icon,
  },
  computed: {
    isAuthenticated: function () {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    authenticate () {
      auth.authenticate()
    },
    signup () {
      auth.signup()
    },
    signout () {
      this.$store.dispatch('signout').then(() => {
        this.$router.push({ name: 'landing' })
      })
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/*
 * Globals
 */

/* Links */
a,
a:focus,
a:hover {
  color: #fff;
}



/*
 * Base structure
 */

.bg-light {
    background-color: white;
    width: 100%;
}

html, body, #app, #app>div {
  height: 100%
}

html,
body {
  height: 100% !important;
  background-color: #254551;
}
body {
  color: #fff;
  text-align: center;
}

/* Extra markup and styles for table-esque vertical and horizontal centering */
.site-wrapper {
  display: table;
  width: 100%;
  height: 100%; /* For at least Firefox */
  min-height: 100%;
}
.site-wrapper-inner {
  display: table-cell;
  vertical-align: top;
}
.cover-container {
  margin-right: auto;
  margin-left: auto;
}

/* Padding for spacing */
.inner {
  padding: 2rem;
}


/*
 * Header
 */

.masthead {
  margin-bottom: 2rem;
}

.masthead-brand {
  margin-bottom: 0;
}

.nav-masthead .nav-link {
  padding: .25rem 0;
  color: rgba(255,255,255,.5);
  background-color: transparent;
  border-bottom: .25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255,255,255,.25);
}

.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}

@media (min-width: 48em) {
  .masthead-brand {
    float: left;
  }
  .nav-masthead {
    float: left;
    margin-left: 30px;
  }
  .nav-masthead-right {
    float: right;
  }
}


/*
 * Cover
 */

.cover {
  padding: 0 1.5rem;
}
.cover .btn-lg {
  padding: .75rem 1.25rem;
  font-weight: bold;
}

.btn-group-lg>.btn, .btn-lg {
  margin: 0.5rem 0.5rem;
}
.btn-txt-color {
    color: #254551;
}

/*
 * Footer
 */

.mastfoot {
  color: rgba(255,255,255,.5);
}


/*
 * Affix and center
 */

@media (min-width: 40em) {
  /* Pull out the header and footer */
  .masthead {
    position: fixed;
    top: 0;
  }
  .mastfoot {
    position: fixed;
    bottom: 0;
  }
  /* Start the vertical centering */
  .site-wrapper-inner {
    vertical-align: middle;
  }
  /* Handle the widths */
  .masthead,
  .mastfoot,
  .cover-container {
    width: 100%; /* Must be percentage or pixels for horizontal alignment */
  }
}

@media (min-width: 62em) {
  .masthead,
  .mastfoot,
  .cover-container {
    width: 50rem;
  }
}
</style>

