import React from 'react'
import styled from 'styled-components'

type TextProps = {
  children: React.ReactNode
  lineHeight?: string
  fontSize?: string
}

const StyledText = styled.div<TextProps>`
  display: inline-block;
  line-height: ${(props) => props.lineHeight || 'inherit'};
  font-size: ${({ theme, fontSize }) => fontSize || theme.fontSize.sm};
`

function Text ({ children, ...rest }: TextProps) {
  return (
    <StyledText {...rest}>{children}</StyledText>
  )
}

export default Text
