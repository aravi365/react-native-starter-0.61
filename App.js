import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Toast, Root} from 'native-base';
import {NetworkProvider} from './App/components/NetworkProvider';
import Navigator from './App/Navigator';
import NavigatorService from './App/NavigatorService';
import HomeScreen from './App/containers/HomeScreen';
export default class App extends React.Component {
  render() {
    return (
      <Root>
        <NetworkProvider>
          <SafeAreaView>
            <HomeScreen />
            {/* <Navigator
            ref={navigatorRef => {
              NavigatorService.setContainer(navigatorRef);
              navigator = navigatorRef;
            }}
          /> */}
          </SafeAreaView>
        </NetworkProvider>
      </Root>
    );
  }
}
