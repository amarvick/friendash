import React from 'react';
import { TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import QueriedContact from '../../components/QueriedContact';
import EmptyState from '../../components/EmptyState';

const CalendarScreen = (props) => {
  return props.user.queried.length > 0 ? (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {props.user.queried.map((user, i) => {
          return (
            <TouchableOpacity key={`queried-user-${i}`}>
              <QueriedContact
                name={user.name}
                // type={q.type}
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
)(CalendarScreen);