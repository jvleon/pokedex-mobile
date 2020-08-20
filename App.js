/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from './containers/Home';
import Detail from './containers/Detail';
import Header from './components/NavigationHeader';
import Berries from './containers/Berries';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainRoutes = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        header: ({navigation}) => (
          <Header navigation={navigation} title="Pokedex" />
        ),
      }}
      name="Home"
      component={Home}
    />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);

const BerriesRoutes = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        header: ({navigation}) => (
          <Header navigation={navigation} title="Berries" />
        ),
      }}
      name="Berries-flux"
      component={Berries}
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            name="Main"
            options={{title: 'Pokemons'}}
            component={MainRoutes}
          />
          <Drawer.Screen name="Berries" component={BerriesRoutes} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
