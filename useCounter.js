import { useState } from "react"

export const useCounter = (initialSate=10) => {

    const [counter, setCounter] = useState(initialSate);

    const increment = ()=>{
        setCounter(counter+1)
    }
    const decrement = ()=>{
        setCounter(counter-1)
    }

    const reset = ()=>{
        setCounter(initialSate)
    }

    return{
        increment,
        decrement,
        reset,
        counter

    }
       
    
}

