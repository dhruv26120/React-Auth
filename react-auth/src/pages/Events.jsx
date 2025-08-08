import React from 'react'
import {useLoaderData} from 'react-router-dom'
import EventsList from '../components/EventsList';

function EventsPage() {
  const data=useLoaderData();
  if(data.isError){
    return<p>{data.message}</p>
  }
  const events=data.events;
  return <EventsList events={events}></EventsList>
  
  
}

export default EventsPage;

//Loader Function to load all events
export async function loader(){
  const response= await fetch('http://localhost:4000/events');
          if(!response.ok){
            throw JSON({message:"Could not fetch events"},{status:500});
          }
          else{
            return response;
          } 
}