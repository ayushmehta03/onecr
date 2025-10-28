import Image from "next/image"
import logo from "../public/logo/logo.png"

Image
const Navbar = () =>{
  return (
    <div className='flex items-center p-1 m-1 '>
    <div className="gap-2 flex items-center  ">
        <Image src={logo} width={120} height={100} alt="logo" />

    </div>

        
    </div>
  )
}

export default Navbar