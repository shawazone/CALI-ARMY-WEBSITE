import {AthletesContext} from "../context/AthletesContext";
import { useContext } from "react";

export const useAthletesContext = () => {
  const context = useContext(AthletesContext);
 if (!context ){
  throw Error('useAthletesContext must be used within AthletesContextProvider')
 }
 return context;
};