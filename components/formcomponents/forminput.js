import { Caret } from "../icons/icons"

export const TextInput = ({ type, value, name, change, placeholder=null }) => (
    <div className="form-control">
            <label>{name}</label>
            <input 
                type={type} 
                value={value} 
                name={name} 
                onChange={(e) => change(e.target.value)} 
                placeholder={placeholder}
                required
                />
    </div>
)


export const SelectInput = ({ name,value, change , options, placeholder}) => (

    <div className="form-control">
        <label>{name}</label>
        <select required name={name} value={value} defaultValue="" onChange={(e) => change(e.target.value)} className="text-[13px]">
            <option value="" disabled selected ></option>
            { options.map((option, index) => {
                return (
                    <option key={index} value={option} >{option}</option>
                )
            }) }
        </select>
        <span className="absolute top-[60%] right-[5px]" ><Caret /></span>
    </div>
)


export const TextArea = ({ name, value, change }) => (
    <div className="form-control">
        <label>{name}</label>
        <textarea row="6" value={value} name={name} onChange={(e) => change(e.target.value)} required></textarea>
    </div>
)

export const RadioboxInput = ({ name,value, change, options }) => (
    <div className="form-control">
        <label>{name}</label>
        {options.map((option, index) => {
            return(
                    <label className="radio" key={index}>
                        <input  type="radio" name={name} value={option} onChange={e => change(e.target.value)} required/>
                        <span>{option}</span>
                    </label>
            )
        })}
    </div>
)

export const CheckboxInput = ({name} ) => (
    <div className="form-control checkbox">
        <label>{name}</label>
        <input type="checkbox"  required/>
    </div>
)


