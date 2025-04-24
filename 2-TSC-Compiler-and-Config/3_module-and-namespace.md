# Modules vs Namespaces in TypeScript

Understanding the difference between **Modules** and **Namespaces** is key when organizing code in TypeScript. Both help you avoid global scope pollution, but they work in different ways and are used in different scenarios.

---

## 🧱 What is a Namespace?

**Namespaces** are a way to group related code together in the same file or across multiple files **without using any import/export**.

### ✅ When to use:
- Smaller projects
- When you are not using module loaders or bundlers

### 📦 Syntax:
```ts
namespace Utils {
  export function greet(name: string): string {
    return `Hello, ${name}`;
  }
}

console.log(Utils.greet("Alice"));
```

### ⚠️ Limitations:
- Not supported in ES6+ module system.
- Harder to manage in large applications.
- Cannot use `import/export`.

---

## 📦 What is a Module?

A **Module** in TypeScript is any file that contains an `import` or `export` statement. It uses the modern **ES Modules** system.

### ✅ When to use:
- Medium to large projects
- When using a module bundler
- Is recommended approach for modern TypeScript apps

### 📦 Syntax Example:
```ts
// components.ts
export function greet(name: string): string {
  return `Hello, ${name}`;
}

// main.ts
import { greet } from './utils';
console.log(greet("Bob"));
```

### ✅ Benefits:
- Fully supported in modern JS
- Removing unused code
- Cleaner project structure

---


## 🧠 Final Recommendation

Use **Modules** for everything unless you are working on a very small script or a legacy TypeScript project. Modules are scalable, standard, and supported by modern tools and frameworks.

---