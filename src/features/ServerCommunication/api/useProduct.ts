import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Product } from "../types";

// データ検索
const fetchProducts = async () => {
    
    const { data } = await axios.get<Array<Product>>('http://localhost:58080/products')
    return data

}
export function query() {
    return useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
        enabled: false,
        refetchOnWindowFocus: false

    });
}

// データ登録
const registProduct = (data: Product) => {
    return axios.post('http://localhost:58080/products', data);
}
export function create() {
    return useMutation({
        mutationFn: registProduct
    });
}