/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {Button, ThemeProvider} from 'react-native-elements';
import {Provider} from 'react-redux';
import store from './store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './containers/Home';

const Stack = createStackNavigator();

const Detail = ({navigation}) => (
  <View>
    <Text>Detail</Text>
    <Button title="Click Me" onPress={() => navigation.goBack()} />
  </View>
);

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <ThemeProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen title="Pokedex" name="Home" component={Home} />
          <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  </Provider>
);

export default App;
