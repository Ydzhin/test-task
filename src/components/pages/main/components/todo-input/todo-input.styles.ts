import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  min-width: 600px;
  padding: 7px;
  border: 1px solid #eeeeee;
  border-radius: 8px;
`

export const Button = styled.button`
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  padding: 8px 16px;
  border: 1px solid #2d70fd;
  background: #2d70fd;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.1s linear;

  &:hover {
    border: 1px solid #1f4eb1;
    background: #1f4eb1;
  }
`
