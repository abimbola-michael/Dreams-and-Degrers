import Image from "next/image"
import star from "../public/images/star.png"
import BButton from './BButton'
import rightbrown from "../public/images/rightbrown.png"
import rightwhite from "../public/images/rightwhite.png"
import Link from "next/link"



export default function Membership(){

    return (
        <section className="mt-[157px] md:mt-[107px] md:mb-[210px]">
            <div className="px-6 xl:px-0 xl:container mx-auto">
            <h1 className='text-42 xl:text-56 mb-[32px] md:mb-0 text-center font-paytone'>Membership <span className="text-pry">Benefits</span></h1>
            <div className='xl:w-[1024px] mx-auto mt-[32px] grid grid-cols-1 md:grid-cols-2 gap-7 font-fellix'>
                <article className="flex items-center text-center md:text-left flex-col md:flex-row">
                    <span className='block w-[23px] h-[23px] relative mr-[23px]'>
                        <Image src={star} layout="fill" objectFit="contain" quality={100}/>
                    </span>
                    <p className="text-mtext text-16 font-[600] mt-[16px] xl:mt-0">Mentorship: Learn from experienced professionals in technology.</p>
                </article>
                <article className="flex items-center text-center md:text-left flex-col md:flex-row">
                    <span className='block w-[23px] h-[23px] relative mr-[23px]'>
                        <Image src={star} layout="fill" objectFit="contain" quality={100}/>
                    </span>
                    <p className="text-mtext text-16 font-[600] mt-[16px] md:mt-0">Access to organized webinars, Workshop and events.</p>
                </article>
                <article className="flex items-center text-center md:text-left flex-col md:flex-row">
                    <span className='block w-[33px] h-[33px] relative mr-[23px] '>
                        <Image src={star} layout="fill" objectFit="contain" quality={100}/>
                    </span>
                    <p className="text-mtext text-16 font-[600]">Book/schedule a 1:1 session with an experienced professional in tech instantly when you join our slack community.</p>
                </article>
                <article className="flex items-center text-center md:text-left flex-col md:flex-row">
                    <span className='block w-[33px] h-[33px] relative mr-[23px]'>
                        <Image src={star} layout="fill" objectFit="contain" quality={100}/>
                    </span>
                    <p className="text-mtext text-16 font-[600] mt-[16px] md:mt-0">Build your Network: Connect, make friends in the slack community and virtual hangouts. </p>
                </article>
                <article className="flex items-center text-center md:text-left  flex-col md:flex-row">
                    <span className='block w-[23px] h-[23px] relative mr-[23px]'>
                        <Image src={star} layout="fill" objectFit="contain" quality={100}/>
                    </span>
                    <p className="text-mtext text-16 font-[600] mt-[16px] md:mt-0">Access to 3 months female-focused technology mentorship program.</p>
                </article>
                <article className="flex items-center text-center md:text-left flex-col md:flex-row">
                    <span className='block w-[33px] h-[33px] relative mr-[23px]'>
                        <Image src={star} layout="fill" objectFit="contain" quality={100}/>
                    </span>
                    <p className="text-mtext text-16 font-[600] mt-[16px] md:mt-0">Get matched with an Accountability buddy to help you stay motivated in your tech journey.</p>
                </article>
            </div>
            <section className="flex justify-center mt-[48px] md:flex-row flex-col font-fellix">
                <div className="md:w-[484px]  mx-auto flex justify-between  md:flex-row flex-col">
                    <span className="w-[230px] mb-4">
                        <Link href="/programs/0">
                            <a>
                                <BButton width="100%" fontSize="16px" backgroundColor="#D68676" padding="15px 0" color="white">
                                <span>Get Started</span>
                                <div className='ml-[10px] w-[22px] h-[22px] rounded-full bg-[#ffff] flex items-center justify-center'>
                                            <div className="relative w-[10px] h-[10px]">
                                                <Image src={rightbrown}  alt="rightbrown" layout="fill" quality={100}  />
                                            </div>
                                    </div>
                            </BButton>
                            </a>
                        </Link>
                    </span>
                    <span className="w-[230px]">
                        <Link href="#getinvolved">
                            <a>
                                <BButton width="100%" fontSize="16px"  backgroundColor="transparent" border="2px solid #D68676" padding="15px 0" color="#D68676">
                                <span>Get Involved</span>
                                <div className='ml-[10px] w-[22px] h-[22px] rounded-full bg-[#D68676] flex items-center justify-center'>
                                        <div className="relative w-[15px] h-[15px]">
                                            <Image src={rightwhite}  alt="rightwhite" layout="fill" quality={100}  />
                                        </div>
                                </div>
                                </BButton>
                            </a>
                        </Link>
                    </span>
                </div>
            </section>
            </div>
        </section>
    )

}