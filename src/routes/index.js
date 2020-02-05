import React from "react";
import { Redirect } from "react-router-dom";
import { Dashboard, Home, Device, History, Link, NotFound } from '../pages'

export default [
  {
    path: "/",
    component: Home,
    name: 'Home',
    routes: [
      {
        path: "/",
        exact: true,
        render: () => (
          <Redirect to={"/dashboard"}/>
        )
      },
      {
        path: '/dashboard',
        component: Dashboard,
        name: 'Dashboard'
      },
      {
        path: '/device',
        component: Device,
        name: 'Device'
      },
      {
        path: '/history',
        component: History,
        name: 'History'
      },
      {
        path: '/link',
        component: Link,
        name: 'Link'
      },
      {
        path: '*',
        component: NotFound,
        name: 'NotFound'
      }
    ]
  }
]