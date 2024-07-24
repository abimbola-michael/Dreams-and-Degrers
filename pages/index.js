import Head from 'next/head'
import Image from "next/image"
import headergirls from "../public/images/headergirls.png"
import WhoWeAre from '../components/whoarewe'
import Impact from '../components/impact'
import Programs from "../components/program"
import Membership from '../components/membership'
import { motion } from 'framer-motion'
import GetInvolved from "../components/getinvolved"
import BButton from '../components/BButton'
import Link from "next/link"
import { useEffect } from "react"



const variants = {
  visible: i => ({
    opacity: 1,
    y: 0,
    transition : {
      delay: 4 * 0.5
    }
  }),
  hidden: i => ({
    opacity: 0,
    y: 100,
  })
}


export default function Home() {


  return (
    <div>
      <header className='header_container img_box xl:min-h-1/2 relative mb-[102px] md:mb-0  flex flex-col justify-between overflow-hidden'>
      <Head>
        <title>Dreams&Degrees</title>
        <meta name="description" content="A Digital Sisterhood for Ambitious females to connect, educate and empower females." />
        <meta name="keywords" content="Dreams and degrees, Digital sisterhood, females , connect, educate , empower, Ambitious" />
        <meta property="og:url" content="https://dreamsandegrees.com/index.html" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dreams and degrees" />
        <meta property="og:image" content="/images/favicon.png" />
        <meta property="og:description" content="A Digital Sisterhood for Ambitious females to connect, educate and empower females" />
        <meta property="og:site_name" content="dreamsandegrees" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@dreamsandegrees" />
        <meta name="twitter:url" content="https://dreamsandegrees.com/index.html" />
        <meta name="twitter:title" content="Dreams and degrees" />
        <meta name="twitter:description" content="A Digital Sisterhood for Ambitious females to connect, educate and empower females" />
        <meta name="twitter:image" content="/images/favicon.png" />
        <link rel="icon" href="/images/favicon.png" />
        <link rel="preload" as="image" href="https://res.cloudinary.com/dimejiscloud/image/upload/q_auto:best/v1652026704/dd/gradient_svvzek.png" imageSrcSet="https://res.cloudinary.com/dimejiscloud/image/upload/q_auto:best/v1652026704/dd/gradient_svvzek.png 540w,  https://res.cloudinary.com/dimejiscloud/image/upload/q_auto:best/v1652026700/dd/gradientsm_sbrwd3.png 1500w" />
        <link rel="preload" as="image" href="https://res.cloudinary.com/dimejiscloud/image/upload/q_auto:best/v1652026699/dd/headerline_f5m8gb.png" />
      </Head>

      <section className="w-[100%] h-[20px]"></section>
      <section className="text-center pt-[113px] md:pt-[130px] grow flex flex-col justify-between">
          <motion.h1 
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className='text-42 px-[25px] md:px-0 md:text-56 leading-[63px] font-paytone text-bk'>A Digital  <span className="text-pry">Sisterhood</span> for<br/>Ambitious females</motion.h1>
          <motion.p 
          variants={variants}
          custom={1}
          initial="hidden"
          animate="visible"
          className="text-para px-[20px] md:px-0 mt-[24px] mb-[40px] md:mb-0 md:mt-0 font-fellix" >We exist to connect, educate and empower females.</motion.p>
          <motion.div
          variants={variants}
          custom={3}
          initial="hidden"
          animate="visible"
          className='header_btn_div md:mt-[40px] px-[20px] md:px-0 font-fellix items-center flex md:flex-row flex-col justify-center'>
            <span className="w-[230px] inline-block mb-3 md:mb-0">
                  <BButton backgroundColor="#D68676" padding="15px 0" color="white" width="100%" involedAs="join the community">
                    <span className="text-16 font-[600]" >Join Community</span>                  
                  </BButton>
            </span>
            <Link href="#getinvolved">
              <a >
                <span className="md:ml-5  w-[230px] inline-block">
                  <BButton backgroundColor="transparent" padding="15px 0" color="black" border="2px solid black" width="100%">
                    <span className="text-16 font-[600]">Get Involved</span>                  
                  </BButton>
                </span>
              </a>
            </Link>
          </motion.div>
        <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3 }}
        className="w-[100%] h-[206px] md:w-[768px] md:h-[395px] mt-[80px] mx-auto relative">
            <Image src={headergirls} alt="headergirls"  layout="fill" quality={100}  priority />
        </motion.div>
      </section>
    </header>
      <main className="mainbg">
        <WhoWeAre />
        <Impact />
        <Membership />
        <Programs />
        <section className="mb-[124px]">
          <GetInvolved />
        </section>
      </main>
    </div>
  )
}
