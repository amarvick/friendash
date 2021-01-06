import React from 'react';
import { TouchableOpacity, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getDistance } from '../../utils/DistanceCalculator';
import ContactBox from '../../components/ContactBox';
import EmptyState from '../../components/EmptyState';

const PendingConnectionsScreen = (props) => {
  // const mapConnectionsToGroup = () => {
  //   let connectionsToGroup = {};
  //   props.connections.map(c => {
  //     props.groups.map(g => {
  //       if (c.id == g.connectionId) {
  //         connectionsToGroup[c.id] = g;
  //       }
  //     })
  //   });
  //   return connectionsToGroup;
  // }

  const acceptUser = user => {
    // alert('accepting user')
    alert(JSON.stringify(user))
    // remove from 
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
                })}
                declineUser={() => declineUser({
                  ...user,
                  connectionStatus: 'REJECTED'
                })}
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

export default connect(
  mapStateToProps,
  {},
)(PendingConnectionsScreen);