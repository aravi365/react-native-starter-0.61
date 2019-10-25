import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {Easing, Animated} from 'react-native';
import HomeScreen from '../App/containers/HomeScreen';
const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const {layout, position, scene} = sceneProps;

      const thisSceneIndex = scene.index;
      const width = layout.initWidth;

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      });

      return {transform: [{translateX}]};
    },
  };
};

const AppNavigator = createStackNavigator(
  {
    //   SplashPage,
    HomeScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: 'HomeScreen',
    transitionConfig,
  },
);

export default createAppContainer(AppNavigator);
