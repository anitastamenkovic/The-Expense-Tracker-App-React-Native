import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ManageExpense from '../screens/ManageExpense';
import ExpensesOverview from './navigators/ExpensesOverview';
import {GlobalStyles} from '../constants/styles';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
          headerTintColor: 'white',
        }}>
        <Stack.Screen
          name="ExpensesOverview"
          component={ExpensesOverview}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ManageExpense"
          component={ManageExpense}
          options={{
            presentation: 'modal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
