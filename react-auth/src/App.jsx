import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import HomePage from "./pages/Home";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import EventDetailPage, {
  loader as EventItemLoader,
  action as deleteEventAction,
} from "./pages/EventDetail";
import { action as manipulateEventAction } from "./components/EventForm";
import NewEventPage, { action as newEventAction } from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
import RootLayout from "./pages/Root";
import EventsRootLayout from "./pages/EventsRoot";
import ErrorPage from "./pages/Error";
import AuthenticationPage, { action as AuthAction} from "./pages/Authentication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          { index: true, element: <EventsPage />, loader: eventsLoader },
          {
            path: ":eventId",
            id: "event-detail",
            loader: EventItemLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: "edit",
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },

          // {path:':eventId',
          //   id:'event-detail',
          //   loader:EventItemLoader,
          //   children:[
          //     {
          //       index: true,
          //      element:<EventDetailPage/>},
          //     {
          //       path:'edit',
          //       element:<EditEventPage/>}
          //   ]},
          {
            path: "new",
            element: <NewEventPage />,
            action: newEventAction,
          },
        ],
      },
      {path:"auth",element:<AuthenticationPage/>,action:AuthAction}
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
