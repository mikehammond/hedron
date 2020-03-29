<template>
  <v-app id="sandbox" class="app">
    <v-app-bar fixed app flat style="background: linear-gradient(90deg, rgb(35, 117, 134) 13%, rgb(36, 132, 152) 46%, rgb(93, 188, 210) 91%);">
      <router-link to="/">
        <v-toolbar-title style="color: #ffffff;">Hedron</v-toolbar-title>
      </router-link>
      <v-spacer />
        <router-link style="color: #ffffff; text-decoration: none;" to="/browse">Browse</router-link>
        <!-- <v-spacer /> -->
        <span style="width: 2rem"></span>
        <a style="color: #ffffff; text-decoration: none;" href="https://hedron-dashboard.now.sh/">Submit Product</a>
        <v-spacer />
    </v-app-bar>
    <v-content style="margin: 0;
    padding: 0; box-sizing: border-box; display: flex;" fluid>
      <v-container style="margin: 0;
      padding: 0; box-sizing: border-box; display: flex;" fluid>
        <router-view></router-view>
      </v-container>
      <v-container app style="background: #fff;">
        <v-row cols="12" style="display: flex; padding-top: 3.5%;" fluid>
          <v-col cols="4" style="width: 33%;">
            <div style="margin-left: 5%;">
              <h2>About Hedron</h2>
              <p style="color: rgba(10, 10, 10, 0.5);">Are you obsessed with increasing your business size? Deelify helps you find the right SaaS products to boost your productivity so that you keep focusing on increasing revenue</p>
            </div>
          </v-col>
          <v-col cols="4" style="width: 33%;">
            <div>
              <h3>More</h3>
              <ul style="color: rgba(10, 10, 10, 0.5);">
                <li>Affiliate Program</li>
                <li>Support Community</li>
                <li>Integrations</li>
                <li>Reseller Program</li>
              </ul>
            </div>
          </v-col>
          <v-col cols="4" style="width: 33%;">
            <h3>Recent Posts</h3>
            <ul style="color: rgba(10, 10, 10, 0.5);">
              <li>How to know if a product is the right one for you</li>
              <li>Get protected from phishing</li>
              <li>Secure your password</li>
              <li>Top 10 Marketing Products of the Month</li>
            </ul>
          </v-col>
        </v-row>
        <div style="text-align: center; padding-bottom: 2%;"><span>&copy; {{ new Date().getFullYear() }} hedron. All Right Reserved.</span>{{ getAuth }}</div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import 'vue-loading-overlay/dist/vue-loading.css';
  import Vue from 'vue';
  import { onLogin, onLogout } from './vue-apollo';

  export default {
    computed: {
      getAuth() {
        if (Vue.prototype.$auth.isAuthenticated) {
          Vue.prototype.$auth.getTokenSilently().then(token => {
            onLogin(token);
          })
          return ''
        } else {
          onLogout();
          return ''
        }
      }
    }
  }
</script>

<style>
  .app {
    font-family: 'Lato', sans-serif;
  }

  h4 {
    color: white;
  }
 </style>
