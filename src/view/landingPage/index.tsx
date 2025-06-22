import EventsLists from "../eventList/components/eventsListsAll";
import Header from "./components/header";
import CatNavBar from "@/components/navBar/categoryNavBar";

export default function LandingPageView(){
    return(
        <>
        <Header/>
        <div className="text-center text-4xl lg:text-4xl font-bold">
            Discover <span className="text-pink-400">amazing events</span> and <br className="hidden lg:block" />get inspired!
        </div>
        <div className="text-center text-2xl lg:text-3xl font-medium mb-10">
            Take a peek at some amazing events using Ticket Tailor
        </div>
        <EventsLists/>
        <CatNavBar/>
        </>
    )
}