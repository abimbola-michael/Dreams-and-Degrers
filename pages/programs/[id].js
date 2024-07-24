import Head from "next/head"
import { AnimatePresence, motion } from "framer-motion"
import { programsArray} from "../../components/utils"
import GetInvolved from "../../components/getinvolved"
import ProgramsMain from "../../components/programsmain"
import { useRouter } from "next/router"
import { useEffect, useRef , useLayoutEffect} from "react"




export default function Programs(){

    const router = useRouter()

    const refSection =  useRef() 

    useEffect(() => {
        refSection.current.scrollIntoView({ behaviour: "smooth" })
    },[router.query.id])

    const Program = programsArray.filter(program => program.id === parseInt(router.query.id))

    return(
        <section >
             <Head>
                <title>Dreams&Degrees</title>
                <meta name="description" content="Dreams & Degrees is a digital Sisterhood that exists to connect, educate, and empower ambitious females passionate about technology and entrepreneurship." />
                <meta name="keywords" content="Dreams and degrees, Digital sisterhood, females , connect, educate , empower, Ambitious" />
                <meta property="og:url" content="https://dreamsandegrees.com/programs.html" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Dreams and degrees" />
                <meta property="og:image" content="/images/favicon.png" />
                <meta property="og:description" content="Dreams & Degrees is a digital Sisterhood that exists to connect, educate, and empower ambitious females passionate about technology and entrepreneurship" />
                <meta property="og:site_name" content="dreamsandegrees" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@dreamsandegrees" />
                <meta name="twitter:url" content="https://dreamsandegrees.com/programs.html" />
                <meta name="twitter:title" content="Dreams and degrees" />
                <meta name="twitter:description" content="Dreams & Degrees is a digital Sisterhood that exists to connect, educate, and empower ambitious females passionate about technology and entrepreneurships" />
                <meta name="twitter:image" content="/images/favicon.png" />
                <link rel="icon" href="/images/favicon.png" />
                <link rel="preload" as="image" href="https://res.cloudinary.com/dimejiscloud/image/upload/q_auto:best/v1652026702/dd/aboutline_vgyj9u.png" />
            </Head>
            <div className="program_bg pline py-[38px] md:pb-[62px] pt-[113px] md:pt-[180px]"> 
                <ProgramsMain  >
                <div className="program_content md:mt-0 mt-[75px] w-[100%] md:border-t-none md:border-l-[0.5px] h-[930px] md:h-[988px]  border-[#A0AEC0] relative font-fellix" ref={refSection}>
                        { Program.map(program => {
                            return (
                                <div key={program.id}>
                                    <AnimatePresence>
                                    <motion.div
                                        key={parseInt(router.query.id)}
                                        initial={{ opacity: 0  }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className={`md:px-[62px] pr-3 w-100p  md:py-[34px] leading-[24px] absolute`}
                                    >
                                        {program.component}
                                    </motion.div>
                                </AnimatePresence>
                                </div>
                            )
                        })}
                    </div>
                </ProgramsMain>
            </div>
            <section className="mt-[98px] md:mt-[118px] mb-[124px]">
                <GetInvolved />
            </section>
        </section>
    )

}