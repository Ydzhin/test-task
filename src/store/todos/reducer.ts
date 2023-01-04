import { createReducer } from '@reduxjs/toolkit'
import { addTodo, clearAllTodos, deleteTodo, selectTodo } from './actions'
import { preloadedTodoState } from './preloaded-state'

const todosReducer = createReducer(preloadedTodoState, (builder) => {
  builder
    .addCase(clearAllTodos, (state) => {
      state.todos = []
    })
    .addCase(addTodo, (state, { payload }) => {
      state.todos = [...state.todos, payload]
    })
    .addCase(deleteTodo, (state, { payload }) => {
      state.todos = state.todos.filter(({ id }) => id !== payload)
    })
    .addCase(selectTodo, (state, { payload }) => {
      state.todos = state.todos.map((item) =>
        item.id === payload ? { ...item, selected: !item.selected } : item,
      )
    })
})

export default todosReducer
