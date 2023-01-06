import Vue from 'vue'
import Vuex from 'vuex'
import jwtDecode from 'jwt-decode'
import provider from '@/plugins/provider'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    institution:null,
    session: localStorage.getItem('session'),
    user:null
  },
  getters: {
    getLogin(state){
      if(state.session){
        var infoSession = jwtDecode(state.session.token)
        if(infoSession.user){
          return true;
        }else{
          return false;
        }
      }else{
        return false;
      }
    },
    getInstitution(state){
      if(state.institution){
        provider.getAccount()
        return true
      }else{
        return false
      }
    }
  },
  mutations: {
    setUser(){
      if(localStorage.getItem('sessionKey')){
        console.log("existe");
      }
    },
    initSession(state,session){
      var infoSession = jwtDecode(session.token)
      state.user = infoSession.user
      state.session = {expire : infoSession}
      localStorage.setItem('session',session.token)
    }
  },
  actions: {
  },
  modules: {
  }
})
