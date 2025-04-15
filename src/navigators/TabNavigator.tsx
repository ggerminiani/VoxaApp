import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/Home/HomeScreen';
import MeetingsListScreen from '../screens/Meetings/MeetingsListScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import {TabParamList} from '../types/navigation';

const Tab = createBottomTabNavigator<TabParamList>();

// 👇 Define a função FORA do Tab.Navigator
const homeTabIcon = ({
  focused,
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => (
  <Icon name={!focused ? 'home-outline' : 'home'} color={color} size={size} />
);

const meetingsTabIcon = ({
  focused,
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => (
  <Icon name={!focused ? 'list-outline' : 'list'} color={color} size={size} />
);

const profileTabIcon = ({
  focused,
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => (
  <Icon
    name={!focused ? 'person-outline' : 'person'}
    color={color}
    size={size}
  />
);

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false, animation: 'fade'}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: homeTabIcon,
        }}
      />
      <Tab.Screen
        name="Meetings"
        component={MeetingsListScreen}
        options={{
          tabBarIcon: meetingsTabIcon,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: profileTabIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
