import React from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, StyleSheet } from 'react-native';

import FormButton from '../../components/FormButton';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import AboutMeSection from '../../components/AboutMeSection';
import ProfileHeader from '../../components/ProfileHeader';

const ProfileScreen = (props) => {
  const user = props.route.params.user;
  const editButton = user.id == props.userId ? (
    <FormButton 
      buttonText = "Edit Profile"
      onPress={() => props.navigation.navigate('EditProfile')}
    />
  ) : null;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ProfileHeader
          name={user.name}
          location={user.location}
          isEditable={false}
        />
        <View style={styles.bodyDetails}>
          <AboutMeSection
            headline="ABOUT ME"
            text={user.aboutMe}
          />
          <AboutMeSection
            headline="PACE"
            text={user.pace}
          />
          <AboutMeSection
            headline="I RUN..."
            text={user.runFrequency}
          />
          <AboutMeSection
            headline="FAVORITE PLACES TO RUN"
            text={user.preferredLocations}
          />
          <AboutMeSection
            headline="I AM TRAINING FOR..."
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
  },
  bodyDetails: {
    alignItems: 'center',
    paddingHorizontal: 20,
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