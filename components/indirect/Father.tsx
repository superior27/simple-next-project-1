"use client"
import Son from "./Son";

export default function Father(props: any){
    return(
        <div>
            <h1>
                <Son function={callMe}/>
            </h1>
        </div>
    );
}

function callMe(param: any){
    console.log(param)
}