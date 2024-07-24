import { TextInput, TextArea, SelectInput} from "./forminput"
import { useState } from "react"
import { FormHeader } from "./formhead"
import FormContainer from "./formcontainer"
import { FormButton } from "./formbutton"
import { useForm } from '@formspree/react';
import { useContext } from "react"
import {MenuContext} from "../context" 



export default function SpeakerAndPatnerForm({formkey}){

    const menucontext = useContext(MenuContext) 

    const { getInvolvedAs, setIsopenForm ,openForm} = menucontext

    const [Fullname, setFullname] = useState("")
    const [Email, setEmail] = useState("")
    const [CompanyWebsite, setCompanyWebsite] = useState("")
    const [InterestedIn, setinterestedIn] = useState("")
    const [Message, setMessage] = useState("")

    const [state, handleSubmit] = useForm(formkey);

    const options = getInvolvedAs === "speaker" ? ["Speaker"] : [ "Partnership", "Sponsorship" ]

    return (
        <FormContainer handleSubmit={handleSubmit} state={state}>
            { getInvolvedAs === "speaker" ? (
                <FormHeader  />
            ) : (
                <div className='flex justify-between mb-10 items-center sticky top-0 z-[2] bg-[#fff]'>
                <div className="text-[28px] uppercase font-paytone text-pry md:flex">
                    <p>Partnership/</p>
                    <p>Sponsorship</p>
                </div>
                <div className='w-[40px] h-[40px] 4xl:w-[110px] 4xl:h-[110px] 3xl:w-[60px] 3xl:h-[60px] rounded-full flex justify-center items-center flex-col cursor-pointer' onClick={() => setIsopenForm(!openForm)}>
                <div className='border-[1px] border-[#000] w-[14px] rotate-45 4xl:w-[44px] 3xl:w-[25px]'></div>
                    <div className='border-[1px] border-[#000] w-[14px] -rotate-45 -translate-y-[2px] 4xl:w-[44px] 4xl:-translate-y-[6px] 3xl:w-[25px]'></div>
            </div>
            </div>
            ) }
            <div className="text-18 mb-10">{ getInvolvedAs === "speaker"  ? "Inspire females by voluteering to speak in our virtual events" : "We are passionate about diversity and inclusion and are on the search to connect with individuals, brands and Organisations who are equally passionate about diversity and inclusion. Fill out the form below and tell us about your organisation. We'll then contact you to organise a time to chat more" }.</div>
            <TextInput type="text" value={Fullname} change={setFullname} name="Full Name" />
            <TextInput type="email" value={Email} change={setEmail} name="Email" />
            <TextInput type="text" value={CompanyWebsite} change={setCompanyWebsite} name="Company Website" />
            <SelectInput name="Interested In" change={setinterestedIn} options={options} placeholder = "Interested in" />
            <TextArea value={Message} change={setMessage} name="Message"  />
            <FormButton state={state} />
       </FormContainer>
    )

}