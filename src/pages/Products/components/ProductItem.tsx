import React, { useContext } from 'react'
import Button from '@app/components/Button'
import FlexBox from '@app/components/FlexBox'
import { H7 } from '@app/components/Heading'
import Image from '@app/components/Image'
import Text from '@app/components/Text'
import { ButtonVariants } from '@app/types/Button'
import { ProductType } from '@app/types/ProductsType'
import styled, { ThemeContext } from 'styled-components'

type ProductItemProps = {
  product: ProductType
}

const StyledProductWrapper = styled(FlexBox)`
  flex-direction: column;
  align-items: center;
  width: 33%;
  margin-top: 3rem;
  margin-bottom: 3rem;
  box-sizing: border-box;
`

const StyledImage = styled(Image)`
  text-align: center;
  & img {
    object-fit: contain;
    max-height: 120px;
    max-width: 80%;
    flex: 1 1 0%;
    height: auto;
    box-sizing: border-box;
  }
`

function ProductItem ({ product }: ProductItemProps) {
  const theme = useContext(ThemeContext)
  return (
    <StyledProductWrapper>
      <StyledImage width='auto' imgSrc={product.image_url} />
      <FlexBox alignSelf='center' marginCombo='10px 0px'>
        <H7>{product.title}</H7>
      </FlexBox>
      <FlexBox alignSelf='center' marginCombo='10px 0px'>
        <Text fontSize={theme.fontSize.md}>$ {product.price}</Text>
      </FlexBox>
      <FlexBox alignSelf='center' marginCombo='10px 0px'>
        <Button variant={ButtonVariants.solid}>
          Add to Cart
        </Button>
      </FlexBox>
    </StyledProductWrapper>
  )
}

export default ProductItem
