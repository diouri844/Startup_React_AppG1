import React, { useCallback, useMemo, useState} from "react";

const Child = React.memo(({ value, onClick }) => {
    console.log("Child re-rendered");
    return <button onClick={onClick}>{value}</button>;
});

const Parent = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState("");

    const computedValue =  useMemo(
        ()=>{
            const calcValue = (x)=> (x*2)
            return calcValue(input)
        },[input]
    )
    

    const handleClick = useCallback(() => setCount(old => old + 1),[]);

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <Child value={computedValue} onClick={handleClick} />
            <p>Count: {count}</p>
        </div>
    );
};

export default Parent;