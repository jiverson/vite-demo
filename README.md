Links

* https://github.com/LeetCode-OpenSource/rxjs-hooks/blob/master/src/use-event-callback.ts
* https://github.com/shallinta/vue3-hooks/blob/master/index.ts
* https://github.com/vuejs/vetur/issues/1818
* https://github.com/vuejs/vue-next/issues/951
* https://codesandbox.io/s/infallible-https-w248t?file=/src/index.ts:56-103
* https://stackoverflow.com/questions/63022740/vue-composition-api-getting-a-ref-using-typescript

*** Notes
Issue #1: Strict null checks and DOM elements ie: 
``` json
// tsconfig.json
"strictNullChecks": false,
```
```typescript
const button = ref<HTMLButtonElement>(null);
```
or
```typescript
const button = ref<HTMLButtonElement | null>(null);
```