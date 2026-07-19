type AsyncFunction<TArgs, TResult> = (args: TArgs) => Promise<TResult>;
interface UseActionOptions<TResult> {
    onSuccess?: (data: TResult) => void;
    onError?: (error: Error) => void;
}
interface UseActionResult<TArgs, TResult> {
    run: (args: TArgs) => Promise<TResult>;
    reset: () => void;
    isPending: boolean;
    data: TResult | null;
    error: Error | null;
}

declare function useAction<TArgs, TResult>(action: AsyncFunction<TArgs, TResult>, options?: UseActionOptions<TResult>): UseActionResult<TArgs, TResult>;

export { type AsyncFunction, type UseActionOptions, type UseActionResult, useAction };
