# @hookkit/action

> Extend React 19 actions with a lightweight, type-safe hook.

`@hookkit/action` provides a simple and ergonomic API for managing asynchronous actions in React 19 applications while preserving full TypeScript support.

> 🚧 **Status:** Under active development (v1.0.0)

---

## Features

- ⚛️ Built for React 19
- 📦 Lightweight with zero runtime dependencies
- 🔷 Fully typed with TypeScript
- ⏳ Built-in pending state
- ✅ Automatic success handling
- ❌ Automatic error handling
- 🔄 Easy state reset
- 🎯 Promise-based API

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

## Quick Example

```tsx
import { useAction } from "@hookkit/action";

async function login(credentials: LoginRequest) {
  // API call
}

function LoginForm() {
  const action = useAction(login);

  const handleSubmit = async () => {
    await action.run({
      email: "john@example.com",
      password: "password",
    });
  };

  return (
    <button onClick={handleSubmit}>
      {action.isPending ? "Logging in..." : "Login"}
    </button>
  );
}
```

---

## API

### useAction()

```ts
const action = useAction(asyncFunction, options?);
```

### Returns

| Property    | Description                             |
| ----------- | --------------------------------------- |
| `run()`     | Executes the async action               |
| `isPending` | Indicates whether the action is running |
| `data`      | Latest successful result                |
| `error`     | Latest error                            |
| `reset()`   | Clears the current state                |

---

## Options

```ts
useAction(action, {
  onSuccess(data) {},
  onError(error) {},
});
```

---

## TypeScript

`@hookkit/action` is written entirely in TypeScript and provides full type inference.

```ts
const action = useAction(login);

// `data` is automatically inferred
action.data;
```

---

## Browser Support

Supports all modern browsers compatible with React 19.

---

## Roadmap

### v1.0.0

- [ ] Basic async action execution
- [ ] Pending state
- [ ] Error handling
- [ ] Success state
- [ ] Reset functionality
- [ ] TypeScript support

### Future Releases

- [ ] Retry support
- [ ] Request cancellation
- [ ] Action deduplication
- [ ] Timeout support
- [ ] Middleware
- [ ] DevTools integration

---

## Contributing

Contributions, issues, and feature requests are welcome.

If you find a bug or have an idea, please open an issue.

---

## License

MIT © Vishal Tanna
