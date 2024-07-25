import { createContext, useContext } from "react";


export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

//wahi createContext provider ko de diya
export const ThemeProvider = ThemeContext.Provider


// ak function bna k react k useContext mein method or string bhj rehy hein
export default function useTheme(){
    return useContext(ThemeContext)
}