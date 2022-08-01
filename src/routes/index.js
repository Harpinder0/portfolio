import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from "../Component/Navbar";
import CvDownload from "../Component/CvDownload";

// Pages
import Home from "../pages/home";
import About from "../pages/about";
import Service from "../pages/service";
import Project from "../pages/project";
import Contact from "../pages/contact";

const routes = [
    {
        key: 1,
        path: '/home',
        component: Home,
        exact: true
    },
    {
        key: 2,
        path: '/about',
        component: About,
        exact: true
    },
    {
        key: 3,
        path: '/service',
        component: Service,
        exact: true
    },
    {
        key: 4,
        path: '/project',
        component: Project,
        exact: true
    },
    {
        key: 5,
        path: '/contact',
        component: Contact,
        exact: true
    },
    {
        key: 6,
        path: '/portfolio',
        component: Navbar,
        exact: true
    },
    {
        key: 7,
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