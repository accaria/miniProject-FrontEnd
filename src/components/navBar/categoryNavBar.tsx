import Link from "next/link"
export default function CatNavBar(){
    return(
        <>
        <Link href={"/discoverEvent"}>
        <div className="bg-amber-500 text-center text-[#222432] text-2xl lg:text-4xl font-bold rounded-2xl mt-5">
          &lt;  Discover event by categories &gt;
        </div>
        </Link>
        </>
    )
}