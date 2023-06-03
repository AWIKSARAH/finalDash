import { Event, Home, Message, Restaurant } from "@mui/icons-material";
import HomePage from "../../pages/home";
import EventsPage from "../../pages/events";
import User from "../../pages/user";
import Person from "../../pages/person";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

export const routes = [
  { path: "/home", label: "Dashboard", icon: <Home />, element: <HomePage /> },
  // {
  //   path: "/places",
  //   label: "Places",
  //   icon: <Restaurant />,
  //   element: <PlacesPage />,
  // },

  // },
  {
    path: "/event",
    label: "Events",
    icon: <Event />,
    element: <EventsPage />,
  },
  {
    path: "/person",
    label: "Persons",
    icon: <Event />,
    element: <Person />,
  },
  {
    path: "/user",
    label: "Menu Item 6",
    icon: <AdminPanelSettingsIcon />,
    element: <User />,
  },
];
