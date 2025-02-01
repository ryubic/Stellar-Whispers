import { createContext, useContext } from "react";

// Context with default values
export const AppContext = createContext({
    darkMode: false,
    toggleTheme: ()=>{},
    isSmallScreen: false,

    navVisibility: false,
    changeNavVisibility: ()=>{},

    articlesResponse: {},
    articlesArray:[],
    setArticlesResponse: ()=>{},
    setArticlesArray: ()=>{},
    
    blogsResponse: {},
    blogsArray: [],
    setBlogsResponse: ()=>{},
    setBlogsArray: ()=>{},

    reportsResponse:{},
    reportsArray: [],
    setReportsResponse: ()=>{},
    setReportsArray:()=>{}
})

export const AppContextProvider = AppContext.Provider

export default function useAppContext(){
    return useContext(AppContext)
}
