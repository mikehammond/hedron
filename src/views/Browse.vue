<template>
  <v-content>
    <v-container>
      <v-autocomplete
        v-model="select"
        :loading="$apollo.queries.searchProducts.loading"
        :items="items"
        :search-input.sync="search"
        cache-items
        class="mx-4"
        flat
        hide-no-data
        hide-details
        label="Let Hedron Help You Find What You Are Looking For"
        solo-inverted
        @update:search-input="performSearch"
      ></v-autocomplete>
    </v-container>
    <v-container
      v-if="searchProducts"
      fluid>
      <v-row>
        <v-col cols="2">
          <v-row>
            <v-col cols="12">
              <v-card>
                <v-card-title>Filter Results</v-card-title>
                <v-container>
                  <v-select
                    :items="productTypes"
                    label="Product Type"
                    solo
                  ></v-select>
                  <v-btn
                    dark
                    @click="runQuery"
                    color="teal">Run Query</v-btn>
                </v-container>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="10">
          <v-row>
            <v-col
              cols="4"
              v-for="product in searchProducts"
              :key="product.name">
              <v-card>
                <img
                  height="200px"
                  width="100%"
                  :src="product.featured.url"
                />
                <v-card-title>{{ product.name }}</v-card-title>
                <v-card-subtitle class="pb-0">
                  {{ product.summary }}
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
                  <!-- <v-btn color="orange" text>
                    Request for demo
                  </v-btn> -->
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
import SEARCH_PRODUCTS from "../graphql/SearchProducts.gql";

import Loading from 'vue-loading-overlay';

export default {
  components: {
    Loading
  },

  data: () => ({
    productTypes: ['CRM', 'Accounting'],
    search: null,
    select: null,
    items: [],
  }),

  apollo: {
    searchProducts: {
      query: SEARCH_PRODUCTS,
    }
  },

  methods: {
    runQuery(e) {
      e.preventDefault();
      console.log(this.search);
    },

    performSearch() {
      this.$apollo.queries.searchProducts.refetch({
        query: this.search
      });
    }
  }
}
</script>
