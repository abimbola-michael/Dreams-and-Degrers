import { useContext } from "react"
import { MenuContext } from "./context"
import SpeakerAndPatnerForm from "./formcomponents/speakerAndPatenerForm"
import MentorFormComponent from "./formcomponents/mentorform"
import InterShipForm from "./formcomponents/intershipform"
import MenteesFormComponent from "./formcomponents/menteesform"
import CommunityFormComponent from "./formcomponents/communityform"
import AccountabilityFormComponent from "./formcomponents/accountabilitybuddyform"
import Volunteer from "./formcomponents/volunteer"


const SpeakerForm = () => <SpeakerAndPatnerForm formkey={`${process.env.NEXT_PUBLIC_SPEAKER}`} />

const MentorForm = () => <MentorFormComponent  formkey={`${process.env.NEXT_PUBLIC_MENTORSHIP}`} />

const PatnerOrSponsorForm = () => <SpeakerAndPatnerForm  formkey={`${process.env.NEXT_PUBLIC_PATNERORSPONSOR}`}  />

const InternForm = () => <InterShipForm formkey={`${process.env.NEXT_PUBLIC_INTERNS}`}  />

const TechnologyMentorShipProgram = () => <MenteesFormComponent  formkey={`${process.env.NEXT_PUBLIC_MENTEES}`} />

const CommunityForm  = () => <CommunityFormComponent  />

const AccountabilityBuddyForm = () => <AccountabilityFormComponent formkey={`${process.env.NEXT_PUBLIC_ACCOUNTABILITY}`} />

const VolunteerForm = () => <Volunteer  formKey={`${process.env.NEXT_PUBLIC_VOLUNTEER}`} />


export default function GetInvolvedForms(){

    

    const menucontext = useContext(MenuContext) 

    const { getInvolvedAs } = menucontext
    
    const handleSubmit = e => {

        e.preventDefault()

        onSubmitted({ 
            EMAIL,FNAME ,LNAME,PHONE,GETINVOLVE
        })

        /*

        fetch(`https://${process.env.customKey}`,{  
            method: "POST"
        }).then(res => {
            SETEMAIL("")
            SETLNAME("")
            SETLNAME("")
            SETADD1("")
            SETADD2("")
            SETSTATE("")
            SETCITY("")
            SETLNAME("")
            SETZIP("")
            SETCOUNTRY("")
            SETPHONENUMBER("")
            SETBDM("")
            SETBDD("")
        })

       */
        

    }

    return(
        <>
            { getInvolvedAs === "speaker" && <SpeakerForm /> }
            { getInvolvedAs === "mentorship" && <MentorForm /> }
            { getInvolvedAs === "partnership/sponsorship" && <PatnerOrSponsorForm /> }
            { getInvolvedAs === "internship waitlist" && <InternForm /> }
            { getInvolvedAs === "Technology mentorship program" &&  <TechnologyMentorShipProgram /> }
            { getInvolvedAs === "join the community" && <CommunityForm /> }
            { getInvolvedAs === "Accountability Buddy" && <AccountabilityBuddyForm  /> }
            { getInvolvedAs === "Volunteer" && <VolunteerForm /> }
        </>
    )

}