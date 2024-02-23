import DefaultTitle from "../../components/DefaultTitle";

export default function page(){
    return (
        <>
        <DefaultTitle 
            main="Main Page!"
            secondary="Create, Read, Update, Remove objects!"
        />
        <DefaultTitle 
            main="Just one simple and tiny title!"
            secondary="increment the list"
            lower_case={true}
        />
        </>
    );
}