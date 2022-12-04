<template>
    <v-container>
        <v-card class="mb-4">
            <v-card-text>
                <v-row>
                    <v-col cols="auto">
                        <v-btn depressed v-if="selected.length > 0">
                            <span class="mr-2">
                                Send {{selected.length}} to sri
                            </span>
                            <v-icon small>
                                fas fa-paper-plane
                            </v-icon>
                        </v-btn>
                    </v-col>
                    <v-col cols="5">
                        <v-text-field outlined dense hide-details label="Search Invoice" clearable></v-text-field>
                    </v-col>
                    <v-col class="ml-auto" cols="auto">
                        <v-btn depressed>
                            <span class="mr-2">
                                <v-icon x-small>
                                    fas fa-plus
                                </v-icon>
                            </span>
                            <span>
                                Create invoice
                            </span>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <v-card>
            <v-data-table :headers="headers" :items="items" v-model="selected" show-select item-key="uuid">
                <template v-slot:[`item.client`]="{ item }">
                    {{item.client.name}}
                </template>
                <template v-slot:[`item.status`]="{ item }">
                    {{item.status.name}}
                </template>
                <template v-slot:[`item.actions`]="{ item }">
                    <v-btn icon @click="action(item)">
                        <v-icon small>
                            fas fa-paper-plane
                        </v-icon>
                    </v-btn>
                    <v-btn icon>
                        <v-icon small>
                            far fa-edit
                        </v-icon>
                    </v-btn>
                    <v-menu transition="slide-y-transition" bottom>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="primary" dark v-bind="attrs" v-on="on" icon>
                                <v-icon small>
                                    fas fa-ellipsis-v
                                </v-icon>
                            </v-btn>
                        </template>
                        <v-list dense>
                            <v-list-item link>
                                <v-list-item-icon>
                                    <v-icon>
                                        fas fa-file-pdf
                                    </v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>
                                    PDF
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item link>
                                <v-list-item-icon>
                                    <v-icon>
                                        fas fa-file-csv
                                    </v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>
                                    Excel
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item link>
                                <v-list-item-icon>
                                    <v-icon>
                                        far fa-trash-alt
                                    </v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>
                                    Remove
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </template>
            </v-data-table>
        </v-card>
        <v-dialog v-model="dialog" fullscreen>
            <v-card>
                <v-toolbar dense>
                    <v-btn icon @click="dialog = false" small>
                        <v-icon small>
                            fas fa-times
                        </v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn text color="success">
                        Save
                    </v-btn>
                </v-toolbar>
                <v-container fluid>
                    <v-card>
                        <v-card-title>
                            Invoice data
                        </v-card-title>
                    </v-card>
                </v-container>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
