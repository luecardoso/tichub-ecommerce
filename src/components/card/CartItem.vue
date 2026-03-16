<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { Product } from '@/model/product.model'
import type { ICartItem } from '@/interfaces/ICartItem'
export default defineComponent({
  props: {
    item: {
      type: Object as PropType<ICartItem>,
      required: true,
    },
  },
  emits: ['removeItem', 'decItem'],
  methods: {
    onDecrementItem(product: Product) {
      this.$emit('decItem', product)
    },
    onRemoveItem(product: Product) {
      this.$emit('removeItem', product)
    },
  },
})
</script>

<template>
  <div>
    <Card :style="{ width: '100%', minWidth: '200px', maxWidth: '420px' }">
      <template #content>
        <div class="flex flex-row gap-2">
          <img :src="'https://picsum.photos/200'" class="w-20" />
          <h3 class="flex-1 px-4">{{ item.product.name }}</h3>
          <p>{{ item.product.getPrice() }}</p>
          <p>Qtd.: {{ item.quantity }}</p>
          <p>Desconto: {{ item.product.discount }}</p>
        </div>
      </template>
      <template #footer>
        <div class="flex flex-row-reverse">
          <Button @click="onRemoveItem(item.product)">Deletar</Button>
        </div>
      </template>
    </Card>
  </div>
</template>
