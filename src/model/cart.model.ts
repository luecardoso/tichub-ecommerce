import type { ICartItem } from '@/interfaces/ICartItem'
import type { Product } from './product.model'

export class Cart {
  constructor(
    public list: ICartItem[] = [],
    public total: number = 0,
  ) {}

  addItem(product: Product) {
    if (this.productAlreadyExists(product)) {
      this.list = this.list.map((i) => {
        return i.product.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
      })
    } else {
      this.list.push({ product, quantity: 1 })
    }
    this.total += product.price * (1 - product.discount)
  }

  decItem(product: Product) {
    if (!this.productAlreadyExists(product)) return
    if (this.list.find((i) => i.product.id === product.id)?.quantity === 1) {
      this.removeItem(product)
      return
    }
    this.list = this.list.map((i) =>
      i.product.id === product.id ? { ...i, quantity: i.quantity - 1 } : i,
    )
    this.total -= product.price * (1 - product.discount)
  }

  getTotalItems(): number {
    return this.list.reduce((total, item) => total + item.quantity, 0)
  }

  getFinalPrice() {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.total)
  }

  productAlreadyExists(product: Product) {
    return this.list.some((i) => i.product.id === product.id)
  }

  removeItem(product: Product) {
    if (!this.productAlreadyExists(product)) return
    const itemQuantity = this.list.find((i) => i.product.id === product.id)?.quantity
    this.list = this.list.filter((i) => i.product.id !== product.id)
    this.total -= product.price * (1 - product.discount) * (itemQuantity ? itemQuantity : 0)
  }
}
