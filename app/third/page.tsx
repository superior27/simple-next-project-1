export default function page(){
    const subtitle = 'Estou no TypeScript';

    const content = (
        <div>
            <h1>
                Integration TS and TSX
            </h1>
            <h2>
                {subtitle}
            </h2>
            <h3>
                {3*3}
            </h3>
            <h4>
                {Math.max(13, 39)}
            </h4>
            <h4>
                {between(3, 1, 4)}
            </h4>
        </div>
    );

    return content;
    
}

function between(value: number, min: number, max:number): string
{
    if(value >= min && value <= max)
    {
        return 'true';
    }
    return 'false';
}