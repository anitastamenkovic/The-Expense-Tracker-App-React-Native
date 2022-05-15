import React from 'react';
import {FlatList} from 'react-native';

import ExpenseItem from './ExpenseItem';

const renderExpenseItem = itemData => {
  return <ExpenseItem {...itemData.item} />;
};

export default function ExpensesOverview({expenses}) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={item => item.id}
    />
  );
}
