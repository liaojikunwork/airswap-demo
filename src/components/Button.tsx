import React from 'react'
import styled from 'styled-components'

interface ButtonElProps {
  $isDisabled?: boolean
}

const ButtonEl = styled.button<ButtonElProps>`
  position: relative;
  cursor: pointer;
  border: none;
  outline: none;
  transition: 0.3s;
  padding: 10px 20px;
  min-width: 100px;
  color: white;
  background-color: #2b71ff;
  opacity: ${({ $isDisabled }) => $isDisabled ? 0.5 : 1};
  border-radius: 30px;
  font-size: 14px;
  pointer-events: ${({ $isDisabled }) => $isDisabled ? 'none' : 'auto'};

  &:hover {
    background-color: #2055bf;
  }

  &:disabled {
    cursor: not-allowed;
  }
`

interface ButtonProps {
  label: string
  isDisabled?: boolean
  onClick(): void
}

export default function Button(props: ButtonProps) {
  return (
    <ButtonEl $isDisabled={props.isDisabled} onClick={props.onClick}>
      {props.label}
    </ButtonEl>
  )
}