import Loader from '../components/loader';
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AnimatedRoutes from '../utils/animatedRoutes';
import Header from '../pages/header';
import Footer from '../pages/footer';

const Router = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Header />
      <HelmetProvider>
        <Helmet>
          <title >Procezy</title>
          <meta name='Procezy' content='' />
          <meta name='keywords' content='' />
          <meta name='description' content='' />
        </Helmet>
      </HelmetProvider>
      <AnimatedRoutes />
      <Footer />
    </React.Suspense>
  );
};

export default Router;
