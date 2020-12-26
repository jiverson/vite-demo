import { computed, ref } from "vue";

export interface Cart {
  items: any[];
}

const cart = ref<Cart>({ items: [] });

export default function useCart() {
  function addToCart<T>(product: T) {
    console.log("add to cart");
    cart.value.items.push(product);
  }

  return {
    cart: computed(() => cart.value),
    addToCart,
  };
}
