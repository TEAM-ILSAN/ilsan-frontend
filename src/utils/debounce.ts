/**
 * @function
 * @name debounce
 * @param {function} func
 * @param {number} delay
 */

let timerId: ReturnType<typeof setTimeout>;

interface DebounceParams<T> {
  event: T;
  func: (e?: T) => void;
  delay: number;
}

export const debounce = <T>({ event, func, delay }: DebounceParams<T>) => {
  if (timerId) clearTimeout(timerId);
  timerId = setTimeout(() => func(event), delay);
};
