import { useState } from "react"

export const useCounter = (initialState = 0) => {

    const [counter, setCounter] = useState(initialState);

    const increase = (value = 1) => {
        setCounter(counter + value);
    }
    const decrease = (value = 1) => {
        setCounter(counter - value);
    }
    const reset = () => {
        setCounter(initialState);
    }

    return {
        counter,
        increase,
        decrease,
        reset,
    }
} 