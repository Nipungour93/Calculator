/**
 * @format
 * App Main
 */

import React, {useEffect} from 'react';
import {LogBox} from 'react-native';

import {HomeScreen} from '@app/modules/home';
import SplashScreen from 'react-native-splash-screen';

LogBox.ignoreLogs(['Warning: ...']);

function MainApp() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <HomeScreen />
    </>
  );
}

export {MainApp};
