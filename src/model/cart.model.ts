import type { Product } from './product.model'

interface CartItem {
  product: Product
  quantity: number
}

export class Cart {
  constructor(
    public list: CartItem[] = [],
    public total: number = 0,
  ) {}

  addItem(product: Product) {
    const existItem = this.list.some((item) => item.product.name === product.name)
    if (existItem) {
      this.list.map((item) => {
        if (item.product.name === product.name) {
          item.quantity += 1
          return item
        } else {
          return item
        }
      })
      this.total += 1
    } else {
      this.list.push({ product, quantity: 1 })
      this.total += 1
    }
  }

  decItem() {
    this.total -= 1
  }

  getTotalItems(): number {
    return this.list.reduce((total, item) => total + item.quantity, 0)
  }

  getFinalPrice(): number {
    return this.list.reduce((total, item) => total + item.product.price * item.quantity, 0)
  }
}
