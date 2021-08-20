import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from 'styled-components'
import { getApolloContext } from '@apollo/client'
import { StyledProductsHeader, StyledProductsSection } from './styled'
import Box from '@app/components/Box'
import { H1 } from '@app/components/Heading'
import Text from '@app/components/Text'
import { ALL_PRODUCTS_QUERY } from '@app/graphql/products'
import Loader from '@app/components/Loader'
import ProductItem from './components/ProductItem/ProductItem'
import { useDispatch, useSelector } from 'react-redux'
import { updateProducts } from '@app/reduxtoolkit/slices/products'
import { LoadStates } from '@app/types/Loader'
import { RootState } from '@app/reduxtoolkit/store'

function Products () {
  // ALL_PRODUCTS_QUERY
  const [loadingState, setLoadingState] = useState(LoadStates.fetching)
  const { client } = useContext(getApolloContext())
  const dispatch = useDispatch()
  const { currency } = useSelector((state: RootState) => state.appSlice)
  const { products } = useSelector((state: RootState) => state.productsSlice)

  const getProducts = () => {
    client && client.query({
      query: ALL_PRODUCTS_QUERY,
      variables: { currency }
    },).then((result) => {
      dispatch(updateProducts({ products: result?.data?.products || [] }))
      setLoadingState(LoadStates.fetched)
    }).catch((_error: Error) => {
      setLoadingState(LoadStates.fetchError)
    })
  }

  // const setCurrency = () => {

  // }

  useEffect(() => {
    getProducts()
  }, [currency])

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
        {loadingState === LoadStates.fetching && <Loader />}
        {loadingState === LoadStates.fetched &&
          <>
            {products?.map((product) => {
              return <ProductItem key={product.id} product={product} />
            })}
          </>
        }
      </StyledProductsSection>
    </Box>
    </>
  )
}

export default Products
