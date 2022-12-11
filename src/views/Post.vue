<template>
    <v-container>
        <v-card class="mb-4">
            <v-card-text>
                <v-row>
                    <v-col cols="5">
                        <v-text-field outlined dense hide-details label="Search post" clearable></v-text-field>
                    </v-col>
                    <v-col cols="4"></v-col>
                    <v-col class="d-flex justify-end">
                        <v-btn depressed @click="dialog = true">
                            <span class="mr-2">
                                <v-icon x-small>
                                    fas fa-plus
                                </v-icon>
                            </span>
                            <span>
                                Create post
                            </span>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <v-card>
            <v-data-table :headers="headers" :items="items">
                <template v-slot:[`item.status`]="{ item }">
                    <v-badge bottom dot inline left overlap :color="item.status == 'online' ? 'success':'error'"></v-badge>
                    {{item.status}}
                </template>
                <template v-slot:[`item.actions`]="{ item }">
                    <v-btn icon>
                        <v-icon small @click="editItem(item)">
                            far fa-edit
                        </v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon small @click="deleteItem(item)">
                        far fa-trash-alt
                    </v-icon>
                    </v-btn>
                </template>
            </v-data-table>
        </v-card>
        <v-dialog v-model="dialog" max-width="400">
            <v-card>
                <v-card-title>
                    Create
                </v-card-title>
                <v-divider></v-divider>
                <v-container>
                    <div class="my-4">
                        <span>
                            Uuid: {{generateV4()}}
                        </span>
                    </div>
                    <v-autocomplete outlined dense hide-details="auto" label="Brand" class="my-4"></v-autocomplete>
                    <v-select outlined dense hide-details="auto" label="Status"></v-select>
                </v-container>
                <v-card-actions class="d-flex justify-end">
                    <v-btn text color="error">
                        Close
                    </v-btn>
                    <v-btn text color="success">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
import {v4} from 'uuid'
export default {
    data:()=>({
        dialog:false,
        headers:[
            {
                text:'Branch office',
                value:'branch'
            },
            {
                text:'Uuid',
                value:'uuid'
            },
            {
                text:'Status',
                value:'status'
            },
            {
                text:'Actions',
                value:'actions'
            }
        ],
        items:[
            {
                branch:v4(),
                uuid:v4(),
                status:'online'
            },
            {
                branch:v4(),
                uuid:v4(),
                status:'offline'
            },
            {
                branch:v4(),
                uuid:v4(),
                status:'online'
            },{
                branch:v4(),
                uuid:v4(),
                status:'online'
            },{
                branch:v4(),
                uuid:v4(),
                status:'online'
            },{
                branch:v4(),
                uuid:v4(),
                status:'online'
            },{
                branch:v4(),
                uuid:v4(),
                status:'online'
            },{
                branch:v4(),
                uuid:v4(),
                status:'online'
            }
        ]
    }),
    methods:{
        generateV4(){
            return v4();
        }
    }
}
</script>