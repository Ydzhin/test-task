import React from 'react'
import { useTodo, useTodoActions } from '../../../../../store/todos/hooks'
import { TodoItem } from '../../../../shared/todo-item'
import * as Styled from './todo-list.styles'

const TodoList: React.FC = () => {
  const { todoItems } = useTodo()
  const { selectTodoItem, deleteTodoItem } = useTodoActions()

  const handleSelect = (id: string) => () => {
    selectTodoItem(id)
  }

  const handleDelete = (id: string) => (event: React.MouseEvent<SVGElement>) => {
    event.stopPropagation()
    deleteTodoItem(id)
  }

  return (
    <Styled.Container>
      {todoItems.length ? (
        todoItems.map((item) => (
          <TodoItem key={item.id} {...item} onSelect={handleSelect} onDelete={handleDelete} />
        ))
      ) : (
        <Styled.EmptyState>No items.</Styled.EmptyState>
      )}
    </Styled.Container>
  )
}

export default TodoList
