import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainPage from '../components/mainPage/MainPage';


const Stack = createStackNavigator();

export default function NavigateMain() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen
                name="Main"
                component={MainPage}
                options={{title: 'Главная'}}
              />
          </Stack.Navigator>
      </NavigationContainer>
    
  );
}
