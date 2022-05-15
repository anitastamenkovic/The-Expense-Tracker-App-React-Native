import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import ExpensesOutput from '../components/expensesOutput/ExpensesOutput';

export default function AllExpenses() {
  return <ExpensesOutput expensesPeriod="Total" />;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
