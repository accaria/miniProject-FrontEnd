import { Document } from "@contentful/rich-text-types"

export interface IEvent{
    sys:{
        id:string;
    }
    fields:{
    title:string,
    slug:string,
    description:Document | undefined,
    publicationDate:string,
    eventOrganizer:string,
    eventDate:string,
    eventType:string,
    eventLocation:string   
}
}