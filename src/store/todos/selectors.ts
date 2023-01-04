import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '..'

export const getTodosState = (state: RootState) => state.todos

export const getTodosItems = createSelector(getTodosState, (data) => data.todos)
export const getSelectedItemsCount = createSelector(
  getTodosItems,
  (data) => data.filter(({ selected }) => selected).length,
)
