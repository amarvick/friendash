import React from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, StyleSheet } from 'react-native';

import FormButton from '../../components/FormButton';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import AboutMeSection from '../../components/AboutMeSection';

const ProfileScreen = (props) => {
  let user = props.route.params.user;
  const editButton = user.id == props.userId ? (
    <FormButton 
      buttonText = "Edit Profile"
      onPress={() => props.navigation.navigate('EditProfile')}
    />
  ) : null;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Image style={styles.headerImage} source={require('../../assets/running.png')} />
          <Text style={styles.name}>{user.name}</Text>
          <View style={styles.headerDetails}>
            <Icon name="md-locate" size={30} /><Text style={styles.headerDetailsText}>{user.location}</Text>
          </View>
        </View>
        <View style={styles.bodyDetails}>
          <AboutMeSection
            headline="About Me"
            text={user.aboutMe}
          />
          <AboutMeSection
            headline="Preferred Pace"
            text={user.pace}
          />
          <AboutMeSection
            headline="I am training for..."
            text={user.trainingFor}
          />

          {editButton}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
  },
  headerContainer: {
    backgroundColor: '#b0d6f5',
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  headerImage: {
    height: 125,
    width: 125,
    borderRadius: 100,
    borderWidth: 1,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  headerDetails: {
    fontSize: 22,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 10,
  },
  headerDetailsText: {
    fontSize: 18,
    marginLeft: 10,
  },
  bodyDetails: {
    // justifyContent: 'center',
    alignItems: 'center',
  }
});

const mapStateToProps = (state) => {
  return {
    userId: state.loginReducer.user || [],
  }
}

export default connect(
  mapStateToProps,
  {},
)(ProfileScreen);