import { createAction } from '@reduxjs/toolkit'
import { ITodoItem } from './interfaces'

export const addTodo = createAction<ITodoItem>('todo/add')
export const deleteTodo = createAction<string>('todo/delete')
export const selectTodo = createAction<string>('todo/select')
export const clearAllTodos = createAction('todo/clearAll')
