"use client"

import { useState } from "react";
import CounterDisplay from "../../components/counter/CounterDisplay";

export default function Counter(){
    
    const [value, setValue] = useState(0);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h1>
                Counter
            </h1>
            <div>
                Value: <CounterDisplay value={value}/>
            </div>
            <div>
                <button onClick={() => setValue(sub(value))}>
                    -
                </button>
                <button onClick={() => setValue(add(value))}>
                    +
                </button>
            </div>
            
        </div>
    );
}

function sub(value:number)
{
    value = value-1;
    console.log(value);
    return value;
}

function add(value:number)
{
    value = value+1;
    console.log(value);
    return value;
}