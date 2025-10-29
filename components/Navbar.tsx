import Image from "next/image"
import logo from "../public/logo/logo.png"
import { ModeToggle } from "./ui/ModeToggle"
import { SignUp } from "@clerk/nextjs"

Image
const Navbar = () =>{
  return (
    <div className='flex items-center p-1 m-1 justify-between '>
    <div className="gap-2 flex items-center  ">
        <Image src={logo} width={120} height={100} alt="logo" />

    </div>

    <div className="flex items-center gap-3 m-2 p-1 ">
      <ModeToggle />
      

    </div>

        
    </div>
  )
}

export default Navbar