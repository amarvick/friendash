import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';

const AppStackNavigator = createStackNavigator();
// const Tab = createBottomTabNavigator();

const AppStack = () => (
  <View></View>
//   <AppStackNavigator.Navigator>
//     <AppStackNavigator.Screen
//       name="RN Social"
//       component={HomeScreen}
//       options={{
//         headerTitleAlign: 'center',
//         headerTitleStyle: {
//           color: '#2e64e5',
//           fontSize:18
//         },
//         headerStyle: {
//           shadowColor: '#fff',
//           elevation: 0,
//         },
//         headerRight: () => (
//           <View style={{marginRight: 10}}>
//             <FontAwesome5.Button
//               name="plus"
//               size={22}
//               backgroundColor="#fff"
//               color="#2e64e5"
//               onPress={() => navigation.navigate('AddPost')}
//             />
//           </View>
//         ),
//       }}
//     />
//   </AppStackNavigator.Navigator>
// );

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
  );
// }

export default AppStack;