<template>
  <v-app id="sandbox" class="app">
    <v-app-bar class="pl-12 pr-12" fixed app flat style="background: linear-gradient(90deg, rgb(35, 117, 134) 13%, rgb(36, 132, 152) 46%, rgb(93, 188, 210) 91%);">
      <router-link to="/">
        <v-toolbar-title style="color: #ffffff;">Hedron</v-toolbar-title>
      </router-link>
      <v-spacer />
      <router-link style="color: #ffffff; text-decoration: none;" to="/browse">Browse</router-link>
      <span style="width: 2rem"></span>
      <a style="color: #ffffff; text-decoration: none;" href="https://hedron-dashboard.now.sh/">Submit Product</a>
      <v-spacer />
      <v-menu
        bottom
        left
        v-if="$auth.isAuthenticated"
      >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            color="yellow"
            v-on="on"
          >
            <v-avatar>
              <img
                :src="$auth.user.picture"
                alt="John"
              >
            </v-avatar>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            @click="item.click"
          >
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn
        v-else
        @click="login"
      >Log In</v-btn>
    </v-app-bar>
    <v-content style="margin: 0;
    padding: 0; box-sizing: border-box; display: flex;" fluid>
      <v-container style="margin: 0;
      padding: 0; box-sizing: border-box; display: flex;" fluid>
        <router-view></router-view>
      </v-container>
      <v-container app style="background: #fff;">
        <v-row cols="12" style="display: flex; padding-top: 3.5%;" fluid>
          <v-col align="center">
            <p style="color: rgba(10, 10, 10, 0.5);">
              Are you obsessed with increasing your business size? Hedron helps you find the right SaaS products to boost your productivity so that you keep focusing on increasing revenue
            </p>
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
    data() {
      return {
        items: [
          {
            title: "Log Out",
            click: this.logout
          }
        ]
      }
    },

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
    },

    methods: {
      login() {
        this.$auth.loginWithPopup();
      },

      logout() {
        this.$auth.logout();
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
