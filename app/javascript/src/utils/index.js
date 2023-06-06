import { pipe, either, isNil, isEmpty, not } from "ramda";

export const isPresent = pipe(either(isNil, isEmpty), not);

export const noop = () => {};

export const isOdd = number => number % 2 !== 0;
