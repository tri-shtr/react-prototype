import { Product } from "../types";
import { query } from '../api/useProduct';


export default function ProductsTable() {

    const { data, isError, isLoading, isFetched } = query();

    if(!isFetched){
        return <div>検索してください。</div>
    }
    if(isLoading){
        return <div>Loading...</div>;
    }
    if(isError){
        return <div>Error has occured!</div>;
    }

    return (
        <table>
            <thead>
                <tr><th>id</th><th>名前</th><th>単価</th><th>数量</th></tr>
            </thead>
            <tbody>
                {data.map((product:Product, index: number) => (
                    <tr key={index}><td>{product.id}</td><td>{product.name}</td><td>{product.price}</td><td>{product.amount}</td></tr>
                ))}
            </tbody>
        </table>
    );

};