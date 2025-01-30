import { createContext, useContext } from "react";

// Create a context with default values
export const AppContext = createContext({
    darkMode: false,
    articlesResponse: null,
    blogsResponse: null,
    reportsResponse:null,
    toggleTheme: ()=>{},
    setArticlesResponse: ()=>{},
    setBlogsResponse: ()=>{},
    setReportsResponse: ()=>{},
})

export const AppContextProvider = AppContext.Provider

export default function useAppContext(){
    return useContext(AppContext)
}
