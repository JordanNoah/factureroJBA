import router from '../router'

const global = {
    initSession(user){
        localStorage.setItem('sessionKey',user.uuid)
        router.push({name:'Dashboard'})
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
    } 
}

export default global;