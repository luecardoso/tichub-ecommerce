<script lang="ts">
import ProductCard from './components/card/ProductCard.vue'
import { Cart } from './model/cart.model'
import { Product } from './model/product.model'

export default {
  data() {
    return {
      cart: new Cart(),
      products: [
        new Product('Violão1', 'Violão Acústico Tradicional para Iniciantes', 245, 0.2),
        new Product('Violão2', 'Violão Acústico Tradicional para Iniciantes', 245, 0.2),
      ],
    }
  },
  methods: {
    addItem(product: Product) {
      const existItem = this.cart.list.some((item) => item.product.name === product.name)
      if (existItem) {
        this.cart.list.map((item) => {
          if (item.product.name === product.name) {
            item.quantity += 1
            return item
          } else {
            item
          }
        })
        this.cart.total += 1
      } else {
        this.cart.list.push({ product, quantity: 1 })
        this.cart.total += 1
      }
    },
    decItem() {
      this.cart.total -= 1
    },
  },
  components: {
    ProductCard,
  },
}
</script>

<template>
  <main>
    <div v-for="product in products" :key="product.name">
      <ProductCard :product="product" @onClick="addItem" />
    </div>
  </main>

  <div>
    <h1>Carrinho</h1>
    <div v-for="item in cart.list" :key="item.product.name">
      <h1>{{ item.product.name }}</h1>
      <p>{{ item.quantity }}</p>
    </div>
    <p>total: {{ cart.total }}</p>
  </div>
</template>
