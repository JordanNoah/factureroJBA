<template>
    <v-container fluid fill-height>
        <v-row style="height:100%">
            <v-col cols="5">
                <v-container fluid fill-height style="background-color:#007BFF">
                    <div class="text-h4 font-italic font-weight-bold pa-7" style="color:#ffffff" >
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
                <v-card light height="100%">
                    <v-container>
                        <div class="d-flex justify-end align-center my-4">
                            Not a member?
                            <router-link class="mx-2" :to="{ name: 'Signup'}">Sign up</router-link>
                        </div>
                    </v-container>
                    <v-container>
                        <v-row justify="center">
                            <v-col cols="6">
                                <div>
                                    <div class="font-weight-black text-h5">
                                        Sign in to FactureroJBA
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
                                        <v-col cols="12">
                                            <v-text-field outlined dense label="Email" v-model="email"></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field outlined dense label="Password" hide-details="auto" v-model="password"></v-text-field>
                                            <div class="d-flex justify-end my-2">
                                                <router-link class="mx-2" :to="{ name: 'Forgot password'}">Forgot password?</router-link>
                                            </div>
                                        </v-col>
                                        <v-col class="d-flex justify-end">
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        
                            <v-row justify="center">
                                <v-col cols="6" class="d-flex justify-center">
                                    <v-btn block depressed color="#F2D184" @click="initSession()">
                                        Sign in
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
    data:()=>({
        email:null,
        password:null
    }),
    methods:{
        async initSession(){
            const body = new Object()
            body.email = this.email
            body.password = this.password
            
            var response = await this.$provider.signIn(body)
            if(response.data){
                this.$store.commit('initSession',response.data)
                //this.$global.initSession(response.data.token)
            }
        }
    }
}
</script>