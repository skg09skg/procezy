import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from '../pages/home';
import AboutUs from '../pages/aboutus';


const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path='/' component={Home} />
        <Route exact path='/about-us' component={AboutUs} />
      </Switch>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;