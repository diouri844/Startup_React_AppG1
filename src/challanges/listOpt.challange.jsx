import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react'

function ListOpt() {
    const [list , setList] = useState(["Apple", "Banana", "Cherry"]);

    // use useCallback to optimize performance : 
    const handelDeleteItem = useCallback(
        (itemTodelete) =>  {
            setList([...list.filter(e => e!== itemTodelete)])
            return;
    },[list])

  return (
    <div>
        {/* try to renden all list items  */}
        <ul>
            {
            list.map( item => (
                <>
                <li 
                    onClick={(e)=> handelDeleteItem(item)}
                    key={item}> 
                    { item } 
                </li>
                <br />
                </>
            ))
        }
        </ul>
        
    </div>
  )
}

export default ListOpt;