
import Image from "next/image"
import star from "../public/images/star.png"
import BButton from "./BButton"
import dynamic from "next/dynamic"
import rightbrown from "../public/images/rightbrown.png"


const Reviews = dynamic(() => import ("./reviews"))



export default function TechnologyProgram(){

    return (
        <div >
            <article className="mb-[32px]">
                <h4 className='text-[21px] text-[#1A202C] font-[700] mb-[24px]'>Technology Mentorship Program</h4>
                <p className='text-para2 text-18 font-[400] leading-[24px]'>This is a technology mentoring program which aims to provide vibrant and ambitious young women in the information technology industry or women wanting to transition into the field of IT with adequate access to support, encouragement, and advice from experienced individuals through a virtual mentoring relationship. Mentors and mentees will be matched according to application details, interests, experience, and goals. During this time, participants will be able to communicate with each other via video calls, emails, chat and / or phone calls.</p>
                <div className="md:block hidden w-[230px] mt-[24px]">
                    <BButton width="100%" backgroundColor="#D68676" padding="15px 0" color="white" fontSize="16px" involedAs="Technology mentorship program">
                            <span >Apply here</span>
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
                <div className="flex  mb-[16px]">
                    <span className="bg-[#F9EEEB] text-pry text-14 font-[700]  relative w-[40px] h-[40px] rounded-full justify-center flex items-center">1</span>
                    <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Register and onboard mentees whose goals and interests align with those of the program.</p>
                
                </div>
                <div className="flex  mb-[16px]">
                <span className="bg-[#F9EEEB] text-pry text-14 font-[700]  relative w-[40px] h-[40px] rounded-full justify-center flex items-center">2</span>
                <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Mentees are given access to D&D skill up, a structure that includes 3 months of technical training, workshops, soft skills & build season [ where mentees work on projects that reflect their current skill upgrade].</p>
            
                </div>
                <div className="flex mb-[16px]">
                <span className="bg-[#F9EEEB] text-pry text-14 font-[700]  relative w-[40px] h-[40px] rounded-full justify-center flex items-center">3</span>
                <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Personalized check-in sessions with Mentors.</p>
            
            </div>         
        </article>
        <article className="mb-[32px]">
            <h4 className='text-[21px] text-[#1A202C] font-[700] mb-[24px]'>Program Objectives</h4>
            <div className="flex items-center mb-[16px]">
                <div className="w-[35px] h-[35px] flex items-center justify-center">
                    <div className="relative w-[15px] h-[15px]">
                        <Image src={star} alt="star" layout="fill" quality={100}  priority />
                    </div>
                </div>
                <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Provide personalized check-in sessions with mentors.</p>
            </div>  
            <div className="flex  mb-[16px]">
                <div className="w-[35px] h-[35px] flex items-center justify-center">
                    <div className="relative w-[15px] h-[15px]">
                        <Image src={star} alt="star" layout="fill" quality={100}  priority />
                    </div>
                </div>
                <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Increase and improve opportunities and outcomes for women in technology.</p>
            </div>  
            <div className="flex items-center mb-[16px]">
                <div className="w-[35px] h-[35px] flex items-center justify-center">
                    <div className="relative w-[15px] h-[15px]">
                        <Image src={star} alt="star" layout="fill" quality={100}  priority />
                    </div>
                </div>
                <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Foster self-confidence amongst women in technology.</p>
            </div>  
            <div className="flex mb-[16px]">
                <div className="w-[35px] h-[35px] flex  justify-center">
                    <div className="relative w-[15px] h-[15px]">
                        <Image src={star} alt="star" layout="fill" quality={100}  priority />
                    </div>
                </div>
                <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Empower IT undergraduate and young women in the industry, giving them a clearer pathway to their field of interest.</p>
            </div>
        </article>
        <article className="mb-[32px]">
            <h4 className='text-[21px] text-[#1A202C] font-[700] mb-[24px]'>Benefits of the Program</h4>
            <h6 className="text-[#1A202C] font-[700] text-18 mb-[21px]">Mentors</h6>
            <div className="flex items-center mb-[16px]">
                <div className="w-[35px] h-[35px] flex items-center justify-center">
                    <div className="relative w-[15px] h-[15px]">
                        <Image src={star} alt="star" layout="fill" quality={100}  priority />
                    </div>
                </div>
                <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Mentors can make a difference in the lives of young women in the IT space. </p>
            </div>  
            <div className="flex items-center mb-[16px]">
                <div className="w-[35px] h-[35px] flex items-center justify-center">
                    <div className="relative w-[15px] h-[15px]">
                        <Image src={star} alt="star" layout="fill" quality={100}  priority />
                    </div>
                </div>
                <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Serves as a Medium through which contribution can be made to the IT industry .</p>
            </div>  
            <div className="flex items-center mb-[16px]">
                <div className="w-[35px] h-[35px] flex items-center justify-center">
                    <div className="relative w-[15px] h-[15px]">
                        <Image src={star} alt="star" layout="fill" quality={100}  priority />
                    </div>
                </div>
                <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Allows for the development and improvement of mentoring skills (listening, guiding, providing feedback, communication, and interpersonal skills. </p>
            </div>  
            <div className="flex items-center mb-[16px]">
                <div className="w-[35px] h-[35px] flex items-center justify-center">
                    <div className="relative w-[15px] h-[15px]">
                        <Image src={star} alt="star" layout="fill" quality={100}  priority />
                    </div>
                </div>
                <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Help Mentors improve on their leadership skills.</p>
            </div>
            <div className="flex items-center mb-[16px]">
                <div className="w-[35px] h-[35px] flex items-center justify-center">
                    <div className="relative w-[15px] h-[15px]">
                        <Image src={star} alt="star" layout="fill" quality={100}  priority />
                    </div>
                </div>
                <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Allow mentors stay abreast of emerging issues relevant to the industry.</p>
            </div>
            <h6 className="text-[#1A202C] font-[700] text-18 mb-[21px]">Mentees</h6>
            <div className="flex items-center mb-[16px]">
                <div className="w-[35px] h-[35px] flex items-center justify-center">
                    <div className="relative w-[15px] h-[15px]">
                        <Image src={star} alt="star" layout="fill" quality={100}  priority />
                    </div>
                </div>
                <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Improved self-awareness and confidence.</p>
            </div>  
            <div className="flex items-center mb-[16px]">
                <div className="w-[35px] h-[35px] flex items-center justify-center">
                    <div className="relative w-[15px] h-[15px]">
                        <Image src={star} alt="star" layout="fill" quality={100}  priority />
                    </div>
                </div>
                <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Clearer career direction.</p>
            </div>  
            <div className="flex items-center mb-[16px]">
                <div className="w-[35px] h-[35px] flex items-center justify-center">
                    <div className="relative w-[15px] h-[15px]">
                        <Image src={star} alt="star" layout="fill" quality={100}  priority />
                    </div>
                </div>
                <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Better communication, listening and feedback skills.</p>
            </div>  
            <div className="flex items-center mb-[16px]">
                <div className="w-[35px] h-[35px] flex items-center justify-center">
                    <div className="relative w-[15px] h-[15px]">
                        <Image src={star} alt="star" layout="fill" quality={100}  priority />
                    </div>
                </div>
                <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Professional growth and career planning.</p>
            </div>
            <div className="flex items-center mb-[16px]">
                <div className="w-[35px] h-[35px] flex items-center justify-center">
                    <div className="relative w-[15px] h-[15px]">
                        <Image src={star} alt="star" layout="fill" quality={100}  priority />
                    </div>
                </div>
                <p className='work_para ml-[16px] text-para2 text-18 font-[400] leading-[24px]'>Build networking opportunities.</p>
            </div>
        </article>
        <article  className="review_slide  md:w-[480px] lg:w-[600px] xl:w-[650px]">
                <h4 className='text-[21px] text-[#1A202C] font-[700] mb-[24px]'>Mentees Reviews</h4>
                <section className="mt-[32px] relative">
                    <Reviews />
                </section>
        </article>
    </div>
    )

}