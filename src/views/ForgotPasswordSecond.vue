<template>
  <v-container fluid fill-height>
    <v-row style="height:100%">
      <v-col cols="5">
        <v-container fluid fill-height style="background-color:#007BFF">
          <div class="text-h4 font-italic font-weight-bold pa-7" style="color:#ffffff">
            FactureroJBA
          </div>
          <div class="pa-7">
            <span class="text-h2 font-weight-bold" style="color:#ffffff">
              Crea, diseaña, administra, y factura todo a un par de pasos
            </span>
          </div>
        </v-container>
      </v-col>
      <v-col cols="7">
        <v-card light height="100%" class="d-flex flex-column">
          <v-container>
            <div class="d-flex justify-end align-center my-4">
              Not a member?
              <router-link class="mx-2" :to="{ name: 'Signup'}">Sign up</router-link>
            </div>
          </v-container>
          <v-spacer></v-spacer>
          <v-container class="mb-16">
            <v-row justify="center" align="center">
              <v-col cols="6" class="text-h4 font-weight-bold my-4">
                Reset your password
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="6">
                <v-form ref="form" v-model="valid" lazy-validation>
                  <v-text-field v-model="password" :rules="passwordRules" label="Password" dense outlined></v-text-field>
                  <v-text-field v-model="passwordRepeat" :rules='[!!passwordRepeat|| "Password is required", passwordRepeat == password || "Passwords must be the same"]' label="Repeat password" dense outlined></v-text-field>
                </v-form>
              </v-col>
            </v-row>

            <v-row justify="center">
              <v-col cols="6" class="d-flex justify-center">
                <v-btn block depressed color="#F2D184" @click="resetPassword()">
                  Reset password
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
          <v-spacer></v-spacer>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      password:null,
      passwordRepeat:null,
      valid:true,
      //rules
      passwordRules:[
        v => !!v || 'Password is required'
      ]
    }),
    mounted:async function(){
      var response = await this.$provider.forgotPasswordStepTwoByUuid(this.$route.params.uuid)
      if (response.status == 200) {
        this.openChange = true
      }else{
        this.$router.push({name:'Account'})
      }
    },
    methods: {
      resetPassword(){
        if(this.$refs.form.validate()){
          
        }
      }
    },
  }
</script>