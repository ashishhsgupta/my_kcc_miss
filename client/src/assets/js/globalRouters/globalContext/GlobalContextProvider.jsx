import {DEFAULT_LANG_SELECTED} from "../languages/GlobalLanguage";
import GlobalContext from "./GlobalContext";
import { useEffect, useState } from "react";

const GlobalContextProvider = ({children})=> {
  const [currentLang, setCurrentLang] = useState(DEFAULT_LANG_SELECTED);

    const GlobalContextValue = {
        currentLang,
        setCurrentLang
    } 
  
    return (
        <GlobalContext.Provider value={GlobalContextValue}>
         {children}
        </GlobalContext.Provider>
    )
}
export default GlobalContextProvider;