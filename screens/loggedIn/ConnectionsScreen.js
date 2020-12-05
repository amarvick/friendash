import React from 'react';
import { View, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import ContactListItem from '../../components/ContactListItem';
import EmptyState from '../../components/EmptyState';

const ConnectionsScreen = (props) => {
  return props.user.connections.length > 0 ? (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {props.user.connections.map(c => {
          alert(JSON.stringify(c));
          return (
            <TouchableOpacity>
              <ContactListItem
                image={require('../../assets/running.png')}
                name={c.name}
              />
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  ) : (
      <EmptyState
        photo={require('../../assets/running.png')}
        header="You have no contacts"
        subtitle="Click on the search tab to find somebody"
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
    user: state.loginReducer.user || [],
  }
}

export default connect(
  mapStateToProps,
  {},
)(ConnectionsScreen);