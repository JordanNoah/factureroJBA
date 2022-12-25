<template>
    <v-container fluid fill-height>
        <v-row >
            <v-col cols="5">
                <v-container fluid fill-height style="background-color:#F2D184">
                    <div class="text-h4 font-italic font-weight-bold" style="color:#121212" >
                        FactureroJBA
                    </div>
                    <div>
                        <span class="text-h2 font-weight-bold" style="color:#121212">
                            Crea, diseaña, administra, y factura todo a un par de pasos
                        </span>
                    </div>
                </v-container>
            </v-col>
            <v-col cols="7">
                <v-card light>
                    <v-container>
                        <div class="d-flex justify-end align-center my-4">
                            Already a member? 
                            <router-link class="mx-2" :to="{ name: 'Signin'}">Sign in</router-link>
                        </div>
                        <v-row justify="center">
                            <v-col cols="6">
                                <div>
                                    <div class="font-weight-black text-h5">
                                        Sign up to FactureroJBA
                                    </div>
                                    <div class="my-7">
                                        <v-hover v-slot="{ hover }">
                                            <v-btn class="mr-2" depressed :elevation="hover ? 12 : 0">
                                                <v-img src="@/assets/google.png" height="25" width="25" contain></v-img>
                                                <span v-if="hover">Google</span>
                                            </v-btn>
                                        </v-hover>
                                        <v-hover v-slot="{ hover }">
                                            <v-btn class="mr-2" depressed :elevation="hover ? 12 : 0">
                                                <v-icon color="blue">
                                                    fab fa-twitter
                                                </v-icon>
                                                <span v-if="hover">Twitter</span>
                                            </v-btn>
                                        </v-hover>
                                        <v-hover v-slot="{ hover }">
                                            <v-btn class="mr-2" depressed :elevation="hover ? 12 : 0">
                                                <v-icon color="blue">
                                                    fab fa-facebook-square
                                                </v-icon>
                                                <span v-if="hover">
                                                    Facebook
                                                </span>
                                            </v-btn>
                                        </v-hover>
                                    </div>
                                    <div class="d-flex align-center">
                                        <v-divider class="mx-2"></v-divider>
                                        Or
                                        <v-divider class="mx-2"></v-divider>
                                    </div>
                                </div>
                            </v-col>
                        </v-row>
                            <v-row justify="center">
                                <v-col cols="6">
                                    <v-form ref="form" v-model="valid" lazy-validation>
                                        <v-row>
                                            <v-col cols="6">
                                                <v-text-field v-model="name" outlined dense label="Name" :rules="nameRules"></v-text-field>
                                            </v-col>
                                            <v-col cols="6">
                                                <v-text-field v-model="username" outlined dense label="Username" :rules="usernameRules"></v-text-field>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-text-field v-model="email" outlined dense label="Email" :rules="emailRules"></v-text-field>
                                            </v-col>
                                            <v-col cols="12">
                                                <v-text-field v-model="password" outlined dense label="Password" :rules="passwordRules" :type="showPassword ? 'text' : 'password'" :append-icon="showPassword ? 'far fa-eye' : 'far fa-eye-slash'" @click:append="showPassword = !showPassword"></v-text-field>
                                            </v-col>
                                            <v-checkbox :rules="termsRules" label="Creating an account means you’re okay with our Terms of Service, Privacy Policy, and our default Notification Settings."></v-checkbox>
                                        </v-row>
                                    </v-form>
                                </v-col>
                            </v-row>
                        
                            <v-row justify="center">
                                <v-col cols="6" class="d-flex justify-center">
                                    <v-btn block depressed color="#F2D184" @click="initSession()">
                                        Create account
                                    </v-btn>
                                </v-col>
                            </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data: () => ({
        name:null,
        username:null,
        email:null,
        password:null,
        terms:false,
        valid:true,
        //rules
        nameRules:[
            v => !!v || 'Name is required'
        ],
        usernameRules:[
            v => !!v || 'Username is required'
        ],
        emailRules:[
            v => !!v || 'Email is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
        ],
        passwordRules:[
            v => !!v || 'Password is required'
        ],
        termsRules:[
            v => !!v || 'You must agree to continue!'
        ],
        //configs
        showPassword:false
    }),
    methods:{
        async initSession(){
            if(this.$refs.form.validate()){
                var body = new Object()
                body.name = this.name
                body.username = this.username
                body.email = this.email
                body.password = this.password

                var response = await this.$provider.signUp(body)
                if(response.status){
                    this.$global.initSession(response.data.user)
                }
                console.log(response.data.user);
            }
        }
    }
}
</script>