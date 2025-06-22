import Link from "next/link"
export default function BackHomeBar(){
    return(
        <>
        <Link href={"/landingPage"}>
        <div className="text-center text-[#222432] text-2xl lg:text-3xl font-bold ">
           &lt; Back to Home
        </div>
        </Link>
        </>
    )
}