import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const AppStackNavigator = createStackNavigator();
// const Tab = createBottomTabNavigator();

const AppStack = () => {
  return <NavigationContainer>
    <AppStackNavigator.Navigator>
      <AppStackNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#2e64e5',
            fontSize: 18
          },
          headerStyle: {
            shadowColor: '#fff',
            elevation: 0,
          },
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <FontAwesome5.Button
                name="plus"
                size={22}
                backgroundColor="#fff"
                color="#2e64e5"
                onPress={() => navigation.navigate('AddPost')}
              />
            </View>
          ),
        }}
      />
    </AppStackNavigator.Navigator>
  </NavigationContainer>
}

// const AppStack = () => {
//   return (
//     <Tab.Navigator
//       tabBarOptions={{
//         activeTintColor: '#2e64e5',
//       }}>
//       <Tab.Screen
//         name="Home"
//         component={FeedStack}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({color, size}) => (
//             <MaterialCommunityIcons
//               name="home-outline"
//               color={color}
//               size={size}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Messages"
//         component={ChatScreen}
//         options={{
//           // tabBarLabel: 'Home',
//           tabBarIcon: ({color, size}) => (
//             <Ionicons
//               name="chatbox-ellipses-outline"
//               color={color}
//               size={size}
//             />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           // tabBarLabel: 'Home',
//           tabBarIcon: ({color, size}) => (
//             <Ionicons name="person-outline" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

export default AppStack;