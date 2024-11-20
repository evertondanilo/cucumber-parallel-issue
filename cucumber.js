  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('dotenv').config();
  
  const IS_DEV = process.env.NODE_ENV === 'development';
  const FAIL_FAST = IS_DEV ? ['--fail-fast'] : [];
  const FORMAT =
    process.env.CI || !process.stdout.isTTY
      ? 'progress'
      : './node_modules/@cucumber/pretty-formatter';
  const FORMAT_OPTIONS = JSON.stringify({ colorsEnabled: true });

    //'--parallel 2',
  module.exports = {
    default: [
      ...FAIL_FAST,
      `--format ${FORMAT}`,
      `--format-options ${FORMAT_OPTIONS}`,
      `--require-module ${process.cwd()}/ts-node.js`,
      '--require-module jsdom-global/register',
      '--require-module @babel/register',
      '--require-module expect',
      //'--require-module babel-plugin-module-resolver',
      //'--require-module mutationobserver-shim',
 
      // Test
      '--require ./features/StepDefinitions/*/*.js',
      '--require ./features/StepDefinitions/*.js',
      '--require ./features/StepDefinitions/**/*.js',
      '--require ./features/Support/*.js',
  
    ].join(' ')
  };
  
