import axios from "axios"
export default {
    state: () => ({
        pochette_id: 2 , 
        dossier_id: 0 ,
        dossiers: [] ,
        View: false 

    }),
    getters : {
        dossiers : state => state.dossiers,
        dossier_id:state => state.dossier_id ,
        View : state => state.View
    },
    mutations : {
        SET_dossiers(state,payload){
            state.dossiers = payload
        },
        SET_id_dossiers(state,id){
            state.dossier_id=id
                console.log('allo',state.dossier_id=id)

        }
        
    },
    actions :{

    async getdossiers ({commit}){
     let res= await axios.get('/api/dossiers/').then(response=>{
        console.log("responseData",response.data)
        commit('SET_dossiers',response.data)
        commit('SET_id_dossiers',response.data.id)
       

    })},
    async getdocument ({state,commit}){
        let {pochette_id,dossier_id,View}=state
        console.log( pochette_id, dossier_id,View)
        // ?pochette_id=2&dossier_id=4
        let res= await axios.get("/api/dossiers/document/", {
            params: {
                pochette_id : pochette_id, 
                dossier_id : dossier_id
            }
          }).then(response=>{
           console.log("responsedocument",response.data)
           commit('SET_dossiers',response.data)
           commit('SET_id_dossiers',response.data.id)
           console.log("00000",View) 
           state.View = true
           
       }).catch(err=>{
        console.log('err',err)
       })}
     
   
    }
}