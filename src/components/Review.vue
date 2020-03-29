<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" v-if="$auth.isAuthenticated" dark v-on="on">Leave A Review</v-btn>
      <v-btn color="primary" @click="login" v-else dark>Signup To Leave A Review</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Leave A Review</span>
      </v-card-title>
      <v-card-text>
        <v-form
          v-model="valid"
        >
          <div class="text-center">
            <v-rating
              class="mt-6 mb-6"
              v-model="rating"
              color="yellow darken-3"
              background-color="grey darken-1"
              empty-icon="$ratingFull"
              half-increments
              hover
            ></v-rating>
            <v-textarea
              outlined
              label="Review"
              v-model="review"
              :rules="[
                v => !!v || 'Review is required',
              ]"
            ></v-textarea>
          </div>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        <v-btn :disabled="!valid" @click="leaveReview" color="blue darken-1" text>Submit</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import ADD_REVIEW from '../graphql/AddReview.gql';

  export default {
    props: ['product'],

    data() {
      return {
        dialog: false,
        rating: 2.5,
        valid: false,
        review: "",
      }
    },

    methods: {
      login() {
        this.$auth.loginWithPopup();
      },

      leaveReview() {
        this.$apollo.mutate({
          mutation: ADD_REVIEW,
          variables: {
            review: {
              userId: this.$auth.user.sub,
              productId: this.product._id,
              name: this.$auth.user.name,
              picture: this.$auth.user.picture,
              rating: this.rating,
              review: this.review
            }
          }
        });

        this.dialog = false;
      }
    }
  }
</script>