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
                                    <v-row>
                                        <v-col cols="6">
                                            <v-text-field outlined dense label="Name"></v-text-field>
                                        </v-col>
                                        <v-col cols="6">
                                            <v-text-field outlined dense label="Username"></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field outlined dense label="Email"></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field outlined dense label="Password"></v-text-field>
                                        </v-col>
                                        <v-checkbox label="Creating an account means you’re okay with our Terms of Service, Privacy Policy, and our default Notification Settings."></v-checkbox>
                                    </v-row>
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
    methods:{
        initSession(){
            this.$global.initSession()
            this.$router.push({name:'Dashboard'}).catch((e) => {
                console.log(e);
            })
        }
    }
}
</script>