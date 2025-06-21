"use client"
import { useState } from "react"
import Link from "next/link"
import { Bars3Icon } from "@heroicons/react/24/outline";


export default function Dropdown(){
    const [open,setOpen] = useState(false);
    return(
     <>
     <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="w-8 h-8 flex flex-col justify-center items-center relative">
        <span
          className={`absolute h-0.5 w-6 bg-black rounded transition-all duration-300
          ${open ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}
        />
        <span
          className={`absolute h-0.5 w-6 bg-black rounded transition-all duration-300
          ${open ? 'opacity-0' : 'opacity-100'}`}
        />
        <span
          className={`absolute h-0.5 w-6 bg-black rounded transition-all duration-300
          ${open ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}
        />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg z-50 border rounded">
          <ul className="flex flex-col">
            <li>
              <Link href="/landingPage" className="block px-4 py-2 hover:bg-gray-100">
                About
              </Link>
            </li>
            <li>
              <Link href="/landingPage" className="block px-4 py-2 hover:bg-gray-100">
                Services
              </Link>
            </li>
            <li>
              <Link href="/landingPage" className="block px-4 py-2 hover:bg-gray-100">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
     </>   
    )
}