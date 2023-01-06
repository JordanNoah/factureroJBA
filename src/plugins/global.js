import store from '../store'

const global = {
    initSession(token){
        localStorage.setItem('sessionKey',token)
        //router.push({name:'Dashboard'})
    },
    removeSession(){
        localStorage.removeItem('sessionKey')
    },
    checkSession(){
        if (localStorage.getItem('sessionKey')) {
            return true
        }else{
            return false
        }
    },
    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    },
    checkBasicConfig(){
        if(store.state.institutionConfig){
            return true
        }else{
            return false
        }
    }
}

export default global;