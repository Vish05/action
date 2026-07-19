# hookkit-action

> A lightweight, fully typed React 19 hook for managing asynchronous actions with TypeScript.

[![npm version](https://img.shields.io/npm/v/hookkit-action.svg)](https://www.npmjs.com/package/hookkit-action)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

**hookkit-action** is a modern **React 19 hook** that simplifies **asynchronous actions** by providing built-in loading, success, error, and reset state management with full **TypeScript** support.

Perfect for handling:

- 🔐 Login & Authentication
- 📤 Form submissions
- 🌐 API requests
- 💳 Checkout & Payments
- 📁 File uploads
- ⚡ Any async operation in React 19

## ✨ Features

- ⚛️ Built specifically for React 19
- 🔷 Fully typed with TypeScript
- ⏳ Built-in loading (`isPending`) state
- ✅ Automatic success state management
- ❌ Error handling
- 🔄 Reset state
- 🎯 Promise-based API
- 📦 Zero runtime dependencies
- 🚀 Tiny bundle size

---

## 📦 Installation

```bash
npm install hookkit-action
```

or

```bash
yarn add hookkit-action
```

or

```bash
pnpm add hookkit-action
```

---

## 🚀 Live Demo

Try the package instantly in your browser.

**CodeSandbox**

https://codesandbox.io/p/sandbox/wzhdgs

---

## Quick Start

```tsx
import { useAction } from "hookkit-action";

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

## Keywords

React 19, React Hooks, useAction, Async Actions, TypeScript, React TypeScript, Loading State, Error Handling, Promise, Async Hook, Server Actions, Form Submission, API Requests, React Library, Frontend, HookKit, hookkit-action, React Utilities, State Management, npm Package
