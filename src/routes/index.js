import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Browse from '../pages/Browse';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Browse} />
    </Switch>
  );
}
