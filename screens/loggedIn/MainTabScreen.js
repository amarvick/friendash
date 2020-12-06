import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import FeedScreen from './FeedScreen';
import CalendarScreen from './CalendarScreen';
import ConnectionsScreen from './ConnectionsScreen';
import ScheduledEventInfoScreen from './ScheduledEventInfoScreen';
import SearchScreen from './SearchScreen';
import ProfileScreen from './ProfileScreen';

const FeedStack = createStackNavigator();
const CalendarStack = createStackNavigator();
const ConnectionsStack = createStackNavigator();
const SearchStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const TabOptionsGenerator = (tabLabel, tabIcon) => {
  return {
    tabBarLabel: tabLabel,
    tabBarColor: '#65c2f5',
    tabBarIcon: ({ color }) => (
      <Icon name={tabIcon} color={color} size={26} />
    )
  }
}

const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Feed"
        component={FeedStackScreen}
        options={TabOptionsGenerator('Feed', 'md-list')}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarStackScreen}
        options={TabOptionsGenerator('Calendar', 'md-calendar')}
      />
      <Tab.Screen
        name="Connections"
        component={ConnectionsStackScreen}
        options={TabOptionsGenerator('Connections', 'md-people')}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackScreen}
        options={TabOptionsGenerator('Search', 'md-search')}
      />
    </Tab.Navigator>
)};

export default MainTabScreen;

const headerProps = {
  headerStyle: {
    backgroundColor: '#65c2f5',
  },
  headerTintColor: '#65c2f5',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}

const StackOptions = (title, navigation) => {
  return {
    title,
    headerRight: () => (
      <Icon.Button name="ios-menu" size={25} backgroundColor="#65c2f5" onPress={() => navigation.openDrawer()}></Icon.Button>
    )
  }
}

const FeedStackScreen = ({ navigation }) => (
  <FeedStack.Navigator screenOptions={headerProps}>
    <FeedStack.Screen name="Feed" component={FeedScreen} options={StackOptions('Overview', navigation)} />
  </FeedStack.Navigator>
);

const CalendarStackScreen = ({ navigation }) => (
  <CalendarStack.Navigator screenOptions={headerProps}>
    <CalendarStack.Screen name="Calendar" component={CalendarScreen} options={StackOptions('Overview', navigation)} />
    <CalendarStack.Screen name="ScheduledEventInfo" component={ScheduledEventInfoScreen} options={StackOptions('Overview', navigation)} />
  </CalendarStack.Navigator>
);

const ConnectionsStackScreen = ({ navigation }) => (
  <ConnectionsStack.Navigator screenOptions={headerProps}>
    <ConnectionsStack.Screen name="Connections" component={ConnectionsScreen} options={StackOptions('Overview', navigation)} />
    <ConnectionsStack.Screen name="ConnectionProfile" component={ProfileScreen} options={StackOptions('Overview', navigation)} />
  </ConnectionsStack.Navigator>
);

const SearchStackScreen = ({ navigation }) => (
  <SearchStack.Navigator screenOptions={headerProps}>
    <SearchStack.Screen name="Search" component={SearchScreen} options={StackOptions('Overview', navigation)} />
  </SearchStack.Navigator>
);