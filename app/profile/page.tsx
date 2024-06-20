'use client';
import {useRouter} from "next/navigation";

export default function Page() {
    const userName = localStorage.getItem('username')
    const password = localStorage.getItem('password')
    const {push} = useRouter();
    return (
        <>
            <h4>Profile</h4>
            <label>{userName} </label>
            <label>{password} </label>
            <button onClick={() => {
                push('/update')
            }}>Update info
            </button>
        </>
    );
}