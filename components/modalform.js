import Head from "next/head"
import { MenuContext } from "./context"
import { useContext } from "react"
import { motion } from "framer-motion"
import GetInvolvedForms from "./getinvolvedforms"




export default function ModalForm(){

    const menucontext = useContext(MenuContext) 

    const {openForm } = menucontext

    if(!openForm) return null


    return(
        <motion.div
        initial={{ opacity: 0 , scale: 0 }}
        animate={ { opacity: 1, scale: 1 } }
        className="fixed z-20 min-h-[100vh] w-100p  text-[#000] involved_bg px-3 py-6 flex justify-center" >
                <GetInvolvedForms  />     
        </motion.div>
    )

}

