import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch
} from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { AuthContext } from '../../components/context';

export function DrawerContent(props) {

  const paperTheme = useTheme();

  const { signOut, toggleTheme } = React.useContext(AuthContext);

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={{
                  uri: 'https://api.adorable.io/avatars/50/abott@adorable.png' // {user.profilePic}
                }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                <Title style={styles.title}>Alex Marvick</Title>
                <Caption style={styles.caption}>@amarvick</Caption>
              </View>
            </View>
          </View>

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="home-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Home"
              onPress={() => { props.navigation.navigate('Home') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="account-outline"
                  color={color}
                  size={size}
                />
              )}
              label="View Profile"
              onPress={() => { props.navigation.navigate('ViewProfile') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="settings-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Edit Profile"
              onPress={() => { props.navigation.navigate('EditProfile') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="settings-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Contact Us"
              onPress={() => { props.navigation.navigate('ContactUs') }}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  name="account-check-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Subscription"
              onPress={() => { props.navigation.navigate('Subscription') }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon
              name="exit-to-app"
              color={color}
              size={size}
            />
          )}
          label="Sign Out"
          onPress={() => { signOut() }}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});