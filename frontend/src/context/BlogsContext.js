import  {createContext,useReducer} from 'react';


export const BlogsContext = createContext()   // create context object

export const blogsReducer = (state, action) => {
    switch (action.type ){
      case 'SET_BLOGS' :
        return {
            blogs: action.payload, // action.payload is the workouts array
            
        }
        case 'CREATE_BLOGS':
            return {
                blogs: [action.payload, ...state.blogs]
            }
            case 'UPDATE_BLOGS':
                return {
                    blogs: action.payload 
                };
        case 'DELETE_BLOGS':
            return {
                blogs: state.blogs.filter((blog) => blog._id !== action.payload._id) 
            }    
        default: 
            return state    
    }
}

export const BlogsContextProvider = ({children}) => {  // provider is a component that wraps around the components that need access to the context
 // the children prop represent whatever is inside the provider component
 // here the children prop is the App component

 const [state, dispatch] = useReducer(blogsReducer, {
    blogs: null
 })
    return (

     <BlogsContext.Provider value={{...state, dispatch}}>
         {children}
     </BlogsContext.Provider>
        )
}