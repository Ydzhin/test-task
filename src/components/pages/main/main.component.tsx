import React from 'react'
import { Footer } from './components/footer'
import { TodoInput } from './components/todo-input'
import { TodoList } from './components/todo-list'
import * as Styled from './main.styles'

const MainPage: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Header>To Do List</Styled.Header>
      <Styled.FormContainer>
        <TodoInput />
        <TodoList />
      </Styled.FormContainer>
      <Footer />
    </Styled.Container>
  )
}

export default MainPage
