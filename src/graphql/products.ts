import { gql } from '@apollo/client'

export const ALL_PRODUCTS_QUERY = gql`
  query products($currency: Currency){
    products {
      id
      title
      image_url
      price(currency: $currency)
      product_options {
        title
      }
    }
  }
`
