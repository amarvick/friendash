import React from 'react';
import { TouchableOpacity, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import ContactListItem from '../../components/ContactListItem';
import EmptyState from '../../components/EmptyState';

const ConnectionsScreen = (props) => {
  return props.connections.length > 0 ? (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {props.connections.map((user, i) => {
          return (
            <TouchableOpacity key={`connection-${i}`} onPress={() => props.navigation.navigate('ConnectionProfile', { user })}>
              <ContactListItem
                image={require('../../assets/running.png')}
                connection={user}
                goToChat={() => props.navigation.navigate('ConnectionProfile', { user })}
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
    connections: state.connectionsReducer.connections || [],
  }
}

export default connect(
  mapStateToProps,
  {},
)(ConnectionsScreen);