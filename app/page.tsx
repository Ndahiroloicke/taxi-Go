import { UserButton } from "@clerk/nextjs";

export default function Home(){
  return(
    <div>
      <UserButton afterSignOutUrl="/"/>
      <p> this is the homepage</p>
    </div>
  )
}