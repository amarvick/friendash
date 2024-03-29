import React from 'react';
import { SafeAreaView, ScrollView, View, Image, TextInput, StyleSheet } from 'react-native';

import FormButton from '../../components/FormButton';
import { connect } from 'react-redux';
import { update } from '../../redux/actions/userActions';

import AboutMeEditSection from '../../components/AboutMeEditSection';
import AddItemInput from '../../components/AddItemInput';
import FormMultipleSelect from '../../components/FormMultipleSelect';
import ProfileHeader from '../../components/ProfileHeader';
import RNPickerSelect from 'react-native-picker-select';

import Icon from 'react-native-vector-icons/Ionicons';

const EditProfileScreen = (props) => {
  const user = props.user;
  const [data, setData] = React.useState({
    aboutMe: user.aboutMe ?? '',
    pace: user.pace ?? '',
    runFrequency: user.runFrequency ?? '',
    preferredLocations: user.preferredLocations ?? [],
    preferredLocationInput: '',
    trainingFor: user.trainingFor ?? [],
    trainingForOptions: {
      'Fun': user.trainingFor.includes('Fun'),
      'Short-distance races (Up to 400m)': user.trainingFor.includes('Mid-distance races (Up to 400m)'),
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

  const onChangePreferredLocationInput = (preferredLocationInput) => {
    setData({
      ...data,
      preferredLocationInput,
    });
  }

  const addPreferredLocationInput = () => {
    if (data.preferredLocationInput != '') {
      setData({
        ...data,
        preferredLocations: [...data.preferredLocations, data.preferredLocationInput],
        preferredLocationInput: '',
      })
    }
  }

  const removePreferredLocationInput = (index) => {
    let preferredLocations = data.preferredLocations;
    preferredLocations.splice(index, 1);
    setData({
      ...data,
      preferredLocations,
    })
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
            headline="FAVORITE PLACES TO RUN..."
            component={
              <View>
                <AddItemInput
                  labelValue={data.preferredLocationInput}
                  placeholderText="Insert location..."
                  onChangeText={input => onChangePreferredLocationInput(input)}
                  iconType={require('../../assets/icons/Add.png')}
                  onIconClick={() => addPreferredLocationInput()}
                />
                {data.preferredLocations.map((t, i) => {
                  return (
                    <AddItemInput
                      key={`item-${i}`}
                      labelValue={t}
                      editable={false}
                      iconType={require('../../assets/icons/Close.png')}
                      onIconClick={() => removePreferredLocationInput(i)}
                    />
                  )
                })}
              </View>
            }
          />
          <AboutMeEditSection
            headline="I'M TRAINING FOR..."
            component={Object.keys(data.trainingForOptions).map((t, i) => {
              return (
                <FormMultipleSelect
                  key={`item-${i}`}
                  selected={data.trainingForOptions[t]}
                  value={t}
                  onPress={() => onChangeTrainingFor(t)}
                />
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
                preferredLocations: data.preferredLocations,
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
    borderRadius: 20,
    borderColor: '#DBDBDB',
    padding: 10,
  },
  placesToRun: {
    borderRadius: 20,
    padding: 10,
    borderWidth: 1,
    width: '100%',
    borderColor: '#DBDBDB',
  },
  trainingFor: {
    borderRadius: 20,
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
    borderRadius: 20,
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
    update: data => dispatch(update(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProfileScreen);