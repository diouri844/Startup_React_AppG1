import React, { useState } from "react";
import { useMemo } from "react";

const FactorialCalculator = () => {
    const [number, setNumber] = useState(5);


    // time to memorize the calculating proccess : 
    const factorial = useMemo( ()=> {
        console.log("Calculating factorial...");
        const calculateFactorial = (num) => {
            return num <= 1 ? 1 : num * calculateFactorial(num - 1);
        };
        return calculateFactorial(number)
    }, [number]);
    
    
    return (
        <div>
            <input
                type="number"
                value={number}
                onChange={(e) => setNumber(Number(e.target.value))}
            />
            <p>Factorial of {number} is {factorial}</p>
        </div>
    );
};

export default FactorialCalculator;