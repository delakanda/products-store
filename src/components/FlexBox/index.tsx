import React from 'react'
import styled from 'styled-components'

type FlexBoxProps = {
  children: React.ReactNode
  flexDirection?: string
  alignSelf?: string
  alignItems?: string
  marginCombo?: string
  paddingCombo?: string
  pushItem?: string
  justifyContent?: string
}

const StyledFlexBox = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'row'};
  align-self: ${(props) => props.alignSelf || 'start'};
  align-items: ${(props) => props.alignItems || 'flex-start'};
  margin: ${(props) => props.marginCombo || '0px'};
  padding: ${(props) => props.paddingCombo || '0px'};
  justify-content: ${(props) => props.justifyContent || '0px'};
  
  ${({ pushItem }) => pushItem && pushItem === 'right' && `
    margin-left: auto;
  `}

  ${({ pushItem }) => pushItem && pushItem === 'left' && `
    margin-right: auto;
  `}
`

function FlexBox ({ children, ...rest }: FlexBoxProps) {
  return (
    <StyledFlexBox {...rest}>
      {children}
    </StyledFlexBox>
  )
}

export default FlexBox
