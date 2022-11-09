import axios from "axios"
export default {
    state: () => ({
        
        dossiers: { pochette_id:2,
                    dossier_id:4 ,}
    }),
    getters : {
        dossiers : state => state.dossiers
    },
    mutations : {
        SET_dossier_id(state,payload){
            state.dossiers = payload
        }
        
    },
    actions :{
    //  saveName({commit}, data){
    //     commit("SET_NAME",data)
    //  },
    async getdossiers ({commit}){
     let res= await axios.get('/api/dossiers/').then(response=>{
        console.log("response0000000000",response.data)
        commit('SET_dossier_id',response.data.id)

    })
     }
     
   
    }
}