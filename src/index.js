// @flow
// import "babel-polyfill";
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import './index.scss';

// Application mount element id
const APP_MOUNT_ID = 'app';

// Application mount html element as container of react app
const appMountContainer = document.getElementById(APP_MOUNT_ID);

const isProduction = process.env.NODE_ENV === 'production';

/**
 * Renders application tree
 * @returns {*}
 */
const renderApp = () => {
  return render(
    <App />,
    appMountContainer
  );
};

/**
 * Renders application errors thrown in development
 * @param error
 * @returns {*}
 */
const renderError = (error: Error) => {
  const Redbox = require('redbox-react').default;

  return render(
    <Redbox error={error} />,
    appMountContainer
  );
};


/**
 * Application runner
 */
const run = () => {
  if (isProduction) {
    renderApp()
  } else {
    try {
      renderApp();
    } catch (e) {
      renderError(e)
    }
  }
};

// Run application at last!
run();
