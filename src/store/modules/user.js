import axios from "axios"
export default {
    state: () => ({
        
        user: {}
    }),
    getters : {
        user : state => state.user
    },
    mutations : {
        SET_NAME(state,payload){
            state.user = payload
        }
    },
    actions :{
    //  saveName({commit}, data){
    //     commit("SET_NAME",data)
    //  },
    async getCurent ({commit}){
     let res= await axios.get('/accounts/users/me').then(res=>{
            console.log('resUser',res.data.first_name)
            console.log('photo',res.data)
            // store.modules.user=res.data.first_name
            console.log('store.user')
             commit('SET_NAME' , res.data)
        })
     },
   
    }
}