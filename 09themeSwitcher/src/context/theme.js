import React, { createContext, useContext } from 'react'

export const ThemeContext = createContext({
    themeMode:"light",

    //below funcionality hai methord ki, yaha iske definations nahi likhte ,only name is written
    lightTheme:()=>{},        
    darkTheme:()=>{}
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}