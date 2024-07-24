import Image from "next/image"
import owner from "../public/images/owner.png"
import chief from "../public/images/chief.png"
import lead from "../public/images/lead.png"
import manager from "../public/images/manager.png"
import android from "../public/images/android.png"
import ios from "../public/images/ios.png"
import marketing from "../public/images/marketing.png"




export default function MeetTheTeam(){

    return(
        <div className="mt-[151px] mb-[149px]">
            <h1 className="text-42 md:text-56 text-center  font-bold font-paytone">Meet the <span className="text-pry">Team</span></h1>
            <div className="md:px-10 xl:px-0xl:container mx-auto  py-10 font-fellix">
                <div className="flex md:grid grid-cols-2 xl:flex justify-evenly flex-col md:flex-row">
                    <div className='inline-block text-center mt-[56px] xl:mb-0'>
                        <div className="md:w-125 md:h-125 w-[130px] h-[130px] relative mx-auto">
                            <Image src={owner}  alt="owner" quality={100} objectFit="contain" layout="fill"/>
                        </div>
                        <span className='font-[600] text-mt  text-22 block mt-[32px] mb-[8px]'>Kevin Lowe</span>
                        <small className="text-18 font-[400] block text-mt opacity-[0.5]">Owner & Founder</small>
                    </div>
                    <div className='inline-block  text-center mt-[56px] xl:mb-0 '>
                        <div className="md:w-125 md:h-125 w-[130px] h-[130px]  relative mx-auto">
                            <Image src={chief}  alt="chief" quality={100} objectFit="contain"  layout="fill"/>
                        </div>
                        <span className='font-[600] text-mt  text-22 block mt-[32px] mb-[8px]'>Dennis Soto</span>
                        <small className="text-18 font-[400] block text-mt opacity-[0.5]">Chief Product Officer</small>
                    </div>
                    <div className='inline-block  text-center mt-[56px] xl:mb-0'>
                        <div className="md:w-125 md:h-125 w-[130px] h-[130px]  relative mx-auto">
                            <Image src={lead}  alt="lead" quality={100} objectFit="contain"  layout="fill"/>
                        </div>
                        <span className='font-[600] text-mt  text-22 block mt-[32px] mb-[8px]'>Henrietta Johnston</span>
                        <small className="text-18 font-[400] block text-mt opacity-[0.5]">Lead Product Design</small>
                    </div>
                    <div className='inline-block  text-center mt-[56px] xl:mb-0'>
                        <div className="md:w-125 md:h-125 w-[130px] h-[130px]  relative mx-auto">
                            <Image src={manager}  alt="manager" quality={100} objectFit="contain"  layout="fill"/>
                        </div>
                        <span className='font-[600] text-mt  text-22 block mt-[32px] mb-[8px]'>Catherine Graham</span>
                        <small className="text-18 font-[400] block text-mt opacity-[0.5]">Project Manager</small>
                    </div>
                </div>
                <div className="flex justify-evenly flex-col md:flex-row mt-[56px] xl:w-[924px] mx-auto">
                <div className='inline-block  text-center'>
                        <div className="md:w-125 md:h-125 w-[130px] h-[130px]  relative mx-auto">
                            <Image src={marketing}  alt="marketing" quality={100} objectFit="contain"  layout="fill"/>
                        </div>
                        <span className='font-[600] text-mt  text-22 block mt-[32px]  mb-[8px]'>Francisco Rios</span>
                        <small className="text-18 font-[400] block text-mt opacity-[0.5]">Marketing</small>
                    </div>
                    <div className='inline-block  text-center  mt-[56px] md:mt-0'>
                        <div className="md:w-125 md:h-125 w-[130px] h-[130px]  relative mx-auto">
                            <Image src={android}  alt="android" quality={100} objectFit="contain"  layout="fill"/>
                        </div>
                        <span className='font-[600] text-mt  text-22 block mt-[32px] mb-[8px]'>Gertrude Davidson</span>
                        <small className="text-18 font-[400] block text-mt opacity-[0.5]">Android Developer</small>
                    </div>
                    <div className='inline-block  text-center mt-[56px] md:mt-0'>
                        <div className="md:w-125 md:h-125 w-[130px] h-[130px]  relative mx-auto">
                            <Image src={ios}  alt="ios" quality={100} objectFit="contain"  layout="fill"/>
                        </div>
                        <span className='font-[600] text-mt  text-22 block mt-[32px] mb-[8px]'>Joshua Delgado</span>
                        <small className="text-18 font-[400] block text-mt opacity-[0.5]">iOS Developer</small>
                    </div>
                </div>
            </div>
        </div>
    )

}