import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from "../Component/Navbar";
import CvDownload from "../Component/CvDownload";

const routes = [
    {
        key: 1,
        path: '/portfolio',
        component: Navbar,
        exact: true
    },
    {
        key: 2,
        path: '/cvdownload',
        component: CvDownload,
        exact: true
    }
]

const Routes = () => {
  return (
    <Switch>
        {
            routes.map((route) => {
                return (
                    <Route
                        key={route.key}
                        exact={route.exact}
                        path={route.path}
                        component={route.component}
                    />
                )
            })
        }
    </Switch>
  )
}

export default Routes;