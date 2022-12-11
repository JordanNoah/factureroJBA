<template>
    <v-container fluid>
        <v-row>
            <v-col cols="4">
                <v-card>
                    <v-card-title>
                        Estado del paquete
                    </v-card-title>
                    <v-container style="height:375px">
                        <div id="chartStatusPackage"></div>
                    </v-container>
                </v-card>
            </v-col>
            <v-col cols="8">
                <v-card>
                    <v-card-title>
                        Active posts
                    </v-card-title>
                    <v-container>
                        <v-data-table :headers="postHeader" :items="postsItems" hide-default-footer dense>
                            <template v-slot:[`item.branch`] = "{ item }">
                                <div class="text-truncate" style="max-width:170px;">
                                    {{item.branch}}
                                </div>
                            </template>
                            <template v-slot:[`item.uuid`] = "{ item }">
                                <div class="text-truncate" style="max-width:170px;">
                                    {{item.uuid}}
                                </div>
                            </template>
                            <template v-slot:[`item.status`]="{ item }">
                                <v-badge bottom dot inline left overlap :color="item.status == 'online' ? 'success':'error'"></v-badge>
                                {{item.status}}
                            </template>
                            <template v-slot:[`item.profit`] = "{ item }">
                                <span>
                                    {{convertCurrency(item.profit)}}
                                </span>
                            </template>
                        </v-data-table>
                    </v-container>
                </v-card>
            </v-col>
            
            
            <v-col cols="8">
                <v-card>
                    <v-card-title>
                        Clients
                    </v-card-title>
                    <v-container>
                        <v-simple-table>
                            <template v-slot:default>
                                <thead>
                                    <tr>
                                        <th class="text-left">
                                            #Id
                                        </th>
                                        <th class="text-left">
                                            User
                                        </th>
                                        <th class="text-left">
                                            Email
                                        </th>
                                        <th class="text-left">
                                            Total
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in clients" :key="item.uuid">
                                        <td>{{ item.id }}</td>
                                        <td>
                                            <div class="d-flex align-center">
                                                <v-avatar size="30" class="me-3">
                                                    <v-img src="@/assets/avatar-1.aac046b6.png"></v-img>
                                                </v-avatar>
                                                <div class="d-flex flex-column">
                                                    <h6 class="text-sm">
                                                        {{item.user}}
                                                    </h6>
                                                    <span class="text-xs text-medium-emphasis">
                                                        {{item.address}}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{{ item.email }}</td>
                                        <td>{{ convertCurrency(item.total) }}</td>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </v-container>
                </v-card>
            </v-col>
            <v-col cols="4">
                <v-card>
                    <v-card-title>
                        Payment methods
                    </v-card-title>
                    <v-container class="py-1">
                        <v-list subheader two-line>

                            <v-list-item v-for="pay in payments" :key="pay.uuid">
                                <v-list-item-avatar>
                                    <v-img :src="require(`@/assets/${pay.avatar}`)" cover></v-img>
                                </v-list-item-avatar>

                                <v-list-item-content>
                                    <v-list-item-title v-text="pay.name"></v-list-item-title>

                                    <v-list-item-subtitle v-text="pay.type"></v-list-item-subtitle>
                                </v-list-item-content>

                                <v-list-item-action>
                                    <div class="d-flex">
                                        <v-list-item-title> 
                                            <span v-if="pay.price.now > pay.price.before">
                                                +
                                            </span>
                                            <span v-else-if="pay.price.now < pay.price.before">
                                                -
                                            </span>
                                            <span v-else>
                                                =
                                            </span>
                                            {{ convertCurrency(pay.price.now)}}
                                        </v-list-item-title>
                                        <v-icon small class="ml-2" color="success" v-if="pay.price.now > pay.price.before">
                                            fas fa-caret-up
                                        </v-icon>
                                        <v-icon small class="ml-2" color="error" v-else-if="pay.price.now < pay.price.before">
                                            fas fa-caret-down
                                        </v-icon>
                                        <v-icon small class="ml-2" color="grey" v-else>
                                            fas fa-minus
                                        </v-icon>
                                        
                                    </div>
                                </v-list-item-action>
                            </v-list-item>
                        </v-list>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {
    v4
} from 'uuid'
import ApexCharts from 'apexcharts'
export default {
    data: () => ({
        postHeader: [{
                text: 'Branch office',
                value: 'branch',
                sortable: false
            },
            {
                text: 'Uuid',
                value: 'uuid',
                sortable: false
            },
            {
                text: 'Status',
                value: 'status',
                sortable: false
            },
            {
                text: 'Profit',
                value: 'profit',
                sortable: false
            }
        ],
        postsItems: [{
                branch: v4(),
                uuid: v4(),
                status: 'online',
                profit: 3000
            },
            {
                branch: v4(),
                uuid: v4(),
                status: 'offline',
                profit: 3000
            },
            {
                branch: v4(),
                uuid: v4(),
                status: 'online',
                profit: 3000
            }, {
                branch: v4(),
                uuid: v4(),
                status: 'online',
                profit: 3000
            }, {
                branch: v4(),
                uuid: v4(),
                status: 'online',
                profit: 3000
            }, {
                branch: v4(),
                uuid: v4(),
                status: 'online',
                profit: 3000
            }, {
                branch: v4(),
                uuid: v4(),
                status: 'online',
                profit: 3000
            }, {
                branch: v4(),
                uuid: v4(),
                status: 'online',
                profit: 3000
            }, {
                branch: v4(),
                uuid: v4(),
                status: 'online',
                profit: 3000
            }, {
                branch: v4(),
                uuid: v4(),
                status: 'online',
                profit: 3000
            }
        ],
        payments: [{
                name: "Mastercard",
                avatar: "mastercard.png",
                type: "Credit card",
                price: {
                    now: 7000,
                    before: 4500
                },
            },
            {
                name: "Visa",
                avatar: "visa.png",
                type: "Debit card",
                price: {
                    now: 5000,
                    before: 6580
                },
            },
            {
                name: "Paypal",
                avatar: "paypal.png",
                type: "Virtual wallet",
                price: {
                    now: 600,
                    before: 700
                },
            },
            {
                name: "Cash",
                avatar: "cash.jpg",
                type: "Wallet",
                price: {
                    now: 2040,
                    before: 4020
                },
            },
            {
                name: "Crypto",
                avatar: "btc.webp",
                type: "Virtual wallet",
                price: {
                    now: 0,
                    before: 0
                },
            },
        ],
        clients: [{
                id: "#3900",
                user: 'Jordan josue ubilla mendoza',
                address: 'Mapasingue oeste av cuarta calle tercera',
                email: 'sanshiatomico@gmail.com',
                total: '3171.50',
                avatar: ''
            },
            {
                id: "#3900",
                user: 'Jordan josue ubilla mendoza',
                address: 'Mapasingue oeste av cuarta calle tercera',
                email: 'sanshiatomico@gmail.com',
                total: '3171.50',
                avatar: 'avatar-4.406ee6ab.png'
            },
            {
                id: "#3900",
                user: 'Jordan josue ubilla mendoza',
                address: 'Mapasingue oeste av cuarta calle tercera',
                email: 'sanshiatomico@gmail.com',
                total: '3171.50',
                avatar: ''
            },
            {
                id: "#3900",
                user: 'Jordan josue ubilla mendoza',
                address: 'Mapasingue oeste av cuarta calle tercera',
                email: 'sanshiatomico@gmail.com',
                total: '3171.50',
                avatar: 'avatar-3.3ef9169b.png'
            },
            {
                id: "#3900",
                user: 'Jordan josue ubilla mendoza',
                address: 'Mapasingue oeste av cuarta calle tercera',
                email: 'sanshiatomico@gmail.com',
                total: '3171.50',
                avatar: 'avatar-7.8807e18e.png'
            },
            {
                id: "#3900",
                user: 'Jordan josue ubilla mendoza',
                address: 'Mapasingue oeste av cuarta calle tercera',
                email: 'sanshiatomico@gmail.com',
                total: '3171.50',
                avatar: 'avatar-2.0ae005f8.png'
            },
            {
                id: "#3900",
                user: 'Jordan josue ubilla mendoza',
                address: 'Mapasingue oeste av cuarta calle tercera',
                email: 'sanshiatomico@gmail.com',
                total: '3171.50',
                avatar: ''
            }

        ]
    }),
    mounted: function () {
        this.mountWeeklyOverview()
        this.statusPackageOverview()
        this.branchesPackageOverview()
    },

    methods: {
        generateData(count, yrange) {
            var i = 0;
            var series = [];
            while (i < count) {
                var x = (i + 1).toString();
                var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
                series.push({
                    x: x,
                    y: y
                });
                i++;
            }
            return series;
        },
        convertCurrency(pvp) {
            const numberformat = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            })
            return numberformat.format(pvp);
        },
        mountWeeklyOverview() {
            var options = {
                chart: {
                    type: 'bar',
                    toolbar: {
                        show: false,
                        tools: {
                            download: false
                        }
                    }
                },
                series: [{
                    name: 'sales',
                    data: [30, 40, 45, 50, 49, 60, 70, 91, 125]
                }],
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                },
                dataLabels: {
                    enabled: false
                }
            }

            var chart = new ApexCharts(document.querySelector("#chart"), options);

            chart.render();
        },
        statusPackageOverview() {
            var options = {
                series: [44, 55, 13, 43, 20, 1],
                chart: {
                    type: 'pie',
                    height: '100%' 
                },
                labels: ['Facturas', 'Retencion', 'Guia de remision', 'Nota de debito', 'Nota de credito', 'Liquidacion de compras'],
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            show: false,
                        }
                    }
                }],
                legend: {
                    show: true,
                    position:'bottom'
                }
            };


            var chart = new ApexCharts(document.querySelector("#chartStatusPackage"), options);
            chart.render();
        },

    }
}
</script>

<style>
#chart {
  max-width: 100%;
  margin: 35px auto;
}
.text-sm{
    font-size: .875rem;
    line-height: 1.25rem;
}
.text-xs{
    font-size: .75rem;
    line-height: 1rem;
}
.text-medium-emphasis{
    color :rgba(var(--v-theme-on-background),var(--v-medium-emphasis-opacity))!important;
}
</style>