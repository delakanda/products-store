import Box from '@app/components/Box'
import { H6, H7 } from '@app/components/Heading'
import Image from '@app/components/Image'
import QuantitySelector from '@app/components/QuantitySelector'
import Text from '@app/components/Text'
import { closeCart, decrementQuantity, incrementQuantity } from '@app/reduxtoolkit/slices/cart'
import { RootState } from '@app/reduxtoolkit/store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  StyledCart,
  StyledCartItem,
  StyledCartItemDetails,
  StyledCartItemImage,
  StyledCloseButton
} from './styled'

function Cart () {
  const { showCart, items } = useSelector((state: RootState) => state.cartSlice)
  const dispatch = useDispatch()

  return (
    showCart
      ? <StyledCart>
        <H6 textAlign='center'>YOUR CART</H6>

        <StyledCloseButton onClick={() => dispatch(closeCart())}>X</StyledCloseButton>
        {items.length === 0 &&
          <Box textAlign='center' marginCombo='50px auto'>
            <Text>There are no items in your cart</Text>
          </Box>
        }
        {items.map((cartItem) => {
          return (
            <StyledCartItem key={cartItem.product.id}>
              <StyledCartItemDetails>
                <H7>{cartItem.product.title}</H7>
                <QuantitySelector quantity={cartItem.quantity}
                  incrementQuantity={() => dispatch(incrementQuantity({ product: cartItem.product }))}
                  decrementQuantity={() => dispatch(decrementQuantity({ product: cartItem.product }))} />
              </StyledCartItemDetails>

              <StyledCartItemImage>
                <Image imgSrc={cartItem.product.image_url} />
              </StyledCartItemImage>
            </StyledCartItem>
          )
        })}
      </StyledCart>
      : null
  )
}

export default Cart
