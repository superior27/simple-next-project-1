export default function CounterDisplay(props: any){
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100px",
            width: "100px",
            borderRadius: "50px",
            backgroundColor: "#fff",
            color: "#222",
            fontSize: "3rem",
            margin: "20px"
        }}>
            {props.value}
        </div>
    );
}