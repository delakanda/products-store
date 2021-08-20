import React from 'react'
import Image from '../Image'
import CartAsset from '@assets/cart.png'
import styled from 'styled-components'
import Text from '../Text'
import { useDispatch } from 'react-redux'
import { openCart } from '@app/reduxtoolkit/slices/cart'

type CartIconProps = {
  cartTotalQuantity: number;
}

const StyledCartIcon = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
`

const StyledCartCounter = styled(Text)`
  position: absolute;
  top: -5px;
`

function CartIcon ({ cartTotalQuantity }: CartIconProps) {
  const dispatch = useDispatch()

  return (
    <StyledCartIcon onClick={() => dispatch(openCart())}>
      <Image width='25px' imgSrc={CartAsset} inline />
      <StyledCartCounter>{cartTotalQuantity}</StyledCartCounter>
    </StyledCartIcon>
  )
}

export default CartIcon
