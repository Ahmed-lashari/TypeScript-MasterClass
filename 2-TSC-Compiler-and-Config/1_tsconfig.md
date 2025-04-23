# TypeScript `tsconfig.json` 🚀

## 📦 What is `tsconfig.json`?

`tsconfig.json` is a configuration file used to tell the TypeScript compiler (`tsc`) **how to compile** your `.tsx` or `.ts`(in out case ts) files.

Creating this file in our project root allows TypeScript to:
- Know you're working with a TypeScript project.
- Use custom compiler options.
- Include or exclude files/folders from compilation.

---

## 🔧 Basic Structure

```json
{
// the opts control compilation behavior
  "compilerOptions": {},

// files / folders to compile
  "include": ["src"], 

// files /folders to ignore
  "exclude": ["node_modules"] 
}
```

## 🔍 Common compilerOptions (Beginner-Friendly)

|Option              | Purpose                                                                    |
|--------------------|----------------------------------------------------------------------------|
|target              | The JS version to be compiled (es5, es6, es2020, etc.)                    |
|module              | How modules are handled (commonjs, esnext, etc.)                           |
|strict              | Enables all strict type-checking options (recommended)                    |
|outDir              | Output folder for the final compiled JS files                                        |
|rootDir             | Folder where your TypeScript source files exist                             |
|esModuleInterop     | Makes default imports from non ES modules work        |
|allowJs             | Allows JS files to be compiled too                                         |

## 📁 `include` and `exclude`

```json
"include": ["src"]    // will compile files in src folder

"exclude": ["tests"]  // will skips the tests folder

```

## 🛠 How to Create One
```bash
tsc --init
```

## Terminal Output:
```bash
Created a new tsconfig.json with:                                                                       
                                                                                                     TS 
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig
```


## 💡 Demo Example

```json
{
  "compilerOptions": {
    "target": "es2016",
    "module": "commonjs",
    "rootDir": "./",
    "moduleResolution": "node10",
    "baseUrl": "./",
    "paths": {},
    "rootDirs": [],
    "typeRoots": [],
    "types": [],
    "allowUmdGlobalAccess": true,
    "moduleSuffixes": [],
    "allowImportingTsExtensions": true,
    "rewriteRelativeImportExtensions": true,
    "resolvePackageJsonExports": true,
    "resolvePackageJsonImports": true,
    "customConditions": [],
    "noUncheckedSideEffectImports": true,
    "resolveJsonModule": true,
    "allowArbitraryExtensions": true,
    "noResolve": true,

    //  JS Supported
    "allowJs": true,
    "checkJs": true,
    "maxNodeModuleJsDepth": 1,

    "outDir": "./",
    "sourceRoot": "",
    "mapRoot": "",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,

    // Type Checking
    "strict": true,
    "strictFunctionTypes": true
  }
}
```


## 🧠 Tips for Beginners
- Use `strict: true` from the start to develop good habits.

- Explore options like `baseUrl`, `paths`, and `resolveJsonModule` for modular apps.

- Use multiple `tsconfig.*.json` files for different environments (e.g., `tsconfig.build.json`).

## Further Resources
- [TypeScript Official Docs](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
       
- [Official Resources](https://www.typescriptlang.org/tsconfig/)