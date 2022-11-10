import axios from "axios"
export default {
    state: () => ({
        pochette_id: 1 , 
        dossier_id: 0 ,
        dossiers: [] ,
        View: false 

    }),
    getters : {
        dossiers : state => state.dossiers,
        dossier_id:state => state.dossier_id ,
        pochette_id : state => state.pochette_id ,
        View : state => state.View
    },
    mutations : {
        SET_dossiers(state,payload){
            state.dossiers = payload
        },
        SET_id_dossiers(state,id){
            state.dossier_id=id

        },
        SET_id_pochette(state,id){
            state.pochette_id = id
            this.dispatch("getdocument")

           console.log('this',this)
        }
        
    },
    actions :{

    async getdossiers ({commit}){
     let res= await axios.get('/api/dossiers/').then(response=>{
        console.log("responseData",response.data)
        commit('SET_dossiers',response.data)
       

    })},
    async getdocument ({state,commit}){
        console.log('state',state.dossier_id)
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
        //    console.log("00000",View) 
           state.View = true
           
       }).catch(err=>{
        // console.log('err',err)
        state.View = false

       })},
     
   UpdateIdDossier({commit},payload){
    console.log('payload',payload)
    commit('SET_id_dossiers',payload)

   },
   SETIdPochette({commit},payload){
    commit('SET_id_pochette',payload)
   }
    }

}