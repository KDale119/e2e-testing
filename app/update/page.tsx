'use client';
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useRouter} from "next/navigation";


export default function Page() {
    const {push} = useRouter();
    const username = localStorage.getItem('username')
    const password = localStorage.getItem('password')

    const schema = yup.object().shape({
        username: yup.string(),
        password: yup.string()
    })
    const {register, handleSubmit} = useForm ({
        resolver: yupResolver(schema),
        defaultValues: {
            username: '',
            password: ''
        }
    })

    const onSubmit = (formData: { username: string, password: string, }) => {
        alert("Updating...")
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        localStorage.setItem('username', formData.username)
        localStorage.setItem('password', formData.password)
    }
    return (
        <form onSubmit={handleSubmit (onSubmit)}>
            <h4>Update profile</h4>
            <label>{username}: </label>
            <input {...register('username')}></input>

            <label>{password}: </label>
            <input {...register('password')}></input>
            <button onClick={() => {
                push('/profile')
            }}>Update
            </button>
        </form>
    );
}