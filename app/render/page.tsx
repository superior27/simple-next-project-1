export default function Render(){
    return (
        <ul>
            {transformArrayInLi()}
        </ul>
    );
}

function returnAproovedArray(): string[]
{
    return [
        'João',
        'Maria',
        'José',
        'André',
        'Ana',
        'Rebeca'
    ];
}

function transformArrayInLi(): any
{
    const array = returnAproovedArray();
    const content = array.map(function(value, key){
        return <li key={key}>{value}</li>
    });
    console.log(content)
    return content;
}