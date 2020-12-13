import React from 'react';
import { SafeAreaView, ScrollView, View, Image, Text, StyleSheet } from 'react-native';

import FormButton from '../../components/FormButton';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { update } from '../../redux/actions/userActions';

import AboutMeEditSection from '../../components/AboutMeEditSection';

const EditProfileScreen = (props) => {
  const user = props.user;
  const [data, setData] = React.useState({
    aboutMe: user.aboutMe,
    pace: user.pace,
    trainingFor: user.trainingFor,
  });

  const onChangeAboutMe = (aboutMe) => {
    setData({
      ...data,
      aboutMe,
    });
  }

  const onChangePace = (pace) => {
    setData({
      ...data,
      pace,
    });
  }

  const onChangeTrainingFor = (trainingFor) => {
    setData({
      ...data,
      trainingFor,
    });
  }

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
          <AboutMeEditSection
            headline="About Me"
            text={data.aboutMe}
            onChangeText={aboutMe => onChangeAboutMe(aboutMe)}
          />
          <AboutMeEditSection
            headline="Preferred Pace"
            text={data.pace}
            onChangeText={pace => onChangePace(pace)}
          />
          <AboutMeEditSection
            headline="I am training for..."
            text={data.trainingFor}
            onChangeText={trainingFor => onChangeTrainingFor(trainingFor)}
          />

          <FormButton
            buttonText="Save this"
            onPress={() => props.update({'info': data})}
          />
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
    alignItems: 'center',
  }
});

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user || [],
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    update: (data) => dispatch(update(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProfileScreen);