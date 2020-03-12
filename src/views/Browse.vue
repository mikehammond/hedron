<template>
  <v-app id="sandbox">
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :clipped="primaryDrawer.clipped"
      :floating="primaryDrawer.floating"
      :mini-variant="primaryDrawer.mini"
      :permanent="primaryDrawer.type === 'permanent'"
      :temporary="primaryDrawer.type === 'temporary'"
      app
      overflow
    >
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        style="margin-left: 5%; margin-top: 15%"
      >
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="keyword"
          required
        ></v-text-field>
        <v-radio-group v-model="radioGroup">
          <strong>Pricing Model</strong>
          <v-radio label="Free Trial"></v-radio>
          <v-radio label="Freemium"></v-radio>
          <v-radio label="Monthly"></v-radio>
          <v-radio label="Yearly"></v-radio>
        </v-radio-group>

        <v-select
          v-model="select"
          :items="categories"
          :rules="[v => !!v || 'Category is required']"
          label="Category"
          required
        ></v-select>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
          @click.stop="primaryDrawer.model = !primaryDrawer.model"
        >
          Search
        </v-btn>
      </v-form>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="primaryDrawer.clipped" app>
      <v-app-bar-nav-icon
        v-if="primaryDrawer.type !== 'permanent'"
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      />
      <v-toolbar-title>Hedron</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" style="display: flex; flex-wrap: wrap;">
            <!-- First Card -->
            <v-card
              class="mx-auto"
              max-width="300"
              style="margin-top: 2%;"
              v-for="product in searchProducts"
              :key="product.name"
            >
              <img
                class="white--text align-end"
                height="200px"
                :src="product.featured.url"
                style="max-width: 100%;"
              />
              <v-card-title>{{ product.name }}</v-card-title>
              <v-card-subtitle class="pb-0">
                Customer Relationship Management
              </v-card-subtitle>

              <v-card-text class="text--primary">
                <div><strong>Free Plan | Starting at $10/month</strong></div>
                <div>Manage your contacts, leads and prospects with ease</div>
              </v-card-text>
              <v-card-actions>
                <router-link :to="`/products/${product.name}`">
                  <v-btn color="orange" text>
                    Read More
                  </v-btn>
                </router-link>
                <v-btn color="orange" text>
                  Request for demo
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer :inset="footer.inset" app>
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import SEARCH_PRODUCTS from "../graphql/SearchProducts.gql";

export default {
  data: () => ({
    drawers: ['Default (no property)', 'Permanent', 'Temporary'],
    primaryDrawer: {
      model: null,
      type: 'default (no property)',
      clipped: true,
      floating: false,
      mini: false
    },
    footer: {
      inset: false
    },
    select: null,
    categories: [
      'Sales',
      'Marketing',
      'Finance',
      'Human Resources',
      'Operations'
    ],
    checkbox: false,
    lazy: false
  }),

  apollo: {
    searchProducts: {
      query: SEARCH_PRODUCTS,
    }
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    }
  }
}
</script>
