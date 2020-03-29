<template>
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
          <v-form
            v-model="valid"
          >
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="firstName"
                  label="First Name"
                  :rules="generalRules"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="Last Name"
                  v-model="lastName"
                  :rules="generalRules"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="email"
                  label="Email"
                  :rules="emailRules"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="phoneNumber"
                  label="Phone Number"
                  :rules="generalRules"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="company"
                  label="Company"
                  :rules="generalRules"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="position"
                  label="Your Position*"
                  :rules="generalRules"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="website"
                  label="Link to website"
                  :rules="generalRules"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-select
                  :items="['5 - 15', '16 - 30', '31 - 55', '56+']"
                  label="Number of Employees*"
                  required
                  v-model="numberOfEmployees"
                  :rules="generalRules"></v-select>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="message"
                  label="Message"
                  :rules="generalRules"></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
        <v-btn :disabled="!valid" color="blue darken-1" text @click="makeDemoRequest">Submit</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import ADD_DEMO_REQUEST from "../graphql/AddDemoRequest.gql";

  export default {
    props: ['product'],

    data() {
      return {
        dialog: false,
        valid: false,
        generalRules: [
          v => !!v || 'Input is required',
        ],
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        firstName: "",
        lastName: "",
        email: this.$auth.user ? this.$auth.user.email : "",
        phoneNumber: "",
        company: "",
        position: "",
        website: "",
        numberOfEmployees: "",
        message: ""
      };
    },

    methods: {
      makeDemoRequest() {
        const {
          firstName,
          lastName,
          email,
          phoneNumber,
          company,
          position,
          website,
          numberOfEmployees,
          message
        } = this;

        this.$apollo.mutate({
          mutation: ADD_DEMO_REQUEST,
          variables: {
            demo: {
              sender: `${firstName} ${lastName}`,
              receiver: this.product.userId,
              productId: this.product._id,
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
    }
  };
</script>