export default {
  "jsdoc/check-access": "error",
  "jsdoc/check-alignment": "warn",
  "jsdoc/check-examples": "off", // Turn on after https://github.com/eslint/eslint/issues/14745 resolved
  "jsdoc/check-indentation": "off",
  "jsdoc/check-line-alignment": [
    "warn",
    "always",
    {
      tags: [
        "arg",
        "argument",
        "callback",
        "param",
        "property",
        "prop",
        "returns",
        "return",
      ],
      customSpacings: {
        postDelimiter: 1,
        postTag: 1,
        postType: 1,
        postName: 1,
        postHyphen: 1,
      },
    },
  ],
  "jsdoc/check-param-names": "error",
  "jsdoc/check-property-names": "error",
  "jsdoc/check-syntax": "error",
  "jsdoc/check-tag-names": "error",
  "jsdoc/check-types": "error",
  "jsdoc/check-values": [
    "error",
    // {
    /*
     * allowedAuthors: [] // Enable and enter permitted authors if desired
     * licensePattern: '' // Enable and enter license pattern if desired
     */
    // }
  ],
  // 'jsdoc/convert-to-jsdoc-comments': 'off', // Currently experimental as of v48.8.3
  "jsdoc/empty-tags": "error",
  "jsdoc/implements-on-classes": "error",
  // 'jsdoc/imports-as-dependencies': 'off', // Disabled
  "jsdoc/informative-docs": "warn",
  "jsdoc/match-description": "error",
  // 'jsdoc/match-name': 'off', // Disabled

  // 'jsdoc/multiline-blocks': 'off', // Disabled
  "jsdoc/no-bad-blocks": "error",
  "jsdoc/no-blank-block-descriptions": "warn",
  "jsdoc/no-blank-blocks": "warn",
  "jsdoc/no-defaults": "error",
  // 'jsdoc/no-missing-syntax': 'off', // Disabled
  "jsdoc/no-multi-asterisks": [
    "warn",
    {
      allowWhitespace: false,
      preventAtMiddleLines: true,
      preventAtEnd: true,
    },
  ],
  // 'jsdoc/no-restricted-syntax': 'off', // Disabled
  "jsdoc/no-types": "off", // Disabled - generally used with TypeScript
  "jsdoc/no-undefined-types": "error",
  "jsdoc/require-asterisk-prefix": ["warn", "always"],
  "jsdoc/require-description-complete-sentence": "warn",
  "jsdoc/require-description": "warn",
  "jsdoc/require-example": "off",
  "jsdoc/require-file-overview": "warn",
  "jsdoc/require-hyphen-before-param-description": "off",
  "jsdoc/require-jsdoc": [
    "warn",
    {
      publicOnly: {
        ancestorsOnly: false,
        cjs: true,
        esm: true,
        window: true,
      },
      require: {
        ArrowFunctionExpression: true,
        ClassDeclaration: true,
        ClassExpression: true,
        FunctionDeclaration: true,
        FunctionExpression: true,
        MethodDefinition: true,
      },
      exemptEmptyConstructors: true,
      exemptEmptyFunctions: false,
      checkConstructors: true,
      checkGetters: false,
      checkSetters: false,
      enableFixer: true,
      fixerMessage: " TODO: Add JSDOC (AUTO-GENERATED COMMENT)",
    },
  ],
  "jsdoc/require-param": "error",
  "jsdoc/require-param-type": "error",
  "jsdoc/require-param-name": "error",
  "jsdoc/require-param-description": "warn",
  "jsdoc/require-property": "error",
  "jsdoc/require-property-name": "error",
  "jsdoc/require-property-type": "error",
  "jsdoc/require-property-description": "warn",

  "jsdoc/require-returns": [
    "error",
    {
      checkConstructors: false,
      checkGetters: true,
      forceRequireReturn: false,
      forceReturnsWithAsync: false,
    },
  ],
  "jsdoc/require-returns-check": "error",
  "jsdoc/require-returns-type": "error",
  "jsdoc/require-returns-description": "warn",
  // 'jsdoc/require-template': 'off', // Disabled - generally used with TypeScript
  "jsdoc/require-throws": "error",
  "jsdoc/require-yields": "error",
  "jsdoc/require-yields-check": "error",
  // 'jsdoc/sort-tags': ['warn', {}] // Experimental - set once a standard begins is determined
  "jsdoc/tag-lines": [
    "warn",
    "always",
    {
      count: 0,
      startLines: 1,
      applyToEndTag: false,
      tags: {
        example: {
          count: 1,
          lines: "always",
        },
      },
    },
  ],
  "jsdoc/text-escaping": "off",
  "jsdoc/valid-types": "error",
};
