<template>
  <h1>{{ msg }}</h1>
  <button @click="inc()">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script lang="ts">
import { ref, defineComponent, PropType } from "vue";

interface Props {
  foo: string;
  bar: string;
}

export default defineComponent({
  name: "HelloWorld",
  props: {
    other: {
      type: Object as PropType<Props>,
      required: false,
    },
    msg: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const count = ref(0);

    const a = {
      foo: "bar",
    };

    const inc = () => count.value++;
    return { count, inc };
  },
});
</script>
