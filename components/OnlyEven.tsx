export default function OnlyEven(props: any){
    if(props.number % 2 == 0)
    {
        return <h1>{props.number}</h1>;
    }
    return null;
}