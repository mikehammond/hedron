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
            <v-card-text>{{ productByName.summary }}</v-card-text>
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
                        <v-btn style="background: rgb(35,117,134); color: white;">Sign Up</v-btn><br><br>
                      </v-card>
                    </v-tab-item>
                </v-tabs>
              </div>
          </v-card>
          <!-- Reviews -->
          <v-card style="display: flex; flex-wrap: wrap; height: auto; margin-top: 2rem;">
            <v-card-title style="font-size: 22px; background: linear-gradient(270deg, rgba(35,117,134,1) 13%, rgba(36,132,152,1) 46%, rgba(93,188,210,1) 91%);; width: 100%; color: white;">Reviews</v-card-title>
            <hr style="width: 100%;">
            <!-- Review 1 -->
            <v-list-item>
              <v-list-item-content style="display: flex;">
                <p style="width: 100%; margin-left: 30%;"><strong>"Excellent Product"</strong></p>
                <img src="../assets/images/reviewer.jpg" style="height: 70px; max-width: 20%; margin-right: 5%; border-radius: 50%;"/>
                <div style="max-width: 70%;">
                  <v-list-item-title>Robert McDonald</v-list-item-title>
                  <v-rating
                    background-color="orange lighten-3"
                    color="orange"
                    medium
                  ></v-rating>
                </div>
                <p style="font-size: 14px;"><br><i>"Personally I dont buy clothing from sportgirl. I have bought other stuff before not horrible not not the best. I bought a fluffy body scrub there and it was watermelon scent."</i></p>
              </v-list-item-content>
            </v-list-item><hr style="width: 100%;">

            <!-- Review 2 -->
            <v-list-item>
              <v-list-item-content style="display: flex;">
                <p style="width: 100%; margin-left: 30%;"><strong>"Can't wait for more"</strong></p>
                <img src="../assets/images/reviewer3.jpg" style="border-radius: 50%; height: 70px; max-width: 20%; margin-right: 5%;"/>
                <div style="max-width: 70%;">
                  <v-list-item-title>William McKendrick</v-list-item-title>
                  <v-rating
                    background-color="orange lighten-3"
                    color="orange"
                    medium
                  ></v-rating>
                </div><br>
                <p style="font-size: 14px;"><br><i>"Personally I dont buy clothing from sportgirl. I have bought other stuff before not horrible not not the best. I bought a fluffy body scrub there and it was watermelon scent."</i></p>
              </v-list-item-content>
            </v-list-item><hr style="width: 100%;">

            <!-- Review 3 -->
            <v-list-item>
              <v-list-item-content style="display: flex;">
                <p style="width: 100%; margin-left: 30%;"><strong>"This is a must-have"</strong></p>
                <img src="../assets/images/reviewer1.webp" style=" border-radius: 50%; height: 70px; max-width: 20%; margin-right: 5%;"/>
                <div style="max-width: 70%;">
                  <v-list-item-title>Alicia Effiong</v-list-item-title>
                  <v-rating
                    background-color="orange lighten-3"
                    color="orange"
                    medium
                  ></v-rating>
                </div>
                <p style="font-size: 14px;"><br><i>"Personally I dont buy clothing from sportgirl. I have bought other stuff before not horrible not not the best. I bought a fluffy body scrub there and it was watermelon scent."</i></p>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
      <!-- Community Section -->
      <v-row>
        <h1>Frequently Asked Questions</h1>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-expansion-panels>
            <!-- Panel 1 Left Column-->
            <v-expansion-panel>
              <v-expansion-panel-header>Is MongoDB offered as a hosted service?</v-expansion-panel-header>
              <v-expansion-panel-content>
                Yes. MongoDB Atlas is a cloud-hosted database-as-a-service. For more information, please visit MongoDB Atlas.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <!-- Panel 2 Left Column -->
            <v-expansion-panel>
              <v-expansion-panel-header>How does a collection differ from a table?</v-expansion-panel-header>
              <v-expansion-panel-content>
                Instead of tables, a MongoDB database stores its data in collections. A collection holds one or more BSON documents. Documents are analogous to records or rows in a relational database table. Each document has one or more fields; fields are similar to the columns in a relational database table.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <!-- Panel 3 Left Column-->
            <v-expansion-panel>
              <v-expansion-panel-header>How do I create a database and a collection?</v-expansion-panel-header>
              <v-expansion-panel-content>
                If a database does not exist, MongoDB creates the database when you first store data for that database.
                If a collection does not exist, MongoDB creates the collection when you first store data for that collection. [1]
                As such, you can switch to a non-existent database and perform the following operation:
              </v-expansion-panel-content>
            </v-expansion-panel>
            <!-- Panel 4 Left Column-->
            <v-expansion-panel>
              <v-expansion-panel-header>How do I define or alter the collection schema?</v-expansion-panel-header>
              <v-expansion-panel-content>
                You do not need to specify a schema for a collection in MongoDB. Although it is common for the documents in a collection to have a largely homogeneous structure, it is not a requirement; i.e. documents in a single collection do not need to have the same set of fields. The data type for a field can differ across documents in a collection as well.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <!-- Panel 5 Left Column-->
            <v-expansion-panel>
              <v-expansion-panel-header>Does MongoDB support SQL?</v-expansion-panel-header>
              <v-expansion-panel-content><v-icon>home</v-icon>
                Not directly, no. However, MongoDB does support a rich query language of its own. For examples on using MongoDB’s query language, see MongoDB CRUD Operations
                You can also use the MongoDB Connector for BI to query MongoDB collections with SQL.
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <!-- Right Column -->
        <v-col cols="6">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>Does MongoDB support SQL?</v-expansion-panel-header>
              <v-expansion-panel-content>
                Not directly, no. However, MongoDB does support a rich query language of its own. For examples on using MongoDB’s query language, see MongoDB CRUD Operations
                You can also use the MongoDB Connector for BI to query MongoDB collections with SQL.
              </v-expansion-panel-content>
            </v-expansion-panel>

            <!-- Panel 2 -->
            <v-expansion-panel>
              <v-expansion-panel-header>How do I define or alter the collection schema?</v-expansion-panel-header>
              <v-expansion-panel-content>
                You do not need to specify a schema for a collection in MongoDB. Although it is common for the documents in a collection to have a largely homogeneous structure, it is not a requirement; i.e. documents in a single collection do not need to have the same set of fields. The data type for a field can differ across documents in a collection as well.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <!-- Panel 3 -->
            <v-expansion-panel>
              <v-expansion-panel-header>How do I create a database and a collection?</v-expansion-panel-header>
              <v-expansion-panel-content>
                If a database does not exist, MongoDB creates the database when you first store data for that database.
                If a collection does not exist, MongoDB creates the collection when you first store data for that collection. [1]
                As such, you can switch to a non-existent database and perform the following operation:
              </v-expansion-panel-content>
            </v-expansion-panel>
            <!-- Panel 4 -->
            <v-expansion-panel>
              <v-expansion-panel-header>How does a collection differ from a table?</v-expansion-panel-header>
              <v-expansion-panel-content>
                Instead of tables, a MongoDB database stores its data in collections. A collection holds one or more BSON documents. Documents are analogous to records or rows in a relational database table. Each document has one or more fields; fields are similar to the columns in a relational database table.
              </v-expansion-panel-content>
            </v-expansion-panel>
            <!-- Panel 5 -->
            <v-expansion-panel>
              <v-expansion-panel-header>Is MongoDB offered as a hosted service?</v-expansion-panel-header>
              <v-expansion-panel-content>
                Yes. MongoDB Atlas is a cloud-hosted database-as-a-service. For more information, please visit MongoDB Atlas.
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>

      <br><br>
      <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on">Request Demo</v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Request for Demo</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="firstName" label="First Name*" required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field
                      label="Last Name*"
                      persistent-hint
                      required
                      v-model="lastName"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="email" label="Email*" required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="phoneNumber" label="Phone Number*" required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="company" label="Company*" required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="position" label="Your Position*" hint="Eg. Marketing Manager" required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field v-model="website" label="Link to website"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-select
                      :items="['5 - 15', '16 - 30', '31 - 55', '56+']"
                      label="Number of Employees*"
                      required
                      v-model="numberOfEmployees"
                    ></v-select>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field v-model="message" label="Message"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" text @click="makeDemoRequest">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
      <v-row>
        <hedron-chat />
      </v-row>
    </v-container>

    <loading
      v-else
      :active="true" 
      :is-full-page="true"></loading>
  </v-content>
