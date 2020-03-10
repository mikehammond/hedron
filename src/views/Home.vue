<template>
  <v-content>
    <v-container style="display: flex; flex-wrap: wrap; color: white; background: linear-gradient(90deg, rgb(35, 117, 134) 13%, rgb(36, 132, 152) 46%, rgb(93, 188, 210) 91%);" fluid>
      <v-col cols="5" style="margin-top: 9%; display: flex; flex-wrap: wrap; margin-left: 4%;">
        <h1>Find Softwares to Boost your Productivity</h1>
        <h3>Browse hundreds of verified, secure and reliable online softwares that fit your business needs</h3>
        <v-btn class="btn" style="color: white;">Browse All</v-btn><br><br>
      </v-col>
      <v-col cols="6" style="margin-top: 8%; margin-bottom: 7%; display: flex;">
        <!-- HR Cards -->
        <v-card class="topCard hrCard" style="width: 50%; height: 350px;">
          <v-card-title style="color: grey;">Human Resources</v-card-title>
          <v-row style="display: flex;">
            <v-col class="cardImageDiv">
              <img src="../assets/images/zoho.jpg" class="cardImage"/>
            </v-col>
            <v-col class="parStyle">
              <p class="blurText"></p>
              <p class="blurText"></p>
              <p class="blurLast"></p>
            </v-col>
          </v-row>
          <v-row style="display: flex;">
            <v-col class="cardImageDiv">
              <img src="../assets/images/zapier.png" class="cardImage"/>
            </v-col>
            <v-col class="parStyle">
              <p class="blurText"></p>
              <p class="blurText"></p>
              <p class="blurLast"></p>
            </v-col>
          </v-row>
          <v-row style="display: flex;">
            <v-col class="cardImageDiv">
              <img src="../assets/images/header-image.png" class="cardImage"/>
            </v-col>
            <v-col class="parStyle">
              <p class="blurText"></p>
              <p class="blurText"></p>
              <p class="blurLast"></p>
            </v-col>
          </v-row>
        </v-card>
        <!-- Operations Card -->
        <v-card class="topCard opsCard" style="width: 50%; height: 350px;">
          <v-card-title style="color: grey;">Operations</v-card-title>
          <v-row style="display: flex;">
            <v-col class="cardImageDiv">
              <img src="../assets/images/zoho.jpg" class="cardImage"/>
            </v-col>
            <v-col class="parStyle">
              <p class="blurText"></p>
              <p class="blurText"></p>
              <p class="blurLast"></p>
            </v-col>
          </v-row>
          <v-row style="display: flex;">
            <v-col class="cardImageDiv">
              <img src="../assets/images/zapier.png" class="cardImage"/>
            </v-col>
            <v-col class="parStyle">
              <p class="blurText"></p>
              <p class="blurText"></p>
              <p class="blurLast"></p>
            </v-col>
          </v-row>
          <v-row style="display: flex;">
            <v-col class="cardImageDiv">
              <img src="../assets/images/header-image.png" class="cardImage"/>
            </v-col>
            <v-col class="parStyle">
              <p class="blurText"></p>
              <p class="blurText"></p>
              <p class="blurLast"></p>
            </v-col>
          </v-row>
        </v-card>

        <!-- Finance Card -->
        <v-card class="topCard financeCard" style="width: 50%; height: 350px;">
          <v-card-title style="color: grey;">Finance</v-card-title>
          <v-row style="display: flex;">
            <v-col class="cardImageDiv">
              <img src="../assets/images/zoho.jpg" class="cardImage"/>
            </v-col>
            <v-col class="parStyle">
              <p class="blurText"></p>
              <p class="blurText"></p>
              <p class="blurLast"></p>
            </v-col>
          </v-row>
          <v-row style="display: flex;">
            <v-col class="cardImageDiv">
              <img src="../assets/images/zapier.png" class="cardImage"/>
            </v-col>
            <v-col class="parStyle">
              <p class="blurText"></p>
              <p class="blurText"></p>
              <p class="blurLast"></p>
            </v-col>
          </v-row>
          <v-row style="display: flex;">
            <v-col class="cardImageDiv">
              <img src="../assets/images/header-image.png" class="cardImage"/>
            </v-col>
            <v-col class="parStyle">
              <p class="blurText"></p>
              <p class="blurText"></p>
              <p class="blurLast"></p>
            </v-col>
          </v-row>
        </v-card>

        <!-- Sales Card -->
        <v-card class="topCard salesCard" style="width: 50%; height: 350px;">
          <v-card-title style="color: grey;">Sales & Marketing</v-card-title>
          <v-row style="display: flex;">
            <v-col class="cardImageDiv">
              <img src="../assets/images/zoho.jpg" class="cardImage"/>
            </v-col>
            <v-col class="parStyle">
              <p class="blurText"></p>
              <p class="blurText"></p>
              <p class="blurLast"></p>
            </v-col>
          </v-row>
          <v-row style="display: flex;">
            <v-col class="cardImageDiv">
              <img src="../assets/images/zapier.png" class="cardImage"/>
            </v-col>
            <v-col class="parStyle">
              <p class="blurText"></p>
              <p class="blurText"></p>
              <p class="blurLast"></p>
            </v-col>
          </v-row>
          <v-row style="display: flex;">
            <v-col class="cardImageDiv">
              <img src="../assets/images/header-image.png" class="cardImage"/>
            </v-col>
            <v-col class="parStyle">
              <p class="blurText"></p>
              <p class="blurText"></p>
              <p class="blurLast"></p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
  <!-- End of Cards -->
    </v-container>
    <v-container style="margin-top: 10%;">
      <v-row style="text-align: center;" fluid>
        <v-col class="value" cols="4">
          <i class="material-icons value-icons">vpn_lock</i>
          <h3>Secure Products</h3>
          <p>description of our value propositions</p>
        </v-col>
        <v-col class="value" cols="4">
          <i class="material-icons value-icons">rate_review</i>
          <h3>Real Reviews</h3>
          <p>description of our value propositions</p>
        </v-col>
        <v-col class="value" cols="4">
          <i class="material-icons value-icons">contact_support</i>
          <h3>24/7 Support</h3>
          <p>description of our value propositions</p>
        </v-col>
      </v-row>
    </v-container>
    <v-container style="margin-top: 5%;">
      <div style="background: linear-gradient(90deg, rgb(35, 117, 134) 13%, rgb(36, 132, 152) 46%, rgb(93, 188, 210) 91%); height: 100px; border-bottom-left-radius: 10px;">
        <div style="text-align: center; padding-bottom: 2%; margin-left: 2%; background: white; border-bottom-left-radius: 10px;">
          <h1>Featured Products</h1>
          <h3 style="color: rgba(10,10,10,0.5);">Find top products based on your needs. Find them by name, reviews, functionalities, price, support model and much more.</h3>
        </div>
      </div>
      <v-row style="justify-content: space-between; width: 100%; text-align: center; margin-left: 0.5%;">
        <!-- Card 1 -->
        <v-card class="product" style="width: 30%; margin-top: 5%;">
          <div style="height: 217px; width: 100%;">
            <img src="../assets/images/home1.jpg" class="white--text align-end" height="100%;" style=" min-width: 100%; max-width: 100%;"/>
          </div>
          <div style="-webkit-box-shadow: 0px -32px 39px 1px rgba(186,184,186,0.5);
          -moz-box-shadow: 0px -32px 39px 1px rgba(186,184,186,0.5);
          box-shadow: 0px -32px 39px 1px rgba(186,184,186,0.5); position: relative;">
            <v-card-title>Product Name</v-card-title>
            <h4 style="padding: 5%;">Short description of the product. Clear and concise, preferably max 2 sentences</h4><br><br>
            <div style="display: flex; width: 100%; flex-direction: row; position: absolute; bottom: 0;">
              <v-btn class="btn" style="color: white; width: 50%;">Read More</v-btn>
              <v-btn class="btn" style="color: white; width: 50%;">Sign Up</v-btn>
            </div>
          </div>
        </v-card>
        <!-- Card 2 -->
        <v-card class="product" style="width: 30%; margin-top: 5%;">
          <div style="height: 217px;">
            <img src="../assets/images/home2.jpg" class="white--text align-end" height="100%;" style="min-width: 100%; max-width: 100%;" cover/>
          </div>
          <div style="-webkit-box-shadow: 0px -32px 39px 1px rgba(186,184,186,0.5);
          -moz-box-shadow: 0px -32px 39px 1px rgba(186,184,186,0.5);
          box-shadow: 0px -32px 39px 1px rgba(186,184,186,0.5); position: relative;">
            <v-card-title>Product Name.</v-card-title>
            <h4 style="padding: 5%;">Short description of the product. Clear and concise, preferably max 2 sentences</h4><br><br>
            <div style="display: flex; width: 100%; flex-direction: row; position: absolute; bottom: 0;">
              <v-btn class="btn" style="color: white; width: 50%;">Read More</v-btn>
              <v-btn class="btn" style="color: white; width: 50%;">Sign Up</v-btn>
            </div>
          </div>
        </v-card>
        <!-- Card 3 -->
        <v-card class="product" style="width: 30%; margin-top: 5%;">
          <div style="height: 217px;">
            <img src="../assets/images/home3.png" class="white--text align-end" height="100%;" style="min-width: 100%; max-width: 100%;"/>
          </div>
          <div style="-webkit-box-shadow: 0px -32px 39px 1px rgba(186,184,186,0.5);
          -moz-box-shadow: 0px -32px 39px 1px rgba(186,184,186,0.5);
          box-shadow: 0px -32px 39px 1px rgba(186,184,186,0.5); position: relative;">
            <v-card-title>Product Name</v-card-title>
            <h4 style="padding: 4%;">Short description of the product. Clear and concise, preferably max 2 sentences</h4><br><br>
            <div style="display: flex; width: 100%; flex-direction: row; position: absolute; bottom: 0;">
              <v-btn class="btn" style="color: white; width: 50%;">Read More</v-btn>
              <v-btn class="btn" style="color: white; width: 50%;">Sign Up</v-btn>
            </div>
          </div>
          <br>
        </v-card>
        <!-- Card 4 -->
        <v-card class="product" style="width: 30%; margin-top: 5%;">
          <div style="height: 217px;">
            <img src="../assets/images/home4.jpg" class="white--text align-end" height="100%;" style="min-width: 100%; max-width: 100%;"/>
          </div>
          <div style="-webkit-box-shadow: 0px -32px 39px 1px rgba(186,184,186,0.5);
          -moz-box-shadow: 0px -32px 39px 1px rgba(186,184,186,0.5);
          box-shadow: 0px -32px 39px 1px rgba(186,184,186,0.5); position: relative;">
            <v-card-title>Product Name</v-card-title>
            <h4 style="padding: 5%;">Short description of the product. Clear and concise, preferably max 2 sentences</h4><br><br>
            <div style="display: flex; width: 100%; flex-direction: row; position: absolute; bottom: 0;">
              <v-btn class="btn" style="color: white; width: 50%;">Read More</v-btn>
              <v-btn class="btn" style="color: white; width: 50%;">Sign Up</v-btn>
            </div>
          </div>
          <br>
        </v-card>
        <!-- Card 5 -->
        <v-card class="product" style="width: 30%; margin-top: 5%;">
          <div style="height: 217px;">
            <img src="../assets/images/home5.jpg" class="white--text align-end" height="100%;" style="min-width: 100%; max-width: 100%;"/>
          </div>
          <div style="-webkit-box-shadow: 0px -32px 39px 1px rgba(186,184,186,0.5);
          -moz-box-shadow: 0px -32px 39px 1px rgba(186,184,186,0.5);
          box-shadow: 0px -32px 39px 1px rgba(186,184,186,0.5); position: relative;">
            <v-card-title>Product Name</v-card-title>
            <h4 style="padding: 5%;">Short description of the product. Clear and concise, preferably max 2 sentences</h4><br><br>
            <div style="display: flex; width: 100%; flex-direction: row; position: absolute; bottom: 0;">
              <v-btn class="btn" style="color: white; width: 50%;">Read More</v-btn>
              <v-btn class="btn" style="color: white; width: 50%;">Sign Up</v-btn>
            </div>
          </div>
          <br>
        </v-card>
        <!-- Card 6 -->
        <v-card class="product" style="width: 30%; margin-top: 5%;">
          <div style="height: 217px;">
            <img src="../assets/images/hom6.jpg" class="white--text align-end" height="100%;" style="min-width: 100%; max-width: 100%;"/>
          </div>
          <div style="-webkit-box-shadow: 0px -32px 39px 1px rgba(186,184,186,0.5);
          -moz-box-shadow: 0px -32px 39px 1px rgba(186,184,186,0.5);
          box-shadow: 0px -32px 39px 1px rgba(186,184,186,0.5); position: relative;">
            <v-card-title>Product Name</v-card-title>
            <h4 style="padding: 5%;">Short description of the product. Clear and concise, preferably max 2 sentences</h4><br><br>
            <div style="display: flex; width: 100%; flex-direction: row; position: absolute; bottom: 0;">
              <v-btn class="btn" style="color: white; width: 50%;">Read More</v-btn>
              <v-btn class="btn" style="color: white; width: 50%;">Sign Up</v-btn>
            </div>
          </div>
          <br>
        </v-card>
      </v-row>
    </v-container><br><br>
    <container>
      <v-row style="display: flex; background: linear-gradient(90deg, rgb(35, 117, 134) 13%, rgb(36, 132, 152) 46%, rgb(93, 188, 210) 91%); justify-content: space-between; padding: 5% 0 5% 0;">
        <div style="margin-left: 7%; margin: auto; color: white;">
          <h2>Want to talk about your specific needs?</h2>
          <p style="color: white;">Leave us your email and we will contact you soon</p>
        </div>
        <div style="margin-right: 7%; width: 45%; margin: auto;">
          <v-form ref="form" v-model="valid" lazy-validation style="display: flex; background: white; max-width: 90%; align-items: center; border-radius: 30px; margin: auto; height: 100%;">
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required style="margin-left: 5%;"></v-text-field>
            <v-btn :disabled="!valid" @click="validate" style=" width: 30%; border-radius: 30px; margin-right: 4%; color: white; background: linear-gradient(90deg, rgb(35, 117, 134) 13%, rgb(36, 132, 152) 46%, rgb(93, 188, 210) 91%);">
              Submit
            </v-btn>
          </v-form>
        </div>
      </v-row>
    </container>
  </v-content>
