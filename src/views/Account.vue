<template>
    <div>
        <v-app-bar dense>
            as
        </v-app-bar>
        <v-container>
            <v-row>
                <v-col cols="8"></v-col>
                <v-col cols="4">
                    <v-card>
                        <v-container>

                            <v-text-field outlined dense label="Correo Electronico"></v-text-field>
                            <v-text-field outlined dense label="Password"></v-text-field>
                            <v-container>
                                <v-btn block depressed>
                                    Iniciar sesión
                                </v-btn>
                                <div class="d-flex justify-center my-3">
                                    <router-link to="/forgotPassword">
                                        <span>¿Olvidaste tu contraseña?</span>
                                    </router-link>
                                </div>
                            </v-container>
                            <v-divider></v-divider>
                            <v-container>
                                <v-btn block depressed>
                                    Crear cuenta
                                </v-btn>
                            </v-container>
                        </v-container>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-dialog v-model="dialogCreate" max-width="500">
            <v-card>
                <v-card-title>
                    Registrate
                </v-card-title>
                <v-container>
                    <v-card elevation="0" class="my-2">
                        <v-text-field outlined dense hide-details class="my-3" label="Nombre"></v-text-field>
                        <v-text-field outlined dense hide-details class="my-3" label="Correo electronico"></v-text-field>
                        <v-text-field outlined dense hide-details class="my-3" label="Telefono celular"></v-text-field>
                        <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']"
                            label="Do you agree?" required></v-checkbox>
                        <div class="d-flex justify-center">
                            <v-btn depressed @click="initSession()">
                                Registrate
                            </v-btn>
                        </div>
                    </v-card>
                </v-container>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>

export default {
    data:() => ({
        dialogCreate:true,
        checkbox:false
    }),
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