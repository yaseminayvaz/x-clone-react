import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Explore from '../pages/explore';
import Home from '../pages/home';
import Notifications from '../pages/notifications';
import NotFound from '../pages/not-found';
import Main from '../layouts/main';

const routes= createBrowserRouter([
    {
     path:'/',
     element:<Main/>, 
     children:[
        {
            index:true,
            element:<Home/>
        },
        {
            path:'explore',
            element:<Explore/>,
        },
        {
            path:'notification',
            element:<Notifications/>,
        },
        {
            path:'*',
            element:<NotFound/>,
        }
     ]  
    }
])
export default routes;
