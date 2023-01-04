import styled from 'styled-components'
import { ReactComponent as Delete } from '../../../assets/delete.svg'

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;

  &:hover {
    span {
      color: #2d70fd;
    }
    div {
      border-color: #2d70fd45;
    }
  }
`

export const TodoItemText = styled.span<{ selected?: boolean }>`
  font-weight: 500;
  font-size: 16px;
  max-width: 490px;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.1s linear;
  color: ${({ selected }) => (selected ? '#8F98A8' : '#001747')};
  text-decoration-line: ${({ selected }) => (selected ? 'line-through' : 'none')};
`

export const Checkbox = styled.div<{ selected?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: 1px solid #eee;
  border-radius: 50%;
  transition: background 0.1s linear;
  background: ${({ selected }) => (selected ? '#00d8a7' : 'none')};
  border-color: ${({ selected }) => (selected ? '#00d8a7' : '#eee')};
`

export const DeleteIcon = styled(Delete)`
  transition: fill 0.1s linear;

  &:hover {
    fill: #b1bacb;
  }
`
