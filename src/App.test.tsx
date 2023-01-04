import React from 'react'
import { fireEvent, render, act, screen } from '@testing-library/react'
import App from './App'

test('renders add button', () => {
  render(<App />)
  const linkElement = screen.getByText(/To Do List/i)
  expect(linkElement).toBeInTheDocument()
})

test('add new task', () => {
  jest.useFakeTimers()

  render(<App />)

  const input = screen.getByPlaceholderText('Type your task...') as HTMLInputElement
  const button = screen.getByRole('button', {
    name: /Add/i,
  })
  const selectedCountElement = screen.getByTestId('selected-count')

  fireEvent.change(input, { target: { value: 'New task' } })

  act(() => {
    jest.advanceTimersByTime(500)
  })

  fireEvent.click(button)

  const todoItems = screen.getAllByTestId('todo-item')

  expect(selectedCountElement.textContent).toBe('1 items selected')
  expect(input.value).toBe('')
  expect(todoItems.length).toBe(3)
})
