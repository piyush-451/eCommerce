import react,{useState,createContext,useReducer} from 'react'
import axios from 'axios'
export const UserContext = createContext()

const reducer = (state,action)=>{
    switch(action.type){
        case "Signin":{
            return action.payload
        }
        case "Signout":{
            return null
        }
        case "order":{
            return({...state,orders:[...state.orders,action.payload]})
        }
        case "wishlist" :{
            return({...state,wishlist:[...state.wishlist,action.payload]})
        }
    }
}


export const UserContextProvider = ({children})=>{
    const [user,dispatch] = useReducer(reducer,null)
    const [localstorage,setStorage] = useState(false)
    const handleStorage = ()=>{
        setStorage(!localstorage)
       
    }
    const signin = async (user)=>{
        try {
            const result = await axios.post('http://localhost:5000/api/user/authenticate/signin',user)
            
            dispatch({
                type:"Signin",
                payload:result.data.user
            })
            localStorage.setItem('token',result.data.token)
            localStorage.setItem('admin',result.data.admin)
            localStorage.setItem('user',JSON.stringify(result.data.user))
            handleStorage()
            
        } catch (error) {
            console.log(error)        
        }
    }

    const signout = ()=>{
        dispatch({type:"Signout"})
         handleStorage()
        localStorage.clear()
       
       
    }
    const addOrder = (order)=>{
        dispatch({type:"order",payload:order})
    }

    const addtowishlist = (product)=>{
        dispatch({type:"wishlist",payload:product})
    }
   
    
    return(
        <UserContext.Provider 
    value={{
        user,
        localstorage,
        signin,
        signout,
        addOrder,
        addtowishlist,
    }}
    >
        {children}
    </UserContext.Provider>
    )
}