export default function DefaultTitle(props: any) {
    console.log(props);

    return (props.lower_case)
        ? (
            <>
                <p>{props.main}!</p>
                <p>{props.secondary}</p>
            </>
        )
        : (
            <>
                <h1>{props.main}!</h1>
                <h2>{props.secondary}</h2>
            </>
        );

}