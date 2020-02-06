import React from "react";
import { Redirect } from "react-router-dom";
import { Dashboard, Home, Device, History, NotFound, Login } from '../pages'

export default [
  {
    path: '/login',
    component: Login,
    name: 'Login'
  },
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
        path: '*',
        component: NotFound,
        name: 'NotFound'
      }
    ]
  }
]