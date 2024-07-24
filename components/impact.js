import Image from "next/image"
import tech from "../public/images/tech.png"
import eng from "../public/images/eng.png"
import ent from "../public/images/ent.png"

export default function Impact(){

    return(
        <section>
            <div className="px-6 xl:px-0 xl:container mx-auto">
            <h1 
            className="text-42 md:text-56 text-center mt-10 leading-[59px] font-paytone">Our Areas of <span className='text-pry'>Impact</span></h1> 
            <br /> 
            <p  className="text-para2 text-18 xl:w-747 mx-auto text-center font-fellix  md:mb-[50px]">
            While most of our initiatives are geared towards supporting females in technology and entrepreneurship, our goal at Dreams & Degrees is to provide opportunities that would enable success for all women.</p>
            <article 
            className="md:container md:mx-auto xl:w-[820px] mt-[94px] md:mt-0  flex justify-between flex-col md:flex-row font-fellix">
                <div className="md:w-[45%]  text-center flex flex-col justify-center items-center">
                    <div className="relative w-[137px] h-[137px] md:w-[146px] md:h-[146px] rounded-full shadow-[0px_5.84px_33.58px_rgba(196, 196, 196, 0.15)]">
                        <Image src={tech} alt="tech" layout="fill" quality={90} />
                    </div>  
                    <b className="my-4 block text-21 ">Technology</b> 
                    <p className="xl:w-[413px] text-para2 text-18">Bridge the gender and skill gap in technology through group and/or 1:1 mentoring, Accountability buddy initiative and internship opportunities.</p> 
                </div>    
                <div className="md:w-[45%] text-center flex flex-col justify-center items-center md:mt-0 mt-20">
                    <div className="relative w-[137px] h-[137px] md:w-[146px] md:h-[146px] rounded-full shadow-[0px_5.84px_33.58px_rgba(196, 196, 196, 0.15)]">
                        <Image src={ent} alt="ent" layout="fill" quality={90} />
                    </div>  
                    <b className="my-4 block text-21">Entrepreneurship</b> 
                    <p className="xl:w-[413px] text-para2 text-18">Increase access to funds and investment opportunities for female founders/ entrepreneurs through provision of business grants.</p>
                </div> 
            </article> 
            <article 
            className="flex justify-center flex-col items-center mt-20 md:mt-5 font-fellix">
                    <div className="text-center flex flex-col justify-center items-center">
                        <div className="relative  w-[137px] h-[137px] xl:w-[146px] md:h-[146px] rounded-full shadow-[0px_5.84px_33.58px_rgba(196, 196, 196, 0.15)]">
                            <Image src={eng} alt="eng" layout="fill" objectFit="contain" quality={90}/>
                        </div>  
                        <b className="my-4 block text-21">Community Engagement</b> 
                        <p className="xl:w-[413px] text-para2 text-18">Provide value-based community for likeminded females to explore and do life together through virtual meets/hangouts, online events, webinars and workshops.</p>
                    </div> 
            </article>
            </div>
        </section>
    )

}