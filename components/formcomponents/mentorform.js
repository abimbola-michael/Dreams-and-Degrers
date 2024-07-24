import FormContainer from "./formcontainer"
import { FormHeader } from "./formhead"
import { TextInput, SelectInput } from "./forminput"
import { FormButton } from "./formbutton"
import { useState } from "react"
import { useForm } from '@formspree/react';


export default function MentorFormComponent({formkey}){

    const [Firstname, setFirstname] = useState("")
    const [Lastname, setLastname] = useState("")
    const [EmailAddress, setEmailAddress] = useState("")
    const [Country, setCountry] = useState("")
    const [twitterHandle, setTwitterHandle] = useState("")
    const [Gender, setGender] = useState("")
    const [TechAreaOfInterest, setTechAreaOfInterest] = useState("")
    const [LinkedinProfile, setLinkedinProfile] = useState("")
    const [whyDoYouWantToBecomeAMentor, setwhyDoYouWantToBecomeAMentor] = useState("")
    const [HoursInAWeek, setHoursInAWeek] = useState("")
    const [MenteesNoTobeMentored, setMenteesNoTobeMentored] = useState("")
    const [MenteeType, setMenteeType] = useState("")

    const [state, handleSubmit] = useForm(formkey);

    const options = ["Front end dev", "Back-end dev","Mobile dev", "UI/UX design", "Data analytics", "Cyber Security","Technical writer"]

    const gender = ["Female", "Male"]

    return(
        <FormContainer  handleSubmit={handleSubmit}>
            <FormHeader />
            <TextInput type="text" value={Firstname} change={setFirstname} name="First Name"  />
            <TextInput type="text" value={Lastname} change={setLastname} name="Last Name"  />
            <TextInput type="email" value={EmailAddress} change={setEmailAddress} name="Email address"  />
            <TextInput type="text" value={Country} change={setCountry} name="Country of residence"  />
            <TextInput type="text" value={twitterHandle} change={setTwitterHandle} name="Twitter Handle"  />
            <SelectInput type="text" value={Gender} change={setGender} name="Gender" options={gender}   />
            <SelectInput  value={TechAreaOfInterest}  change={setTechAreaOfInterest} name="Tech area of interest" placeholder="Tech area of interest" options={options}  />
            <TextInput type="text" value={LinkedinProfile} change={setLinkedinProfile} name="LinkedIn profile "  />
            <TextInput type="text" value={whyDoYouWantToBecomeAMentor} change={setwhyDoYouWantToBecomeAMentor} name="Why do you want to become a mentor?"  />
            <TextInput type="text" value={HoursInAWeek} change={setHoursInAWeek} name="How many hours in a week will you be willing to commit to?"  />
            <TextInput type="text" value={MenteesNoTobeMentored} change={setMenteesNoTobeMentored} name="How many mentees will you be willing to mentor?"  />
            <TextInput type="text" value={MenteeType} change={setMenteeType} name="What type of mentee would be a good fit for you?"  />
            <FormButton   state={state}  />
        </FormContainer>
    )

}