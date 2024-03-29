import React from 'react';
import { TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getDistance } from '../../utils/DistanceCalculator';
import ContactBox from '../../components/ContactBox';
import EmptyState from '../../components/EmptyState';

import { editConnection } from '../../redux/actions/connectionsActions';
import { addGroup } from '../../redux/actions/groupActions';
import { removeConnection } from '../../redux/actions/connectionsActions';

const PendingConnectionsScreen = (props) => {
  const acceptUser = (user, message) => {
    props.editConnection(user)
    props.addGroup({
      id: Math.random() * 90823809,
      messages: [{
        id: Math.random() * 9082380923,
        sender: user.id,
        dateSent: '1/1/2021',
        message,
      }],
      connectionId: user.id,
    })
  }

  const declineUser = user => {
    alert('declining user')
  }

  const requests = props.route.params.currentRequests;
  return requests.length > 0 ? (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {requests.map((user, index) => {
          const distance = getDistance(
            props.userCoordinates[0],
            props.userCoordinates[1],
            user.coordinates[0],
            user.coordinates[1]
          );
          const openingMessage = user.openingMessage != '' ? 
            user.openingMessage : 
            "I'm interested in going for a run with you!";
          return (
            <TouchableOpacity key={`queried-user-${index}`} onPress={() => props.navigation.navigate('RequestorProfile', { user, index })}>
              <ContactBox
                name={user.name}
                location={user.location}
                distance={distance}
                type='Runner'
                isRequesting={true}
                acceptUser={() => acceptUser({
                  ...user,
                  connectionStatus: 'CONNECTED'
                }, openingMessage)}
                declineUser={() => declineUser({
                  ...user,
                  connectionStatus: 'REJECTED'
                })}
                openingMessage={openingMessage}
              />
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    </SafeAreaView>
  ) : (
      <EmptyState
        photo={require('../../assets/running.png')}
        header="No pending requests"
        subtitle="Talk to the ones you have"
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
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editConnection: (connection) => dispatch(editConnection(connection)),
    removeConnection: (connection) => dispatch(removeConnection(connection)),
    addGroup: (group) => dispatch(addGroup(group))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PendingConnectionsScreen);