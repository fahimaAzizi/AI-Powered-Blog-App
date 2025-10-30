import { Children } from "react"
import { createContext } from "react"



export const AppContext = createContext()

export const AppProvider = ({})=>{
    return(
        <AppContext.Provider value ={value}>
            {Children}
        </AppContext.Provider>
    )
}

