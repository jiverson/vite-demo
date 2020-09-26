import { computed, ref } from "vue";

const cart = ref({ items: [{ name: "Product0" }] });

export default function useCart() {
  function addToCart(param: any) {
    console.log("add to cart");
    cart.value.items.push(param);
  }

  return {
    cart: computed(() => cart.value),
    addToCart,
  };
}
