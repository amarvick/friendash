import React from 'react';
import { TouchableOpacity, Image, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import ContactListItem from '../../components/ContactListItem';
import EmptyState from '../../components/EmptyState';

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
  return props.connections.length > 0 ? (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {props.connections.map((user, i) => {
          const messages = connectionsToGroup[user.id].messages || {};
          return (
            <TouchableOpacity key={`connection-${i}`} onPress={() => props.navigation.navigate('ConnectionProfile', { user })}>
              <ContactListItem
                image={require('../../assets/running.png')}
                connection={user}
                goToChat={() => props.navigation.navigate('Chat', { messages, user })}
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
    groups: state.groupReducer.groups || [],
    
  }
}

export default connect(
  mapStateToProps,
  {},
)(ConnectionsScreen);