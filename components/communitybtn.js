import Image from "next/image"
import rightwhite from "../public/images/rightwhite.png"
import BButton from "./BButton"




export default function CommunityBtn(){

    return (
        <div className="flex justify-center  md:mb-[120px]">
            <BButton backgroundColor="transparent" border="2px solid #D68676" padding="15px 20px" color="#D68676" involedAs="join the community">
                                    <span className="text-16 font-[600]">Join the community</span>
                                    <div className='ml-[10px] w-[22px] h-[22px] rounded-full bg-[#D68676] flex items-center justify-center'>
                                            <div className="relative w-[15px] h-[15px]">
                                                <Image src={rightwhite}  alt="rightwhite" layout="fill" quality={100}  />
                                            </div>
                                    </div>
                    </BButton>
        </div>
    )

}

