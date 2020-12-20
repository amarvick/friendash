import React from 'react';
import { SafeAreaView, ScrollView, View, Text, TextInput, StyleSheet } from 'react-native';

import FormButton from '../../components/FormButton';
import { connect } from 'react-redux';
import { update } from '../../redux/actions/userActions';

import AboutMeEditSection from '../../components/AboutMeEditSection';
import ProfileHeader from '../../components/ProfileHeader';
import RNPickerSelect from 'react-native-picker-select';

import Icon from 'react-native-vector-icons/Ionicons';

const EditProfileScreen = (props) => {
  const user = props.user;
  const [data, setData] = React.useState({
    aboutMe: user.aboutMe ?? '',
    pace: user.pace ?? '',
    runFrequency: user.runFrequency ?? '',
    trainingFor: user.trainingFor ?? [],
    trainingForOptions: {
      'Fun': user.trainingFor.includes('Fun'),
      'Mid-distance races (400m - 3200m)': user.trainingFor.includes('Mid-distance races (400m - 3200m)'),
      'Long-distance races (3200m - 10k)': user.trainingFor.includes('Long-distance races (3200m - 10k)'),
      'Half Marathons': user.trainingFor.includes('Half Marathons'),
      'Full Marathons': user.trainingFor.includes('Full Marathons'),
      'Ultra Marathons': user.trainingFor.includes('Ultra Marathons'),
    }
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

  const onChangeRunFrequency = (runFrequency) => {
    setData({
      ...data,
      runFrequency,
    });
  }

  const onChangeTrainingFor = (trainingForItem) => {
    let trainingForOptions = data.trainingForOptions;
    trainingForOptions[trainingForItem] = !trainingForOptions[trainingForItem];
    const trainingForNew = Object.keys(trainingForOptions).filter(option => trainingForOptions[option]);

    setData({
      ...data,
      trainingFor: trainingForNew,
      trainingForOptions,
    });
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ProfileHeader
          name={user.name}
          location={user.location}
          isEditable={true}
        />
        <View style={styles.bodyDetails}>
          <AboutMeEditSection
            headline="ABOUT ME"
            component={(
              <TextInput
                value={data.aboutMe}
                style={styles.aboutInput}
                multiline={true}
                onChangeText={aboutMe => onChangeAboutMe(aboutMe)}
              />
            )}
          />
          <AboutMeEditSection
            headline="PREFERRED PACE"
            component={(
              <RNPickerSelect
                value={data.pace}
                style={pickerStyle}
                onValueChange={pace => onChangePace(pace)}
                items={[
                  "5:00 or below",
                  "5:30",
                  "6:00",
                  "6:30",
                  "7:00",
                  "7:30",
                  "8:00",
                  "8:30",
                  "9:00",
                  "9:30",
                  "10:00",
                  "10:30",
                  "11:00",
                  "11:30",
                  "12:00 or above",
                ].map(item => ({ label: item, value: item }))}
                icon={() => {
                  return <Icon name="md-caret-down" size={24} color="gray" />
                }}
              />
            )}
          />
          <AboutMeEditSection
            headline="I RUN..."
            component={(
              <RNPickerSelect
                value={data.runFrequency}
                style={pickerStyle}
                onValueChange={runFrequency => onChangeRunFrequency(runFrequency)}
                icon={() => {
                  return <Icon name="md-caret-down" size={24} color="gray" />
                }}
                items={[
                  "0-2 times per week",
                  "3-6 times per week",
                  "Daily",
                  "Whenever!",
                ].map(item => ({ label: item, value: item }))}
              />
            )}
          />

          <AboutMeEditSection
            headline="I'M TRAINING FOR..."
            component={Object.keys(data.trainingForOptions).map((t, i) => {
              return (
                <Text
                  key={`item-${i}`}
                  style={[styles.trainingFor, { 
                    backgroundColor: data.trainingForOptions[t] ? '#b0d6f5' : 'white' 
                  }]}
                  onPress={() => onChangeTrainingFor(t)}
                >
                  {t}
                </Text>
              )
            })}
          />

          <FormButton
            buttonText="Save"
            onPress={() => props.update({ 
              'info': {
                aboutMe: data.aboutMe,
                pace: data.pace,
                runFrequency: data.runFrequency,
                trainingFor: data.trainingFor,
              } 
            })}
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
  },
  bodyDetails: {
    alignItems: 'center',
    padding: 20,
  },
  aboutInput: {
    height: 100,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#DBDBDB',
    padding: 10,
  },
  trainingFor: {
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    marginVertical: 5,
    overflow: 'hidden',
    borderColor: '#DBDBDB',
  },
});

const pickerStyle = {
	inputIOS: {
    color: 'black',
    borderRadius: 10,
    borderColor: '#DBDBDB',
    borderWidth: 1,
		paddingTop: 13,
		paddingHorizontal: 10,
		paddingBottom: 12,
	},
	inputAndroid: {
		color: 'black',
	},
  placeholderColor: 'gray',
};

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