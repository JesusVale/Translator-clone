import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, delay=500){
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() =>{
        const timer = setTimeout(() =>{
            setDebouncedValue(value);
        }, delay)
        return () => clearTimeout(timer); //Se reinicia el efecto cada vez que cambie el value o el delay
    },[value, delay])

    return debouncedValue;
}