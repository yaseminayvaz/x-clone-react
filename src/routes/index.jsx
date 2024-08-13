import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Explore from '../pages/explore';
import Home from '../pages/home';
import Notifications from '../pages/notifications';
import NotFound from '../pages/not-found';
import Main from '../layouts/main';
import Message from '../pages/message';
import Bookmark from '../pages/bookmarks';
import Premium from '../pages/premium';
import Profile from '../pages/profile';

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
            path:'message',
            element:<Message/>
        },
        {
            path:'bookmark',
            element:<Bookmark/>
        },
        {
            path:'premium',
            element:<Premium/>,
        },
        {
            path:'Profile',
            element:<Profile/>
        },
        {
            path:'*',
            element:<NotFound/>,
        }
     ]  
    }
])
export default routes;