</template>

<style lang="scss">
@import '@/assets/variables.scss';
$headings: (
  'h1': (
    'size': 30px,
    'line-height': 1.15em
  )
);
.product:hover{
  -webkit-box-shadow: -3px 4px 45px 15px rgba(209,207,209,1);
  -moz-box-shadow: -3px 4px 45px 15px rgba(209,207,209,1);
  box-shadow: -3px 4px 45px 15px rgba(209,207,209,1);
}
.value-icons {
  font-size: 40px;
  color: grey;
}
.value:hover{
  .value-icons{
    color: rgb(35,117,134);
  }
  -webkit-box-shadow: -3px 4px 45px 15px rgba(209,207,209,1);
  -moz-box-shadow: -3px 4px 45px 15px rgba(209,207,209,1);
  box-shadow: -3px 4px 45px 15px rgba(209,207,209,1);
}
p {
  color: rgba(10,10,10,0.5);
}
h4 {
  color: rgba(10,10,10,0.5);
}
.salesCard {
  border-radius: 20px;
  transform: rotate(12deg);
  margin-top: 3%;
  -webkit-box-shadow: -31px 1px 36px -12px rgba(189,183,189,1);
  -moz-box-shadow: -31px 1px 36px -12px rgba(189,183,189,1);
  box-shadow: -31px 1px 36px -12px rgba(189,183,189,1);
}
.financeCard {
  transform: rotate(6deg);
  margin-right: -20%;
  -webkit-box-shadow: -31px 1px 36px -12px rgba(189,183,189,1);
  -moz-box-shadow: -31px 1px 36px -12px rgba(189,183,189,1);
  box-shadow: -31px 1px 36px -12px rgba(189,183,189,1);
}
.opsCard {
  transform: rotate(-6deg);
  margin-right: -20%;
  -webkit-box-shadow: -31px 1px 36px -12px rgba(189,183,189,1);
  -moz-box-shadow: -31px 1px 36px -12px rgba(189,183,189,1);
  box-shadow: -31px 1px 36px -12px rgba(189,183,189,1);
}
.hrCard {
  transform: rotate(-12deg);
  margin-right: -20%;
  margin-top: 3%;
}
.parStyle {
  width: 80%;
  margin: 0 3% 0 -50%;
}
.cardImage {
  width: 30%;
  margin-left: 5%;
}
.blurText {
  width: 100%;
  background-color: #CECECE;
  height: 7px;
  margin-bottom: 0 3% -5% -10%;
  border-radius: 5px;
}
.blurLast {
  width: 70%;
  background-color: #CECECE;
  height: 7px;
  border-radius: 5px;
}
.btn {
  background: rgb(120,115,204);
  background: linear-gradient(90deg, rgb(35, 117, 134) 13%, rgb(36, 132, 152) 46%, rgb(93, 188, 210) 91%);
  border-radius: 0;
}
</style>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Browse Products',
          to: '/browse'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Submit Product',
          to: '/submit'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Contact',
          to: '/contact'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
