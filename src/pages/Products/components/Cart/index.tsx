import Box from '@app/components/Box'
import Button from '@app/components/Button'
import FlexBox from '@app/components/FlexBox'
import { H6, H7 } from '@app/components/Heading'
import Image from '@app/components/Image'
import QuantitySelector from '@app/components/QuantitySelector'
import Select from '@app/components/Select'
import Text from '@app/components/Text'
import { updateCurrency } from '@app/reduxtoolkit/slices/app'
import { closeCart, decrementQuantity, incrementQuantity, } from '@app/reduxtoolkit/slices/cart'
import { RootState } from '@app/reduxtoolkit/store'
import { getProductLineCost, getSubtotalCost } from '@app/utls/Cart'
import { currencies } from '@app/utls/Currencies'
import { convertFlatToSelectOptions, convertToSelectOption } from '@app/utls/Select'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  StyledCart,
  StyledCartItem,
  StyledCartItemDetails,
  StyledCartItemImage,
  StyledCloseButton,
  StyledSubTotalSection
} from './styled'

function Cart () {
  const { showCart, items } = useSelector((state: RootState) => state.cartSlice)
  const { currency } = useSelector((state: RootState) => state.appSlice)
  const { products } = useSelector((state: RootState) => state.productsSlice)
  const dispatch = useDispatch()

  const getProductById = (productId: number) => {
    return products.find(product => product.id === productId)
  }

  const changeCurrency = (e: React.FormEvent<HTMLSelectElement>) => {
    dispatch(updateCurrency({ currency: e.currentTarget.value }))
  }

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

        <Select selected={convertToSelectOption(currency)}
          options={convertFlatToSelectOptions(currencies)}
          onChange={(e) => changeCurrency(e)} />

        {items.map((cartItem) => {
          const product = getProductById(cartItem.productId)
          return (
            <StyledCartItem key={cartItem.productId}>
              <StyledCartItemDetails>
                <H7>{product?.title}</H7>
                <FlexBox flexDirection='row'>
                  <QuantitySelector quantity={cartItem.quantity}
                    incrementQuantity={() => dispatch(incrementQuantity({ product }))}
                    decrementQuantity={() => dispatch(decrementQuantity({ product }))} />

                  <FlexBox alignSelf='center' marginCombo="16px 0px 0px 20px">
                    <Text>
                      <Text fontWeight='900'>{currency}</Text> {getProductLineCost(product, cartItem)}
                    </Text>
                  </FlexBox>
                </FlexBox>
              </StyledCartItemDetails>

              <StyledCartItemImage>
                {product &&
                  <Image imgSrc={product.image_url} />}
              </StyledCartItemImage>
            </StyledCartItem>
          )
        })}

        <StyledSubTotalSection>
          <FlexBox justifyContent='space-between'>
            <FlexBox>
              <H6>Subtotal</H6>
            </FlexBox>
            <FlexBox>
              <H6><Text fontWeight='900'>{currency}</Text> {getSubtotalCost(products, items)}</H6>
            </FlexBox>
          </FlexBox>
          <Box marginCombo='20px 0px'>
            <Button width='100%'>Proceed to Checkout</Button>
          </Box>
        </StyledSubTotalSection>
      </StyledCart>
      : null
  )
}

export default Cart
