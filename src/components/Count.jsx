import React, { useState } from 'react'

export const Count = () => {

    const [count, setcount] = useState(1)

    return (
        <div>
            <button onClick={() => setcount(prev => prev - 1)}> - </button>
            {count}
            <button onClick={() => setcount(prev => prev + 1)}> + </button>
        </div>
    )
}
