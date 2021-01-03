import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import TextMessageInput from '../../components/TextMessageInput';

const ChatScreen = (props) => {
  const [text, setText] = React.useState({
    text: '',
  });

  const sendMessage = () => {
    alert('message sent!');
    setText('');
  }

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
              <Text>
                {message.message}
              </Text>
            </View>
          )
        })}
      </ScrollView>
      <View>
        <TextMessageInput
          labelValue={text}
          placeholderText="Write message..."
          onChange={text => setText(text)}
          sendMessage={sendMessage}
        />
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
    borderRadius: 5,
    minWidth: '20%',
    maxWidth: '50%',
    padding: 10,
    margin: 10,
  },
  otherUserMessage: {
    alignSelf: 'flex-start',
    backgroundColor: 'gray',
  },
  yourMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#65c2f5',
  },
});

const mapStateToProps = (state) => {
  return {
    userId: state.userReducer.user.id || 0,
  }
}

export default connect(
  mapStateToProps,
  {},
)(ChatScreen);