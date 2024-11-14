## How to run and get the error

```
npm ci
npm run cucumber:parallel
```

#### Error:
```
PS C:\Users\John.Smith\cucumber-parallel> npm run cucumber:parallel

> my-app@0.1.0 cucumber:parallel
> npx cucumber-js --parallel 2 --exit

This Node.js version (v22.11.0) has not been tested with this version of Cucumber; it should work normally, but please raise an issue if you see anything unexpected.
Missing baseUrl in compilerOptions. tsconfig-paths will be skipped
`publishQuiet` option is no longer needed, you can remove it from your configuration; see https://github.com/cucumber/cucumber-js/blob/main/docs/deprecations.md     
This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills
This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills
VError: Unexpected error on worker.receiveMessage: Cannot find module '../../src/Another'
Require stack:
- C:\Users\John.Smith\cucumber-parallel\features\StepDefinitions\Another.js
- C:\Users\John.Smith\cucumber-parallel\node_modules\@cucumber\cucumber\lib\try_require.js
- C:\Users\John.Smith\cucumber-parallel\node_modules\@cucumber\cucumber\lib\runtime\parallel\worker.js
- C:\Users\John.Smith\cucumber-parallel\node_modules\@cucumber\cucumber\lib\runtime\parallel\run_worker.js
    at exit (C:\Users\John.Smith\cucumber-parallel\node_modules\@cucumber\cucumber\src\runtime\parallel\run_worker.ts:8:38)
    at C:\Users\John.Smith\cucumber-parallel\node_modules\@cucumber\cucumber\src\runtime\parallel\run_worker.ts:22:9
    at processTicksAndRejections (node:internal/process/task_queues:105:5)
caused by: Error: Cannot find module '../../src/Another'
Require stack:
- C:\Users\John.Smith\cucumber-parallel\features\StepDefinitions\Another.js
- C:\Users\John.Smith\cucumber-parallel\node_modules\@cucumber\cucumber\lib\try_require.js
- C:\Users\John.Smith\cucumber-parallel\node_modules\@cucumber\cucumber\lib\runtime\parallel\worker.js
- C:\Users\John.Smith\cucumber-parallel\node_modules\@cucumber\cucumber\lib\runtime\parallel\run_worker.js
    at Function._resolveFilename (node:internal/modules/cjs/loader:1249:15)
    at Function._load (node:internal/modules/cjs/loader:1075:27)
    at TracingChannel.traceSync (node:diagnostics_channel:315:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:218:24)
    at Module.require (node:internal/modules/cjs/loader:1340:12)
    at require (node:internal/modules/helpers:141:16)
    at Object.<anonymous> (C:\Users\John.Smith\cucumber-parallel\features\StepDefinitions\/C:/Users/John.Smith/Downloads/Studies/react/cucumber-parallel/features/StepDefinitions/Another.js:2:1)
    at Module._compile (node:internal/modules/cjs/loader:1546:14)
    at Module._compile (C:\Users\John.Smith\cucumber-parallel\node_modules\pirates\lib\index.js:117:24)
    at node:internal/modules/cjs/loader:1689:10
    at Object.newLoader [as .js] (C:\Users\John.Smith\cucumber-parallel\node_modules\pirates\lib\index.js:121:7)
    at Module.load (node:internal/modules/cjs/loader:1318:32)
    at Function._load (node:internal/modules/cjs/loader:1128:12)
    at TracingChannel.traceSync (node:diagnostics_channel:315:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:218:24)
    at Module.require (node:internal/modules/cjs/loader:1340:12)
    at require (node:internal/modules/helpers:141:16)
    at tryRequire (C:\Users\John.Smith\cucumber-parallel\node_modules\@cucumber\cucumber\src\try_require.ts:9:12)
    at C:\Users\John.Smith\cucumber-parallel\node_modules\@cucumber\cucumber\src\runtime\parallel\worker.ts:79:44
    at Array.map (<anonymous>)
    at Worker.initialize (C:\Users\John.Smith\cucumber-parallel\node_modules\@cucumber\cucumber\src\runtime\parallel\worker.ts:79:18)    
    at Worker.receiveMessage (C:\Users\John.Smith\cucumber-parallel\node_modules\@cucumber\cucumber\src\runtime\parallel\worker.ts:110:18)
    at process.<anonymous> (C:\Users\John.Smith\cucumber-parallel\node_modules\@cucumber\cucumber\src\runtime\parallel\run_worker.ts:20:8)
    at process.emit (node:events:518:28)
    at emit (node:internal/child_process:950:14)
    at processTicksAndRejections (node:internal/process/task_queues:91:21)
VError: Unexpected error on worker.receiveMessage: Cannot find module '../../src/Another'
Require stack:
- C:\Users\John.Smith\cucumber-parallel\features\StepDefinitions\Another.js
- C:\Users\John.Smith\cucumber-parallel\node_modules\@cucumber\cucumber\lib\try_require.js
- C:\Users\John.Smith\cucumber-parallel\node_modules\@cucumber\cucumber\lib\runtime\parallel\worker.js
- C:\Users\John.Smith\cucumber-parallel\node_modules\@cucumber\cucumber\lib\runtime\parallel\run_worker.js
    at exit (C:\Users\John.Smith\cucumber-parallel\node_modules\@cucumber\cucumber\src\runtime\parallel\run_worker.ts:8:38)
    at C:\Users\John.Smith\cucumber-parallel\node_modules\@cucumber\cucumber\src\runtime\parallel\run_worker.ts:22:9
    at processTicksAndRejections (node:internal/process/task_queues:105:5)
caused by: Error: Cannot find module '../../src/Another'
Require stack:
- C:\Users\John.Smith\cucumber-parallel\features\StepDefinitions\Another.js
- C:\Users\John.Smith\cucumber-parallel\node_modules\@cucumber\cucumber\lib\try_require.js
- C:\Users\John.Smith\cucumber-parallel\node_modules\@cucumber\cucumber\lib\runtime\parallel\worker.js
- C:\Users\John.Smith\cucumber-parallel\node_modules\@cucumber\cucumber\lib\runtime\parallel\run_worker.js
    at Function._resolveFilename (node:internal/modules/cjs/loader:1249:15)
    at Function._load (node:internal/modules/cjs/loader:1075:27)
    at TracingChannel.traceSync (node:diagnostics_channel:315:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:218:24)
    at Module.require (node:internal/modules/cjs/loader:1340:12)
    at require (node:internal/modules/helpers:141:16)
    at Object.<anonymous> (C:\Users\John.Smith\cucumber-parallel\features\StepDefinitions\/C:/Users/John.Smith/Downloads/Studies/react/cucumber-parallel/features/StepDefinitions/Another.js:2:1)
    at Module._compile (node:internal/modules/cjs/loader:1546:14)
    at Module._compile (C:\Users\John.Smith\cucumber-parallel\node_modules\pirates\lib\index.js:117:24)
    at node:internal/modules/cjs/loader:1689:10
    at Object.newLoader [as .js] (C:\Users\John.Smith\cucumber-parallel\node_modules\pirates\lib\index.js:121:7)
    at Module.load (node:internal/modules/cjs/loader:1318:32)
    at Function._load (node:internal/modules/cjs/loader:1128:12)
    at TracingChannel.traceSync (node:diagnostics_channel:315:14)
    at wrapModuleLoad (node:internal/modules/cjs/loader:218:24)
    at Module.require (node:internal/modules/cjs/loader:1340:12)
    at require (node:internal/modules/helpers:141:16)
    at tryRequire (C:\Users\John.Smith\cucumber-parallel\node_modules\@cucumber\cucumber\src\try_require.ts:9:12)
    at C:\Users\John.Smith\cucumber-parallel\node_modules\@cucumber\cucumber\src\runtime\parallel\worker.ts:79:44
    at Array.map (<anonymous>)
    at Worker.initialize (C:\Users\John.Smith\cucumber-parallel\node_modules\@cucumber\cucumber\src\runtime\parallel\worker.ts:79:18)    
    at Worker.receiveMessage (C:\Users\John.Smith\cucumber-parallel\node_modules\@cucumber\cucumber\src\runtime\parallel\worker.ts:110:18)
    at process.<anonymous> (C:\Users\John.Smith\cucumber-parallel\node_modules\@cucumber\cucumber\src\runtime\parallel\run_worker.ts:20:8)
    at process.emit (node:events:518:28)
    at emit (node:internal/child_process:950:14)
    at processTicksAndRejections (node:internal/process/task_queues:91:21)
0 scenarios
0 steps
0m02.395s (executing steps: 0m00.000s)
PS C:\Users\John.Smith\cucumber-parallel>
```


## NOTE: Without using parallel the tests run fine

```
npm run cucumber

2 scenarios (2 passed)
8 steps (8 passed)
0m00.105s (executing steps: 0m00.080s)
```