import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Alert from '../layout/Alert';

//Movies
import Movies from '../movies/Movies'

//TVShows
import TVShows from '../tvshows/TVShows'


import NotFound from '../layout/ErrorPage';


const Routes = () => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/tv-shows" component={TVShows} />
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
