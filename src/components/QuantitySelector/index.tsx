import React from 'react'
import styled from 'styled-components'

type QuantitySelectorProps = {
  quantity: number;
  incrementQuantity: () => void;
  decrementQuantity: () => void
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  border: 1px solid ${({ theme }) => theme.colors.text};
  max-width: 100px;
  margin-top: ${({ theme }) => theme.margin.md};
`

const StyledItem = styled.div<{cursor?: string}>`
  padding: 5px 10px;
  cursor: ${(props) => props.cursor || 'initial'};
`

function QuantitySelector (props: QuantitySelectorProps) {
  return (
    <StyledContainer>
      <StyledItem cursor='pointer' onClick={() => props.decrementQuantity()}>-</StyledItem>
      <StyledItem>{props.quantity}</StyledItem>
      <StyledItem cursor='pointer' onClick={() => props.incrementQuantity()}>+</StyledItem>
    </StyledContainer>
  )
}

export default QuantitySelector
