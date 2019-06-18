import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Browse from '../pages/Browse';
import Playlist from '../pages/Playlist';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Browse} />
      <Route path="/playlists/:id" component={Playlist} />
    </Switch>
  );
}
