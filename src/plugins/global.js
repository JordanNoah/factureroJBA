import { v4 } from "uuid";

const global = {
    initSession(){
        localStorage.setItem('sessionKey',v4())
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