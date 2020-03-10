<template>
  <v-app id="sandbox" class="app">
    <v-app-bar fixed app style="background: rgb(35,117,134)">
      <v-toolbar-title style="color: #ffffff;" to="/">Hedron</v-toolbar-title>
      <v-spacer />
      <router-link style="color: #ffffff;" to="/browse">Browse</router-link>
      <v-spacer />
      <NuxtLink style="color: #ffffff;" to="/submit">Submit Product</NuxtLink>
      <v-spacer />
      <NuxtLink style="color: #ffffff;" to="/product">Product</NuxtLink>
      <v-spacer />
    </v-app-bar>
    <v-content style="margin: 0;
    padding: 0; box-sizing: border-box; display: flex;" fluid>
      <v-container style="margin: 0;
      padding: 0; box-sizing: border-box; display: flex;" fluid>
        <router-view></router-view>
      </v-container>
      <section app style="background: rgb(35,117,134); color: white;">
        <v-row cols="12" style="display: flex;" fluid>
          <v-col cols="4" style="width: 33%;">
            <h2>About Deelify</h2>
            <p>Are you obsessed with increasing your business size? Deelify helps you find the right SaaS products to boost your productivity so that you keep focusing on increasing revenue</p>
          </v-col>
          <v-col cols="4" style="width: 33%; background: rgb(35,117,134); color: white;">
            <v-list style="background: rgb(35,117,134); color: white;">
              <v-list-title>More</v-list-title>
              <v-list-items style="background: rgb(35,117,134); color: white;">
                <v-list-item style="background: rgb(35,117,134); color: white;">Affiliate Program</v-list-item>
                <v-list-item>Support Community</v-list-item>
                <v-list-item>Integrations</v-list-item>
                <v-list-item>Reseller Program</v-list-item>
              </v-list-items>
            </v-list>
          </v-col>
          <v-col cols="4" style="width: 33%;">
            <div>Recent Posts</div>
            <v-list-items>
              <v-list-item>How to know if a product is the right one for you</v-list-item>
              <v-list-item>Get protected from phishing</v-list-item>
              <v-list-item>Secure your password</v-list-item>
              <v-list-item>Top 10 Marketing Products of the Month</v-list-item>
            </v-list-items>
          </v-col>
        </v-row><br>
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
    <v-row><span>&copy; {{ new Date().getFullYear() }} Deegify. All Right Reserved.</span></v-row>
  </v-app>
</template>

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
