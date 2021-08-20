import { H6, H7 } from '@app/components/Heading'
import Image from '@app/components/Image'
import QuantitySelector from '@app/components/QuantitySelector'
import { decrementQuantity, incrementQuantity } from '@app/reduxtoolkit/slices/cart'
import { RootState } from '@app/reduxtoolkit/store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyledCart, StyledCartItem, StyledCartItemDetails, StyledCartItemImage } from './styled'

function Cart () {
  const { showCart, items } = useSelector((state: RootState) => state.cartSlice)
  const dispatch = useDispatch()

  return (
    showCart
      ? <StyledCart>
        <H6 textAlign='center'>YOUR CART</H6>

        {items.map((cartItem) => {
          return (
            <StyledCartItem key={cartItem.product.id}>
              <StyledCartItemDetails>
                <H7>{cartItem.product.title}</H7>
                {/* <Box>
                  <Text fontSize={themeContext.fontSize.xxs}>Combination | 25-34</Text>
                </Box>
                <Box>
                  <Text fontSize={themeContext.fontSize.xxs}>One time purchase of Two Month supply.</Text>
                </Box> */}
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
