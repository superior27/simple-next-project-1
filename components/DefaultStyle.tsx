export default function DefaultStyle(props: any){
    return (
        <div>
            <h1 style={{
                backgroundColor: (props.value > 0) ? "green" : "red",
                color: props.color
                }}>
                    Default Style Text
            </h1>
        </div>
    );
}