<template>
  <v-content>
    <v-container
      v-if="productByName"
      style="font-family: 'Poppins', sans-serif;">
      <v-row style="font-size: 24px; color: rgb(35,117,134)">
        <h1>{{ productByName.name }}</h1>
      </v-row>
      <v-row>
        <!-- Main Content -->
        <v-col cols="7">
          <img
            :src="productByName.featured.url"
            width="100%"
            style="border-radius: 20px"
            contain
          />
          <v-card style="border-radius: 20px; margin-top: 2rem">
            <div class="hedron-description" style="padding: 4%;" v-html="productByName.description"></div>
          </v-card>
        </v-col>

        <!-- Right SideBar -->
        <v-col cols="5">
          <!-- Product Summary -->
          <v-card style="-webkit-box-shadow: -3px 4px 45px 15px rgba(209,207,209,1); -moz-box-shadow: -3px 4px 45px 15px rgba(209,207,209,1); box-shadow: -3px 4px 45px 15px rgba(209,207,209,1);">
            <v-card-title style="font-size: 22px; background: linear-gradient(270deg, rgba(35,117,134,1) 13%, rgba(36,132,152,1) 46%, rgba(93,188,210,1) 91%); width: 100%; color: white;">Summary</v-card-title>
            <v-card-text class="mt-2">{{ productByName.summary }}</v-card-text>
          </v-card>
        <!-- Value Proposition -->
          <v-card style="-webkit-box-shadow: -3px 4px 45px 15px rgba(209,207,209,1); -moz-box-shadow: -3px 4px 45px 15px rgba(209,207,209,1); box-shadow: -3px 4px 45px 15px rgba(209,207,209,1); margin-top: 2rem;">
            <v-card-title style="font-size: 22px; background: linear-gradient(90deg, rgba(35,117,134,1) 13%, rgba(36,132,152,1) 46%, rgba(93,188,210,1) 91%); width: 100%; color: white;">Value Proposition</v-card-title>
            <v-list-item
              v-for="value in productByName.values"
              :key="value.name"
              two-line>
              <i class="material-icons" style="margin-right: 5%; color: rgb(35,117,134);">done_outline</i>
              <v-list-item-content>
                <v-list-item-title>{{ value.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ value.description }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
    <!-- Features -->
          <v-card style="-webkit-box-shadow: -3px 4px 45px 15px rgba(209,207,209,1); -moz-box-shadow: -3px 4px 45px 15px rgba(209,207,209,1); box-shadow: -3px 4px 45px 15px rgba(209,207,209,1); margin-top: 2rem;">
            <v-card-title style="font-size: 22px; background: linear-gradient(270deg, rgba(35,117,134,1) 13%, rgba(36,132,152,1) 46%, rgba(93,188,210,1) 91%); width: 100%; color: white;">Features</v-card-title>
            <v-list-item
              v-for="feature in productByName.features"
              :key="feature.name"
              two-line>
              <v-list-item-content>
                <v-list-item-title>{{feature.label}}</v-list-item-title>
                <!-- <v-list-item-subtitle>One sentence description of the value proposition</v-list-item-subtitle> -->
              </v-list-item-content>
            </v-list-item>
          </v-card>
          <!-- Pricing Plans -->
          <v-card style="-webkit-box-shadow: -3px 4px 45px 15px rgba(209,207,209,1); -moz-box-shadow: -3px 4px 45px 15px rgba(209,207,209,1); box-shadow: -3px 4px 45px 15px rgba(209,207,209,1); margin-top: 2rem;">
            <v-card-title style="font-size: 22px; background: linear-gradient(90deg, rgba(35,117,134,1) 13%, rgba(36,132,152,1) 46%, rgba(93,188,210,1) 91%); width: 100%; color: white;">Plans</v-card-title>
              <div>
                <v-tabs
                  v-model="tab"
                  background-color="grey"
                  class="elevation-2"
                  dark
                  :grow="grow"
                  :prev-icon="prevIcon ? 'mdi-arrow-left-bold-box-outline' : undefined"
                  :next-icon="nextIcon ? 'mdi-arrow-right-bold-box-outline' : undefined"
                  :icons-and-text="icons"
                >
                    <v-tab
                      v-for="(plan, index) in productByName.plans"
                      :key="index"
                      :href="`#tab-${index + 1}`">
                      {{ plan.name }}
                      <v-icon v-if="icons">mdi-phone</v-icon>
                    </v-tab>

                    <v-tab-item
                      v-for="(plan, index) in productByName.plans"
                      :key="index"
                      :value="`tab-${index + 1}`">
                      <v-card flat tile style="text-align: center; margin: auto;"><br>
                        <div style="color: rgb(35,117,134); height: 80px;">
                          <h1>${{plan.price}}</h1><h4>/month</h4>
                        </div><br>
                        <ul style="list-style-type: none; margin-right: 7%;">
                          <li
                            v-for="each in plan.features"
                            :key="each._id"
                          >{{ each.label }}</li>
                        </ul><br>
                        <!-- <v-btn style="background: rgb(35,117,134); color: white;">Sign Up</v-btn><br><br> -->
                      </v-card>
                    </v-tab-item>
                </v-tabs>
              </div>
          </v-card>
          <!-- Reviews -->
          <v-card style="display: flex; flex-wrap: wrap; height: auto; margin-top: 2rem;">
            <v-card-title style="font-size: 22px; background: linear-gradient(270deg, rgba(35,117,134,1) 13%, rgba(36,132,152,1) 46%, rgba(93,188,210,1) 91%);; width: 100%; color: white;">Reviews</v-card-title>
            <div
              v-for="review in productByName.reviews"
              :key="review._id"
            >
              <v-list-item>
                <v-list-item-content style="display: flex;">
                  <img :src="review.picture" style="max-width: 15%; margin-right: 5%; border-radius: 50%;"/>
                  <div style="max-width: 70%;">
                    <v-list-item-title>{{review.name}}</v-list-item-title>
                    <v-rating
                      background-color="orange lighten-3"
                      color="orange"
                      medium
                      v-model="review.rating"
                    ></v-rating>
                  </div>
                  <p style="font-size: 14px;"><br><i>{{review.review}}</i></p>
                </v-list-item-content>
              </v-list-item>
              <v-divider />
            </div>
          </v-card>
        </v-col>
      </v-row>
      <br><br>
      <v-row>
        <v-col align="center" cols="6">
          <hedron-demo-request :product="productByName" />
        </v-col>
        <v-col align="center" cols="6">
          <hedron-review :product="productByName" />
        </v-col>
      </v-row>
      <v-row>
        <hedron-chat />
      </v-row>
      <vue-disqus
        class="mt-12"
        shortname="hedron"
        :identifier="productByName._id"></vue-disqus>
    </v-container>

    <loading
      v-else
      :active="true" 
      :is-full-page="true"></loading>
  </v-content>
</template>

<script>
  import PRODUCT_BY_NAME from "../graphql/ProductByName.gql";

  import Loading from 'vue-loading-overlay';
  import Chat from '../components/Chat';
  import Review from '../components/Review';
  import DemoRequest from '../components/DemoRequest';

  export default {
    components: {
      'hedron-chat': Chat,
      'loading': Loading,
      'hedron-review': Review,
      'hedron-demo-request': DemoRequest
    },

    data() {
      return {
        tab: null,
        icons: false,
        grow: true,
        // vertical: false,
        prevIcon: false,
        nextIcon: false,
        // tabs: 4,
      };
    },

    apollo: {
      productByName: {
        query: PRODUCT_BY_NAME,
        variables () {
          return {
            productName: this.$route.params.name
          }
        },
        pollInterval: 5000
      }
    },
  }

</script>
