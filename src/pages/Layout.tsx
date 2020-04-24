import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ThemeWrapper from '../components/ThemeWrapper';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Loader from '../components/Loader';
import ContrastProvider from '../context/Contrast';
const Home = lazy(() => import('./Home'));

interface Props {}

const Layout: React.FunctionComponent<Props> = () => {
  return (
    <ContrastProvider>
      <ThemeWrapper>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route exact path="/">
                <Suspense fallback={<Loader />}>
                  <Home />
                </Suspense>
              </Route>
              <Route exact path="/:number">
                <Suspense fallback={<Loader />}>
                  <Home />
                </Suspense>
              </Route>
            </Switch>
            <Footer />
          </div>
        </BrowserRouter>
      </ThemeWrapper>
    </ContrastProvider>
  );
};

export default Layout;
