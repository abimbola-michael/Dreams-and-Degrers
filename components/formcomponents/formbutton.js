
import { Loader } from "./loader"

export const FormButton = ({ state }) => {
    const formstate =  state.succeeded ? <div className="text-[#D68676] py-5 text-center">submitted successfully</div> : state.submitting ? <Loader color="#D68676" /> :  <button className="outline-0 border-0 w-100p p-[15px] text-[#fff] text-18 bg-pry uppercase font-fellix font-bold rounded-[28px] tracking-[2px]" disabled={state.submitting}>Submit</button>
    
    return formstate
}