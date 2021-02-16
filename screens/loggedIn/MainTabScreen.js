import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import FeedScreen from './FeedScreen';
import CalendarScreen from './CalendarScreen';
import ChatScreen from './ChatScreen';
import PendingConnectionsScreen from './PendingConnectionsScreen';
import ConnectionsScreen from './ConnectionsScreen';
import ScheduledEventInfoScreen from './ScheduledEventInfoScreen';
import ModifyEventScreen from './ModifyEventScreen';
import SearchScreen from './SearchScreen';
import ProfileScreen from './ProfileScreen';

const FeedStack = createStackNavigator();
const CalendarStack = createStackNavigator();
const ConnectionsStack = createStackNavigator();
const SearchStack = createStackNavigator();

import Icon from '../../components/Icon';

const Tab = createMaterialBottomTabNavigator();

const TabOptionsGenerator = (tabLabel, tabLink) => {
  return {
    tabBarLabel: tabLabel,
    tabBarColor: '#65c2f5',
    tabBarIcon: () => (
      <Image source={tabLink} style={styles.icons} />
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
        options={TabOptionsGenerator('Feed', require('../../assets/icons/News.png'))}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarStackScreen}
        options={TabOptionsGenerator('Calendar', require('../../assets/icons/Calendar.png'))}
      />
      <Tab.Screen
        name="Connections"
        component={ConnectionsStackScreen}
        options={TabOptionsGenerator('Connections', require('../../assets/icons/Friends.png'))}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackScreen}
        options={TabOptionsGenerator('Search', require('../../assets/icons/Search.png'))}
      />
    </Tab.Navigator>
  )
};

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

const StackOptions = (title, navigation) => ({
  title,
  headerRight: () => (
    <View style={styles.headerRightStyle}>
      <Icon onPress={() => navigation.navigate('AddEvent')} source={require('../../assets/icons/Add.png')} />
      <Icon onPress={() => navigation.openDrawer()} source={require('../../assets/icons/Menu.png')} />
    </View>
  )
})

const headerLeft = (navigation, page) => (
  <Icon onPress={() => navigation.navigate(page)} source={require('../../assets/icons/BackArrow.png')} />
)

const FeedStackScreen = ({ navigation }) => (
  <FeedStack.Navigator screenOptions={headerProps}>
    <FeedStack.Screen name="Feed" component={FeedScreen} options={StackOptions('Overview', navigation)} />
    <FeedStack.Screen name="AddEvent" component={ModifyEventScreen} options={{
      ...StackOptions('Overview', navigation),
      headerLeft: () => headerLeft(navigation, 'Feed')
    }} />
  </FeedStack.Navigator>
);

const CalendarStackScreen = ({ navigation }) => (
  <CalendarStack.Navigator screenOptions={headerProps}>
    <CalendarStack.Screen name="Calendar" component={CalendarScreen} options={StackOptions('Overview', navigation)} />
    <CalendarStack.Screen name="ScheduledEventInfo" component={ScheduledEventInfoScreen} options={{
      ...StackOptions('Overview', navigation),
      headerLeft: () => headerLeft(navigation, 'Calendar')
    }} />
    <CalendarStack.Screen name="EditEvent" component={ModifyEventScreen} options={{
      ...StackOptions('Overview', navigation),
      headerLeft: () => headerLeft(navigation, 'ScheduledEventInfo')
    }} />
    <CalendarStack.Screen name="AddEvent" component={ModifyEventScreen} />
  </CalendarStack.Navigator>
);

const ConnectionsStackScreen = ({ navigation }) => (
  <ConnectionsStack.Navigator screenOptions={headerProps}>
    <ConnectionsStack.Screen name="Connections" component={ConnectionsScreen} options={StackOptions('Overview', navigation)} />
    <ConnectionsStack.Screen name="ConnectionProfile" component={ProfileScreen} options={{
      ...StackOptions('Overview', navigation),
      headerLeft: () => headerLeft(navigation, 'Connections')
    }} />
    <ConnectionsStack.Screen name="PendingConnections" component={PendingConnectionsScreen} options={{
      ...StackOptions('Overview', navigation),
      headerLeft: () => headerLeft(navigation, 'ConnectionProfile')
    }} />
    <SearchStack.Screen name="RequestorProfile" component={ProfileScreen} options={{
      ...StackOptions('Overview', navigation),
      headerLeft: () => headerLeft(navigation, 'ConnectionProfile')
    }} />
    <ConnectionsStack.Screen name="Chat" component={ChatScreen} options={{
      ...StackOptions('Overview', navigation),
      headerLeft: () => headerLeft(navigation, 'Connections')
    }} />
    <ConnectionsStack.Screen name="AddEvent" component={ModifyEventScreen} />
  </ConnectionsStack.Navigator>
);

const SearchStackScreen = ({ navigation }) => (
  <SearchStack.Navigator screenOptions={headerProps}>
    <SearchStack.Screen name="Search" component={SearchScreen} options={StackOptions('Overview', navigation)} />
    <SearchStack.Screen name="QueriedProfile" component={ProfileScreen} options={{
      ...StackOptions('Overview', navigation),
      headerLeft: () => headerLeft(navigation, 'Connections')
    }} />
    <SearchStack.Screen name="AddEvent" component={ModifyEventScreen} options={{
      ...StackOptions('Overview', navigation),
      headerLeft: () => headerLeft(navigation, 'Search')
    }} />
  </SearchStack.Navigator>
);

const styles = StyleSheet.create({
  headerRightStyle: {
    flexDirection: 'row',
  },
  icons: {
    width: 22,
    height: 22,
  },
});
