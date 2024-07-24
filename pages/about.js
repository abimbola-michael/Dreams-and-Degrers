import GetInvolved from "../components/getinvolved"
import Image from "next/image"
import ladiesgroup from "../public/images/ladiesgroup.png"
import Impact from '../components/impact'
import Membership from '../components/membership'
import Head from "next/head"
import { useEffect } from "react"

export default function About(){

    

    return (
        <div className="about_bg min-h-[50vh]">
            <Head>
                <title>Dreams&Degrees</title>
                <meta name="description" content="Dreams & Degrees is a digital Sisterhood that exists to connect, educate, and empower ambitious females passionate about technology and entrepreneurship." />
                <meta name="keywords" content="Dreams and degrees, Digital sisterhood, females , connect, educate , empower, Ambitious" />
                <meta property="og:url" content="https://dreamsandegrees.com/about.html" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Dreams and degrees" />
                <meta property="og:image" content="/images/favicon.png" />
                <meta property="og:description" content="Dreams & Degrees is a digital Sisterhood that exists to connect, educate, and empower ambitious females passionate about technology and entrepreneurship" />
                <meta property="og:site_name" content="dreamsandegrees" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@dreamsandegrees" />
                <meta name="twitter:url" content="https://dreamsandegrees.com/about.html" />
                <meta name="twitter:title" content="Dreams and degrees" />
                <meta name="twitter:description" content="Dreams & Degrees is a digital Sisterhood that exists to connect, educate, and empower ambitious females passionate about technology and entrepreneurships" />
                <meta name="twitter:image" content="/images/favicon.png" />
                <link rel="icon" href="/images/favicon.png" />
                <link rel="preload" as="image" href="/images/lines1.png" />
            </Head>
            <section  className="pt-[113px] md:pt-[100px]">
            <article className="md:px-6 xl:px-0 xl:container mx-auto flex-col-reverse flex md:flex-row items-center mb-[124px] md:mb-0">
                <div className="w-100p md:w-50p h-[363px] md:h-[622px] relative">
                    <Image src={ladiesgroup} alt="ladiesgroup" layout="fill" objectFit="contain" priority quality={90} />
                </div>
                <div className="w-100p md:w-50p md:p-5 pt-12">
                    <h1 className="text-42 text-center md:text-left md:text-56 font-paytone"><span className="text-pry ">Who</span> are we?</h1>
                    <br />
                   <div className="font-fellix">
                        <p className="text-para2 text-18 text-center md:text-left px-[20px] md:px-0">Dreams & Degrees is a digital Sisterhood that exists to connect, educate, and empower ambitious females passionate about technology and entrepreneurship.</p>
                        <br />
                        <p className="text-para2 text-18 text-center md:text-left px-[20px] md:px-0">
                        We are leveraging digital technologies in building a female-focused community with members that thrive daily towards becoming the best version of themselves whilst making a difference in their world.
                        </p>
                        <br />
                        <p className="text-para2 text-18 text-center md:text-left px-[20px] md:px-0">While most of our initiatives are geared towards supporting females in technology and  entrepreneurship, our goal at Dreams & Degrees is to provide opportunities that would enable success for all women.</p>
                   </div>
                </div>
            </article>
            </section>
            <Impact />
            <Membership />
            <section className="mb-[124px] mt-[100px] md:mt-0 ">
                <GetInvolved />
            </section>
        </div>
    )
    
}