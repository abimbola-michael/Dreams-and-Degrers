import BButton from "./BButton"
import dynamic from "next/dynamic"
import rightbrown from "../public/images/rightbrown.png"
import Image from "next/image"

const Reviews = dynamic(() => import ("./reviews"))

export default function SessionProgram(){

    return (
        <div >
            <article className="mb-[32px]">
                <h4 className='text-[21px] text-[#1A202C] font-[700] mb-[24px]'>Book a 1:1 Session with a Tech Mentor.</h4>
                <p className='text-para2 text-18 font-[400] leading-[24px]'>Book/schedule a 1:1 session with an experienced professional in tech instantly when you join our slack community.</p>
                <div className="w-[230px] mt-[24px]">
                        <BButton width="100%" backgroundColor="#D68676" padding="15px 0" color="white" fontSize="16px" involedAs="join the community">
                                <span >Join the community</span>
                                <div className='ml-[10px] w-[22px] h-[22px] rounded-full bg-[#ffff] flex items-center justify-center'>
                                    <div className="relative w-[10px] h-[10px]">
                                                <Image src={rightbrown}  alt="rightbrown" layout="fill" quality={100}  />
                                    </div>
                                </div>
                        </BButton>
                </div>
            </article>
            <article className='mb-[32px]'>
                <h4 className='text-[21px] text-[#1A202C] font-[700] mb-[24px]'>How it works</h4>
                <div className="flex items-center mb-[16px]">
                    <span className="bg-[#F9EEEB] text-pry text-14 font-[700]  relative w-[40px] h-[40px] rounded-full justify-center flex items-center">1</span>
                    <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Request an invite to join our exclusive Slack Community.</p>
                
                </div>
                <div className="flex items-center mb-[16px]">
                <span className="bg-[#F9EEEB] text-pry text-14 font-[700]  relative w-[40px] h-[40px] rounded-full justify-center flex items-center">2</span>
                <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Introduce yourself in the #hello-techies channel</p>
            
                </div>
                <div className="flex items-center mb-[16px]">
                    <span className="bg-[#F9EEEB] text-pry text-14 font-[700]  relative w-[40px] h-[40px] rounded-full justify-center flex items-center">3</span>
                    <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Hop on to the #book-a-1:1-session channel to schedule a time with a tech mentor in your tech area of interest.</p>
                </div>         
            </article>
            <article  className="review_slide md:w-[480px] lg:w-[600px] xl:w-[650px]">
                <h4 className='text-[21px] text-[#1A202C] font-[700] mb-[24px]'>Reviews</h4>
                <section className="mt-[32px] relative">
                    <Reviews />
                </section>
                
            </article>
        </div>
    )

}