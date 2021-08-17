import React from 'react'
import styled from 'styled-components'

type BoxProps = {
  children: React.ReactNode
  marginCombo?: string
  paddingCombo?: string
  maxWidth?: string
}

const StyledBox = styled.div<BoxProps>`
  display: block;
  margin: ${(props) => props.marginCombo || '0px'};
  padding: ${(props) => props.paddingCombo || '0px'};
  max-width: ${(props) => props.maxWidth || '100%'};
`

function Box ({ children, ...rest }: BoxProps) {
  return (
    <StyledBox {...rest}>
      {children}
    </StyledBox>
  )
}

export default Box
