import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex justify-center gap-x-48 items-center'>
  <h1><span className='text-6xl font-semibold bg-orange-400 rounded-xl px-2'>TAXI</span><span className='text-5xl text-orange-400 font-semibold'>GO</span></h1>
  <SignUp />
  </div>
  )
}