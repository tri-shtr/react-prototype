import ProductsTable from '../atoms/ProductsTable';
import Search from '../atoms/Search';
import Regist from '../atoms/Regist';

export default function Client() {



    return (
        <>
            <Search />
            <hr />
            <ProductsTable />
            <hr />
            <Regist />
        </>
    );
};
