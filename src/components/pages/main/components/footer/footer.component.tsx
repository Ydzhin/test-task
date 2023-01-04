import React from 'react'
import { useTodo, useTodoActions } from '../../../../../store/todos/hooks'
import * as Styled from './footer.styles'

const Footer: React.FC = () => {
  const { selectedItemsCount } = useTodo()
  const { clearAllTodoItems } = useTodoActions()

  return (
    <Styled.Container>
      <span data-testid='selected-count'>{selectedItemsCount} items selected</span>
      <Styled.ClearButton onClick={clearAllTodoItems}>Clear All</Styled.ClearButton>
    </Styled.Container>
  )
}

export default Footer
