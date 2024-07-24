import Image from "next/image"
import rightbrown from "../public/images/rightbrown.png"
import BButton from "./BButton"
import { MenuContext } from "./context"
import { useContext } from "react"



export default function GetInvolved(){


    return (
        <div id="getinvolved">
            <div className="md:px-6 xl:px-0 xl:container mx-auto p-6 md:p-0">
                <h1 className="text-center text-42 md:text-56 md:text-left mb-[64px] font-paytone">Get <span className="text-pry">Involved</span></h1>
               <div className="flex md:flex-row flex-col justify-between text-[#fff] min-h-[1569px] lg:min-h-[500px] md:min-h-[470px] xl:min-h-[539px] font-fellix">
                    <div className="speaker rounded-[32px] h-[502px] md:h-auto text-center flex  flex-col justify-end pb-[55px] md:w-[270px] xl:w-[374px] lg:w-[305px]">
                        <h4 className="text-22 font-[700]">Become a D&D Speaker</h4>
                        <p className='text-16 font-[400] px-5 mt-[8px] mb-[24px]'>Inspire females by voluteering to speak in our virtual events </p>
                        <div className="speaker_btn flex justify-center">
                            <span className='speaker_btn block  w-[70%]'>
                            <BButton padding='15px 0' width="100%" backgroundColor="#D68676" involedAs="speaker">
                                <span className="mr-2 applyspeaker" data-name="speaker">Apply</span>
                                <div className="bg-[white] w-[25px] h-[25px] flex justify-center items-center rounded-full">
                                    <div className="speaker_btn relative w-[15px] h-[15px]">
                                        <Image src={rightbrown} alt="rightbrown" layout="fill" objectFit="contain" quality={100} />
                                    </div>
                                </div>
                            </BButton>
                            </span>
                        </div>
                    </div>
                    <div className="rounded-[32px] h-[502px] md:h-auto justify-between flex flex-col md:w-[270px] lg:w-[305px] xl:w-[374px]">
                        <div className="volunteer  rounded-[32px] h-[237px] md:h-[220px] lg:h-[235.5px] xl:h-[250px] flex flex-col justify-end pb-[24px] text-center">
                            <h4 className="text-22 font-[700] mb-[24px]">Become a Volunteer</h4>
                            <div className="volunteer_btn flex justify-center">
                                <span className='volunteer_btn block  w-[70%]'>
                                    <BButton padding='15px 0' width="100%" backgroundColor="#D68676" involedAs="Volunteer">
                                        <span className="mr-2">Apply</span>
                                        <div className="bg-[white] w-[25px] h-[25px] flex justify-center items-center rounded-full">
                                            <div className="volunteer_btn relative w-[15px] h-[15px]">
                                                <Image src={rightbrown} alt="rightbrown" layout="fill" objectFit="contain" quality={100} />
                                            </div>
                                        </div>
                                    </BButton>
                                </span>    
                            </div>
                        </div>
                        <div className="mentor rounded-[32px] h-[237px] md:h-[220px] lg:h-[235.5px]  xl:h-[250px] flex flex-col justify-end pb-[24px] text-center">
                        <h4 className="text-22 font-[700] mb-[24px]">Become a Tech Mentor</h4>
                            <div className="mentor_btn flex justify-center">
                            <span className='mentor_btn block  w-[70%]'>
                                <BButton padding='15px 0' width="100%" backgroundColor="#D68676" involedAs="mentorship">
                                        <span className="mr-2">Apply</span>
                                        <div className="bg-[white] w-[25px] h-[25px] flex justify-center items-center rounded-full">
                                            <div className="mentor_btn relative w-[15px] h-[15px]">
                                                <Image src={rightbrown} alt="rightbrown" layout="fill" objectFit="contain" quality={100} />
                                            </div>
                                        </div>
                                    </BButton>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className="sponsor rounded-[32px] md:w-[270px] lg:w-[305px] xl:w-[374px] h-[502px] md:h-auto  flex flex-col justify-end pb-[55px] text-center">
                    <h4 className="text-22 font-[700] mb-[24px]">Become a Partner / Sponsor</h4>
                        <div className="sponsor_btn flex justify-center">
                        <span className='sponsor_btn block  w-[70%]'>
                            <BButton padding='15px 0' width="100%" backgroundColor="#D68676" involedAs="partnership/sponsorship">
                                <span className="mr-2">Apply</span>
                                <div className="bg-[white] w-[25px] h-[25px] flex justify-center items-center rounded-full">
                                    <div className="sponsor_btn relative w-[15px] h-[15px]">
                                        <Image src={rightbrown} alt="rightbrown" layout="fill" objectFit="contain" quality={100} />
                                    </div>
                                </div>
                            </BButton>
                        </span>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    )

}