import { ButtonVariants } from '@app/types/Button'
import React from 'react'
import styled from 'styled-components'

type ButtonProps = {
  children: React.ReactNode
  variant: ButtonVariants;
}

const StyledSolidButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.olive};
  background-color: ${({ theme }) => theme.colors.olive};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.padding.md};
  min-width: 180px;
`

const Button = ({ children, variant }: ButtonProps) => {
  let buttonComponent = <></>
  switch (variant) {
    case ButtonVariants.solid:
      buttonComponent = (<StyledSolidButton>{children}</StyledSolidButton>)
      break
  }
  return buttonComponent
}

export default Button
