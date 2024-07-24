import Link from "next/link"
import { useRouter } from "next/router"
import { MenuContext } from "./context"
import { useContext } from "react"
import Head from "next/head"
import BButton from "./BButton"


export default function NavLayout() {

    const router = useRouter()

    const menucontext = useContext(MenuContext) 

    const {open, isOpen } = menucontext


    const handleClick = () => {
        router.reload()
    }


    return (
        <div className={`${router.asPath !== "/" ? " md:bg-[#ffff]" : "transparent" } absolute w-100p z-10`}>
            <Head>
                <link  rel="icon" href="/images/logo.png" />
            </Head>
           <div className='px-6  xl:container  mx-auto xl:px-5 py-7 flex justify-between items-center font-fellix'>
                {router.asPath === "/" ? (
                    <div onClick={handleClick} className='logo_bg w-[150px] h-[40px] xl:w-[175px] md:h-[50px]  xl:h-50  relative'>
                    </div>
                ) : (
                    <Link href="/">
                                <a>
                                    <div className='logo_bg w-[150px] h-[40px] xl:w-[175px] md:h-[50px]  xl:h-50  relative'>
                                    </div>
                                </a>
                    </Link>
                )}
                <div className="text-bk xl:ml-20 hidden md:flex justify-center">
                    <ul className="md:flex justify-between  w-[300px]">
                        <li>
                            <Link href="/">
                                <a className={`link ${router.asPath === "/" ? "active" : "" }`}>Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a className={`link ${router.asPath === "/about" ? "active" : "" }`}>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/programs/0">
                                <a className={`link ${router.asPath === `/programs/${parseInt(router.query.id)}` ? "active" : "" }`}>Programs</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a className={`link ${router.asPath === "/contact" ? "active" : "" }`}>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:flex justify-between items-center font-fellix w-[254px]  text-16 font-[600] ">
                    <Link href="#getinvolved">
                        <a>
                            <span  className="text-[#12022F]">
                                <BButton>Get Involved</BButton>
                            </span>
                        </a>
                    </Link>
                    <Link href="/programs/0">
                        <a>
                            <span>
                                <BButton padding="15px 0" color="white" backgroundColor="#D68676" width="128px">Get started</BButton>
                            </span>
                        </a>
                    </Link>
                </div>
                <div className="flex md:hidden w-[24px] justify-between flex-col h-[20px] " onClick={() => isOpen(!open)}>
                    <div className="w-[100%] border-2 border-pry"></div>
                    <div className="w-[100%] border-2 border-pry"></div>
                    <div className="w-[100%] border-2 border-pry"></div>
                </div>
            </div>
        </div>
    )

}
