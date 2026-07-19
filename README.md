# @hookkit/action

> The missing utilities for React 19 Actions.

[![npm version](https://img.shields.io/npm/v/@hookkit/action.svg)](https://www.npmjs.com/package/@hookkit/action)
[![License](https://img.shields.io/npm/l/@hookkit/action)](LICENSE)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev)

A lightweight, fully typed React hook for managing asynchronous actions with a clean and intuitive API.

## ✨ Features

- ⚛️ Built for React 19
- 🔷 Full TypeScript support
- ⏳ Built-in pending state
- ✅ Success state management
- ❌ Error handling
- 🔄 Reset state
- 🎯 Promise-based API
- 📦 Zero runtime dependencies

---

## Installation

```bash
npm install @hookkit/action
```

or

```bash
yarn add @hookkit/action
```

or

```bash
pnpm add @hookkit/action
```

---

## Quick Start

```tsx
import { useAction } from "@hookkit/action";

async function login(credentials: { email: string; password: string }) {
  const response = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
}

function LoginForm() {
  const loginAction = useAction(login);

  const handleSubmit = async () => {
    await loginAction.run({
      email: "john@example.com",
      password: "password",
    });
  };

  return (
    <>
      <button onClick={handleSubmit} disabled={loginAction.isPending}>
        {loginAction.isPending ? "Loading..." : "Login"}
      </button>

      {loginAction.error && <p>{loginAction.error.message}</p>}
    </>
  );
}
```

---

## API

### useAction

```ts
const action = useAction(asyncFunction, options?);
```

### Return Value

| Property    | Type               | Description               |
| ----------- | ------------------ | ------------------------- |
| `run(args)` | `Promise<TResult>` | Executes the async action |
| `reset()`   | `() => void`       | Clears data and error     |
| `isPending` | `boolean`          | Loading state             |
| `data`      | `TResult \| null`  | Last successful result    |
| `error`     | `Error \| null`    | Last error                |

---

## Options

```ts
const action = useAction(login, {
  onSuccess(data) {
    console.log(data);
  },
  onError(error) {
    console.error(error);
  },
});
```

---

## TypeScript

The hook is fully generic.

```tsx
const action = useAction(login);

// Automatically inferred
action.data;
```

No manual type annotations are required for most use cases.

---

## Browser Support

Compatible with all modern browsers supported by React 19.

---

## Development

```bash
npm install
npm run build
npm test
```

---

## Roadmap

### v1.0.0

- ✅ Async actions
- ✅ Pending state
- ✅ Error handling
- ✅ Success state
- ✅ Reset
- ✅ TypeScript

### Future

- Retry support
- Request cancellation
- Action deduplication
- Timeout support
- Middleware
- DevTools

---

## Contributing

Contributions are welcome.

If you find a bug or have an idea for a new feature, please open an issue or submit a pull request.
