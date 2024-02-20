export default function page(){
    return generateSpan(10);
}

function generateSpan(quant: number): JSX.Element[]
{
    quant = (quant < 1) ? 1 : quant;
    let content = [];
    for (let i = 0; i < quant; i++) {
        content.push(
            <span> {i+1}</span>
        );
        
    }
    console.log(content);
    return content;
    
}