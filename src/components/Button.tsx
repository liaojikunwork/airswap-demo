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
  transition: 0.6s;
  padding: 10px 30px;
  min-width: 100px;
  height: 50px;
  color: white;
  background-color: #353C40;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.2);
  opacity: ${({ $isDisabled }) => $isDisabled ? 0.5 : 1};
  border-radius: 30px;
  pointer-events: ${({ $isDisabled }) => $isDisabled ? 'none' : 'auto'};

  &:hover {
    box-shadow: none;
    transform: scale(0.95);
  }

  &:disabled {
    cursor: not-allowed;
  }
`

interface ButtonProps {
  isDisabled?: boolean
  onClick(): void
  children: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  return (
    <ButtonEl $isDisabled={props.isDisabled} onClick={props.onClick}>
      {props.children}
    </ButtonEl>
  )
}
