import React from 'react'
import { useSubmit, Link } from 'react-router-dom';

import classes from './EventItem.module.css';

function EventItem({event}) {
  
  const submit =useSubmit();

  function deleteHandler(){
    const proceed=window.confirm("Confirm Delete");
    if(proceed){
     submit(null,{method:"delete"}); 
    }
  }
  return (
    <article className={classes.event}>
       <h1>
        {event.title}
        </h1> 
        <img src={event.image} />
        <p>{event.description}</p>
        <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button onClick={deleteHandler}>Cancel</button>
        </menu>
    </article>
  )
}

export default EventItem