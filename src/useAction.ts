import { useState } from "react";

import type { AsyncFunction, UseActionOptions, UseActionResult } from "./types";

export function useAction<TArgs, TResult>(
  action: AsyncFunction<TArgs, TResult>,
  options?: UseActionOptions<TResult>
): UseActionResult<TArgs, TResult> {
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState<TResult | null>(null);
  const [error, setError] = useState<Error | null>(null);

  throw new Error("Not implemented.");
}
