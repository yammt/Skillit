import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, Home, SkillList, SkillDetail } from './pages';

export default (store) => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="skill-list" component={SkillList} />
      <Route path="skill-detail" component={SkillDetail} />
    </Route>
  );
};
