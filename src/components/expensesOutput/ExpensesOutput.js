import React from 'react';
import {View, StyleSheet} from 'react-native';

import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import {DUMMY_EXPENSES} from '../../data/expenses';
import {GlobalStyles} from '../../constants/styles';

export default function ExpensesOverview({expensesPeriod}) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
