import React from 'react'
import Image from '../Image'
import CartAsset from '@assets/cart.png'
import styled from 'styled-components'
import Text from '../Text'

const StyledCartIcon = styled.div`
  display: inline-block;
  position: relative;
`

const StyledCartCounter = styled(Text)`
  position: absolute;
  top: -5px;
`

function CartIcon () {
  return (
    <StyledCartIcon>
      <Image width='25px' imgSrc={CartAsset} inline />
      <StyledCartCounter>0</StyledCartCounter>
    </StyledCartIcon>
  )
}

export default CartIcon
