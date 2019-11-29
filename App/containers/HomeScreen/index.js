import React from 'react';
import {View, Button, Text, Input, Icon} from 'native-base';
import {TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {NetworkContext} from '../../components/NetworkProvider';
import SnackBar from 'react-native-snackbar-component';
export default class HomeScreen extends React.Component {
  static contextType = NetworkContext;
  render() {
    return (
      <View
        style={{
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 100,
        }}>
        <SnackBar
          backgroundColor="red"
          visible={!this.context.isConnected}
          textMessage="No Active Internet connection!"
          // actionHandler={() => {
          //   console.log('snackbar button clicked!');
          // }}
          actionText=" "
          autoHidingTime={10}
        />
        <Text style={{fontSize: 20}}>Hello this is a test message</Text>
        <Text>
          You are now {this.context.isConnected ? 'online' : 'offline'}
        </Text>
      </View>
    );
  }
}
