import React from 'react'
import * as Styled from './text-input.styles'

interface TextInputProps {
  placeholder: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange, placeholder }) => {
  return (
    <Styled.Input placeholder={placeholder} data-testid='input' value={value} onChange={onChange} />
  )
}

export default React.memo(TextInput)
