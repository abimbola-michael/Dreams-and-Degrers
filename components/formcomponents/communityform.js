

import FormContainer from "./formcontainer"
import { FormHeader } from "./formhead"
import { TextInput } from "./forminput"
import { FormButton } from "./formbutton"
import { useState } from "react"
import { useForm } from '@formspree/react';


export default function CommunityFormComponent(){

    const [Firstname, setFirstname] = useState("")
    const [Lastname, setLastname] = useState("")
    const [EmailAddress, setEmailAddress] = useState("")

    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_JOIN_THE_COMMUNITY);
    
    return(
        <FormContainer  handleSubmit={handleSubmit}>
            <FormHeader />
            <div className="text-18">
                We leverage Digital technologies to connect, educate and empower African females passionate about technology and entrepreneurship.

                Get to connect with females on the same technology and/or entrepreneurial journey as you. Request access to our exclusive Slack Community!
            </div>
            <TextInput type="text" value={Firstname} change={setFirstname} name="First Name"  />
            <TextInput type="text" value={Lastname} change={setLastname} name="Last Name"  />
            <TextInput type="email" value={EmailAddress} change={setEmailAddress} name="Email address"  placeholder="We need this to send you an invite." />
            <FormButton   state={state}  />
        </FormContainer>
    )

}