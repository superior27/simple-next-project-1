export default function If(props:any){
    return (
        (props.test) ? props.children : null
    );

}