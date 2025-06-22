import { fetchEventService } from "@/service/event.service";
import { IEvent } from "@/app/interface/event.interface";
import Link from "next/link";
import RichText from "@/app/components/contentful/richText";
export default async function EventsLists(){
   const events : IEvent[]= await fetchEventService();
    return(
        <>
        <div className="flex flex-row mb-10">
            {events?events.map((event,idx)=>(
                <div key={idx}>
                    <div className="flex flex-col justify-center items-center ">
                    <div className="font-bold text-4xl mb-2">{event.fields.title}</div>
                    <div>Published on: {event.fields.publicationDate}</div>
                    <div>{event.fields.eventOrganizer}</div>
                    <RichText article={event.fields.description}/>
                    </div>
                </div>
            )):null}
        </div>
        </>
    )
}

