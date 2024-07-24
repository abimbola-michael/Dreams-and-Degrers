import calender from "../public/images/calendar.png"
import profile from "../public/images/profile.png"
import user2 from "../public/images/user2.png"
import category from "../public/images/category.png"
import grant from "../public/images/grant.png"
import interns from "../public/images/interns.png"
import TechnologyProgram from "./tech"
import SessionProgram from "./session"
import AccountabilityProgam from "./accountability"
import IntershipProgram from "./intership"
import BusinessGrants from "./businessgrants"
import EventsProgram from "./events"
import mbutton from "../public/images/mbutton.png"
import ibutton from "../public/images/ibutton.png"
import events from "../public/images/events.png"
import ddbg from "../public/images/ddbg.png"
import apt from "../public/images/apt.png"
import swt from "../public/images/swt.png"
import damilola from "../public/images/damilola.jpg"
import abigail from "../public/images/abigail.jpg"
import chidimma from "../public/images/chidimma.jpg"
import sophia from "../public/images/sophia.jpg"
import temitope from "../public/images/temitope.jpg"



export const programsUtils = [
    { 
        "id": 0,
        "image" : category,
        "text" : "Technology Mentorship Program"
    },
    { 
        "id": 1,
        "image" : interns,
        "text" : "Internship (Coming soon)"
    },
    { 
        "id": 2,
        "image" : profile,
        "text" : "Accountability Buddy in Technology"
    },
    { 
        "id": 3,
        "image" : user2,
        "text" : "1:1 Session with a Tech Mentor"
    },
    { 
        "id": 4,
        "image" : grant,
        "text" : "D&D Business Grant (Coming Soon)"
    },
    { 
        "id": 5,
        "image" : calender,
        "text" : "D&D Events"
    },
]

export const programsArray = [
    { 
        "id":0,
        "component": <TechnologyProgram />,
    },
    { 
        "id":1,
        "component": <IntershipProgram />,
    },
    { 
        "id":2,
        "component": <AccountabilityProgam />,
    },
    { 
        "id":3,
        "component": <SessionProgram />,
    },
    { 
        "id":4,
        "component": <BusinessGrants />,
    },
    { 
        "id":5,
        "component": <EventsProgram />,
    },
    
    
]


export const review_utils = [
{ 
        image: abigail,
        name: "Ahaka Uju Abigail",
        profession:"Mobile and Internet Banking Officer(Data Analytics), Providus Bank",
        review : "In the time where I didn't know what I wanted to do with my life, the DD tech mentorship program came and gave me such soft landing. That experience paved way to the role I play in the financial institution I currently work with. My tech story is never complete without DD. Thank you so much."
    },
    { 
        image: damilola,
        name: "Adeniji Phebean Damilola",
        profession:"Masters in Information Systems at Covenant University.",
        review : "First off, it was a great privilege to have been part of a valuable training. A platform set aside which aims to provide ambitious young women in the information technology adequate access to support and advice from experienced individuals through a virtual mentoring relationship.  The course was an introductory course as it provided me with a beginner knowledge in the field of Data and Business. It provided practical applications of concept which made me to always proceed further."
    },
    { 
        image: chidimma,
        name: "Chidimma Prisca Ogu",
        profession:"Analyst at Guaranty Trust Bank.",
        review : "Having been assigned an excellent mentor who was vast in the field and always explained with clarity, it made things easier. I'll highly recommend this platform to any woman in the information technology industry or anyone wanting to transition into the field of IT. The previous mentorship program was an interesting one in the sense that I got to have access to mentors that were in the stage I was in at the time. I got to discuss with my mentor on a weekly basis this gave me clarity on resolving problems I encountered. I got the push I needed to put myself out there more and I even my started my blog at the time. I also loved the fact that it was timebound as it enabled me to be active and alert."
    },
    { 
        image: sophia,
        name: "Sophia Ahuoyiza Abubakar",
        profession:"Cofounder/ cto Daabo Inc",
        review : "The mentorship program set the pace for my 2021 and it provided the structure i needed to upskill in my career. What stood out for me was the weekly motivation and inspiration i got from my meetings with my mentor Mr Udeme Udofia. I’m not talking of the pespire to maguire kind but there is this drive i got from seeing him excel greatly in his field and having him mentor me directly."
    },
    { 
        image: temitope,
        name: "Temitope Fakirepo ",
        profession:"Tech Support, Seal Commerce",
        review : "I am grateful for the Dreams & Degrees Female In Tech Mentorship Program.Having the opportunity to learn from this program has made a substantial change in my tech career. The mentorship program played pivotal role in my development. When I first started this program, I never imagined I would be able to make as much progress as I have. Thanks to this mentorship program, I have moved up my tech skills.  All was made possible through the help of my mentor and how organized this mentorship program was.  Thanks to the time we spent during the weekly webinar, I was enlightened more about the tech industry and how to navigate it. This also played its own part in making this program a good one."
    },
]


export const programs = [
    { 
        id: 0,
        image: mbutton,
        head:"Technology Mentorship Program",
        text:"This is a technology mentoring program for ambitious young women looking to kick start their careers in Technology."
     },
     { 
        id: 1,
        image: ibutton,
        head:"Internship (Coming soon)",
        text:"Dreams & Degrees is currently working to introduce a program that offers females interested in technology the opportunity to gain real world experience, invaluable training as well as confidence and network building."
     },
     
     { 
        id: 2,
        image: apt,
        head:"Accountability Buddy in Technology",
        text:"Our accountability buddy program aims to match interested community members with ambitious, intentional and like-minded individual(s) in technology that would help them stay committed to their goals."
     },
     { 
        id: 3,
        image: ddbg,
        head:"D&D Business Grant (Coming Soon)",
        text:"Our small business grants are designed for female entrepreneurs in Africa. The grant would be open to for-profit businesses that are one to three years old and woman-led. In addition to the grant, grant winners also get to be featured on our website, newsletter and social media platforms."
     },
     { 
        id: 4,
        image: swt,
        head:"1:1 Session with a Tech Mentor.",
        text:"Book/schedule a 1:1 session with an experienced professional in tech instantly when you join our slack community."
     },
     { 
        id: 5,
        image: events,
        head:"D&D Events",
        text:"We organize virtual hangouts, twitter space discussions, workshops, and webinars for females to connect, learn and grow in a safe virtual or physical environment.  Keep an eye out for more details on our social media platforms."
     },
]