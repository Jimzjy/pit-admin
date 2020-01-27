import React, { lazy, Suspense } from "react";
import { Redirect } from "react-router-dom";
import { Dashboard, Home } from '../pages'

export default [
  {
    path: "/",
    component: Home,
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
        component: Dashboard
      }
    ]
  }
]