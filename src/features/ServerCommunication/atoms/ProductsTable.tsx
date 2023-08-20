import { Product } from "../types";

type propsType = {
    data: Array<Product>
};

export default function ProductsTable(props: propsType) {
    return (
        <table>
            <thead>
                <tr><th>名前</th><th>単価</th><th>数量</th></tr>
            </thead>
            <tbody>
                {props.data.map((product:Product, index: number) => (
                    <tr key={index}><td>{product.name}</td><td>{product.price}</td><td>{product.amount}</td></tr>
                ))}
            </tbody>
        </table>
    );

};