import { createStore} from "vuex"
import  user from '../store/modules/user'
import  dossiers from '../store/modules/dossiers'
import router from "../router"
const store = createStore({
    state :{
        token : "" ,
        isAuthenticated : localStorage.getItem('token') ?true : false
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
            state.isAuthenticated = false,
            router.push('/')
            localStorage.clear()
        }
    },
    modules: {
        user,
        dossiers
    },
    
})

export default store