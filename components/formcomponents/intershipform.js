import FormContainer from "./formcontainer";
import { TextInput } from "./forminput";
import { useState } from "react";
import { FormHeader } from "./formhead";
import { FormButton } from "./formbutton";
import { useForm } from '@formspree/react';


export default function InterShipForm({formkey}){

    const [Firstname, setFirstname] = useState("")
    const [Lastname, setLastname] = useState("")
    const [EmailAddress, setEmailAddress] = useState("")
    const [TechAreaofInterest, setTechAreaofInterest] = useState("")
    const [linkedInProfile, setlinkedInProfile] = useState("")

    const [state, handleSubmit] = useForm(formkey);

    return(
        <FormContainer handleSubmit={handleSubmit}>
            <FormHeader />
            <TextInput type="text" value={Firstname} change={setFirstname} name="First Name"  />
            <TextInput type="text" value={Lastname} change={setLastname} name="Last Name"  />
            <TextInput type="email" value={EmailAddress} change={setEmailAddress} name="Email address"  />
            <TextInput type="text" value={TechAreaofInterest} change={setTechAreaofInterest} name="Tech area of interest"  />
            <TextInput type="text" value={linkedInProfile} change={setlinkedInProfile} name="Linkedin profile"  />
            <FormButton state={state}   />
        </FormContainer>
    )

}

