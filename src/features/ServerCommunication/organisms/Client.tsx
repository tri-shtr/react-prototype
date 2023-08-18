import axios from 'axios';
import { useState } from 'react';

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

type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export default function Client() {
    let [ users, setUsers ] = useState<Array<UserData>>([]);

    let getUserData = (): void => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response:any) => {
            setUsers(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {

        });

    }

    let [ posts, setPosts ] = useState<Array<Post>>([]);

    let getPostData = (): void => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response:any) => {
            setPosts(response.data);
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
            <button onClick={getPostData}>get post data</button>
            <hr />
            <table>
                <thead>
                    <tr><th>id</th><th>User ID</th><th>Title</th><th>Body</th></tr>
                </thead>
                <tbody>
                    {posts.map((post:Post, index: number) => (
                        <tr key={index}><td>{post.id}</td><td>{post.userId}</td><td>{post.title}</td><td>{post.body}</td></tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};
