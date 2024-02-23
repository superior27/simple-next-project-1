import product_list from "../../database/product_list.databse";

const boderON = {
    border: "2px solid #FFF",
};

export default function Render(){
    return (
        <div>
            <table>
                <thead>
                    <tr style={boderON}>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    );
}

function renderRows(): React.JSX.Element[]
{
    return product_list.map(function(product){
        return (
            <tr key={product.id}>
                <td style={boderON}>{product.id}</td>
                <td style={boderON}>{product.name}</td>
                <td style={boderON}>{product.price}</td>
            </tr>
        );
    });
}