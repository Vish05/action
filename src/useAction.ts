import { useCallback, useState } from "react";

import type { AsyncFunction, UseActionOptions, UseActionResult } from "./types";

export function useAction<TArgs, TResult>(
  action: AsyncFunction<TArgs, TResult>,
  options?: UseActionOptions<TResult>
): UseActionResult<TArgs, TResult> {
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState<TResult | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const run = useCallback(
    async (args: TArgs): Promise<TResult> => {
      setIsPending(true);
      setError(null);

      try {
        const result = await action(args);

        setData(result);

        options?.onSuccess?.(result);

        return result;
      } catch (err) {
        const error =
          err instanceof Error ? err : new Error("Unknown error occurred");

        setError(error);

        options?.onError?.(error);

        throw error;
      } finally {
        setIsPending(false);
      }
    },
    [action, options]
  );

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setIsPending(false);
  }, []);

  return {
    run,
    reset,
    isPending,
    data,
    error,
  };
}
