import React from 'react';
import TextMessageInput from '../../components/TextMessageInput';
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { addMessageToGroup } from '../../redux/actions/groupActions';

const ChatScreen = (props) => {
  const [message, setMessage] = React.useState('');

  const sendMessage = () => {
    if (message != null) {
      props.addMessageToGroup(props.route.params.groupId, {
        'id': String(Math.random() * 243523456),
        'sender': props.userId,
        'dateSent': '12/4/2020',
        'message': message,
      });
      setMessage('');
    } else {
      alert('empty message')
    }
  }

  const user = props.route.params.user;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.messagesContainer}>
        {props.route.params.messages.map(message => {
          return (
            <View style={[
              styles.messageContainer,
              message.sender != props.userId ?
                styles.otherUserMessage :
                styles.yourMessage
            ]}>
              <Text style={styles.messageText}>
                {message.message}
              </Text>
            </View>
          )
        })}
      </ScrollView>
      <View>
        {user.connectionStatus == 'PENDING' ? (
          <View style={styles.pendingTextContainer}>
            <Text style={styles.pendingText}>{`${user.name} has received your request. Once they accept, you will be able to exchange messages.`}</Text>
          </View>
        ) : (
            <TextMessageInput
              labelValue={message}
              placeholderText="Write message..."
              onChangeText={text => setMessage(text)}
              sendMessage={sendMessage}
            />
          )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    flex: 1,
  },
  messageContainer: {
    borderRadius: 40,
    maxWidth: '50%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    margin: 10,
  },
  messageText: {
    fontSize: 16,
  },
  otherUserMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#DCDCDC',
  },
  yourMessage: {
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#65c2f5',
  },
  pendingTextContainer: {
    alignSelf: 'center',
    padding: 10,
  },
  pendingText: {
    textAlign: 'center',
    color: 'gray',
  }
});

const mapStateToProps = (state) => {
  return {
    userId: state.userReducer.user.id || 0,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMessageToGroup: (groupId, message) => dispatch(addMessageToGroup(groupId, message)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChatScreen);