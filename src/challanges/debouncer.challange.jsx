
import React, { useState, useEffect, useCallback } from "react";

const DebouncedSearch = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState([]);

    // Fetch data from API
    useEffect(() => {
        // refactor solution code : 
        const fetchData = async ()=>{
            const apiResponse = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await apiResponse.json();
            setResults(data);
        }
        // setup debouncer : 
        const debounTimer = setTimeout(
            ()=>{
                if(searchTerm){
                    fetchData();
                }else{
                    setResults([]);
                }
            },500
        );
        return ()=>clearTimeout(debounTimer);
    }, [searchTerm]);



    return (
        <div>
            <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={e=> setSearchTerm(e.target.value)}
            />
            <ul>
                {results.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default DebouncedSearch;