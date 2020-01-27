import React from 'react';
import { renderRoutes } from "react-router-config";
import { Nav } from './style'
import { NavLink } from 'react-router-dom'

function Home (props) {
  const { route } = props;

  return (
    <div>
      Home
      { renderRoutes (route.routes) }
    </div>
  )
}

export default React.memo(Home);