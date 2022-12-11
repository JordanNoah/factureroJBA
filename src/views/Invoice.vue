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
                        <v-btn depressed @click="dialog=true">
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
        <v-dialog v-model="dialog" fullscreen persistent>
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
                    <v-card class="mb-2">
                        <v-card-title>
                            Invoice data
                        </v-card-title>
                        <v-container>
                            <v-row>
                                <v-col>
                                    <div>
                                        Invoice
                                    </div>
                                    <div>
                                        Atomatic
                                    </div>
                                </v-col>
                                <v-col>
                                    <div>
                                        Status
                                    </div>
                                    <div>
                                        New
                                    </div>
                                </v-col>
                                <v-col>
                                    <v-text-field outlined dense label="Date"></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-autocomplete outlined dense label="Client"></v-autocomplete>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card>
                    <v-card>
                        <v-card-title>
                            Items
                            <v-spacer></v-spacer>
                            <v-text-field dense hide-details label="Search" outlined></v-text-field>
                            <v-btn depressed class="mx-2" @click="dialogItemAddProduct = true">
                                <v-icon small class="mx-2">
                                    fas fa-plus
                                </v-icon>
                                <span>
                                    Add product
                                </span>
                            </v-btn>
                        </v-card-title>
                        <v-container>
                            <v-data-table :headers="headersInvoice"></v-data-table>
                        </v-container>
                    </v-card>
                    <v-row class="my-2">
                        <v-col cols="7">
                            <v-card>
                                <v-card-title>
                                    Formas de Pago
                                    <v-spacer></v-spacer>
                                    <v-btn depressed text small>
                                            <v-icon small class="mr-2">
                                                fas fa-plus
                                            </v-icon>
                                            Agregar forma de pago
                                        </v-btn>
                                </v-card-title>
                                <v-container>
                                    <v-simple-table>
                                        <template v-slot:default>
                                            <tbody>
                                                <tr v-for="item in 1" :key="item">
                                                    <td>
                                                        <v-text-field label="Forma de pago" outlined dense hide-details></v-text-field>
                                                    </td>
                                                    <td>
                                                        <v-text-field label="Importe" outlined dense hide-details></v-text-field>
                                                    </td>
                                                    <td>
                                                        <v-text-field label="Plazo" outlined dense hide-details></v-text-field>
                                                    </td>
                                                    <td>
                                                        <v-text-field label="Unidad de tiempo" outlined dense hide-details></v-text-field>
                                                    </td>
                                                    <td>
                                                        <v-btn icon small color="red">
                                                            <v-icon small>
                                                                far fa-trash-alt
                                                            </v-icon>
                                                        </v-btn>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </template>
                                    </v-simple-table>
                                </v-container>
                            </v-card>
                            <v-card class="mt-2">
                                <v-card-title>
                                    Información Adicional
                                    <v-spacer></v-spacer>
                                    <v-btn text small>
                                        <v-icon small class="mr-2">
                                            fas fa-plus
                                        </v-icon>
                                        <span>
                                            Agregar Información adicional
                                        </span>
                                    </v-btn>
                                </v-card-title>
                                <v-container>
                                    <v-row>
                                        <v-col cols="4">
                                            <v-text-field outlined hide-details dense label="Name"></v-text-field>
                                        </v-col>
                                        <v-col cols="7">
                                            <v-text-field outlined hide-details dense label="Description"></v-text-field>
                                        </v-col>
                                        <v-col class="d-flex align-center justify-start" cols="1">
                                            <v-btn icon small>
                                                <v-icon small>
                                                    far fa-trash-alt
                                                </v-icon>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </v-col>
                        <v-col>
                            <v-card>
                                <v-card-title>
                                    Resumen
                                </v-card-title>
                                <v-divider></v-divider>
                                <v-container>
                                    <v-row justify="space-between">
                                        <v-col cols="auto">
                                            Subtotal sin iva:
                                        </v-col>
                                        <v-col cols="auto">
                                            20.00
                                        </v-col>
                                    </v-row>
                                    <v-row justify="space-between">
                                        <v-col cols="auto">
                                            Impuesto:
                                        </v-col>
                                        <v-col cols="auto">
                                            20.00
                                        </v-col>
                                    </v-row>
                                    <v-row justify="space-between">
                                        <v-col cols="auto">
                                            Descuento:
                                        </v-col>
                                        <v-col cols="auto">
                                            20.00
                                        </v-col>
                                    </v-row>
                                    <v-row justify="space-between">
                                        <v-col cols="auto">
                                            Subtotal con iva:
                                        </v-col>
                                        <v-col cols="auto">
                                            20.00
                                        </v-col>
                                    </v-row>
                                    <v-row justify="space-between">
                                        <v-col cols="auto">
                                            Total:
                                        </v-col>
                                        <v-col cols="auto">
                                            20.00
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialogItemAddProduct" min-width="500" max-width="1000" persistent>
            <v-card>
                <v-card-title>
                    Add item
                    <v-spacer></v-spacer>
                    <v-text-field outlined dense hide-details label="Search"></v-text-field>
                    <v-btn depressed class="mx-2" @click="dialogItemCreateProduct = true">
                        <v-icon small class="mx-2">
                            fas fa-plus
                        </v-icon>
                        Created product
                    </v-btn>
                </v-card-title>
                <v-container>
                    <v-data-table :headers="headersItemsProduct"></v-data-table>
                </v-container>
                <v-card-actions class="d-flex justify-end">
                    <v-btn text color="error" @click="dialogItemAddProduct = false">
                        Close
                    </v-btn>
                    <v-btn text color="success" @click="dialogItemAddProduct = false">
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialogItemCreateProduct" min-width="500" max-width="700" persistent>
            <v-card>
                <v-card-title>
                    Create product
                </v-card-title>
                <v-divider></v-divider>
                <v-container>
                    <v-row justify="center" align="center">
                        <v-col cols="5">
                            <v-img
                                src="https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg">
                            </v-img>
                        </v-col>
                        <v-divider vertical></v-divider>
                        <v-col cols="7">
                            <v-autocomplete outlined dense label="name"></v-autocomplete>
                            <v-autocomplete outlined dense label="Brand"></v-autocomplete>
                            <v-select outlined dense label="Packages"></v-select>
                            <v-text-field outlined dense label="Quantity"></v-text-field>
                            <v-text-field outlined dense label="Unit Price"></v-text-field>
                            <v-text-field outlined dense label="Iva"></v-text-field>
                            <v-text-field outlined dense label="Discount"></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <v-divider></v-divider>
                <v-card-actions class="d-flex justify-end">
                    <v-btn text color="error" @click="dialogItemCreateProduct = false">
                        Close
                    </v-btn>
                    <v-btn text color="success" @click="dialogItemCreateProduct = false">
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
        dialogItemCreateProduct:false,
        dialogItemAddProduct:false,
        dialog:false,
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
        ],
        headersItemsProduct:[
           {
                text:'Avatar',
                value:'avatar'
            },
            {
                text:'Name',
                value:'name'
            },
            {
                text:'Brand',
                value:'brand'
            },
            {
                text:'Packages',
                value:'package'
            },
            {
                text:'Quantity',
                value:'quantity'
            },
            {
                text:'Precio Unitario',
                value:'pvp'
            },
            {
                text:'IVA',
                value:'iva'
            },
            {
                text:'Discount',
                value:'discount'
            },
            {
                text:'Total Price',
                value:'totalPrice'
            },
            {
                text:'Actions',
                value:'actions'
            }
        ],
        headersInvoice:[
            {
                text:'Quantity',
                value:'quantity'
            },
            {
                text:'Code',
                value:'code'
            },
            {
                text:'Description',
                value:'description'
            },
            {
                text:'Type',
                value:'type'
            },
            {
                text:'V.unit',
                value:'vunit'
            },
            {
                text:'Disc.',
                value:'discount'
            },
            {
                text:'V.total',
                value:'vtotal'
            },
            {
                text:'Tax',
                value:'tax'
            },
            {
                text:'Action',
                value:'actions'
            }
        ],
        itemsInvoice:[]
    })
}
</script>