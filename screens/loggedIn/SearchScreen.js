import React from 'react';
import { TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getDistance } from '../../utils/DistanceCalculator';
import QueriedContact from '../../components/QueriedContact';
import EmptyState from '../../components/EmptyState';

const SearchScreen = (props) => {
  const userCoordinates = props.user.coordinates;
  return props.user.queried.length > 0 ? (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {props.user.queried.map((user, i) => {
          const distance = getDistance(userCoordinates, user.coordinates);
          return (
            <TouchableOpacity key={`queried-user-${i}`}>
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
    user: state.userReducer.user || [],
  }
}

export default connect(
  mapStateToProps,
  {},
)(SearchScreen);