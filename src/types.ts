export type AsyncFunction<TArgs, TResult> = (args: TArgs) => Promise<TResult>;

export interface UseActionOptions<TResult> {
  onSuccess?: (data: TResult) => void;
  onError?: (error: Error) => void;
}

export interface UseActionResult<TArgs, TResult> {
  run: (args: TArgs) => Promise<TResult>;
  reset: () => void;

  isPending: boolean;
  data: TResult | null;
  error: Error | null;
}
