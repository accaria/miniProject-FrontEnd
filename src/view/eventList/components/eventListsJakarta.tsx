import { fetchAllEventService } from "@/service/event.service";
import { IEvent } from "@/interface/event.interface";
import Link from "next/link";
import RichText from "@/components/contentful/richText";
export default async function EventsListsJakarta(){
   const jakartaEvents : IEvent[]= await fetchAllEventService({location:"Jakarta"});
    return(
        <>
        <div className="grid grid-cols-2 lg:grid-cols-3 space-y-10">
            {jakartaEvents?jakartaEvents.map((event,idx)=>(
                <div key={idx}>
                    <div className="flex flex-col justify-center items-center ">
                    <div className="font-bold text-4xl mb-2">{event.fields.title}</div>
                    <div>Location: {event.fields.eventLocation}</div>
                    <div>Event Date:{event.fields.eventDate}</div>
                    <div>Published on: {event.fields.publicationDate}</div>
                    <div>Organized by:{event.fields.eventOrganizer}</div>
                    </div>
                </div>
            )):null}
        </div>
        </>
    )
}

