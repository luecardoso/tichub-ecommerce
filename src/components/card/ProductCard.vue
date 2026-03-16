<script lang="ts">
import type { Product } from '@/model/product.model'
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Product>,
    },
  },
  emits: ['onClick'],
  methods: {
    addItem(product: Product) {
      this.$emit('onClick', product)
    },
  },
})
</script>

<template>
  <Card :style="{ width: '100%', minWidth: '200px', maxWidth: '220px' }">
    <template #header>
      <img :src="'https://picsum.photos/200'" class="w-full object-cover" />
    </template>

    <template #title>
      <h1>{{ product?.name }}</h1>
    </template>

    <template #content>
      <p>{{ product?.description }}</p>
      <p>R$:{{ product?.price.toFixed(2).replace('.', ',') }}</p>
    </template>

    <template #footer>
      <div class="flex flex-row-reverse">
        <Button-Product @click="addItem(product!)">Adicionar</Button-Product>
      </div>
    </template>
  </Card>
</template>
