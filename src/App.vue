<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <hr />
  <HelloWorld msg="Hello Vue 3.0 + Vite right" />
  <hr />
  <Products />
  <hr />
  <ItemsInCartComponent />
  <hr />
  <AddToCartComponent />
  <hr />
  <AnotherComponent />
  <hr />
  <RxjsComponent />
  <hr />
  <NewRxjsComponent />
  <hr />
</template>

<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import Products from "./components/Products.vue";
import AddToCartComponent from "./components/AddToCartComponent.vue";
import ItemsInCartComponent from "./components/ItemsInCartComponent.vue";
import AnotherComponent from "./components/AnotherComponent.vue";
import RxjsComponent from "./components/RxjsComponent.vue";
import NewRxjsComponent from "./components/NewRxjsComponent.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Products,
    AddToCartComponent,
    ItemsInCartComponent,
    AnotherComponent,
    RxjsComponent,
    NewRxjsComponent,
  },
};
</script>
