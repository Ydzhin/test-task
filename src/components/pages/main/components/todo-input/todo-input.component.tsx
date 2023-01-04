import React, { useCallback, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useTodoActions } from '../../../../../store/todos/hooks'
import { TextInput } from '../../../../shared/text-input'
import useDebounce from '../../../../../hooks/useDebounce'
import * as Styled from './todo-input.styles'

const TodoInput: React.FC = () => {
  const { addTodoItem } = useTodoActions()

  const [text, setText] = useState<string>('')
  const debouncedTextValue = useDebounce(text)

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  }, [])

  const handleSubmit = () => {
    if (debouncedTextValue) {
      addTodoItem({ id: uuidv4(), text: debouncedTextValue, selected: false })
      setText('')
    }
  }

  return (
    <Styled.Container>
      <TextInput value={text} onChange={handleChange} placeholder='Type your task...' />
      <Styled.Button onClick={handleSubmit}>Add</Styled.Button>
    </Styled.Container>
  )
}

export default TodoInput
