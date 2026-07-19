import type { AsyncFunction, UseActionOptions, UseActionResult } from "./types";

export function useAction<TArgs, TResult>(
  action: AsyncFunction<TArgs, TResult>,
  options?: UseActionOptions<TResult>
): UseActionResult<TArgs, TResult> {
  throw new Error("Not implemented.");
}
