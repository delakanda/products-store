import React from 'react'
import styled from 'styled-components'

type BaseHeadingProps = {
  children: React.ReactNode
}

const StyledBaseHeading = styled.div<BaseHeadingProps>`
  display: block;
  font-weight: 800;
  font-size: ${({ theme }) => theme.fontSize.xxl};
`

function BaseHeading ({ children, ...rest }: BaseHeadingProps) {
  return (
    <StyledBaseHeading {...rest}>{children}</StyledBaseHeading>
  )
}

export const H1 = styled(BaseHeading)`
  font-size: ${({ theme }) => theme.fontSize.jumbo};
`

export const H2 = styled(BaseHeading)`
  font-size: ${({ theme }) => theme.fontSize.xxl};
`

export const H3 = styled(BaseHeading)`
  font-size: ${({ theme }) => theme.fontSize.xl};
`

export const H4 = styled(BaseHeading)`
  font-size: ${({ theme }) => theme.fontSize.lg};
`

export const H5 = styled(BaseHeading)`
  font-size: ${({ theme }) => theme.fontSize.md};
`

export const H6 = styled(BaseHeading)`
  font-size: ${({ theme }) => theme.fontSize.sm};
`
export const H7 = styled(BaseHeading)`
  font-size: ${({ theme }) => theme.fontSize.xs};
`
