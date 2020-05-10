/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Home from './src/container/home';
import InformatioPage from './src/container/informationPage';
import { Router,Stack, Scene, Actions } from 'react-native-router-flux';

export default function App(){
  return(
    <Router>
      <Stack key='root'>
        <Scene key='home' component={Home} hideNavBar/>
        <Scene key='informationPage' component={InformatioPage} hideNavBar/>
      </Stack>
    </Router>
  )
}
