
import Link from "next/link"
import Image from "next/image"
import footerlogo from "../public/images/footerlogo.png"
import f_fbook from "../public/images/f_fbook.png"
import f_insta from "../public/images/f_insta.png"
import f_twt from "../public/images/f_twt.png"
import BButton from "./BButton"



export default function Footer() {


    return (
        <div className='footer pt-[80px] pb-[150px] md:pb-[48px] text-[#fff] font-fellix'>
              <div>
              <div className='xl:container mx-auto px-6 md:px-10 text-white flex  flex-col md:flex-row justify-between  mb-[78px] md:mb-[129px]'>
                <div className="xl:w-100p flex justify-center md:block">
                    <div className='footer_form mt-[32px] md:mt-0 flex xl:flex-row flex-col'>
                        <div className="mt-2 xl:mt-0 font-[700]">
                            <span>
                                <BButton   fontSize="14px"   backgroundColor="white" color="#D68676" padding="15px 30px"  involedAs="join the community"><b className="uppercase">Join the community</b></BButton>
                            </span>           
                        </div>
                    </div>
                </div>
                <div className="footer_link md:mt-0 mt-[83px]">
                    <ul className="flex w-[100%] items-center md:w-[332px]  justify-between  md:flex-row flex-col">
                            <li >
                                <Link href="/">
                                    <a className="text-16 font-[700]" >Home</a>
                                </Link>
                            </li>
                            <li className="md:mt-0 mt-[40px]">
                                <Link href="/about">
                                    <a className="text-16 font-[700]"  >About</a>
                                </Link>
                            </li>
                            <li className="md:mt-0 mt-[40px]">
                                <Link href="/programs/0">
                                    <a className="text-16 font-[700]" >Programs</a>
                                </Link>
                            </li>
                            <li className="md:mt-0 mt-[40px]">
                                <Link href="/contact">
                                    <a className="text-16 font-[700]" >Contact</a>
                                </Link>
                            </li>
                    </ul>
                </div>
            </div>
            <div className="flex md:items-center justify-between xl:container mx-auto px-6 md:px-8 md:flex-row flex-col-reverse font-fellix">
                <small className="text-14 font-[400] text-center md:text-left">© 2022 Dreams&Degrees. All rights reserved.</small>
                <div className="footer_logo w-[165px] h-40  relative md:mr-12 md:mt-0 md:mb-0 mt-[68px] mb-[88px] mx-auto md:mx-0">
                    <Link href="/">
                        <a ><Image src={footerlogo}  layout="fill" quality={100} objectFit="contain"  /></a>
                    </Link>
                </div>
                <div className="flex w-[120px] justify-between mx-auto md:mx-0">
                    <div className="w-[24px] h-[20px] relative">
                        <a href="https://twitter.com/dreamsandegrees" target="_blank"><Image src={f_twt} alt="f_twt" layout="fill" quality={100} objectFit="contain"  /></a>
                    </div>
                    <div className="w-[24px] h-[20px] relative">
                        <a href="https://facebook.com/dreamsandegrees" target="_blank"><Image src={f_fbook} alt="f_fbook" layout="fill" quality={100} objectFit="contain"  /></a>
                    </div>
                    <div className="w-[24px] h-[20px] relative">
                        <a href="https://instagram.com/dreamsandegrees" target="_blank"><Image src={f_insta} alt="f_insta"  layout="fill" quality={100} objectFit="contain"  /></a>
                    </div>
                </div>
            </div>
              </div>
        </div>
    )

}