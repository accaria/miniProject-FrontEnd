import Link from "next/link"
import Dropdown from "./dropdown"

export default function Header(){
    return(
        <>
        <div className="flex flex-col space-y-2">
        <Link href={"page.tsx"}>
        <div className="text-center text-white border-2 bg-[#222432]">
        NEW: Create on-brand event pages with our new Box Office Design Tool!
        </div>
        </Link>
        <div className="flex flex-row justify-between">
        <div className="w-1/2"><img src="/ticketLogo.png" alt="ticketLogo" /></div>
        <div className="w-1/2 flex justify-end lg:hidden">
        <Dropdown/>
        </div>
        <div className="hidden lg:flex flex-col text-5xl font-bold w-100 space-y-2 justify-center border-4">
        <div><Link href={"/"}>About</Link></div>
        <div><Link href={"/"}>Services</Link></div>
        <div><Link href={"/"}>Contact</Link></div>
        </div>
        </div>
        <div className="text-center text-4xl lg:text-4xl font-bold">
            Discover <span className="text-pink-400">amazing events</span> and <br className="hidden lg:block" />get inspired!
        </div>
        <div className="text-center text-2xl lg:text-3xl font-medium">
            Take a peek at some amazing events using Ticket Tailor
        </div>
        </div>
        
        </>
    )
}