</template>

<script>
  import PRODUCT_BY_NAME from "../graphql/ProductByName.gql";
  import ADD_DEMO_REQUEST from "../graphql/AddDemoRequest.gql";

  import Loading from 'vue-loading-overlay';
  import Chat from '../components/Chat';

  export default {
    components: {
      'hedron-chat': Chat,
      Loading,
    },

    data () {
      return {
        dialog: false,
        tab: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        icons: false,
        grow: true,
        vertical: false,
        prevIcon: false,
        nextIcon: false,
        tabs: 4,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        company: '',
        position: '',
        website: '',
        numberOfEmployees: '',
        message: '',
      }
    },

    methods: {
      makeDemoRequest() {
        const { firstName, lastName, email, phoneNumber, company,
        position, website, numberOfEmployees, message } = this;

        this.$apollo.mutate({
          mutation: ADD_DEMO_REQUEST,
          variables: {
            demo: {
              sender: `${firstName} ${lastName}`,
              receiver: this.productByName.userId,
              productId: this.productByName._id,
              firstName,
              lastName,
              email,
              phoneNumber,
              company,
              position,
              website,
              numberOfEmployees,
              message
            }
          }
        });

        this.dialog = false;
      }
    },

    apollo: {
      productByName: {
        query: PRODUCT_BY_NAME,
        variables () {
          return {
            productName: this.$route.params.name
          }
        }
      }
    },
  }

</script>
