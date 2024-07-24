import BButton from "./BButton"
import rightbrown from "../public/images/rightbrown.png"
import Image from "next/image"

export default function IntershipProgram(){

    return(
        <div id="#intership">
            <article >
                <h4 className='text-[21px] text-[#1A202C] font-[700] mb-[24px]'>Internship (Coming soon)</h4>
                <p className='text-para2 text-18 font-[400] leading-[24px]'>Dreams & Degrees is currently working to introduce a program that offers females interested in technology the opportunity to gain real world experience, invaluable training as well as confidence and network building by partnering with industry leaders to place young females directly into the workforce as interns. 
                Interested in becoming an intern? </p>
                <div className="w-[230px] mt-[24px]">
                    <BButton width="100%" backgroundColor="#D68676" padding="15px 0" color="white" fontSize="16px" involedAs="internship waitlist">
                            <span>Join our waitlist</span>
                            <div className='ml-[10px] w-[22px] h-[22px] rounded-full bg-[#ffff] flex items-center justify-center'>
                                        <div className="relative w-[10px] h-[10px]">
                                            <Image src={rightbrown}  alt="rightbrown" layout="fill" quality={100}  />
                                        </div>
                                </div>
                    </BButton>
                </div>
            </article>
            <article className="mt-[56px]">
                <h4 className='text-[21px] text-[#1A202C] font-[700] mb-[24px]'>Industry/Corporate Partners</h4>
                <p className='text-para2 text-18 font-[400] leading-[24px]'>We are open for partnerships with organizations that have an established tech team, committed to diversity and can provide an inclusive and supportive learning environment. If you're looking to increase the diversity in your tech teams and are seeking passionate and talented individuals who will grow and learn at your company, fill out the form below and tell us about your organisation. We'll then contact you to organise a time to chat more.</p>
                <div className="w-[230px] mt-[24px]">
                    <BButton width="100%" backgroundColor="#D68676" padding="15px 0" color="white" fontSize="16px" involedAs="partnership/sponsorship">
                            <span >Apply here</span>
                            <div className='ml-[10px] w-[22px] h-[22px] rounded-full bg-[#ffff] flex items-center justify-center'>
                                        <div className="relative w-[10px] h-[10px]">
                                            <Image src={rightbrown}  alt="rightbrown" layout="fill" quality={100}  />
                                        </div>
                                </div>
                    </BButton>
                </div>
            </article>
        </div>
    )

}