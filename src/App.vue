<template>
  <v-app>
    
      <router-view/>
    
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
  beforeMount:function(){
    this.$store.commit('setUser')
    },
  mounted:function(){
    this.$vuetify.theme.dark = true
  }
};
</script>
