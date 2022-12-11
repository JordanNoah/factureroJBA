<template>
    <v-container fluid>
        <v-card class="mb-4">
            <v-card-text>
                <v-row>
                    <v-col cols="5">
                        <v-text-field outlined dense hide-details label="Search brand" clearable></v-text-field>
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
                                Create branch
                            </span>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        <v-card>
            <v-data-table :headers="headers" :items="branchs">
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
                <v-container class="px-5">
                    <v-text-field outlined dense hide-details="auto" class="mb-4" label="Name"></v-text-field>
                    <v-text-field outlined dense hide-details="auto" label="Location"></v-text-field>
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
export default {
    data:()=> ({
        dialog:false,
        headers:[
            {
                text:'Id',
                align:'start',
                value:'id',
                sorteable:false
            },
            {
                text:'Name',
                value:'name',
                sorteable:false
            },
            {
                text:'Location',
                value:'location',
                sorteable:false
            },
            {
                text:'Created at',
                value:'createdAt',
                sorteable:false
            },
            {
                text:'Updated at',
                value:'updatedAt',
                sorteable:false
            },
            {
                text:'Actions',
                value:'actions',
                sorteable:false
            }
        ],
        branchs:[
            {
                id:1,
                name:'Miraflores #0001',
                location:'Chediak lote 2C y, Av. Eloy Alfaro, Quito',
                createdAt:'2022/10/10 14:40:40',
                updatedAt:'2022/10/10 14:40:40'
            },
            {
                id:2,
                name:'Miraflores #0001',
                location:'Chediak lote 2C y, Av. Eloy Alfaro, Quito',
                createdAt:'2022/10/10 14:40:40',
                updatedAt:'2022/10/10 14:40:40'
            },
            {
                id:3,
                name:'Miraflores #0001',
                location:'Chediak lote 2C y, Av. Eloy Alfaro, Quito',
                createdAt:'2022/10/10 14:40:40',
                updatedAt:'2022/10/10 14:40:40'
            },
            {
                id:4,
                name:'Miraflores #0001',
                location:'Chediak lote 2C y, Av. Eloy Alfaro, Quito',
                createdAt:'2022/10/10 14:40:40',
                updatedAt:'2022/10/10 14:40:40'
            },
            {
                id:5,
                name:'Miraflores #0001',
                location:'Chediak lote 2C y, Av. Eloy Alfaro, Quito',
                createdAt:'2022/10/10 14:40:40',
                updatedAt:'2022/10/10 14:40:40'
            },
            {
                id:6,
                name:'Miraflores #0001',
                location:'Chediak lote 2C y, Av. Eloy Alfaro, Quito',
                createdAt:'2022/10/10 14:40:40',
                updatedAt:'2022/10/10 14:40:40'
            },
            {
                id:7,
                name:'Miraflores #0001',
                location:'Chediak lote 2C y, Av. Eloy Alfaro, Quito',
                createdAt:'2022/10/10 14:40:40',
                updatedAt:'2022/10/10 14:40:40'
            },
            {
                id:8,
                name:'Miraflores #0001',
                location:'Chediak lote 2C y, Av. Eloy Alfaro, Quito',
                createdAt:'2022/10/10 14:40:40',
                updatedAt:'2022/10/10 14:40:40'
            },
            {
                id:9,
                name:'Miraflores #0001',
                location:'Chediak lote 2C y, Av. Eloy Alfaro, Quito',
                createdAt:'2022/10/10 14:40:40',
                updatedAt:'2022/10/10 14:40:40'
            },
            {
                id:10,
                name:'Miraflores #0001',
                location:'Chediak lote 2C y, Av. Eloy Alfaro, Quito',
                createdAt:'2022/10/10 14:40:40',
                updatedAt:'2022/10/10 14:40:40'
            },
            {
                id:11,
                name:'Miraflores #0001',
                location:'Chediak lote 2C y, Av. Eloy Alfaro, Quito',
                createdAt:'2022/10/10 14:40:40',
                updatedAt:'2022/10/10 14:40:40'
            },
            {
                id:12,
                name:'Miraflores #0001',
                location:'Chediak lote 2C y, Av. Eloy Alfaro, Quito',
                createdAt:'2022/10/10 14:40:40',
                updatedAt:'2022/10/10 14:40:40'
            },
            {
                id:13,
                name:'Miraflores #0001',
                location:'Chediak lote 2C y, Av. Eloy Alfaro, Quito',
                createdAt:'2022/10/10 14:40:40',
                updatedAt:'2022/10/10 14:40:40'
            },
            {
                id:14,
                name:'Miraflores #0001',
                location:'Chediak lote 2C y, Av. Eloy Alfaro, Quito',
                createdAt:'2022/10/10 14:40:40',
                updatedAt:'2022/10/10 14:40:40'
            },
            {
                id:15,
                name:'Miraflores #0001',
                location:'Chediak lote 2C y, Av. Eloy Alfaro, Quito',
                createdAt:'2022/10/10 14:40:40',
                updatedAt:'2022/10/10 14:40:40'
            }
        ]
    })
}
</script>