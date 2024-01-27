// this hook is used to access the AthletesContext from any component
// that is a child of AthletesContextProvider
// this is a custom hook that is used in  athleteManagementPage.js


import {AthletesContext} from "../context/AthletesContext";
import { useContext } from "react";

export const useAthletesContext = () => {
  const context = useContext(AthletesContext);
 if (!context ){
  throw Error('useAthletesContext must be used within AthletesContextProvider')
 }
 return context;
};