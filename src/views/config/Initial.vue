<template>
    <v-container fill-height>
        <v-btn icon style="position: absolute;top: 25px;right: 25px;">
            <v-icon>
                fas fa-sign-out-alt
            </v-icon>
        </v-btn>
        <v-row justify="center" align="center">
            <v-col cols="6" md="5">
                <v-card-title>
                    Initial Configuration
                </v-card-title>
                <v-container>
                    <v-form  ref="form" v-model="valid" lazy-validation>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field outlined dense v-model="businessName" label="Business name"
                                    :rules="businessNameRules" append-icon="fas fa-exclamation-circle"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field outlined dense v-model="tradeName" label="Trade name"
                                    :rules="tradeNameRules" append-icon="fas fa-exclamation-circle"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field :rules="rucRules" outlined dense v-model="ruc" label="Ruc"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-form>
                    <v-row no-gutters>
                        <v-col cols="12">
                            <span class="text-subtitle-2 red--text">
                                <v-icon small class="mr-1" color="red">
                                    fas fa-exclamation-circle
                                </v-icon>
                                <span>
                                    Required fields
                                </span>
                            </span>
                        </v-col>
                    </v-row>
                </v-container>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn depressed color="primary" @click="validate()">
                        Continue
                    </v-btn>
                    <v-spacer></v-spacer>
                </v-card-actions>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        data: () => ({
            businessName: null,
            tradeName: null,
            ruc: null,
            businessNameRules: [
                v => !!v || 'Business name is required',
            ],
            tradeNameRules: [
                v => !!v || 'Trade name is required',
            ],
            rucRules: [
                v => (!v) || (/^\d+$/.test(v)) || 'Only numbers',
                v => (!v) || (v.length == 13) || 'Rucs only allow 13 digits'
            ],
            valid:true
        }),
        methods:{
            async validate () {
                if(this.$refs.form.validate()){
                    var body = new Object()
                    body.businessName = this.businessName
                    body.tradeName = this.tradeName
                    body.ruc = this.ruc
                    var response = await this.$provider.createInstitution(body)
                    if(response.status == 200){
                        this.$router.push({name:'Dashboard'})
                    }
                    console.log(response);
                }
            },
            validRuc(v){
                console.log(v);
            }
        }
    }
</script>