import React from 'react';
import { TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getDistance } from '../../utils/DistanceCalculator';
import QueriedContact from '../../components/QueriedContact';
import EmptyState from '../../components/EmptyState';

const SearchScreen = (props) => {
  const userCoordinates = props.userCoordinates;
  return props.queriedUsers.length > 0 ? (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {props.queriedUsers.map((user, index) => {
          const distance = getDistance(
            userCoordinates[0], 
            userCoordinates[1], 
            user.coordinates[0], 
            user.coordinates[1]
          );
          return (
            <TouchableOpacity key={`queried-user-${index}`} onPress={() => props.navigation.navigate('QueriedProfile', { user, index })}>
              <QueriedContact
                name={user.name}
                location={user.location}
                distance={distance}
                type='Runner'
              />
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  ) : (
      <EmptyState
        photo={require('../../assets/running.png')}
        header="No new contacts to show"
        subtitle="Check back again next week!"
      />
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => {
  return {
    userCoordinates: state.userReducer.user.coordinates || [0, 0],
    queriedUsers: state.queriedUsersReducer.queriedUsers || [],
  }
}

export default connect(
  mapStateToProps,
  {},
)(SearchScreen);