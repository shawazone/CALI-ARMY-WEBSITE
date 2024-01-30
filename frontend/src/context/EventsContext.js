import  {createContext,useReducer} from 'react';


export const EventsContext = createContext()   // create context object

export const eventsReducer = (state, action) => {
    switch (action.type ){
      case 'SET_EVENT' :
        return {
            events: action.payload, // action.payload is the workouts array
            
        }
        case 'CREATE_EVENT':
            return {
                events: [action.payload, ...state.events]
            }
            case 'UPDATE_EVENT':
                return {
                    events: action.payload 
                };
        case 'DELETE_EVENT':
            // console.log('action.payload',action.payload)
            // console.log('state.products',state.events)
            return {
                events: state.events.filter((event) => event._id !== action.payload._id) 
            }    
        default: 
            return state    
    }
}

export const EventsContextProvider = ({children}) => {  // provider is a component that wraps around the components that need access to the context
 // the children prop represent whatever is inside the provider component
 // here the children prop is the App component

 const [state, dispatch] = useReducer(eventsReducer, {
    events: null
 })
    return (

     <EventsContext.Provider value={{...state, dispatch}}>
         {children}
     </EventsContext.Provider>
        )
}