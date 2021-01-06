import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import ContactListItem from '../../components/ContactListItem';
import EmptyState from '../../components/EmptyState';
import FormButton from '../../components/FormButton';

const ConnectionsScreen = (props) => {
  // This is a shitty way of doing it, will probably need to 
  // resolve BE work/reducers or try making a map with this
  const mapConnectionsToGroup = () => {
    let connectionsToGroup = {};
    props.connections.map(c => {
      props.groups.map(g => {
        if (c.id == g.connectionId) {
          connectionsToGroup[c.id] = g;
        }
      })
    });
    return connectionsToGroup;
  }

  const connectionsToGroup = mapConnectionsToGroup();
  let currentRequests = [];
  let currentConnections = [];
  props.connections.forEach(c => {
    if (c.connectionStatus != 'REQUEST') {
      currentConnections.push(c);
    } else {
      currentRequests.push(c);
    }
  });

  const currentRequestsCount = currentRequests.length;
  return props.connections.length > 0 ? (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {currentRequestsCount > 0 ? (
          <View style={styles.newRequestContainer}>
            <Text style={styles.newRequestContainerText}>
              {`You have ${currentRequestsCount} new connection request${currentRequestsCount > 1 ? 's' : ''}.`}
            </Text>
            <FormButton 
              buttonText={`View Request${currentRequestsCount > 1 ? 's' : ''}`}
              onPress={() => props.navigation.navigate('PendingConnections', { currentRequests })}
            />
          </View>
        ) : null}
        {currentConnections.map((user, i) => {
          const group = connectionsToGroup[user.id] || {};
          const groupId = group.id;
          let messages = group.messages;
          return (
            <TouchableOpacity key={`connection-${i}`} onPress={() => props.navigation.navigate('Chat', { messages, user, groupId })}>
              <ContactListItem
                image={require('../../assets/running.png')}
                connection={user}
                goToProfile={() => props.navigation.navigate('ConnectionProfile', { user })}
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
  newRequestContainer: {
    margin: 10,
    alignItems: 'center',
  },
  newRequestContainerText: {
    fontWeight: 'bold',
    fontSize: 16,
  }
});

const mapStateToProps = (state) => {
  return {
    connections: state.connectionsReducer.connections || [],
    groups: state.groupReducer.groups || [],
  }
}

export default connect(
  mapStateToProps,
  {},
)(ConnectionsScreen);