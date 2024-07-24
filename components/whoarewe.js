import Image from "next/image"
import ladiesgroup from "../public/images/ladiesgroup.png"
import { motion } from "framer-motion"


export default function WhoWeAre(){

    return (
        <section >
            <article className="md:px-6 xl:px-0 xl:container mx-auto flex-col-reverse flex md:flex-row items-center mb-[124px] md:mb-0">
                <div 
                className="w-100p md:w-50p h-[363px] md:h-[622px] relative">
                    <Image src={ladiesgroup} alt="ladiesgroup" layout="fill" objectFit="contain" priority quality={90} />
                </div>
                <div
                 className="w-100p md:w-50p md:p-5 pt-12">
                    <h1 className="text-42 text-center md:text-left md:text-56 font-paytone"><span className="text-pry">Who</span> are we?</h1>
                    <br />
                    <div className="font-fellix">
                        <p className="text-para2 text-18 text-center md:text-left px-[20px] md:px-0">Dreams & Degrees is a digital Sisterhood that exists to connect, educate, and empower ambitious females passionate about technology and entrepreneurship.</p>
                        <br />
                        <p className="text-para2 text-18 text-center md:text-left px-[20px] md:px-0">
                        We are leveraging digital technologies in building a female-focused community with members that thrive daily towards becoming the best version of themselves whilst making a difference in their world.</p>
                    </div>
                </div>
            </article>
        </section>
    )

}