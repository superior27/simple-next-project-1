import OnlyEven from "../../components/OnlyEven";

export default function Page(){
    return(
        returnRows()
    );
}

function returnRows(){

    const content = [];
    
    for (let i = 0; i < 11; i++) {
        content.push(
            <OnlyEven number={i}/>
        );
    }
    return content;
}