import axios from "axios";

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

const provider = {
    signUp: async (body) => {
        return await axios.post("/users",body)
    },
    signIn: async (body) => {
        return await axios.post(`/login`,body)
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
    },
    //
    createInstitution: async (body) => {
        return await axios.post(`/institutions`,body)
    },
    //
    getAccount: async (uuid) => {
        return await axios.get(`/account/${uuid}`)
    }
}

export default provider