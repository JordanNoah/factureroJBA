<template>
    <v-container>
        <v-app-bar app dense clipped-left elevation="0" rounded>
            <span>
                {{$route.name}}
            </span>
            <v-spacer></v-spacer>
            <span class="mx-3">
                <v-btn class="mx-2" icon small>
                    <v-icon small>
                        far fa-bell
                    </v-icon>
                </v-btn>
                <v-btn class="mx-2" icon small>
                    <v-icon small>
                        far fa-comment
                    </v-icon>
                </v-btn>
            </span>
            <v-menu>
                <template v-slot:activator="{ on, attrs }">
                    <v-avatar size="35" color="primary" v-bind="attrs" v-on="on">
                        <span class="white--text">
                            JU
                        </span>
                    </v-avatar>
                </template>
                <v-card>
                    <v-list>
                        <v-list-item>
                            <v-list-item-avatar>
                                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
                            </v-list-item-avatar>

                            <v-list-item-content>
                                <v-list-item-title>John Ubilla</v-list-item-title>
                                <v-list-item-subtitle>Founder of JBA</v-list-item-subtitle>
                            </v-list-item-content>

                        </v-list-item>
                        <v-divider></v-divider>
                        <v-list-item link @click="setDarkmode()">
                            <v-list-item-icon>
                                <v-icon>
                                    far fa-sun
                                </v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>Dark mode</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                        <v-list-item link @click="closeSession()">
                            <v-list-item-icon>
                                <v-icon>
                                    fas fa-sign-out-alt
                                </v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>Log out</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-menu>
        </v-app-bar>
        <v-navigation-drawer app clipped mini-variant expand-on-hover>
            <v-list>
                <v-list-item link v-for="(item,i) in items" :key="i" :to="item.path">
                    <v-list-item-icon>
                        <v-icon small>{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{item.text}}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-main>
            <router-view />
        </v-main>
    </v-container>
</template>

<script>
export default {
    data:() => ({
        items:[
            { text: 'Resume', icon:'fa-solid fa-chart-pie', path:'/dashboard/resume' },
            { text: 'Clients', icon:'fas fa-users', path:'/dashboard/clients' },
            { text: 'Branchs', icon: 'fas fa-city', path:'/dashboard/branchs' },
            { text: 'Products', icon:'fab fa-product-hunt', path:'/dashboard/products' },
            { text: 'Post', icon:'fas fa-pager' , path:'/dashboard/post'},
            { text: 'Invoice',icon:"fas fa-file-invoice-dollar",path:'/dashboard/invoice'}
        ]
    }),
    methods:{
        setDarkmode(){
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        },
        closeSession(){
            this.$global.removeSession()
            this.$router.push({name:'Account'})
        }
    }
}
</script>