"use client"
export default function Son(props: any){
    return(
        <div>
            <div>
                <h1>SON</h1>
            </div>
            <div>
                <button onClick={() => props.function("I'm approved!")}>
                    Button to Call Father!!
                </button>
            </div>
            
        </div>
    );
}