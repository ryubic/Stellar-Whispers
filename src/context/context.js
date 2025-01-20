import { createContext, useContext } from "react";

export const AppContext = createContext({
    darkMode: false,
    togleTheme: ()=>{}
})

export const AppContextProvider = AppContext.Provider

export default function useAppContext(){
    return useContext(AppContext)
}