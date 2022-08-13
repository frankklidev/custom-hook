import { useState } from "react"


const useForm = (initialSate={}) => {
  
    const [values, setValues] = useState(initialSate);

    const handleInputChange = ({target})=>{
       
        setValues({
            ...values,
           [ target.name]:target.value
        })
    }

    const reset =() => {
        setValues(initialSate)
    }
    return [values,handleInputChange,reset];
}

export default useForm