import Son from "./Son";

export default function Father(props: any){
    return(
        <div>
            <h1>
                <Son {...props} name="Lucas "/>
            </h1>
        </div>
    );
}