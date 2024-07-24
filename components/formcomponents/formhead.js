import { useContext } from "react"
import { MenuContext } from "../context"


export function FormHeader(){

    const menucontext = useContext(MenuContext) 

    const { setIsopenForm, openForm, getInvolvedAs } = menucontext

    return (
        <div className="flex justify-between mb-10 items-center sticky top-0 z-[2] bg-[#fff]">
            <div className="text-[28px] uppercase font-paytone text-pry">{getInvolvedAs === "mentorship" ? "Mentors application" : getInvolvedAs}</div>
            <div className='w-[40px] h-[40px] 4xl:w-[110px] 4xl:h-[110px] 3xl:w-[60px] 3xl:h-[60px] rounded-full flex justify-center items-center flex-col cursor-pointer' onClick={() => setIsopenForm(!openForm)}>
                <div className='border-[1px] border-[#000] w-[14px] rotate-45 4xl:w-[44px] 3xl:w-[25px]'></div>
                <div className='border-[1px] border-[#000] w-[14px] -rotate-45 -translate-y-[2px] 4xl:w-[44px] 4xl:-translate-y-[6px] 3xl:w-[25px]'></div>
           </div>
        </div>
    )
}