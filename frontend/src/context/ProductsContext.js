import  {createContext,useReducer} from 'react';


export const ProductsContext = createContext()   // create context object

export const productsReducer = (state, action) => {
    switch (action.type ){
      case 'SET_PRODUCT' :
        console.log('action.payload',action.payload)
        return {
            products: action.payload, // action.payload is the workouts array
            
        }
        case 'CREATE_PRODUCT':
            return {
                products: [action.payload, ...state.products]
            }
            case 'UPDATE_PRODUCT':
                return {
                    products: action.payload 
                };
        case 'DELETE_PRODUCT':
            console.log('action.payload',action.payload)
            return {
                products: state.products.filter((product) => product._id !== action.payload._id) 
            }    
        default: 
            return state    
    }
}

export const ProductsContextProvider = ({children}) => {  // provider is a component that wraps around the components that need access to the context
 // the children prop represent whatever is inside the provider component
 // here the children prop is the App component

 const [state, dispatch] = useReducer(productsReducer, {
    products: null
 })
    return (

     <ProductsContext.Provider value={{...state, dispatch}}>
         {children}
     </ProductsContext.Provider>
        )
}