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
                <v-card light height="100%" class="d-flex flex-column justify-space-between">
                    <v-container>
                        <div class="d-flex justify-end align-center my-4">
                            Not a member?
                            <router-link class="mx-2" :to="{ name: 'Signup'}">Sign up</router-link>
                        </div>
                    </v-container>
                    <v-container class="py-16">
                        <v-row justify="center">
                            <v-col cols="7" class="text-h4 font-weight-bold my-4">
                               Forgot Password?
                            </v-col>
                            <v-col cols="7" class="pb-9">
                                Enter the email address you used when you joined and we’ll send you instructions to reset your password.
                                <br><br>
                                For security reasons, we do NOT store your password. So rest assured that we will never send your password via email.
                            </v-col>
                        </v-row>
                            <v-row justify="center">
                                <v-col cols="7">
                                    <v-text-field label="Email" dense outlined></v-text-field>
                                </v-col>
                            </v-row>
                        
                            <v-row justify="center">
                                <v-col cols="6" class="d-flex justify-center">
                                    <v-btn block depressed color="#F2D184">
                                        Send reset instruction
                                    </v-btn>
                                </v-col>
                            </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>