import React from 'react'
import {Link} from 'react-router-dom'
import {useLoaderData} from 'react-router-dom'
import classes from './EventsList.module.css';

function EventsList({events}) {
    console.log("Events received:", events);

    // const events=useLoaderData();
  return (
    <div className={classes.events}>
        <h1>All Events</h1>
        <ul className={classes.list}> 
            {events.map((e)=>(
                <li key={e._id} className={classes.item}>
                    <Link to={e._id}>
                        <img src={e.image}/>
                        <div className={classes.content}>
                            <h2>{e.title}</h2>
                            <time>{e.time}</time>
                        </div>
                    </Link>
                
                </li>
            ))}
        </ul>
    </div>
  )
}

export default EventsList