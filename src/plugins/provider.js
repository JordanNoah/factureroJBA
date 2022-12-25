import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

const provider = {
    signUp: async (body) => {
        return await axios.post("/users",body)
    },
    signIn: async (body) => {
        return await axios.get(`/users/login/${body.email}/${body.password}`)
    },
    //
    forgotPasswordStepOne: async (body) => {
        return await axios.post(`/recoverPassword`,body)
    },
    forgotPasswordStepTwoByUuid: async (uuid) => {
        return await axios.get(`/recoverPassword/${uuid}`).catch((e) => {return e.response})
    },
    checkCodeForgotPassword: async (body) => {
        return await axios.post(`/recoverPassword/check_code`,body).catch((e)=> {return e.response})
    }
}

export default provider