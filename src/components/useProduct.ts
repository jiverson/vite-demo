import { computed, ref } from "vue";

export function fetchProduct(params: any): Promise<Array<any>> {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve([{ name: "Product1" }]), 2000);
  });
}

export default function useProduct() {
  const loading = ref(false);
  const products = ref([] as Array<any>);

  async function search(params: any) {
    loading.value = true;
    products.value = await fetchProduct(params);
    loading.value = false;
  }

  return {
    loading: computed(() => loading.value),
    products: computed(() => products.value),
    search,
  };
}
