'use client'
import * as yup from 'yup'
import {useRouter} from "next/navigation";
import {Form, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";


export default function Page() {
    const {push} = useRouter();

    const schema = yup.object().shape({
        username: yup.string().required("username is required"),
        password: yup.string().required("username is required")
    })

    const {register, handleSubmit} = useForm ({
        resolver: yupResolver(schema),
        defaultValues: {
            username: '',
            password: ''
        }
    })
    const onSubmit = (formData: { username: string, password: string, }) => {
        alert("Logging in...")
        localStorage.setItem('username', formData.username)
        localStorage.setItem('password', formData.password)
    }
  return (
      <form onSubmit={handleSubmit (onSubmit)}>
          <div>
              <code>Username:</code>
              <input {...register('username')} />
              <code>Password:</code>
              <input {...register('password')}/>
          </div>

          <button onClick={() => {
              push('/profile')
          }}>Log in</button>
      </form>
  );
}
