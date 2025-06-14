import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Root from './Components/Root/Root.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AuthProvider from './Components/Context/AuthProvider.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import FindRoommate from './Components/FindRoommate/FindRoommate.jsx';
import MyListings from './Components/MyListing/MyListing.jsx';
import UpdateUser from './Components/UpdateUser/UpdateUser.jsx';
import BrowseList from './Components/BrowseList/BrowseList.jsx';
import DetailsCard from './Components/DetailsCard/DetailsCard.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root
  },
  { path: "/login", Component: Login },
  { path: "/register", Component: Register },
  {
    path:"/findRoommate",
    element:<PrivateRoute> <FindRoommate></FindRoommate> </PrivateRoute>
  },
  {
    path:"/myList",
    element:<PrivateRoute> <MyListings></MyListings> </PrivateRoute>
  },
  {
    path:"/updateUser/:id",
    loader:({params})=>fetch(`https://a10-server-alpha.vercel.app/updateUser/${params.id}`),
    element:<PrivateRoute> <UpdateUser></UpdateUser> </PrivateRoute>
  },
  {
    path:"/browseList",
    Component:BrowseList
  },
  {
    path:"/browseList/:id",
    loader:({params})=>fetch(`https://a10-server-alpha.vercel.app/browseList/${params.id}`),
    Component:DetailsCard
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        
          <RouterProvider router={router} />
        

    </AuthProvider>
  </StrictMode>,
)
