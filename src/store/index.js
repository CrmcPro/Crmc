import { createStore} from "vuex"
import  user from '../store/modules/user'
import  dossiers from '../store/modules/dossiers'


const store = createStore({
    state :{
        token : "" ,
        isAuthenticated : false
    },

    mutations : {
        initializeStore(state){
            if(localStorage.getItem('token')){
                state.token=localStorage.getItem('token')
                state.isAuthenticated = true
            }else {
                state.token = '',
                state.isAuthenticated = false 
            }
        },
        setToken( state, token ){
            state.token = token 
            state.isAuthenticated = true
        },
        removeToken( state ){
            state.token = '',
            state.isAuthenticated = false
        }
    },
    modules: {
        user,
        dossiers
    },
})

export default store