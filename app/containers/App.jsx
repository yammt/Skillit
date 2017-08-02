import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from '../css/main';

const cx = classNames.bind(styles);

/*
 * React-router's <Router> component renders <Route>'s
 * and replaces `this.props.children` with the proper React Component.
 */
const App = ({ children }) => {
  return (
    <div className={cx('app')}>
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object
};

export default App;
