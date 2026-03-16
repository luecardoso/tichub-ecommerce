import type { Category } from './category.model'

export class Product {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public price: number,
    public discount: number,
    public category: Category,
  ) {}

  getPrice() {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.price)
  }
}
