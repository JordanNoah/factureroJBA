<template>
    <v-container fluid>
        <v-card class="mb-4">
            <v-card-text>
                <v-row>
                    <v-col cols="5">
                        <v-text-field outlined dense hide-details label="Search product" clearable></v-text-field>
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
                                Create product
                            </span>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <v-card>
            <v-data-table :headers="headers" :items="product">
                <template v-slot:[`item.avatar`]="{ item }">
                    <v-avatar class="my-2" size="40">
                        <v-img :src="item.avatar"></v-img>
                    </v-avatar>
                </template>
                <template v-slot:[`item.package`]="{ item }">
                    <v-edit-dialog :return-value.sync="item.package" style="max-width: 250px;">
                        <div class="d-flex chipShowPackage">
                            <div v-for="i in item.package" :key="i.uuid">
                                <v-chip :color="$global.getRandomColor()" small class="ma-1">
                                    {{i.name}}
                                </v-chip>
                            </div>
                        </div>

                        <template v-slot:input>
                            <v-card max-width="400px" elevation="0">
                                <v-chip-group column>
                                    <v-chip v-for="i in item.package" :key="i.uuid" small
                                        :color="$global.getRandomColor()">
                                        {{i.name}}
                                    </v-chip>
                                </v-chip-group>
                            </v-card>
                        </template>
                    </v-edit-dialog>
                </template>
                <template v-slot:[`item.totalPrice`]="{ item }">
                    <span>
                        {{convertCurrency(item.totalPrice)}}
                    </span>
                </template>
                <template v-slot:[`item.pvp`]="{ item }">
                    <span>
                        {{convertCurrency(item.pvp)}}
                    </span>
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
        <v-dialog v-model="dialog" max-width="600">
            <v-card>
                <v-card-title>
                    Create
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
    data:() => ({
        dialog:false,
        headers:[
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
        product:[
            {
                name:'Aceites vegetales',
                brand:'Nestle',
                avatar:'https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg',
                quantity:500,
                discount:"20%",
                package:[{
                    uuid:v4(),
                    name:'Fuente principal'
                },{
                    uuid:v4(),
                    name:'Fuente secundaria'
                },{
                    uuid:v4(),
                    name:'Fuente tercera'
                },{
                    uuid:v4(),
                    name:'Fuente secundaria'
                },{
                    uuid:v4(),
                    name:'Fuente secundaria'
                },{
                    uuid:v4(),
                    name:'Fuente secundaria'
                },{
                    uuid:v4(),
                    name:'Fuente secundaria'
                },{
                    uuid:v4(),
                    name:'Fuente secundaria'
                },{
                    uuid:v4(),
                    name:'Fuente secundaria'
                },{
                    uuid:v4(),
                    name:'Fuente secundaria'
                },{
                    uuid:v4(),
                    name:'Fuente secundaria'
                },{
                    uuid:v4(),
                    name:'Fuente secundaria'
                },{
                    uuid:v4(),
                    name:'Fuente secundaria'
                }],
                pvp:10.00,
                iva:'12%',
                totalPrice:11.20
            },
            {
                name:'Acelga',
                brand:'Nestle',
                avatar:'https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg',
                quantity:500,
                discount:"20%",
                package:[{
                    uuid:v4(),
                    name:'Fuente principal'
                }],
                pvp:10.00,
                iva:'12%',
                totalPrice:11.20
            },
            {
                name:'Achiote',
                brand:'Nestle',
                avatar:'https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg',
                quantity:500,
                discount:"20%",
                package:[{
                    uuid:v4(),
                    name:'Fuente principal'
                }],
                pvp:10.00,
                iva:'12%',
                totalPrice:11.20
            },
            {
                name:'Aji fresco',
                brand:'Nestle',
                avatar:'https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg',
                quantity:500,
                discount:"20%",
                package:[{
                    uuid:v4(),
                    name:'Fuente principal'
                }],
                pvp:10.00,
                iva:'12%',
                totalPrice:11.20
            },
            {
                name:'ajonjoli',
                brand:'Nestle',
                avatar:'https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg',
                quantity:500,
                discount:"20%",
                package:[{
                    uuid:v4(),
                    name:'Fuente principal'
                }],
                pvp:10.00,
                iva:'12%',
                totalPrice:11.20
            },
            {
                name:'albahaca',
                brand:'Nestle',
                avatar:'https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg',
                quantity:500,
                discount:"20%",
                package:[{
                    uuid:v4(),
                    name:'Fuente principal'
                }],
                pvp:10.00,
                iva:'12%',
                totalPrice:11.20
            },
            {
                name:'alcachofa',
                brand:'Nestle',
                avatar:'https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg',
                quantity:500,
                discount:"20%",
                package:[{
                    uuid:v4(),
                    name:'Fuente principal'
                }],
                pvp:10.00,
                iva:'12%',
                totalPrice:11.20
            },
            {
                name:'alfalfa',
                brand:'Nestle',
                avatar:'https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg',
                quantity:500,
                discount:"20%",
                package:[{
                    uuid:v4(),
                    name:'Fuente principal'
                }],
                pvp:10.00,
                iva:'12%',
                totalPrice:11.20
            },
            {
                name:'almeja sin valvas',
                brand:'Nestle',
                avatar:'https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg',
                quantity:500,
                discount:"20%",
                package:[{
                    uuid:v4(),
                    name:'Fuente principal'
                }],
                pvp:10.00,
                iva:'12%',
                totalPrice:11.20
            },
            {
                name:'anicillo',
                brand:'Nestle',
                avatar:'https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg',
                quantity:500,
                discount:"20%",
                package:[{
                    uuid:v4(),
                    name:'Fuente principal'
                }],
                pvp:10.00,
                iva:'12%',
                totalPrice:11.20
            },
            {
                name:'anis',
                brand:'Nestle',
                avatar:'https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg',
                quantity:500,
                discount:"20%",
                package:[{
                    uuid:v4(),
                    name:'Fuente'
                }],
                pvp:10.00,
                iva:'12%',
                totalPrice:11.20
            },
            {
                name:'apio',
                brand:'Nestle',
                avatar:'https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg',
                quantity:500,
                discount:"20%",
                package:[{
                    uuid:v4(),
                    name:'Fuente principal'
                }],
                pvp:10.00,
                iva:'12%',
                totalPrice:11.20
            },
            {
                name:'arroz',
                brand:'Nestle',
                avatar:'https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg',
                quantity:500,
                discount:"20%",
                package:[{
                    uuid:v4(),
                    name:'Fuente principal'
                }],
                pvp:10.00,
                iva:'12%',
                totalPrice:11.20
            },
            {
                name:'artesanias de bambu',
                brand:'Nestle',
                avatar:'https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg',
                quantity:500,
                discount:"20%",
                package:[{
                    uuid:v4(),
                    name:'Fuente principal'
                }],
                pvp:10.00,
                iva:'12%',
                totalPrice:11.20
            },
            {
                name:'artesanias de caña',
                brand:'Nestle',
                avatar:'https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg',
                quantity:500,
                discount:"20%",
                package:[{
                    uuid:v4(),
                    name:'Fuente principal'
                }],
                pvp:10.00,
                iva:'12%',
                totalPrice:11.20
            },
            {
                name:'Artesanias de madera',
                brand:'Nestle',
                avatar:'https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg',
                quantity:500,
                discount:"20%",
                package:[{
                    uuid:v4(),
                    name:'Fuente principal'
                }],
                pvp:10.00,
                iva:'12%',
                totalPrice:11.20
            },
            {
                name:'Artesanias de paja',
                brand:'Nestle',
                avatar:'https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg',
                quantity:500,
                discount:"20%",
                package:[{
                    uuid:v4(),
                    name:'Fuente principal'
                }],
                pvp:10.00,
                iva:'12%',
                totalPrice:11.20
            },
            {
                name:'Avena',
                brand:'Nestle',
                avatar:'https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg',
                quantity:500,
                discount:"20%",
                package:[{
                    uuid:v4(),
                    name:'Fuente principal'
                }],
                pvp:10.00,
                iva:'12%',
                totalPrice:11.20
            },
            {
                name:'Berenjena',
                brand:'Nestle',
                avatar:'https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg',
                quantity:500,
                discount:"20%",
                package:[{
                    uuid:v4(),
                    name:'Fuente principal'
                }],
                pvp:10.00,
                iva:'12%',
                totalPrice:11.20
            },
            {
                name:'Borojo',
                brand:'Nestle',
                avatar:'https://www.jessicagavin.com/wp-content/uploads/2020/07/how-to-cook-pasta-3-1200-500x375.jpg',
                quantity:500,
                discount:"20%",
                package:[{
                    uuid:v4(),
                    name:'Fuente principal'
                }],
                pvp:10.00,
                iva:'12%',
                totalPrice:11.20
            }
        ]
    }),
    methods:{
        convertCurrency(pvp){
            const numberformat = new Intl.NumberFormat('en-US',{
                style: 'currency',
                currency: 'USD'
            })
            return numberformat.format(pvp);
        }
    }
}
</script>

<style scoped>
.chipShowPackage{
    max-width:150px;
    overflow:auto;
    margin-top:5px;
    margin-bottom:5px ;
}
/* width */
::-webkit-scrollbar {
  height: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: gray; 
  border-radius: 10px;
}
</style>