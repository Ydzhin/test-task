import { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { addTodo, clearAllTodos, deleteTodo, selectTodo } from './actions'
import { getSelectedItemsCount, getTodosItems } from './selectors'
import { ITodoItem } from './interfaces'

export const useTodoItems = (): ITodoItem[] => useAppSelector(getTodosItems)
export const useTodoSelectedItemsCount = (): number => useAppSelector(getSelectedItemsCount)

export const useTodo = () => {
  const todoItems = useTodoItems()
  const selectedItemsCount = useTodoSelectedItemsCount()

  return {
    todoItems,
    selectedItemsCount,
  }
}

export const useTodoActions = () => {
  const dispatch = useAppDispatch()

  const clearAllTodoItems = useCallback(() => {
    dispatch(clearAllTodos())
  }, [dispatch])

  const addTodoItem = useCallback(
    (item: ITodoItem) => {
      dispatch(addTodo(item))
    },
    [dispatch],
  )

  const deleteTodoItem = useCallback(
    (id: string) => {
      dispatch(deleteTodo(id))
    },
    [dispatch],
  )

  const selectTodoItem = useCallback(
    (id: string) => {
      dispatch(selectTodo(id))
    },
    [dispatch],
  )

  return {
    clearAllTodoItems,
    addTodoItem,
    deleteTodoItem,
    selectTodoItem,
  }
}
