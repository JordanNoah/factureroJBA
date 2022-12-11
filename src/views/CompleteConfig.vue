<template>
  <v-container>
    <v-stepper v-model="initialConfig">
      <v-stepper-header>
        
        <v-stepper-step step="1" :complete="initialConfig > 1">
            Registrar Cuenta
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="2" :complete="initialConfig > 2">
            Configurar RUC
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step step="3" :complete="initialConfig > 3">
            Elegir Plan
        </v-stepper-step>
        
        <v-divider></v-divider>

        <v-stepper-step step="4" :complete="initialConfig > 4">
            Firma Electrónica
        </v-stepper-step>

        <v-divider></v-divider>
        
        <v-stepper-step step="5" :complete="initialConfig > 5">
            Autorización SRI
        </v-stepper-step>

      </v-stepper-header>
    </v-stepper>

    <v-container>
        <v-card v-if="initialConfig == 1">
            <v-container>
                Registrar cuenta
            </v-container>
            <v-card-actions>
                <v-btn color="primary" @click="initialConfig = 2">
                    Continuar
                </v-btn>
            </v-card-actions>
        </v-card>
        <v-card v-else-if="initialConfig == 2">
            <v-container>
                Configurar RUC
            </v-container>
            <v-card-actions>
                <v-btn color="primary" @click="initialConfig = 3">
                    Continuar
                </v-btn>
            </v-card-actions>
        </v-card>
        <v-card v-else-if="initialConfig == 3">
            <v-container>
                Elegir plan
            </v-container>
            <v-card-actions>
                <v-btn color="primary" @click="initialConfig = 4">
                    Continuar
                </v-btn>
            </v-card-actions>
        </v-card>
        <v-card v-else-if="initialConfig == 4">
            <v-container>
                Firma electronica
            </v-container>
            <v-card-actions>
                <v-btn color="primary" @click="initialConfig = 5">
                    Continuar
                </v-btn>
            </v-card-actions>
        </v-card>
        <v-card v-else-if="initialConfig == 5">
            <v-container>
                Autorización SRI
            </v-container>
            <v-card-actions>
                <v-btn color="primary" @click="initialConfig = 6">
                    Continuar
                </v-btn>
            </v-card-actions>
        </v-card>
        <v-card v-else-if="initialConfig == 6">
            <v-container>
                FINALIZADO
            </v-container>
        </v-card>
    </v-container>
  </v-container>
</template>

<script>
import {v4} from 'uuid'
export default {
    data:() => ({
        initialConfig:1,
        stepers:[
            {
                title:'Register account',
                uuid:v4()
            },
            {
                title:'Set up RUC',
                uuid:v4()
            },
            {
                title:'Choose Plan',
                uuid:v4()
            },
            {
                title:'Electronic signature',
                uuid:v4()
            },
            {
                title:'SRI authorization',
                uuid:v4()
            }
        ]
    })
}
</script>