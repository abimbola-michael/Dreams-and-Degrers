import BButton from "./BButton"
import star from "../public/images/star.png"
import Image from "next/image"
import rightbrown from "../public/images/rightbrown.png"
import rightwhite from "../public/images/rightwhite.png"



export default function BusinessGrants(){

    return (
        <div>
            <article className="mb-[32px]">
                <h4 className='text-[21px] text-[#1A202C] font-[700] mb-[24px]'>D&D Business Grant (Coming Soon)</h4>
                <p className='text-para2 text-18 font-[400] leading-[24px]'>Our small business grants are designed for female entrepreneurs in Africa. The grant would be open to for-profit businesses that are one to three years old and woman led. In addition to the grant, grant winners also get to be featured on our website, newsletter and social media platforms. For a person to be eligible for the grant they must:
                </p>
            </article>
            <article className="mb-[32px]">
                <div className="flex items-center mb-[16px]">
                    <div className="w-[35px] h-[35px] flex items-center justify-center">
                        <div className="relative w-[15px] h-[15px]">
                            <Image src={star} alt="star" layout="fill" quality={100}  priority />
                        </div>
                    </div>
                    <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Be a member of the Dreams&Degrees community
                    </p>
                </div>  
                <div className="flex items-center mb-[16px]">
                    <div className="w-[35px] h-[35px] flex items-center justify-center">
                        <div className="relative w-[15px] h-[15px]">
                            <Image src={star} alt="star" layout="fill" quality={100}  priority />
                        </div>
                    </div>
                    <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Be earning revenue already
                    </p>
                </div>  
                <div className="flex items-center mb-[16px]">
                    <div className="w-[35px] h-[35px] flex items-center justify-center">
                        <div className="relative w-[15px] h-[15px]">
                            <Image src={star} alt="star" layout="fill" quality={100}  priority />
                        </div>
                    </div>
                    <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Be a woman

                     </p>
                </div>  
                <div className="flex items-center mb-[16px]">
                    <div className="w-[35px] h-[35px] flex items-center justify-center">
                        <div className="relative w-[15px] h-[15px]">
                            <Image src={star} alt="star" layout="fill" quality={100}  priority />
                        </div>
                    </div>
                    <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Be a registered business

                    </p>
                </div>
                <div className="flex items-center mb-[16px]">
                    <div className="w-[35px] h-[35px] flex items-center justify-center">
                        <div className="relative w-[15px] h-[15px]">
                            <Image src={star} alt="star" layout="fill" quality={100}  priority />
                        </div>
                    </div>
                    <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Be 18years or older by the end of the application submission period.

                    </p>
                </div>
                <div className="flex items-center mb-[16px]">
                    <div className="w-[35px] h-[35px] flex items-center justify-center">
                        <div className="relative w-[15px] h-[15px]">
                            <Image src={star} alt="star" layout="fill" quality={100}  priority />
                        </div>
                    </div>
                    <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Have a business that operates in Nigeria.
                    </p>
                </div>
                <div className="mt-[29px]">
                    <p className="work_para text-para2 text-18 font-[400] leading-[24px]">Keep your eye open for all the details in this section of the website and our social media pages.
                    </p>
                    <div className="mt-[32px] flex xl:flex-row flex-col">
                        <div className="md:w-[100%] xl:w-[40%] xl:mb-0 mb-3">
                            <BButton backgroundColor="#D68676" padding="15px" color="white" width="100%" involedAs="join the community">
                                <span className="text-16 font-[600]">Join the community</span>
                                <div className='ml-[10px] w-[22px] h-[22px] rounded-full bg-[#ffff] flex items-center justify-center'>
                                    <div className="relative w-[10px] h-[10px]">
                                        <Image src={rightbrown}  alt="rightbrown" layout="fill" quality={100}  />
                                    </div>
                                </div>                    
                            </BButton>
                        </div>
                        <div className="xl:mt-0 xl:ml-5 mt-[24px] xl:grow xl:w-0 w-100p">
                                <BButton backgroundColor="white" border="2px solid #D68676" padding="15px" color="#D68676" width="100%" involedAs="partnership/sponsorship">
                                    <span className="text-16 font-[600]">Become a partner/sponsor</span>
                                    <div className='ml-[10px] w-[22px] h-[22px] rounded-full bg-[#D68676] flex items-center justify-center'>
                                        <div className="relative w-[15px] h-[15px]">
                                            <Image src={rightwhite}  alt="rightwhite" layout="fill"  quality={100}  />
                                        </div>
                                    </div>                    
                                </BButton>
                        </div>
                    </div>
                </div>
        </article>
        </div>
    )

}