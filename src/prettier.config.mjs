export default {
  "trailingComma": "none",
  "tabWidth": 2,
  "useTabs": true,
  "semi": false,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "arrowParens": "always",
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true,
  "importOrderCaseInsensetive": true,
  "importOrderParserPlugins": [
    "classProperties",
    "decorators-legacy",
    "typescript"
  ],
  "importOrder": ["<THIRD_PARTY_MODULES", "^@/(.*)$",  "^../(.*)$",  "^./(.*)$"],
  "plugins": ["@trivago/prettier-plugin-sort-imports"],
}