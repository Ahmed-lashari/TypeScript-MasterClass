# 📦 TypeScript Imports & Exports

There are two main module systems for importing and exporting:
- **ESModules (ESM)** – preferred
- **CommonJS (CJS)** – used in Node.js

> TypeScript compiles down to either, depends on `tsconfig.json` file.

---

## 🚀 Exports in TypeScript

### 1. **Named Export**

```ts
export const PI = 3.14;

export function add(a: number, b: number): number {
  return a + b;
}
```

### 2. **Default Export**

```ts
export default function log(message: string): void {
  console.log(message);
}
```

### 3. **Type Export**

```ts
export type User = {
  id: string;
  name: string;
};
```

---

## 📥 Imports in TypeScript

### 1. **Named Import**

```ts
import { PI, add } from './utils';

console.log(add(PI, 2));
```

### 2. **Default Import**

```ts
import log from './logger';

log('Hello, I am Learning TypeScript with Ahmed');
```

### 3. **Renaming Imports**

```ts
import { add as sum } from './utils';

console.log(sum(5, 6));
```

### 4. **Import Everything**

```ts
import * as Utils from './utils';

console.log(Utils.PI);
```

---

## ✅ Exporting & Importing Together

```ts
// shapes.ts
export interface Shape {
  area(): number;
}

export class Circle implements Shape {
  constructor(public radius: number) {}
  area() {
    return Math.PI * this.radius ** 2;
  }
}

// main.ts
import { Circle } from './shapes';

const c = new Circle(5);
console.log(c.area());
```

---

## 🧠 Notes

- Prefer `type` keyword for importing types for cleaner separation and better optimization.
- Only one `default export` is allowed per file.
- Multiple `named exports` are allowed.
