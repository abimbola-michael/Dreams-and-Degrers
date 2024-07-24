import FormContainer from "./formcontainer"
import { FormHeader } from "./formhead"
import { FormButton } from "./formbutton"
import { useState } from "react"
import { useForm } from '@formspree/react';
import { TextInput,CheckboxInput, RadioboxInput} from "./forminput"


export default function AccountabilityFormComponent({formkey}){

    const [Firstname, setFirstname] = useState("")
    const [Lastname, setLastname] = useState("")
    const [EmailAddress, setEmailAddress] = useState("")
    const [TechAreaOfInterest, setTechAreaOfInterest] = useState("")
    const [whatachievement,setwhatachievement] = useState("")
    const [goals, setGoals] = useState("")
    const [longtermgoals, setLongtermgoals] = useState("")
    const [apply, setApply] = useState("")
    const [understanding, setUnderstanding] = useState("")

    const [state, handleSubmit] = useForm(formkey);


    return(
        <FormContainer  handleSubmit={handleSubmit}>
            <FormHeader />
            <div className="text-18">
                <p> Find an Accountability Buddy (FAB-March Cohort)  application is open to individuals looking to improve their tech skills whilst staying motivated in their technology journey this year. The aim is to connect you with an accountability partner with same tech goals and interests. </p>
            </div>
            <TextInput type="text" value={Firstname} change={setFirstname} name="First Name"  />
            <TextInput type="text" value={Lastname} change={setLastname} name="Last Name"  />
            <TextInput type="email" value={EmailAddress} change={setEmailAddress} name="Email address"  />
            <TextInput type="text" value={TechAreaOfInterest} change={setTechAreaOfInterest} name="What is your tech area of interest?"  />
            <TextInput type="text" value={whatachievement} change={setwhatachievement} name="What do you want to have achieved by the end of the program?"  />
            <TextInput type="text" value={goals} change={setGoals} name="What are your short term career goals? "  />
            <TextInput type="text" value={longtermgoals} change={setLongtermgoals} name="What are your long term career goals?"  />
            <RadioboxInput options={["Yes", "No"]}  change={setApply} name="Applying for this program means you are choosing to be a part of our community and would be invited to our member only slack community."  />
            <CheckboxInput  name="I understand that applying for this does not guarantee a spot in the program."  />
            <FormButton   state={state}  />
        </FormContainer>
    )

}