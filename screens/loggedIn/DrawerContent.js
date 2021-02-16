import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Drawer,
} from 'react-native-paper';
import {
  DrawerContentScrollView,
  DrawerItem
} from '@react-navigation/drawer';
import { logout } from '../../redux/actions/loginActions';
import { connect } from 'react-redux';

import Icon from '../../components/Icon';

const DrawerContent = (props) => {
  const user = props.user;
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Avatar.Image
                source={require('../../assets/SenatorMarvick.jpg')}
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
              icon={() => (
                <Icon
                  source={require('../../assets/icons/Home.png')}
                />
              )}
              label="Home"
              onPress={() => props.navigation.navigate('Home')}
            />
            <DrawerItem
              icon={() => (
                <Icon
                  source={require('../../assets/icons/Person.png')}
                />
              )}
              label="View Profile"
              onPress={() => props.navigation.navigate('ViewProfile', { user })}
            />
            <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  source={require('../../assets/icons/Settings.png')}
                />
              )}
              label="Edit Profile"
              onPress={() => props.navigation.navigate('EditProfile')}
            />
            <DrawerItem
              icon={() => (
                <Icon
                  source={require('../../assets/icons/Pencil.png')}
                />
              )}
              label="Contact Us"
              onPress={() => props.navigation.navigate('ContactUs')}
            />
            <DrawerItem
              icon={() => (
                <Icon
                  source={require('../../assets/icons/Upgrade.png')}
                />
              )}
              label="Subscription"
              onPress={() => props.navigation.navigate('Subscription')}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={() => (
            <Icon
              source={require('../../assets/icons/Signout.png')}
            />
          )}
          label="Sign Out"
          onPress={() => props.logout()}
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

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user || [],
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerContent);
