export type ProductsResponseType = {
  products: ProductType[]
}

export type ProductType = {
  image_url: string
  title: string
  price: number
}
