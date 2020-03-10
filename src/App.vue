<template>
  <v-app id="sandbox" class="app">
    <v-app-bar fixed app flat style="background: linear-gradient(90deg, rgb(35, 117, 134) 13%, rgb(36, 132, 152) 46%, rgb(93, 188, 210) 91%);">
      <v-toolbar-title style="color: #ffffff;" to="/">Hedron</v-toolbar-title>
      <v-spacer />
      <div style="display: flex; width: 40%; justify-content: space-between; ">
        <router-link style="color: #ffffff; text-decoration: none;" to="/browse">Browse</router-link>
        <v-spacer />
        <NuxtLink style="color: #ffffff; text-decoration: none;" to="/submit">Submit Product</NuxtLink>
        <v-spacer />
        <NuxtLink style="color: #ffffff; text-decoration: none;" to="/_name">Product</NuxtLink>
        <v-spacer />
      </div>
    </v-app-bar>
    <v-content style="margin: 0;
    padding: 0; box-sizing: border-box; display: flex;" fluid>
      <v-container style="margin: 0;
      padding: 0; box-sizing: border-box; display: flex;" fluid>
        <router-view></router-view>
      </v-container>
      <section app style="background: #fff;">
        <v-row cols="12" style="display: flex; padding-top: 3.5%;" fluid>
          <v-col cols="4" style="width: 33%;">
            <div style="margin-left: 5%;">
              <h2>About Deelify</h2>
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
        <div style="text-align: center; padding-bottom: 2%;"><span>&copy; {{ new Date().getFullYear() }} hedron. All Right Reserved.</span></div>
      </section>
    </v-content>
    <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<style>
  h4 {
    color: white;
  }
</style>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: true,
      items: [
        {
          icon: "mdi-apps",
          title: "Hedron",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>

<style>
 .app {
   font-family: 'Lato', sans-serif;
 }
 </style>
