<template>
  <div class="home">
    <h1>This is an Home page</h1>
    <ul>
      <li
        v-for="product in searchProducts"
        :key="product.name"
      >
        {{ product.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import SearchProducts from '../graphql/SearchProducts.gql';

export default {
  apollo: {
    searchProducts: {
      // gql query
      query: SearchProducts,
      // Static parameters
      variables: {
        query: 'asdsdsad',
      },
    },
  },
}
</script>