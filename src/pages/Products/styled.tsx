import Box from '@app/components/Box'
import styled from 'styled-components'

export const StyledProductsHeader = styled(Box)`
  margin: 0px auto;
  padding: 5rem;
  max-width: 1300px;
`

export const StyledProductsSection = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0px auto;
  padding: 5rem;
  max-width: 1300px;
  min-height: 400px;
  background-color: ${({ theme }) => theme.colors.emphasis};
`
