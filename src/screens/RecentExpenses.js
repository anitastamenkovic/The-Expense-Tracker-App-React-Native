import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import ExpensesOutput from '../components/expensesOutput/ExpensesOutput';

export default function RecentExpenses() {
  return <ExpensesOutput expensesPeriod="Last 7 days" />;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
