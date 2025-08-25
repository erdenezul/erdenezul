// prettier.config.ts, .prettierrc.ts, prettier.config.mts, or .prettierrc.mts

import { type Config } from "prettier";

const config: Config = {
  trailingComma: "none",
  singleQuote: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '^@ez/components$',
    '^./(?!.*.css$).*$',
    '\\.css$',

  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

export default config;
/**
 * // @ts-check

module.exports = {
    // Standard prettier options
    singleQuote: true,
    semi: true,
    // Since prettier 3.0, manually specifying plugins is required
    plugins: ['@ianvs/prettier-plugin-sort-imports'],
    // This plugin's options
    importOrder: ['^@core/(.*)$', '', '^@server/(.*)$', '', '^@ui/(.*)$', '', '^[./]'],
    importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
    importOrderTypeScriptVersion: '5.0.0',
    importOrderCaseSensitive: false,
};
 */


