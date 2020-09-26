<template>
  <div>
    Items in cart again
    <b>{{ cart.items.length }}</b>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import useCart from "./useCart";

export default defineComponent({
  setup() {
    const { cart } = useCart();
    return { cart };
  },
});
</script>