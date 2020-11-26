<template>
  <button @click="plus($event, 9, true)">count is: {{ count }}</button>
</template>

<script lang="ts">
import { ref, reactive, defineComponent, PropType } from "vue";

import { useObservable, useDOMEvent } from "../util";
import { startWith, map, scan } from "rxjs/operators";

export default defineComponent({
  name: "RxjsComponent",

  setup() {
    const { subject: plus$, callback: plus } = useDOMEvent<
      [event: Event, value: number, works: boolean]
    >();
    const count = useObservable(
      plus$.pipe(
        map(([event, value, works]) => {
          console.log(event, value, works);
          return value;
        }),
        startWith(0),
        scan((total, change) => {
          console.log(total, change);
          return total + change;
        })
      )
    );
    return {
      count,
      plus,
    };
  },
});
</script>
