# 🆚 BASIC DIFFERENCES BETWEEN TYPESCRIPT AND JAVASCRIPT

## TypeScript vs JavaScript — Basic Differences

| **Feature**                    | **JavaScript**                | **TypeScript**                 |
|-------------------------------|-------------------------------|--------------------------------|
| Typing                        | Dynamically typed             | Statically typed               |
| Compilation                   | Interpreted at runtime        | Compiled before running        |
| Error Caught At               | During **runtime**            | During **compile-time**        |
| Code Suggestion & IntelliSense| Limited                       | Powerful and smart             |
| Used for                      | Frontend and backend          | Same, but with better tooling  |
| Learning Curve                | Easier to start               | Slightly steeper due to types  |

---

## ✅ Examples

### 1. Typing (Static vs Dynamic)

**JavaScript**
```javascript
let age = 25        // number
age = "twenty-five" // no error, even though its a string now
```
**TypeScript**
```typescript
let age: number = 25
age = "twenty-five" // string is not assignable to number type variable
```

### 2. Function Parameters

**JavaScript**
```javascript
function greet(name) {
  return "Hello " + name
}

greet(5) // works, but might give unexpected output like Hello 5
```
**TypeScript**
```typescript
function greet(name: string): string {
  return "Hello " + name
}

greet(5) // error; argument of number type variable is not assignable to  string type
```

### 3. Optional and Default Parameters

**JavaScript**
```javascript
function sum(a, b) {
  return a + (b || 0)
}
```
**TypeScript**
```typescript
function sum(a: number, b: number = 0): number {
  return a + b
}
```

### 4. Classes

**JavaScript**
```javascript
let newPromise = new Promise((resolve) => {
       setTimeout(() => resolve(5 * 5), 1000);
})
```

**TypeScript**
```typescript
let newPromise: Promise<number> = new Promise((resolve) => {
  setTimeout(() => resolve(5 * 5), 1000);
})
```
