import Head from 'next/head'
import Image from "next/image"
import cmc from "../public/images/cmc.png"
import cc from "../public/images/cc.png"
import cm from "../public/images/cm.png"
import GetInvolved from '../components/getinvolved'
import { useForm } from '@formspree/react';
import { useState } from 'react'
import { Loader } from '../components/formcomponents/loader'
import f_insta from "../public/images/f_insta.png"
import f_twt from "../public/images/f_twt.png"


export default function Contact() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phonenumber, setPhoneNumber] = useState('')
    const [message, setMessage] = useState("")

    const [state, handleSubmit] = useForm(`${process.env.NEXT_PUBLIC_CONTACTUS}`);

    return(
        <div className="contact_bg  min-h-1/5 pt-[120px] md:pt-[180px]">
            <Head>
            <title>Dreams&Degrees</title>
                <meta name="keywords" content="Dreams and degrees, Digital sisterhood, females , connect, educate , empower, Ambitious" />
                <meta property="og:url" content="https://dreamsandegrees.com/contact.html" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Dreams and degrees" />
                <meta property="og:image" content="/images/favicon.png" />
                <meta property="og:site_name" content="dreamsandegrees" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@dreamsandegrees" />
                <meta name="twitter:url" content="https://dreamsandegrees.com/contact.html" />
                <meta name="twitter:title" content="Dreams and degrees" />
                <meta name="twitter:image" content="/images/favicon.png" />
            <link rel="preload" as="image" href="https://res.cloudinary.com/dimejiscloud/image/upload/q_auto:best/v1652026702/dd/aboutline_vgyj9u.png" />
            <link rel="icon" href="/images/favicon.png" />
            </Head>

            <div className='text-center font-fellix md:px-0 px-7'>
            <small className='text-bk text-14 font-[700] uppercase -tracking-[0.36px]'>Contact Us</small>
            <div className='text-bk text-48  font-[700] leading-[56px] mt-[40px] mb-[80px] -tracking-[2px]'> Get in Touch with us by filling the <br /> form below</div>
            <div className='contact_form mb-[146px]'>
                { state.succeeded ? <div className="text-[green] mb-5 text-18">thanks, form submitted successfully.</div> : "" }
                <form  onSubmit={handleSubmit}>
                    <label className='mb-[30px] block mx-auto'>
                        <input type='text' name="name" placeholder='Your name' className='p-[15px]  bg-fm rounded-[28px]' value={name} onChange={e => setName(e.target.value)} required />
                    </label>
                    <label className='mb-[30px] block  mx-auto '>
                        <input type='email' name="email"  placeholder='Your email' className='p-[15px] bg-fm rounded-[28px]'  value={email} onChange={e => setEmail(e.target.value)} required/>
                    </label>
                    <label className='mb-[30px] block mx-auto'>
                        <input type='tel' name="phone number"  placeholder='Your phone number' className='p-[15px] bg-fm rounded-[28px]'  value={phonenumber} onChange={e => setPhoneNumber(e.target.value)} required />
                    </label>
                    <label className='mb-[30px] block mx-auto'>
                        <textarea type='text' name="message"  placeholder='Your message' className='textarea h-[240px] p-[15px] bg-fm rounded-[28px]' value={message} onChange={e => setMessage(e.target.value)} required ></textarea>
                    </label>
                    <button className="contact_btn rounded-[28px] bg-pry text-[#ffff] text-16 font-[700]  py-[15px]">
                        {state.submitting  ?  <Loader color="#fff" /> : "Send a Message" }
                    </button>
                </form>
            </div>
            <div className="xl:w-[900px] xl:container md:w-[700px]  mx-auto xl:px-[20px] flex justify-between flex-col md:flex-row">
                <div className='flex flex-col items-center '>
                    <div className='relative w-[40px] h-[40px] '> 
                        <Image src={cm} alt="cm" layout='fill' quality={100}   />
                    </div>
                    <p className='text-18 mt-[31px] mb-[8px] text-bk block font-[700]'>Send a mail</p>
                    <p className='block text-[#594D6D] text-18 font-[400]'><a href= "mailto:hello@dreamsandegrees.com">hello@dreamsandegrees.com</a></p>
                </div>
                <div className='flex flex-col items-center mt-[76px] mb-[68px] md:mt-0 md:mb-0'>
                    <div className='relative w-[40px] h-[40px] '> 
                        <Image src={cc} alt="cc" layout='fill' quality={100}   />
                    </div>
                    <p className='text-18 mt-[31px] mb-[8px] text-bk block font-[700]'>Call us</p>
                    <p className='block text-[#594D6D] text-18 font-[400]'><a href="tel:+61473839657">+61473839657</a></p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='relative w-[40px] h-[40px] '> 
                        <Image src={cmc} alt="cmc" layout='fill' quality={100} />
                    </div>
                    <p className='text-18 mt-[31px] mb-[8px] text-bk block font-[700]'>Follow us on Twitter and Instagram</p>
                    <p className='block text-[#594D6D] text-18 font-[400]'>@dreamsandegrees</p>
                    <div className="flex mt-5">
                        <div className="w-[24px] h-[20px] relative mr-4">
                            <a href="https://twitter.com/dreamsandegrees" target="_blank"><Image src={f_twt} alt="f_twt" layout="fill" quality={100} objectFit="contain"  /></a>
                        </div>
                        <div className="w-[24px] h-[20px] relative">
                            <a href="https://instagram.com/dreamsandegrees" target="_blank"><Image src={f_insta} alt="f_insta"  layout="fill" quality={100} objectFit="contain"  /></a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className='mt-[188px] mb-[100px]'>
                <GetInvolved />
            </div>
        </div>
    )

}