
import { MenuContext } from "./context"
import { useContext, useState } from "react"
import logo from "../public/images/logo.png"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/router'
import BButton from "./BButton"
import {motion} from "framer-motion"




export default function MobileNav(){


    const menucontext = useContext(MenuContext) 

    const {open, isOpen } = menucontext

    const [route] = useState(useRouter().route)

    if(!open) return null


    return(
        <motion.div
        initial={{ opacity : 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
         className="mobilenav  bg-no-repeat bg-center bg-cover fixed z-20  text-[#ffff] w-100p h-[100%] py-5">
            <div className="flex justify-end mb-5 px-7">
                <div className='w-[40px] h-[40px] 4xl:w-[110px] 4xl:h-[110px] 3xl:w-[60px] 3xl:h-[60px] rounded-full flex justify-center items-center flex-col' onClick={() => isOpen(!open)}>
                    <div className='border-[1px] border-[#000] w-[14px] rotate-45 4xl:w-[44px] 3xl:w-[25px]'></div>
                    <div className='border-[1px] border-[#000] w-[14px] -rotate-45 -translate-y-[2px] 4xl:w-[44px] 4xl:-translate-y-[6px] 3xl:w-[25px]'></div>
                </div>
            </div>
            <div className="flex justify-center">
                <Link href="/">
                    <a>
                        <div className="relative w-[190px] h-[40px]">
                            <Image src={logo} alt="logo" layout="fill" quality={100}  objectFit="contain" />
                        </div>
                    </a>
                </Link>
            </div>
            <div className="my-[72px]">
                <ul className=" h-[224px]  flex justify-between  items-center flex-col">
                    <li>
                        <Link href="/"><a style={route === "/" ? { fontSize: "16px", color:"#12022F", fontWeight:600 } : { fontSize: "16px", color: "#12022F", fontWeight:400 } }>Home</a></Link>
                    </li>    
                     <li>
                        <Link href="/about" ><a style={route === "/about" ? { fontSize: "16px", color:"#12022F", fontWeight:700 } : { fontSize: "16px", color: "#12022F", fontWeight:400 } }>About</a></Link>
                    </li>
                    <li>
                        <Link href="/programs/0" ><a style={route === "/programs/[id]" ? { fontSize: "16px", color:"#12022F", fontWeight:700 } : { fontSize: "16px", color: "#12022F", fontWeight:400 } } >Programs</a></Link>
                    </li>
                     <li>
                       <Link href="/contact"><a  style={route === "/contact" ? { fontSize: "16px", color:"#12022F", fontWeight:700 } : { fontSize: "16px", color: "#12022F", fontWeight:400 } }>Contact</a></Link>
                     </li>
                   </ul>
            </div>
            <div className='flex justify-center items-center flex-col'>
                <span className="mb-3 w-100p flex justify-center">
                    <Link href="/programs/0">
                        <a className="">
                            <BButton backgroundColor="#D68676" color="white" padding="15px 0" fontSize="16px" width="230px">Get started</BButton>
                        </a>
                    </Link>
                </span>
                    <Link href="#getinvolved">
                        <a onClick={() => isOpen(!open)}>
                            <BButton backgroundColor="transparent" color="black" padding="15px 0" fontSize="16px" width="230px" border="2px solid black">Get Involved</BButton>
                        </a>
                    </Link>
            </div>
        </motion.div>
    )

}
