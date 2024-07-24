import P_side from "../pages/programs/index"


export default function ProgramsMain({ children }){

    return (
            <div className="px-7 md:px-6 xl:container mx-auto p-0  flex md:flex-row flex-col">
                <P_side />
                <>
                { children }
                </>
            </div>
    )

}