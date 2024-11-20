// eslint-disable-next-line @typescript-eslint/no-var-requires
require('ts-node').register({
    transpileOnly: true,
    require: ['tsconfig-paths/register'],
    compilerOptions: {
      module: 'commonjs',
      resolveJsonModule: true,
      baseUrl: './',
      target: 'es5',
      jsx: 'react',
      allowJs: true,
      noEmit: false,
      noEmitOnError: false,
      isolatedModules: false,
      esModuleInterop: true,
      noImplicitAny: false,
      strictNullChecks: true,
      skipLibCheck: true
    }
  });