import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/Splash';

import Tab from './tabs';

import SignIn from '../screens/SignScreen/SignIn';
import {AuthContext, AuthProvider} from '../context/AuthContext';
import Signup from '../screens/SignScreen/Register';
import ForgotPass from '../screens/SignScreen/ForgotPass';
const Stack = createStackNavigator();

const Navigation = () => {
  const {userInfo, splashLoading} = useContext(AuthContext);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        // initialRouteName="home"
        screenOptions={{
          headerShown: false,
        }}>
        {/* {userInfo.access_token ? (
          <Stack.Screen name="home" component={Tab} />
        ) : (
          <>
            <Stack.Screen name="Login" component={SignIn} />
            <Stack.Screen name="register" component={Signup} />
          </>
        )} */}

        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="home" component={Tab} />
        <Stack.Screen name="Login" component={SignIn} />
        <Stack.Screen
          name="register"
          component={Signup}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="forgot"
          component={ForgotPass}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
