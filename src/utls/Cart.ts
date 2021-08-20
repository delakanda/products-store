import { CartItem } from '@app/reduxtoolkit/slices/cart'

export const getCartQuantity = (cartItems: CartItem[]) => {
  let quantity = 0
  cartItems.forEach((item) => { quantity += item.quantity })

  return quantity
}
