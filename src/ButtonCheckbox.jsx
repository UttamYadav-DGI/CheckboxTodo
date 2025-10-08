import { useState } from "react";
const ButtonCheckBox=({bio,progress})=>{

    const [checked,SetChecked]=useState(false);
    
    const handleChange=(e)=>{
        const isChecked=e.target.checked;
        SetChecked(isChecked);
        progress((prev)=>(isChecked ? prev+25:prev-25))
    }
    return(
        <>
        <div className="border border-black rounded-md p-2 mb-4 text-black bg-amber-50 hover:bg-gray-300 focus:outline-2 focus:outline-offset-2 focus:outline-gray-300 active:bg-gray-300" >
            <input
             type="checkbox"
             checked={checked}
             onChange={handleChange}
             

              />
            <label className={`${checked ? "text-green-700" :"text-black" }`} htmlFor=""> {bio}</label>
        
        </div>
        </>
    )
}

export default ButtonCheckBox;