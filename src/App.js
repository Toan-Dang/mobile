import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './screens/Splash';
import {Provider} from 'react-redux';
import {Store} from './redux/store';
import Tab from './navigation/tabs';
import Task from './screens/Task';
import Camera from './screens/Camera';
import {SafeAreaView} from 'react-native-safe-area-context';
import SignIn from './screens/SignScreen/SignIn';
import {AuthContext, AuthProvider} from './context/AuthContext';
import Signup from './screens/SignScreen/Register';
import Navigation from './navigation/Navigation';

const App = () => {
  return (
    <AuthProvider>
      <Navigation></Navigation>
    </AuthProvider>
  );
};

export default App;
