import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { useQuery } from '@apollo/client'
import { StyledProductsHeader, StyledProductsSection } from './styled'
import Box from '@app/components/Box'
import { H1 } from '@app/components/Heading'
import Text from '@app/components/Text'
import { ALL_PRODUCTS_QUERY } from '@app/graphql/products'
import { ProductsResponseType } from '@app/types/ProductsType'
import Loader from '@app/components/Loader'
import ProductItem from './components/ProductItem'

function Products () {
  // ALL_PRODUCTS_QUERY
  const { data, loading } = useQuery<ProductsResponseType, {}>(ALL_PRODUCTS_QUERY)

  const theme = useContext(ThemeContext)

  return (
    <>
    <StyledProductsHeader>
      <H1>All Products</H1>
      <Text>A 360° look at Lumin</Text>
    </StyledProductsHeader>

    <Box
      backgroundColor={theme.colors.emphasis}
    >
      <StyledProductsSection>
        {loading && <Loader />}
        {!loading &&
          <>
            {data?.products?.map((product, key) => {
              return <ProductItem key={key} product={product} />
            })}
          </>
        }
      </StyledProductsSection>
    </Box>
    </>
  )
}

export default Products
