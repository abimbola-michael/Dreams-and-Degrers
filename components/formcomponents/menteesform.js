import FormContainer from "./formcontainer"
import { FormHeader } from "./formhead"
import { SelectInput, TextArea, TextInput } from "./forminput"
import { FormButton } from "./formbutton"
import { useState } from "react"
import { useForm } from '@formspree/react';


export default function MenteesFormComponent({formkey}){

    const [Firstname, setFirstname] = useState("")
    const [Lastname, setLastname] = useState("")
    const [EmailAddress, setEmailAddress] = useState("")
    const [Country, setCountry] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [TechAreaOfInterest, setTechAreaOfInterest] = useState("")
    const [LinkedinProfile, setLinkedinProfile] = useState("")
    const [occupation, setOccupation] = useState("")
    const [levelofqualification, setLevelofqualification] = useState("")
    const [reason, setReason] = useState("")
    const [topic, setTopic] = useState("")
    const [careergoals, setCareerGoals] = useState("")
    const [hours, setHours] = useState("")
    const [laptop, setLaptop] = useState("")

    const [state, handleSubmit] = useForm(formkey);

    const options = ["Front end dev", "Back-end dev","Mobile dev", "UI/UX design", "Data analytics", "Cyber Security","Technical writer"]

    return(
        <FormContainer  handleSubmit={handleSubmit}>
            <FormHeader />
            <TextInput type="text" value={Firstname} change={setFirstname} name="First Name"  />
            <TextInput type="text" value={Lastname} change={setLastname} name="Last Name"  />
            <TextInput type="email" value={EmailAddress} change={setEmailAddress} name="Email address"  />
            <TextInput type="text" value={Country} change={setCountry} name="Country of residence"  />
            <TextInput type="tel" value={phoneNumber} change={setPhoneNumber} name="Phone number"  />
            <SelectInput  value={TechAreaOfInterest}  change={setTechAreaOfInterest} name="Tech area of interest" placeholder="Tech area of interest" options={options}  />
            <TextInput type="text" value={LinkedinProfile} change={setLinkedinProfile} name="LinkedIn profile "  />
            <TextInput type="text" value={occupation} change={setOccupation} name="Occupation"  />
            <TextInput type="text" value={levelofqualification} change={setLevelofqualification} name="Level of Qualification"  />
            <TextArea type="text" value={reason} change={setReason} name="Why are you interested in the mentorship program?"  />
            <TextArea type="text" value={topic} change={setTopic} name="What topics would you like to discuss with your mentor?"  />
            <TextArea type="text" value={careergoals} change={setCareerGoals} name="What are your future career goals?"  />
            <TextInput type="text" value={hours} change={setHours} name="How many hours in a week will you be willing to commit to the program?"  />
            <TextArea type="text" value={laptop} change={setLaptop} name="Do you have a laptop and working internet connection?"  />
            <FormButton   state={state}  />
        </FormContainer>
    )

}