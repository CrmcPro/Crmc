import axios from "axios"
export default {
    state: () => ({
        pochette_id: null , 
        dossier_id: null ,
        dossiers: [] ,
        pochette: [] ,
        View: false 

    }),
    getters : {
        pochette :  state => state.pochette,
        dossiers : state => state.dossiers,
        dossier_id:state => state.dossier_id ,
        pochette_id : state => state.pochette_id ,
        View : state => state.View
    },
    mutations : {
        SET_DOSSIERS(state,payload){
            state.dossiers = payload
        },
        SET_POCHETTE(state,payload){
            state.pochette = payload
        },         
        SET_POCHETTE_ID(state , payload){
            state.pochette_id = payload
        },
        SET_DOSSIER_ID(state , payload){
            state.dossier_id  = payload
        }
    },
    actions :{

    async getdossiers ({commit}){
     let res= await axios.get('/api/dossiers/').then(response=>{
        commit('SET_DOSSIERS',response.data)
       

    })},
    async getdocument ({commit} , payload){
        try {
           const response = await axios.get("/api/dossiers/document/", {params: {
                    pochette_id : payload.pochette_id, 
                    dossier_id : payload.dossier_id
                } },);
           commit('SET_POCHETTE',response.data);
           commit('SET_POCHETTE_ID',payload.pochette_id);
           commit('SET_DOSSIER_ID',payload.dossier_id);


           return { success : true }
        }catch(error)
        {
            return { success : false}
        }
    },
    async PostDocument ({commit} , payload){
        
       try {
          const response = await axios.post("/api/dossiers/document/", {params: {
                   pochette_id : payload.pochette_id, 
                   dossier_id : payload.dossier_id
               } },pochette);

          commit('SET_DOSSIERS',response.data);
          return { success : true }
       }catch(error)
       {
           return { success : false}
       }
   },
    }

}