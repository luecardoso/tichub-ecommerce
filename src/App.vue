<script lang="ts">
import ProductCard from './components/card/ProductCard.vue'
import { Cart } from './model/cart.model'
import { Category } from './model/category.model'
import { Product } from './model/product.model'
import CartItem from './components/card/CartItem.vue'

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
          250,
          0.2,
          category1,
        ),
        new Product(
          2,
          'O retrato de Dorian Gray',
          'Edição Português por Oscar Wilde (Autor), Paulo Schiller (Tradutor) ',
          50,
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
    decItem(product: Product) {
      this.cart.decItem(product)
    },
    removeItem(item: Product) {
      this.cart.removeItem(item)
    },
  },
  components: {
    ProductCard,
    CartItem,
  },
}
</script>

<template>
  <main>
    <section
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full bg-amber-400"
    >
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product" @onClick="addItem" />
      </div>
    </section>
  </main>

  <div>
    <h1>Carrinho</h1>
    <div>
      <div v-if="cart.list.length > 0" class="flex flex-col gap-4">
        <div v-for="item in cart.list" :key="item.product.id">
          <CartItem :item="item" @decrementItem="decItem" @removeItem="removeItem" />
        </div>
      </div>
      <div
        v-else
        class="border border-slate-500 bg-slate-400 rounded-sm h-64 w-1/2 flex items-center justify-center"
      >
        <h1>{{ 'Adicione itens ao carrinho' }}</h1>
      </div>
    </div>
  </div>

  <p>Valor total: {{ cart.getFinalPrice() }}</p>
  <Button :label="'Primevue'" />
</template>
