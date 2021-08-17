import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Text from '../Text'

type LinkProps = {
  linkText: string
  to: string
  marginCombo?: string
  paddingCombo?: string
  lineHeight?: string
}

const StyledLink = styled.div<LinkProps>`
  display: inline-block;
  margin: ${(props) => props.marginCombo || '0px'};
  padding: ${(props) => props.paddingCombo || '0px'};
  font-size: ${({ theme }) => theme.fontSize.xs};

  & a {
    text-decoration: inherit;
    color: inherit;
  }
`

function NavLink ({ ...props }: LinkProps) {
  return (
    <StyledLink {...props}>
      <Link to={props.to}>
        <Text {...props}>{props.linkText}</Text>
      </Link>
    </StyledLink>
  )
}

export default NavLink
