<template>
  <div>
    <button @click="addToCart(product)">Add to cart</button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from "vue";
import useCart from "./useCart";
import useProduct from "./useProduct";

export default defineComponent({
  setup() {
    const { products, search } = useProduct();
    const { addToCart } = useCart();

    search({ id: "123" });

    return {
      addToCart,
      product: computed(() => products.value[0]),
    };
  },
});
</script>