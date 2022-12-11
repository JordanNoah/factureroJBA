<template>
    <v-container>
        <v-card class="mb-4">
            <v-container>
                <v-row justify="space-between">
                    <v-col cols="4">
                        <v-text-field hide-details outlined dense label="Search client"></v-text-field>
                    </v-col>
                    <v-col cols="auto">
                        <v-btn depressed>
                            Create client
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-card>
        <v-card>
            <v-data-table :headers="headers" :items="items">
                <template v-slot:[`item.avatar`]="{ item }">
                    <v-avatar size="35" class="me-3">
                        <v-img src="@/assets/avatar-1.aac046b6.png" @click="change(item)"></v-img>
                    </v-avatar>
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
        <v-dialog v-model="dialog" max-width="750">
            <v-card>
                <v-card-title>
                    Create
                </v-card-title>
                <v-divider></v-divider>
                <v-container>
                    <v-row>
                        <v-col cols="5" class="d-flex justify-center align-center">
                            <v-badge right color="secondary" bottom overlap>
                                <span slot="badge"> JU </span>
                                <v-badge left color="secondary" bottom overlap>
                                    <v-icon x-small slot="badge">
                                        fas fa-redo-alt
                                    </v-icon>
                                    <v-avatar size="240" slot="default">
                                        <v-img src="@/assets/avatar-1.aac046b6.png"></v-img>
                                    </v-avatar>
                                </v-badge>        
                            </v-badge>
                        </v-col>
                        <v-divider vertical></v-divider>
                        <v-col cols="7">
                            <div class="mx-8">
                                <v-text-field outlined dense label="Id" readonly></v-text-field>
                                <v-text-field outlined dense label="Name and surname"></v-text-field>
                                <v-text-field outlined dense label="Email"></v-text-field>
                                <v-text-field outlined dense label="Document id"></v-text-field>
                                <v-select outlined dense label="Gender"></v-select>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text color="error">
                        Cancel
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
import { v4 } from 'uuid'
import { names, uniqueNamesGenerator} from 'unique-names-generator'
import emails from 'email-generator'

export default {
    data:() => ({
        dialog:false,
        headers:[
            {
                text:'Avatar',
                value:'avatar'
            },
            {
                text:'#Id',
                value:'id'
            },
            {
                text:'User',
                value:'user'
            },
            {
                text:'Email',
                value:'email'
            },
            {
                text:'Document id',
                value:'documents'
            },
            {
                text:'Actions',
                value:'actions'
            }
        ],
        items:[
            {
                id: v4(),
                user: uniqueNamesGenerator({dictionaries:[names,names],length:2}),
                email: emails.generateEmail(),
                documents:Math.floor(1000000000 + Math.random() * 9000000000)
            },
            {
                id: v4(),
                user: uniqueNamesGenerator({dictionaries:[names,names],length:2}),
                email: emails.generateEmail(),
                documents:Math.floor(1000000000 + Math.random() * 9000000000)
            },
            {
                id: v4(),
                user: uniqueNamesGenerator({dictionaries:[names,names],length:2}),
                email: emails.generateEmail(),
                documents:Math.floor(1000000000 + Math.random() * 9000000000)
            },
            {
                id: v4(),
                user: uniqueNamesGenerator({dictionaries:[names,names],length:2}),
                email: emails.generateEmail(),
                documents:Math.floor(1000000000 + Math.random() * 9000000000)
            },
            {
                id: v4(),
                user: uniqueNamesGenerator({dictionaries:[names,names],length:2}),
                email: emails.generateEmail(),
                documents:Math.floor(1000000000 + Math.random() * 9000000000)
            },
            {
                id: v4(),
                user: uniqueNamesGenerator({dictionaries:[names,names],length:2}),
                email: emails.generateEmail(),
                documents:Math.floor(1000000000 + Math.random() * 9000000000)
            },
            {
                id: v4(),
                user: uniqueNamesGenerator({dictionaries:[names,names],length:2}),
                email: emails.generateEmail(),
                documents:Math.floor(1000000000 + Math.random() * 9000000000)
            },
            {
                id: v4(),
                user: uniqueNamesGenerator({dictionaries:[names,names],length:2}),
                email: emails.generateEmail(),
                documents:Math.floor(1000000000 + Math.random() * 9000000000)
            },
            {
                id: v4(),
                user: uniqueNamesGenerator({dictionaries:[names,names],length:2}),
                email: emails.generateEmail(),
                documents:Math.floor(1000000000 + Math.random() * 9000000000)
            },{
                id: v4(),
                user: uniqueNamesGenerator({dictionaries:[names,names],length:2}),
                email: emails.generateEmail(),
                documents:Math.floor(1000000000 + Math.random() * 9000000000)
            }
        ]
    }),
}
</script>