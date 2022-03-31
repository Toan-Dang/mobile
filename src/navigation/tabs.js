import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ToDo from '../screens/ToDo';
import Home from '../screens/HomeScreen/Home';
import Done from '../screens/Done';
import Splash from '../screens/Splash';

const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, size, color}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'clipboard-list';
            size = focused ? 25 : 20;
          } else if (route.name === 'Done') {
            iconName = 'clipboard-check';
            size = focused ? 25 : 20;
          } else if (route.name === 'menu') {
            iconName = 'clipboard-check';
            size = focused ? 25 : 20;
          } else if (route.name === 'bủh') {
            iconName = 'clipboard-check';
            size = focused ? 25 : 20;
          } else if (route.name === 'hmm') {
            iconName = 'clipboard-check';
            size = focused ? 25 : 20;
          }
          return <FontAwesome5 name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: '#777777',
        labelStyle: {fontSize: 15, fontWeight: 'bold'},
        style: {
          position: 'absolute',
          elevation: 0,
          backgroundColor: '#FFFFFF',
          paddingVertical: 8,
          borderWidth: 1,
          borderColor: '#000000',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopColor: '#000000',
          height: 60,
        },
      }}>
      <Tab.Screen name={'Home'} component={Home} />
      <Tab.Screen name={'Done'} component={Done} />
      <Tab.Screen name={'menu'} component={Splash} />
      <Tab.Screen name={'bủh'} component={Splash} />
      <Tab.Screen name={'profile'} component={Splash} />
    </Tab.Navigator>
  );
};
export default Tabs;
