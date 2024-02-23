export default function List(props:any){
    return (
        <div>
            <h1>List of Childrens</h1>
            <ul>
            {props.children}
            </ul>
        </div>
    );
}