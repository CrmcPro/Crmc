import axios from "axios"
export default {
    state: () => ({
        dossiers_id:'',
        dossiers: []
    }),
    getters : {
        dossiers : state => state.dossiers,
        dossiers_id:state => state.dossiers_id
    },
    mutations : {
        SET_dossiers(state,payload){
            state.dossiers = payload
        },
        SET_id_dossiers(state,id){
            state.dossiers_id=id
                console.log('allo',state.dossiers_id)
        }
        
    },
    actions :{
    //  saveName({commit}, data){
    //     commit("SET_NAME",data)
    //  },
    async getdossiers ({commit}){
     let res= await axios.get('/api/dossiers/').then(response=>{
        console.log("responseData",response.data)
        commit('SET_dossiers',response.data)
        commit('SET_id_dossiers',response.data.id)
       

    })
     }
     
   
    }
}