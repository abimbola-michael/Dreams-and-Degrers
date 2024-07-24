import BButton from "./BButton"
import rightbrown from "../public/images/rightbrown.png"
import Image from "next/image"


export default function AccountabilityProgam(){

    return(
        <div >
            <article >
                <h4 className='text-[21px] text-[#1A202C] font-[700] mb-[24px]'>Find an Accountability Buddy in Technology</h4>
                <p className='text-para2 text-18 font-[400] leading-[24px]'>Would you love to achieve your tech career goals with an accountability buddy/ group in 2022? <br /><br />Our accountability buddy program aims to match interested community members with ambitious, intentional and like-minded individual(s) in technology that would help you stay committed to your goals for the new year. With your accountability buddy, you get to have a mutual agreement to coach each other; providing feedback on a regular basis. During this daily or weekly feedback sessions, you get to share your wins, talk about your current challenges and so much more. We are hoping you get to connect and build solid relationships along the way. Click on the button below to join other members of the community as they choose to stay committed to achieving their 2022 goals.</p>
                <div className="w-[230px] mt-[24px]">
                        <BButton width="100%" backgroundColor="#D68676" padding="15px 0" color="white" fontSize="16px" involedAs="Accountability Buddy">
                            <span >Join now</span>
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