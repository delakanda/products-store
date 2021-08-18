import { gql } from '@apollo/client'

export const ALL_PRODUCTS_QUERY = gql`
  query GetProducts{
    products {
      title
      image_url
      price(currency: USD)
      product_options {
        title
      }
    }
  }
`
