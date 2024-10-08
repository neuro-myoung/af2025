import Link from "next/link";
import NavItems from './NavItems/NavItems'
import MaxWidthWrapper from "../MaxWidthWrapper";
import { buttonVariants } from "../ui/button";

const Navbar = () => {
  const user = undefined
  const isAdmin = false
  return (
    <nav className="w-full h-16 bg-[#0e0008]/75 backdrop-blur-md shadow-[0_8px_32px_-8px_rgba(31, 38, 135, 0.37)] border-b border-[#ffffff]/20 fixed z-10">
      <MaxWidthWrapper className="flex">
        <div className="w-full h-full flex justify-center text-white">
          <Link href='/' className="font-bold text-left">Alix Fuerst</Link>
          <div className="w-full h-full flex justify-center items-center text-white">
              <NavItems />
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar