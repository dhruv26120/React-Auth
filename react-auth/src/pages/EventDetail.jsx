import {useParams,useRouteLoaderData} from 'react-router-dom'
import EventItem from '../components/EventItem';
function EventDetailPage(){
    const data=useRouteLoaderData('event-detail');
    return(
        <EventItem event={data.event}/>
    )
        
    
}
export default EventDetailPage;

//Fetch event based on Event iD
export async function loader({request,params}){
    const id=params.eventId;

    const response=await fetch('http://localhost:4000/events/'+ id);
    if(!response.ok){
        throw json(
            { message: 'Could not fetch details for selected event.' 
                 
            },
            {
                status: 500,
            }
            );    
        }
    else{
        return response;
    }
}

//Action to delete event item
export async function action({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch('http://localhost:4000/events/' + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      { message: 'Could not delete event.' },
      {
        status: 500,
      }
    );
  }
  return redirect('/events');
}