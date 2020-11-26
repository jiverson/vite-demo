import {
  from as fromRxjs,
  fromEvent as fromEventRx,
  Observable,
  ObservableInput
} from "rxjs";
import { filter, mergeMap } from "rxjs/operators";
import { isRef, Ref, watch } from "vue";

export function from<T>(value: ObservableInput<T> | Ref<T>): Observable<T> {
  if (isRef<T>(value)) {
    return new Observable((subscriber) => {
      watch(value, (val) => subscriber.next(val));
    });
  }
  return fromRxjs(value);
}



export function fromEvent<T extends HTMLElement>(
  value: Ref<T>,
  event: string
): Observable<Event> {
  return from(value).pipe(
    filter((value) => value instanceof HTMLElement),
    mergeMap((value) => fromEventRx(value, event))
  );
}
