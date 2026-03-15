<script lang="ts">
import ProductCard from './components/card/ProductCard.vue'
import { Cart } from './model/cart.model'
import { Category } from './model/category.model'
import { Product } from './model/product.model'

export default {
  data() {
    const category1 = new Category(1, 'Instrumentos Musicais')
    const category2 = new Category(1, 'Livros')
    return {
      cart: new Cart(),
      products: [
        new Product(
          1,
          'Violão',
          'Violão Acústico Tradicional para Iniciantes',
          245,
          0.2,
          category1,
        ),
        new Product(
          2,
          'O retrato de Dorian Gray',
          'Edição Português por Oscar Wilde (Autor), Paulo Schiller (Tradutor) ',
          245,
          0.2,
          category2,
        ),
      ],
    }
  },
  methods: {
    addItem(product: Product) {
      this.cart.addItem(product)
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
    <p>Itens: {{ cart.total }}</p>
    <p>Total R$ {{ cart.getFinalPrice() }}</p>
  </div>
</template>
