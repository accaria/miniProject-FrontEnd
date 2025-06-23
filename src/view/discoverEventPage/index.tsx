"use client"
import { useState } from "react";
import BackHomeBar from "@/components/navBar/backHomeBar";
import Header from "../landingPage/components/header";
import DiscoverEvent from "./components/discoverEventView";
import EventsListsFree from "../eventList/components/eventsListsFree";
import EventsListsPaid from "../eventList/components/eventsListsPaid";
import EventsListsBandung from "../eventList/components/eventListsBandung";
import EventsListsJakarta from "../eventList/components/eventListsJakarta";


export default function DiscoverEventView(){
    const [selectedTab, setSelectedTab] = useState<'free' | 'paid' | 'bandung' | 'jakarta' | null>(null);
    return(
        <>
        <Header/>
        <BackHomeBar/>
        <DiscoverEvent/>

        <div className="flex gap-4 justify-center mt-6 mb-10">
        <button
          onClick={() => setSelectedTab('free')}
          className={`px-4 py-2 rounded ${selectedTab === 'free' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
          Free Events
        </button>
        <button
          onClick={() => setSelectedTab('paid')}
          className={`px-4 py-2 rounded ${selectedTab === 'paid' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
          Paid Events
        </button>
        <button
          onClick={() => setSelectedTab('bandung')}
          className={`px-4 py-2 rounded ${selectedTab === 'bandung' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
          Bandung
        </button>
        <button
          onClick={() => setSelectedTab('jakarta')}
          className={`px-4 py-2 rounded ${selectedTab === 'jakarta' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
          Jakarta
        </button>
        </div>

        
        
        </>
    )
}



/*
<div className="container mx-auto px-4">
        {selectedTab === 'free' && <EventsListsFree />}
        {selectedTab === 'paid' && <EventsListsPaid />}
        {selectedTab === 'bandung' && <EventsListsBandung />}
        {selectedTab === 'jakarta' && <EventsListsJakarta />}
        </div>
*/
