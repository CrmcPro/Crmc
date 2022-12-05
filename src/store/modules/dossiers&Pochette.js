import axios from "axios"
export default {
    state: () => ({
        pochette_id: 1 , 
        dossier_id: parseInt(localStorage.getItem('id_dossier')) ,
        dossiers: [] ,
        pochette: [] ,
        View: false ,
        pochette_name : null,
        oneDossier :[],

    }),
    getters : {
        oneDossier:state => state.oneDossier,
        pochette :  state => state.pochette,
        dossiers : state => state.dossiers,
        dossier_id:state => state.dossier_id ,
        pochette_id : state => state.pochette_id ,
        pochette_name : state => state.pochette_name,
        View : state => state.View ,

    },
    mutations : {
        SET_OneDossier(state,payload){
            state.oneDossier =payload
        },

        SET_DOSSIERS(state,payload){
            state.dossiers = payload
        },
        SET_POCHETTE(state,payload){
            state.pochette = payload
        },         
        SET_POCHETTE_ID(state , payload){
            state.pochette_id = payload
        },
        SET_POCHETTE_NAME(state , payload){
            state.pochette_name = payload
        },
      
      
    },
    actions :{
    async getPochetteData({commit},response){
        console.log(response,'responseDossier.js')
        commit('SET_POCHETTE_ID',response.id_pochette)
        
    },
    async getdossiers ({commit}){
     let res= await axios.get('/api/dossiers/').then(response=>{
        commit('SET_DOSSIERS',response.data)
        

    })},
    async GetOnedossier({commit},payload){
        const response = await axios.get("/api/dossiers/", {params: { 
            dossier_id : payload.id ,
        } },);
        commit('SET_OneDossier',response.data);
        return { success : true }
      
    },
    async testProgress ({commit} , payload){
        try {
           const response = await axios.get("/api/dossiers/document/progress/", {params: {
                    pochette_id : payload.pochette_id, 
                    dossier_id : payload.dossier_id ,
                } },);
 
           return { success : true }
        }catch(error)
        {
                
            return { success : false}
        }
    },
    async getdocument ({commit} , payload){
        try {
           const response = await axios.get("/api/dossiers/document/", {params: {
                    pochette_id : payload.pochette_id, 
                    dossier_id : payload.dossier_id ,
                } },);
           commit('SET_POCHETTE',response.data);
           commit('SET_POCHETTE_ID',payload.pochette_id);
           commit('SET_POCHETTE_NAME',payload.pochette_name);

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