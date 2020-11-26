<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite right" />
  <Products />
  <SomeComponent />
  <OtherComponent />
  <AnotherComponent />
  <RxjsComponent />
  <NewRxjsComponent />
</template>

<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import Products from "./components/Products.vue";
import OtherComponent from "./components/OtherComponent.vue";
import SomeComponent from "./components/SomeComponent.vue";
import AnotherComponent from "./components/AnotherComponent.vue";
import RxjsComponent from "./components/RxjsComponent.vue";
import NewRxjsComponent from "./components/NewRxjsComponent.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Products,
    OtherComponent,
    SomeComponent,
    AnotherComponent,
    RxjsComponent,
    NewRxjsComponent,
  },
};
</script>
