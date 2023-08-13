import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from 'react';

type Inputs = {
    name: string;
}

function Client() {
    let { register, handleSubmit } = useForm<Inputs>();
    let [name, setName] = useState('');

    let onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data.name);
        setName(data.name);

    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('name')} />
                <input type="submit" />
            </form>
            <hr />
            {name}

        </div>
    );
}

export default Client;