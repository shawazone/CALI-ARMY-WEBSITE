import { BlogsContext } from "../context/BlogsContext";
import { useContext } from "react";

export const useBlogsContext = () => {
  const context = useContext(BlogsContext);
 if (!context ){
  throw Error('useBlogsContext must be used within BlogsContextProvider')
 }
 return context;
};