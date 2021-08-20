import { CartItem } from '@app/reduxtoolkit/slices/cart'
import { ProductType } from '@app/types/ProductsType'

export const getCartQuantity = (cartItems: CartItem[]): number => {
  let quantity = 0
  cartItems.forEach((item) => { quantity += item.quantity })

  return quantity
}

export const getProductLineCost = (product: ProductType | undefined, cartItem: CartItem): number => {
  let totalPrice = 0
  if (product) {
    totalPrice = product.price * cartItem.quantity
  }

  return totalPrice
}

export const getSubtotalCost = (products: ProductType[], cartItems: CartItem[]): number => {
  let subTotal = 0
  cartItems.forEach((item) => {
    const product = products.find((product) => product.id === item.productId)
    if (product) subTotal += product.price * item.quantity
  })
  return subTotal
}
