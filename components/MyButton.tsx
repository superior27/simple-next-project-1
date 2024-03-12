"use client"
export default function MyButton() {
    return (
        <>
            <input type="text" onChange={(e) => console.log({ msg: "Text Changed!", text: e.target.value })} />
            <button onClick={action1}>
                Click!
            </button>
            <button onClick={function (e) {
                console.log(e.altKey);
            }}>
                Alt Key is Pressed?
            </button>
        </>
    )
}

function action1() {
    console.log("Clicked!");

}