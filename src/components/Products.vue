<template>
  <div>
    <span v-if="loading">Loading product</span>
    <span v-else>Loaded {{ product.name }}</span>
  </div>
</template>

<script lang="ts">
import useProduct from "./useProduct";
import { ref, defineComponent, computed } from "vue";

export default defineComponent({
  setup(props, context) {
    // const id = context.root.$route.params.id;
    const id = "123";
    const { products, loading, search } = useProduct();

    search({ id });

    return {
      product: computed(() => products.value[0]),
      loading,
    };
  },
});
</script>
