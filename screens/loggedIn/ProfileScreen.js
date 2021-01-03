import React from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, StyleSheet } from 'react-native';

import FormButton from '../../components/FormButton';
import { connect } from 'react-redux';
import AboutMeSection from '../../components/AboutMeSection';
import ProfileHeader from '../../components/ProfileHeader';

import { removeQueriedUser } from '../../redux/actions/queriedUserActions';
import { addGroup } from '../../redux/actions/groupActions';
import { addConnection } from '../../redux/actions/connectionsActions';

const ProfileScreen = (props) => {
  const user = props.route.params.user;
  const index = props.route.params.index; // to be removed later

  const requestUser = (user) => {
    props.removeQueriedUser(index); // user.id
    props.addGroup({
      'id': String(Math.random() * 234524345),
      'connectionId': user.id,
      'messages': [{
        'id': String(Math.random() * 243523456),
        'sender': props.userId,
        'dateSent': '12/4/2020',
        'message': 'Hey, I\'d like to go on a run with you!',
      }],
    })
    props.addConnection({
      ...user,
      connectionStatus: 'PENDING'
    });
    alert('Added user');
    // send message
    // also go back to the queried page
  }

  let editButton;
  if (user.id == props.userId) {
    editButton = (
      <FormButton
        buttonText="Edit Profile"
        onPress={() => props.navigation.navigate('EditProfile')}
      />
    )
  } else if (user.connectionStatus == 'NOT_CONNECTED') {
    editButton = (
      <FormButton
        buttonText="Request"
        onPress={() => requestUser(user)}
      />
    )
  }
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

const mapDispatchToProps = (dispatch) => {
  return {
    removeQueriedUser: userID => dispatch(removeQueriedUser(userID)),
    addGroup: group => dispatch(addGroup(group)),
    addConnection: user => dispatch(addConnection(user)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileScreen);