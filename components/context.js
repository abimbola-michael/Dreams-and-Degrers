import {useState, createContext} from "react"

export const MenuContext = createContext()

export default function ContextWrapper({ children }){

    const [ open, isOpen ] = useState(false) 
    const [ openForm, setIsopenForm ] = useState(false)
    const [ getInvolvedAs, setInvolvedAs ] = useState("")

    

    return(
        <MenuContext.Provider value={{open, isOpen,  openForm, setIsopenForm ,getInvolvedAs, setInvolvedAs}}>
            {children}
        </MenuContext.Provider>
    ) 
}