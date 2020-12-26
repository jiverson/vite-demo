import { computed, ref } from "vue";

let counter = 0;

export interface Product {
  name: string;
  id: string | number;
}

export function fetchProduct(id: string | number): Promise<Array<Product>> {
  counter++;
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve([{ id, name: `Product${counter}` }]), 2000);
  });
}

export default function useProduct() {
  const loading = ref<boolean>(false);
  const products = ref<Array<Product>>([]);

  async function search({ id }: Partial<Product>) {
    loading.value = true;
    products.value = await fetchProduct(id + "");
    loading.value = false;
  }

  return {
    loading: computed(() => loading.value),
    products: computed(() => products.value),
    search,
  };
}
