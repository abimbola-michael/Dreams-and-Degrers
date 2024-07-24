import NavLayout from "./navlayout"
import Footer from "./footer"
import dynamic  from "next/dynamic"

const MobileNav = dynamic(() => import("./mobilenav"))
const ModalForm = dynamic(() => import("./modalform"))


export default function Layout ({  children  }) {
    

    return(
        <>
            <NavLayout />
            <MobileNav />
            <ModalForm />
            { children }
            <Footer />
        </>
    )

}

