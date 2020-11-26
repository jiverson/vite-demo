import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { onBeforeUnmount, ref, Ref } from "vue";

function subscribeTo<T>(
  observable: Observable<T>,
  next?: (value: T) => void,
  error?: (err: any) => void,
  complete?: () => void
) {
  const unsubscribe$ = new Subject<void>();
  const subscription = observable
    .pipe(takeUntil(unsubscribe$))
    .subscribe(next, error, complete);
  onBeforeUnmount(() => {
    unsubscribe$.next();
    unsubscribe$.complete();
  });

  return subscription;
}

export function useObservable<T>(
  observable: Observable<T>,
  defaultValue?: T
): Ref<T> {
  const handler = ref(defaultValue) as Ref<T>;
  subscribeTo(
    observable,
    (value) => {
      handler.value = value;
    },
    (error) => {
      throw error;
    }
  );

  return handler;
}

export function useSubscription<T>(
  observable: Observable<T>,
  next?: (value: T) => void,
  error?: (err: any) => void,
  complete?: () => void
) {
  return subscribeTo(observable, next, error, complete);
}

export function useDOMEvent<T extends any[]>() {
  const subject = new Subject<T>();
  return {
    subject,
    callback: (...args: T) => {
      console.log("here", args.length);
      subject.next(args);
    },
  };
}
// export function useDOMEvent<T extends Event>(): any

// export function useDOMEvent<T extends Event, U extends readonly any[] | void>() {
//   const subject = new Subject<[T, ...U]>();
//   return {
//     subject,
//     callback: (event: T, ...args: U) => {
//       console.log("here", args.length);
//       subject.next([event, ...args]);
//     },
//   };
// }

// export function useDOMEvent<T extends Event>() {
//   const subject = new Subject<T>();
//   return {
//     subject,
//     callback: (event: T) => {
//       subject.next(event);
//     },
//   };
// }
