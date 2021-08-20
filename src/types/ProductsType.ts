export type ProductsResponseType = {
  products: ProductType[]
}

export type ProductType = {
  id: number
  image_url: string
  title: string
  price: number
}
