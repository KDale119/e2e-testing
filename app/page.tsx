'use client';
import Link from "next/link";
import {useRouter} from "next/navigation";




export default function Home() {
    const {push} = useRouter();

  return (
      <div >
          <Link onClick={() => {
              push('/')
          }} href="/">Home</Link>
          <Link onClick={() => {
              push('/login')
          }} href="/login">Login</Link>
          <Link onClick={() => {
              push('/profile')
          }} href="/profile">Profile</Link>

      </div>
  )
}
// {navigation.map((item, index) =>
//     <Link key={index} {push(item.href)} className="text-3xl"> | {item.name} |</Link>)}
// <div className="bg-gray-900 solid"></div>