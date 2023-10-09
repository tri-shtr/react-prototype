import { create } from '../api/useProduct';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Product } from '../types';

export default function Regist() {
    
    const { register, handleSubmit, reset } = useForm<Product>();

    const { mutate } = create();
    const regist: SubmitHandler<Product> = (data) => {
        mutate(data);
        //reset();
    }
    return (
        <>
            <h2>データを登録</h2>
            <form onSubmit={handleSubmit(regist)}>
                <label>id</label>
                <input {...register('id')} />
                <br />
                <label>商品名</label>
                <input {...register('name', {required: true})} />
                <br />

                <label>価格</label>
                <input {...register('price')} />
                <br />

                <label>数量</label>
                <input {...register('amount')} />
                <br />

                <input type="submit" />
            </form>
        </>
    );
};
