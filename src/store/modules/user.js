import axios from "axios"
export default {

    state: () => ({
        users: {},
        user: {}
    }),
    getters : {
        user : state => state.user,
        users: state => state.users
    },
    mutations : {
        SET_NAME(state,payload){
            state.user = payload
        },
        SET_USERS(state,payload){
            state.users = payload
        }
    },
    actions :{
        
     async getAllUsers ({commit}){
        let res = await axios.get('/accounts/users').then(res=>{
            commit('SET_USERS' , res.data)
        })
     } ,


    async getCurent ({commit}){
     let res= await axios.get('/accounts/users/me').then(res=>{
             commit('SET_NAME' , res.data)
            
        })
     },
   
    }
}