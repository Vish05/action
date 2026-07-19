import { renderHook, act } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { useAction } from "../useAction";

describe("useAction", () => {
  it("executes async action successfully", async () => {
    const login = async (user: string) => {
      return `Hello ${user}`;
    };

    const { result } = renderHook(() => useAction(login));

    let response;

    await act(async () => {
      response = await result.current.run("Vishal");
    });

    expect(response).toBe("Hello Vishal");
    expect(result.current.data).toBe("Hello Vishal");
    expect(result.current.error).toBeNull();
  });

  it("sets pending state while action is running", async () => {
    let resolveAction!: (value: string) => void;

    const action = () =>
      new Promise<string>((resolve) => {
        resolveAction = resolve;
      });

    const { result } = renderHook(() => useAction(action));

    act(() => {
      result.current.run(undefined);
    });

    expect(result.current.isPending).toBe(true);

    await act(async () => {
      resolveAction("done");
    });

    expect(result.current.isPending).toBe(false);
  });

  it("handles errors", async () => {
    const action = async () => {
      throw new Error("Login failed");
    };

    const { result } = renderHook(() => useAction(action));

    await act(async () => {
      await expect(result.current.run(undefined)).rejects.toThrow(
        "Login failed"
      );
    });

    expect(result.current.error?.message).toBe("Login failed");
  });

  it("resets state", async () => {
    const action = async () => {
      return "success";
    };

    const { result } = renderHook(() => useAction(action));

    await act(async () => {
      await result.current.run(undefined);
    });

    expect(result.current.data).toBe("success");

    act(() => {
      result.current.reset();
    });

    expect(result.current.data).toBeNull();

    expect(result.current.error).toBeNull();
  });
});
