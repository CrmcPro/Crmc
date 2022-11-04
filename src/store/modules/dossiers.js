import axios from "axios"
export default {
    state: () => ({
        
        dossiers: {}
    }),
    getters : {
        dossiers : state => state.dossiers
    },
    mutations : {
        SET_dossiers(state,payload){
            state.dossiers = payload
        }
    },
    actions :{
    //  saveName({commit}, data){
    //     commit("SET_NAME",data)
    //  },
    async getdossiers ({commit}){
     let res= await axios.get('/api/dossiers/').then(response=>{
        console.log("response",response.data)
        commit('SET_dossiers' , response.data)

    })
     }
     
   
    }
}