import React from 'react';
import {View, Button, Text, Input, Icon} from 'native-base';
import {TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {NetworkContext} from '../../components/NetworkProvider';
export default class HomeScreen extends React.Component {
  static contextType = NetworkContext;
  render() {
    return (
      <View
        style={{
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20}}>Hello this is a test message</Text>
        <Text>
          You are now {this.context.isConnected ? 'online' : 'offline'}
        </Text>
      </View>
    );
  }
}
