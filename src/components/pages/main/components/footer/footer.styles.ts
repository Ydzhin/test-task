import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  border-top: 1px solid #eeeeee;
  padding: 24px;
  font-size: 16px;
  color: #b1bacb;
`

export const ClearButton = styled.span`
  cursor: pointer;
  transition: all 0.1s linear;

  &:hover {
    color: #777;
  }
`
