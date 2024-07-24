
import { useState } from "react"
import FormContainer from "./formcontainer"
import { TextInput, TextArea, SelectInput} from "./forminput"
import { FormButton } from "./formbutton"
import { useForm } from '@formspree/react';
import { FormHeader } from "./formhead"

export default function Volunteer(){

    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_VOLUNTEER);

    const [Firstname, setFirstname] = useState("")
    const [Lastname, setLastname] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [twitterHandle, setTwitterHandle] = useState("")
    const [accademyBackground, setAccademyBackground] = useState("")
    const [EmailAddress, setEmailAddress] = useState("")
    const [volunteerRole, setVolunteerRole] = useState("")
    const [aboutYou, setAboutYou] = useState("")
    const [reason, setReason] = useState("")

    const options =  [ "Business", "Natural sciences", "History", "Arts", "Engineering", "Languages", "IT", "Other" ]

    const options2 = ["Social media manager", "Graphics designer", "Content creator", "Community manager", "Tech mentorship coordinator", "Programs manager", "Editorial team", "Partnership manager"]

    return (
        <FormContainer  handleSubmit={handleSubmit}>
            <FormHeader />
            <TextInput type="text" value={Firstname} change={setFirstname} name="First Name"  />
            <TextInput type="text" value={Lastname} change={setLastname} name="Last Name"  />
            <TextInput type="email" value={EmailAddress} change={setEmailAddress} name="Email address"  />
            <TextInput type="tel" value={phoneNumber} change={setPhoneNumber} name="Phone number"  />
            <TextInput type="text" value={twitterHandle} change={setTwitterHandle} name="Twitter Handle"  />
            <SelectInput type="text" value={accademyBackground} change={setAccademyBackground} name="Accademy background"  options={options} placeholder="Accademy background" />
            <SelectInput type="text" value={volunteerRole} change={setVolunteerRole} name="Which of the following volunteer roles most interests you?"  options={options2}   />
            <TextArea type="text" value={aboutYou} change={setAboutYou} name="Tell us a bit about yourself and why you have chosen the  role?"  />
            <TextArea type="text" value={reason} change={setReason} name="Why would you love to volunteer with Dreams&Degrees?"  />
            <FormButton   state={state}  />
        </FormContainer>
    )

}