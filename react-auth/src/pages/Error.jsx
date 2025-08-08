import React from 'react'
import {useRouteError} from 'react-router-dom'
import PageContent from '../components/PageContent'

function ErrorPage() {
    const error=useRouteError();

    let title="An error Occured";
    let message="Something Went Wrong."
    if (error.status===500){
        message=error.data.message;
        console.log(error);
    }
    if (error.status===404){
        title="Not found";
        message="Could not find Page";
    }
  return (
    <PageContent title={title}>
        <p>{message}</p>
    </PageContent>
  )
}

export default ErrorPage