import { Loader } from "./loader";



export default function FormContainer({ children, handleSubmit }){
    

    return(
        <div className="formcontainer bg-[#fff] p-10 rounded-[5px] font-fellix h-[90vh] overflow-y-auto">
            <form onSubmit={handleSubmit}>
                {children}
            </form>
        </div>
    )

}