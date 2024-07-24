import { MenuContext } from "./context"
import { useContext } from "react"




export default function BButton({
        children,
        padding, 
        fontSize,
        color, 
        backgroundColor,
        marginTop,
        margin,
        border,
        width,
        involedAs
    }){

    const menucontext = useContext(MenuContext) 

    const { getInvolvedAs, setInvolvedAs , setIsopenForm, openForm} = menucontext

    const style = {
        padding:padding,
        fontSize:fontSize,
        color:color,
        backgroundColor:backgroundColor,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginTop:marginTop ,
        margin: margin,
        border: border,
        width:width,
     }

    const handleClick = () => {
        setInvolvedAs(involedAs)
        if(involedAs !== undefined){
            setIsopenForm(!openForm)
        }
    }

    

    return(
        <button style={style} className="rounded-[28px] text-center" onClick={handleClick}>
            { children }
        </button>
    )

}