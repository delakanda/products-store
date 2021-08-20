import React from 'react'
import styled from 'styled-components'

type TextProps = {
  children: React.ReactNode
  lineHeight?: string
  fontSize?: string
  fontWeight?: string
}

const StyledText = styled.div<TextProps>`
  display: inline-block;
  line-height: ${(props) => props.lineHeight || 'inherit'};
  font-size: ${({ theme, fontSize }) => fontSize || theme.fontSize.sm};
  font-weight: ${(props) => props.fontWeight || 500};
`

function Text ({ children, ...rest }: TextProps) {
  return (
    <StyledText {...rest}>{children}</StyledText>
  )
}

export default Text
