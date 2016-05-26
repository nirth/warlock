/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React from 'react';
import Intl from 'intl';
import App from './App';
import Preloader from './Preloader';
import Tower from './Tower';

const checkIntl = () => {
  if (Intl === null && Intl === undefined) {
    throw new Error('Missing Intl Polyfill');
  }
};

const Main = () => {
  checkIntl();
  
  return <Tower theme="dark" preloader={Preloader} app={App} />
};

export default Main;
