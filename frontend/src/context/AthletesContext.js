import  {createContext,useReducer} from 'react';


export const AthletesContext = createContext()   // create context object

export const athletesReducer = (state, action) => {
    switch (action.type ){
      case 'SET_ATHLETES' :
        return {
            athletes: action.payload, // action.payload is the workouts array
            
        }
        case 'CREATE_ATHLETE':
            return {
                athletes: [action.payload, ...state.athletes]
            }
            case 'UPDATE_ATHLETE':
                return {
                    athletes: action.payload 
                };
        case 'DELETE_ATHLETE':
            return {
                athletes: state.athletes.filter((athlete) => athlete._id !== action.payload._id) 
            }    
        default: 
            return state    
    }
}

export const AthletesContextProvider = ({children}) => {  // provider is a component that wraps around the components that need access to the context
 // the children prop represent whatever is inside the provider component
 // here the children prop is the App component

 const [state, dispatch] = useReducer(athletesReducer, {
    athletes: null
 })
    return (

     <AthletesContext.Provider value={{...state, dispatch}}>
         {children}
     </AthletesContext.Provider>
        )
}