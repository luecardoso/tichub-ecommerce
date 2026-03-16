import type { Product } from '@/model/product.model'

export interface ICartItem {
  product: Product
  quantity: number
}
