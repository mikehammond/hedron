<template>
  <v-content style="font-family: 'Poppins', sans-serif;">
    <v-row>
      <div style="font-size: 24px; text-align: left; margin: 4% 0 0 4%; color: rgb(35,117,134)">
        <h1><strong>{{ getProductByName.name }}</strong></h1>
        <h5>{{ getProductByName.name }}</h5>
      </div>
      <v-container style="display: flex; flex-wrap: wrap; justify-content: space-between; width: 100%; margin-top: 4%; height: auto;" fluid>
        <!-- Main Content -->
        <v-col cols="7" id="mainBar" style="display: flex; flex-wrap: wrap; margin-left: 3%;">
          <div style="width: 99%;" contain>
            <v-card style="border-radius: 20px;">
              <img src="../assets/images/dashboard.jpg" style="padding: 0% 0% 0% 3%; margin: auto; width: 90%;" contain/>
            </v-card>
          </div>
          <div style="width: 99%; margin-top: 2%;"><br>
            <v-card style="border-radius: 20px;">
              <div style="padding: 4%;">
                <h3>The Database for Modern Applications</h3><br>
                <p>MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era. No database makes you more productive.</p><br>
                <h3>As a programmer, you think in objects. Now your database does too.</h3>
                <p>MongoDB is a document database, which means it stores data in JSON-like documents. We believe this is the most natural way to think about data, and is much more expressive and powerful than the traditional row/column model.</p><br>
                <iframe width="89%" height="340" style="margin-left: 5%;" src="https://www.youtube.com/watch?v=ny2rBxwvxBY"></iframe><br><br><br><br>
                <h3>Rich JSON Documents</h3>
                <ul>
                  <li>The most natural and productive way to work with data.</li>
                  <li>Supports arrays and nested objects as values.</li>
                  <li>Allows for flexible and dynamic schemas.</li>
                </ul><br>
                <h3>Powerful query language</h3>
                <ul>
                  <li>Rich and expressive query language that allows you to filter and sort by any field, no matter how nested it may be within a document.</li>
                  <li>Support for aggregations and other modern use-cases such as geo-based search, graph search, and text search.</li>
                  <li>Queries are themselves JSON, and thus easily composable. No more concatenating strings to dynamically generate SQL queries.</li>
                </ul><br>
                <h3>All the power of a relational database, and more...</h3>
                <ul>
                  <li>Full ACID transactions.</li>
                  <li>Support for joins in queries.</li>
                  <li>Two types of relationships instead of one: reference and embedded.</li>
                </ul><br>
              </div>
            </v-card>
          </div>
        </v-col>

        <!-- Right SideBar -->
        <v-col cols="4" id="rightBar" style="display: flex; flex-direction: column; margin-right: 1%;">
        <!-- Value Proposition -->
          <div style="width: 100%;">
            <v-card style="-webkit-box-shadow: -3px 4px 45px 15px rgba(209,207,209,1); -moz-box-shadow: -3px 4px 45px 15px rgba(209,207,209,1); box-shadow: -3px 4px 45px 15px rgba(209,207,209,1);">
              <v-card-title style="font-size: 22px; background: linear-gradient(90deg, rgba(35,117,134,1) 13%, rgba(36,132,152,1) 46%, rgba(93,188,210,1) 91%); width: 100%; color: white;">Value Proposition</v-card-title>
              <v-list-item
                v-for="value in getProductByName.values"
                :key="value.name"
                two-line>
                <i class="material-icons" style="margin-right: 5%; color: rgb(35,117,134);">done_outline</i>
                <v-list-item-content>
                  <v-list-item-title>{{ value.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ value.description }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </div>
    <!-- Features -->
          <div style="width: 100%; margin-top: 10%;">
            <v-card style="-webkit-box-shadow: -3px 4px 45px 15px rgba(209,207,209,1); -moz-box-shadow: -3px 4px 45px 15px rgba(209,207,209,1); box-shadow: -3px 4px 45px 15px rgba(209,207,209,1);">
              <v-card-title style="font-size: 22px; background: linear-gradient(270deg, rgba(35,117,134,1) 13%, rgba(36,132,152,1) 46%, rgba(93,188,210,1) 91%); width: 100%; color: white;">Features</v-card-title>
              <v-list-item
                v-for="feature in getProductByName.features"
                :key="feature.name"
                two-line>
                <v-list-item-content>
                  <v-list-item-title>{{feature.label}}</v-list-item-title>
                  <!-- <v-list-item-subtitle>One sentence description of the value proposition</v-list-item-subtitle> -->
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </div>
          <!-- Pricing Plans -->
          <div style="width: 100%; margin-top: 10%;">
            <v-card style="-webkit-box-shadow: -3px 4px 45px 15px rgba(209,207,209,1); -moz-box-shadow: -3px 4px 45px 15px rgba(209,207,209,1); box-shadow: -3px 4px 45px 15px rgba(209,207,209,1);">
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
                    <v-tab :href="`#tab-1`">
                      Free
                      <v-icon v-if="icons">mdi-phone</v-icon>
                    </v-tab>

                    <v-tab-item :value="'tab-1'">
                      <v-card flat tile style="text-align: center; margin: auto;"><br>
                        <div style="color: rgb(35,117,134); height: 80px;"><h1>$0</h1><h4>/month</h4></div><br>
                        <ul style="list-style-type: none; margin-right: 7%;">
                          <li>Feature Two</li>
                          <li>Feature Three</li>
                          <li>Feature Four</li>
                          <li>Feature Five</li>
                          <li>Feature Six</li>
                        </ul><br>
                        <v-btn style="background: rgb(35,117,134); color: white;">Sign Up</v-btn><br><br>
                      </v-card>
                    </v-tab-item>

                    <v-tab :href="`#tab-2`">
                      Personal
                      <v-icon v-if="icons">mdi-phone</v-icon>
                    </v-tab>

                    <v-tab-item :value="'tab-2'">
                      <v-card flat tile style="text-align: center; margin: auto;"><br>
                        <div style="color: rgb(35,117,134); height: 80px;"><h1>$5</h1><h4>/month</h4></div><br>
                        <ul style="list-style-type: none; margin-right: 7%;">
                          <li>Feature Two</li>
                          <li>Feature Three</li>
                          <li>Feature Four</li>
                          <li>Feature Five</li>
                          <li>Feature Six</li>
                        </ul><br>
                        <v-btn style="background: rgb(35,117,134); color: white;">Sign Up</v-btn><br><br>
                      </v-card>
                    </v-tab-item>

                    <v-tab :href="`#tab-3`">
                      Professional
                      <v-icon v-if="icons">mdi-phone</v-icon>
                    </v-tab>

                    <v-tab-item :value="'tab-3'">
                      <v-card flat tile style="text-align: center; margin: auto;"><br>
                        <div style="color: rgb(35,117,134); height: 80px;"><h1>$12</h1><h4>/month</h4></div><br>
                        <ul style="list-style-type: none; margin-right: 7%;">
                          <li>Feature Two</li>
                          <li>Feature Three</li>
                          <li>Feature Four</li>
                          <li>Feature Five</li>
                          <li>Feature Six</li>
                        </ul><br>
                        <v-btn style="background: rgb(35,117,134); color: white;">Sign Up</v-btn><br><br>
                      </v-card>
                    </v-tab-item>

                    <v-tab :href="`#tab-4`">
                      Business
                      <v-icon v-if="icons">mdi-phone</v-icon>
                    </v-tab>

                    <v-tab-item :value="'tab-4'">
                      <v-card flat tile style="text-align: center; margin: auto;"><br>
                        <div style="color: rgb(35,117,134); height: 80px;"><h1>$25</h1><h4>/month</h4></div><br>
                        <ul style="list-style-type: none; margin-right: 7%;">
                          <li>Feature Two</li>
                          <li>Feature Three</li>
                          <li>Feature Four</li>
                          <li>Feature Five</li>
                          <li>Feature Six</li>
                        </ul><br>
                        <v-btn style="background: rgb(35,117,134); color: white;">Sign Up</v-btn><br><br>
                      </v-card>
                    </v-tab-item>

                    <v-tab :href="`#tab-5`">
                      Enterprise
                      <v-icon v-if="icons">mdi-phone</v-icon>
                    </v-tab>

                    <v-tab-item :value="'tab-5'">
                      <v-card flat tile style="text-align: center; margin: auto;"><br>
                        <v-btn style="background: rgb(35,117,134); color: white;">Sign Up</v-btn><br><br>
                      </v-card>
                    </v-tab-item>
                  </v-tabs>
                </div>
            </v-card>
          </div>
          <!-- Reviews -->
          <div style="width: 100%; margin-top: 10%; height: auto; display: flex; flex-wrap: wrap;">
            <v-card style="display: flex; flex-wrap: wrap; height: auto;">
              <v-card-title style="font-size: 22px; background: linear-gradient(270deg, rgba(35,117,134,1) 13%, rgba(36,132,152,1) 46%, rgba(93,188,210,1) 91%);; width: 100%; color: white;">Reviews</v-card-title>
              <hr style="width: 100%;">
              <!-- Review 1 -->
              <v-list-item>
                <v-list-item-content style="display: flex;">
                  <v-text style="width: 100%; margin-left: 30%;"><strong>"Excellent Product"</strong></v-text>
                  <img src="../assets/images/reviewer.jpg" style="height: 70px; max-width: 20%; margin-right: 5%; border-radius: 50%;"/>
                  <div style="max-width: 70%;">
                    <v-list-item-title>Robert McDonald</v-list-item-title>
                    <v-rating
                      v-model="rating"
                      background-color="orange lighten-3"
                      color="orange"
                      medium
                    ></v-rating>
                  </div>
                  <v-text style="font-size: 14px;"><br><i>"Personally I dont buy clothing from sportgirl. I have bought other stuff before not horrible not not the best. I bought a fluffy body scrub there and it was watermelon scent."</i></v-text>
                </v-list-item-content>
              </v-list-item><hr style="width: 100%;">

              <!-- Review 2 -->
              <v-list-item>
                <v-list-item-content style="display: flex;">
                  <v-text style="width: 100%; margin-left: 30%;"><strong>"Can't wait for more"</strong></v-text>
                  <img src="../assets/images/reviewer3.jpg" style="border-radius: 50%; height: 70px; max-width: 20%; margin-right: 5%;"/>
                  <div style="max-width: 70%;">
                    <v-list-item-title>William McKendrick</v-list-item-title>
                    <v-rating
                      v-model="rating"
                      background-color="orange lighten-3"
                      color="orange"
                      medium
                    ></v-rating>
                  </div><br>
                  <v-text style="font-size: 14px;"><br><i>"Personally I dont buy clothing from sportgirl. I have bought other stuff before not horrible not not the best. I bought a fluffy body scrub there and it was watermelon scent."</i></v-text>
                </v-list-item-content>
              </v-list-item><hr style="width: 100%;">

              <!-- Review 3 -->
              <v-list-item>
                <v-list-item-content style="display: flex;">
                  <v-text style="width: 100%; margin-left: 30%;"><strong>"This is a must-have"</strong></v-text>
                  <img src="../assets/images/reviewer1.webp" style=" border-radius: 50%; height: 70px; max-width: 20%; margin-right: 5%;"/>
                  <div style="max-width: 70%;">
                    <v-list-item-title>Alicia Effiong</v-list-item-title>
                    <v-rating
                      v-model="rating"
                      background-color="orange lighten-3"
                      color="orange"
                      medium
                    ></v-rating>
                  </div>
                  <v-text style="font-size: 14px;"><br><i>"Personally I dont buy clothing from sportgirl. I have bought other stuff before not horrible not not the best. I bought a fluffy body scrub there and it was watermelon scent."</i></v-text>
                </v-list-item-content>
              </v-list-item>
            </v-card>
          </div>
        </v-col>
      </v-container>
      <div></div>

      <!-- Community Section -->
      <v-container>
        <h1>Frequently Asked Questions</h1>
        <v-col style="margin-top: 5%; display: flex;">
          <v-col cols="6">
            <v-expansion-panels focusable>
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
            <v-expansion-panels focusable>
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
        </v-col>
      </v-container>
    </v-row>
  </v-content>
</template>

<script>
  import GET_PRODUCT_BY_NAME from "../graphql/GetProductByName.gql";

  export default {
    data () {
      return {
        tab: null,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        icons: false,
        grow: true,
        vertical: false,
        prevIcon: false,
        nextIcon: false,
        tabs: 4,
      }
    },

    apollo: {
      getProductByName: {
        query: GET_PRODUCT_BY_NAME,
        variables () {
          return {
            productName: this.$route.params.name
          }
        }
      }
    },
  }

</script>
