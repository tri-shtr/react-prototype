import axios from 'axios';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Product } from '../types';
import ProductsTable from '../atoms/ProductsTable';

type Address = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: LatLon
};

type LatLon = {
    lat: number,
    lon: number
};

type Company = {
    name: string,
    catchPhrase: string,
    bs: string
}

type UserData = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company
}

export default function Client() {
    let [ users, setUsers ] = useState<Array<UserData>>([]);

    let getUserData = (): void => {
        axios.get('http://localhost:58080/users')
        .then((response:any) => {
            setUsers(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {

        });

    };

    let { register, handleSubmit, reset } = useForm<UserData>();

    let createUserData: SubmitHandler<UserData> = (data) => {
        axios.post('http://localhost:58080/users', data)
        .then((response:any) => {
            reset();
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {

        });
    }

    let [ products, setProducts ] = useState<Array<Product>>([]);

    let getProducts = (): void => {
        axios.get('http://localhost:58080/products')
        .then((response:any) => {
            setProducts(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {

        });
    }

    return (
        <div>
            <button onClick={getUserData}>get user data</button>
            <div>
                <h2>Create user</h2>
                <form onSubmit={handleSubmit(createUserData)}>
                    <label>id</label>
                    <input {...register('id', {required: true})} />

                    <label>name</label>
                    <input {...register('name')} />

                    <label>username</label>
                    <input {...register('username')} />

                    <label>email</label>
                    <input {...register('email')} />

                    <input type="submit" />
                </form>
            </div>
            
            <hr />
            <table>
                <thead>
                    <tr><th>id</th><th>Name</th><th>E-mail</th></tr>
                </thead>
                <tbody>
                    {users.map((user:UserData, index: number) => (
                        <tr key={index}><td>{user.id}</td><td>{user.username}</td><td>{user.email}</td></tr>
                    ))}
                </tbody>
            </table>
            <hr />
            <button onClick={getProducts}>get Products</button>
            <hr />
            <ProductsTable data={products} />
        </div>
    );
};
