<template>
  <div>
    <button @click="inc">count is: {{ count }}</button>
    <button ref="button">stop</button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, Ref } from "vue";
import { useSubscription, from, fromEvent, toObserver } from "../rxjs";

import { interval } from "rxjs";
import {
  mapTo,
  takeUntil,
  withLatestFrom,
  startWith,
  map,
} from "rxjs/operators";

export default defineComponent({
  name: "NewRxjsComponent",

  setup() {
    const count = ref(0);
    const button = ref<HTMLButtonElement | null>(null);
    const inc = () => count.value++;

    useSubscription(
      interval(1000)
        .pipe(
          mapTo(1),
          takeUntil(fromEvent(button as Ref<HTMLButtonElement>, "click")),
          withLatestFrom(from(count).pipe(startWith(0))),
          map(([total, curr]) => curr + total)
        )
        .subscribe(toObserver(count))
    );

    return {
      count,
      button,
      inc,
    };
  },
});
</script>