import {v4} from 'uuid'
export default {
    data:()=>({
        dialog:true,
        selected:[],
        headers:[
            {
                text:'No. Document',
                value:'nmbDocument'
            },
            {
                text:'Client',
                value:'client'
            },
            {
                text:'Total price',
                value:'totalPrice'
            },
            {
                text:'Date',
                value:'date'
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
                uuid:v4(),
                nmbDocument:'001-001-000000001',
                client:{
                    uuid:v4(),
                    name:'Jordan ubilla'
                },
                totalPrice:'20.10',
                date:new Date(),
                status:{
                    uuid:v4(),
                    name:'Created'
                }
            },
            {
                uuid:v4(),
                nmbDocument:'001-001-000000002',
                client:{
                    uuid:v4(),
                    name:'Jordan ubilla'
                },
                totalPrice:'20.10',
                date:new Date(),
                status:{
                    uuid:v4(),
                    name:'Created'
                }
            },
            {
                uuid:v4(),
                nmbDocument:'001-001-000000003',
                client:{
                    uuid:v4(),
                    name:'Jordan ubilla'
                },
                totalPrice:'20.10',
                date:new Date(),
                status:{
                    uuid:v4(),
                    name:'Created'
                }
            },{
                uuid:v4(),
                nmbDocument:'001-001-000000004',
                client:{
                    uuid:v4(),
                    name:'Jordan ubilla'
                },
                totalPrice:'20.10',
                date:new Date(),
                status:{
                    uuid:v4(),
                    name:'Created'
                }
            },{
                uuid:v4(),
                nmbDocument:'001-001-000000005',
                client:{
                    uuid:v4(),
                    name:'Jordan ubilla'
                },
                totalPrice:'20.10',
                date:new Date(),
                status:{
                    uuid:v4(),
                    name:'Created'
                }
            },{
                uuid:v4(),
                nmbDocument:'001-001-000000006',
                client:{
                    uuid:v4(),
                    name:'Jordan ubilla'
                },
                totalPrice:'20.10',
                date:new Date(),
                status:{
                    uuid:v4(),
                    name:'Created'
                }
            },{
                uuid:v4(),
                nmbDocument:'001-001-000000007',
                client:{
                    uuid:v4(),
                    name:'Jordan ubilla'
                },
                totalPrice:'20.10',
                date:new Date(),
                status:{
                    uuid:v4(),
                    name:'Created'
                }
            },{
                uuid:v4(),
                nmbDocument:'001-001-000000008',
                client:{
                    uuid:v4(),
                    name:'Jordan ubilla'
                },
                totalPrice:'20.10',
                date:new Date(),
                status:{
                    uuid:v4(),
                    name:'Created'
                }
            },{
                uuid:v4(),
                nmbDocument:'001-001-000000009',
                client:{
                    uuid:v4(),
                    name:'Jordan ubilla'
                },
                totalPrice:'20.10',
                date:new Date(),
                status:{
                    uuid:v4(),
                    name:'Created'
                }
            },{
                uuid:v4(),
                nmbDocument:'001-001-000000010',
                client:{
                    uuid:v4(),
                    name:'Jordan ubilla'
                },
                totalPrice:'20.10',
                date:new Date(),
                status:{
                    uuid:v4(),
                    name:'Created'
                }
            },{
                uuid:v4(),
                nmbDocument:'001-001-000000011',
                client:{
                    uuid:v4(),
                    name:'Jordan ubilla'
                },
                totalPrice:'20.10',
                date:new Date(),
                status:{
                    uuid:v4(),
                    name:'Created'
                }
            },{
                uuid:v4(),
                nmbDocument:'001-001-000000012',
                client:{
                    uuid:v4(),
                    name:'Jordan ubilla'
                },
                totalPrice:'20.10',
                date:new Date(),
                status:{
                    uuid:v4(),
                    name:'Created'
                }
            },{
                uuid:v4(),
                nmbDocument:'001-001-000000013',
                client:{
                    uuid:v4(),
                    name:'Jordan ubilla'
                },
                totalPrice:'20.10',
                date:new Date(),
                status:{
                    uuid:v4(),
                    name:'Created'
                }
            },{
                uuid:v4(),
                nmbDocument:'001-001-000000014',
                client:{
                    uuid:v4(),
                    name:'Jordan ubilla'
                },
                totalPrice:'20.10',
                date:new Date(),
                status:{
                    uuid:v4(),
                    name:'Created'
                }
            },{
                uuid:v4(),
                nmbDocument:'001-001-000000015',
                client:{
                    uuid:v4(),
                    name:'Jordan ubilla'
                },
                totalPrice:'20.10',
                date:new Date(),
                status:{
                    uuid:v4(),
                    name:'Created'
                }
            },{
                uuid:v4(),
                nmbDocument:'001-001-000000001',
                client:{
                    uuid:v4(),
                    name:'Jordan ubilla'
                },
                totalPrice:'20.10',
                date:new Date(),
                status:{
                    uuid:v4(),
                    name:'Created'
                }
            },{
                uuid:v4(),
                nmbDocument:'001-001-000000001',
                client:{
                    uuid:v4(),
                    name:'Jordan ubilla'
                },
                totalPrice:'20.10',
                date:new Date(),
                status:{
                    uuid:v4(),
                    name:'Created'
                }
            },{
                uuid:v4(),
                nmbDocument:'001-001-000000001',
                client:{
                    uuid:v4(),
                    name:'Jordan ubilla'
                },
                totalPrice:'20.10',
                date:new Date(),
                status:{
                    uuid:v4(),
                    name:'Created'
                }
            },{
                uuid:v4(),
                nmbDocument:'001-001-000000001',
                client:{
                    uuid:v4(),
                    name:'Jordan ubilla'
                },
                totalPrice:'20.10',
                date:new Date(),
                status:{
                    uuid:v4(),
                    name:'Created'
                }
            },{
                uuid:v4(),
                nmbDocument:'001-001-000000001',
                client:{
                    uuid:v4(),
                    name:'Jordan ubilla'
                },
                totalPrice:'20.10',
                date:new Date(),
                status:{
                    uuid:v4(),
                    name:'Created'
                }
            }
        ]
    })
}
</script>