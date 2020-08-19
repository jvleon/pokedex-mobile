/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Text} from 'react-native';
import {Button, ThemeProvider} from 'react-native-elements';
import {Provider} from 'react-redux';
import store from './store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './containers/Home';
import Detail from './containers/Detail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ThemeProvider>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              options={{
                headerTitle: 'Pokedex',
              }}
              name="Home"
              component={Home}
            />
            <Stack.Screen name="Detail" component={Detail} />
          </Stack.Navigator>
        </ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
