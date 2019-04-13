import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Discover from '@/views/Discover';
import Feeds from '@/views/Feeds';
import FeedView from '@/views/FeedView';
import Profile from '@/views/Profile';
import FeedEntry from '@/views/FeedEntry';
import Categories from '@/views/Categories';
import { components, AmplifyEventBus } from 'aws-amplify-vue';
import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import AmplifyStore from './store/store';

Vue.use(Router)
Vue.use(AmplifyPlugin, AmplifyModules);

let user;

getUser().then((user, error) => {
  if (user) {
    router.push({path: '/'})
  }
})

AmplifyEventBus.$on('authState', async (state) => {
  if (state === 'signedOut'){
    user = null;
    AmplifyStore.commit('setUser', null);
    router.push({path: '/auth'})
  } else if (state === 'signedIn') {
    user = await getUser();
    router.push({path: '/'})
  }
});

function getUser() {
  return Vue.prototype.$Amplify.Auth.currentAuthenticatedUser().then((data) => {
    if (data && data.signInUserSession) {
      AmplifyStore.commit('setUser', data);
      return data;
    } 
  }).catch((e) => {
    AmplifyStore.commit('setUser', null);
    return null
  });
}

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home, meta: { requiresAuth: true}},
    { path: '/profile', name: 'Profile', component: Profile, meta: { requiresAuth: true}},
    { path: '/discovery', name: 'Discovery', meta: { title: 'Discover', requiresAuth: true }, component: Discover },
    { path: '/feeds/:id', name: 'FeedView', meta: { title: 'Feed', requiresAuth: true }, component: FeedView },
    { path: '/feeds', name: 'feeds', meta: { title: 'Feeds', requiresAuth: true }, component: Feeds },
    { path: '/feedEntry/:id', name: 'FeedEntry', meta: { title: 'FeedEntry', requiresAuth: true }, component: FeedEntry },
    { path: '/categories', name: 'categories', meta: { title: 'Categories', requiresAuth: true }, component: Categories },
    { path: '/auth', name: 'Authenticator', component: components.Authenticator }
  ]
});

router.beforeResolve(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    user = await getUser();
    if (!user) {
      return next({
        path: '/auth',
        query: {
          redirect: to.fullPath,
        }
      });
    }
    return next()
  }
  return next()
})

export default router