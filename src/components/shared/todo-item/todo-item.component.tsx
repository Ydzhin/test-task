import React from 'react'
import { ReactComponent as DoneIcon } from '../../../assets/ok.svg'
import * as Styled from './todo-item.styles'

interface TodoItemProps {
  id: string
  text: string
  selected: boolean
  onSelect: (id: string) => () => void
  onDelete: (id: string) => (event: React.MouseEvent<SVGElement>) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, selected, onSelect, onDelete }) => {
  return (
    <Styled.RowContainer onClick={onSelect(id)} data-testid='todo-item'>
      <Styled.ContentContainer>
        <Styled.Checkbox selected={selected}>{selected && <DoneIcon />}</Styled.Checkbox>
        <Styled.TodoItemText selected={selected}>{text}</Styled.TodoItemText>
      </Styled.ContentContainer>
      <Styled.DeleteIcon onClick={onDelete(id)} />
    </Styled.RowContainer>
  )
}

export default TodoItem
