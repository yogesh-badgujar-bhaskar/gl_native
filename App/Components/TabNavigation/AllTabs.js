import React from 'react';
import {View , Text} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1 from './Tab1';
import Tab2 from './Tab2';

const Tab = createBottomTabNavigator();
const AllTabs = ({navigation}) => {
  return(
    <Tab.Navigator
    >
    {/* <Tab.Screen name="Home" component={Home} /> */}
    <Tab.Screen name="Tab1" component={Tab1} />
    <Tab.Screen name="Tab2" component={Tab2} />
  </Tab.Navigator>
  )}
export default AllTabs;