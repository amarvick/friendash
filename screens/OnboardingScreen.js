import React from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

class OnboardingScreen extends React.Component {
  render() {
    const Dots = ({ selected }) => {
      let backgroundColor;
      backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

      return (
        <View 
          style={{ 
            width: 5, 
            height: 5, 
            marginHorizontal: 3, 
            backgroundColor 
          }} 
        />
      );
    }

    const Skip = ({ ...props }) => {
      return (
        <Button
          title={'Skip'}
          color={'#000000'}
          {...props}
        />
      )
    }

    const Next = ({ ...props }) => {
      return (
        <Button
          title={'Next'}
          color={'#000000'}
          {...props}
        />
      )
    }

    const Done = ({ ...props }) => {
      return (
        <Button
          title={'Done'}
          color={'#000000'}
          {...props}
        />
      )
    }

    return (
      <View style={styles.container}>
        <Onboarding
          SkipButtonComponent={Skip}
          NextButtonComponent={Next}
          DoneButtonComponent={Done}
          Dots={Dots}
          onSkip={() => this.props.replace.navigate("Login")}
          onDone={() => this.props.navigation.navigate("Login")}
          pages={[
            {
              backgroundColor: '#03dbfc',
              // image: <Image source={require('../../assets/favicon.png')} />,
              title: 'Welcome to Runnect!',
              subtitle: 'Meet Runners in your local area',
            },
            {
              backgroundColor: '#03dbfc',
              // image: <Image source={require('../../assets/favicon.png')} />,
              title: 'Find Your Next Training Buddy',
              subtitle: 'Find people with common goals',
            },
            {
              backgroundColor: '#03dbfc',
              // image: <Image source={require('../../assets/favicon.png')} />,
              title: 'Join Groups',
              subtitle: 'Strength in numbers',
            },
          ]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default OnboardingScreen;