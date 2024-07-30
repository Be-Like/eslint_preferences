export default {
  "@stylistic/js/array-bracket-newline": ["warn", { multiline: true }],
  "@stylistic/js/array-bracket-spacing": [
    "warn",
    "never",
    { arraysInArrays: true },
  ],
  "@stylistic/js/array-element-newline": ["warn", "consistent"],
  "@stylistic/js/arrow-parens": ["warn", "always"],
  "@stylistic/js/arrow-spacing": "warn",
  "@stylistic/js/block-spacing": ["warn", "always"],
  "@stylistic/js/brace-style": ["warn", "1tbs"],
  "@stylistic/js/comma-dangle": ["warn", "never"],
  "@stylistic/js/comma-spacing": ["warn", { before: false, after: true }],
  "@stylistic/js/comma-style": ["warn", "last"],
  "@stylistic/js/computed-property-spacing": ["warn", "never"],
  "@stylistic/js/dot-location": ["warn", "property"],
  "@stylistic/js/eol-last": ["warn", "always"],
  "@stylistic/js/function-call-argument-newline": ["warn", "consistent"],
  "@stylistic/js/function-call-spacing": ["warn", "never"],
  "@stylistic/js/function-paren-newline": ["warn", "multiline"],
  "@stylistic/js/generator-star-spacing": [
    "warn",
    { before: false, after: true },
  ],
  "@stylistic/js/implicit-arrow-linebreak": ["warn", "beside"],
  "@stylistic/js/indent": [
    "warn",
    INDENT_SPACING,
    {
      SwitchCase: 1,
      VariableDeclarator: "first",
      FunctionDeclaration: { parameters: "first" },
      CallExpression: { arguments: "first" },
      ArrayExpression: "first",
      ObjectExpression: "first",
      ImportDeclaration: "first",
      flatTernaryExpressions: false,
      offsetTernaryExpressions: false,
      ignoreComments: false,
    },
  ],
  "@stylistic/js/jsx-quotes": "off",
  "@stylistic/js/key-spacing": [
    "warn",
    {
      beforeColon: false,
      afterColon: true,
      mode: "strict",
    },
  ],
  "@stylistic/js/keyword-spacing": [
    "warn",
    {
      before: true,
      after: true,
    },
  ],
  "@stylistic/js/line-comment-position": "off",
  "@stylistic/js/linebreak-style": ["error", "unix"],
  "@stylistic/js/lines-around-comment": [
    "warn",
    {
      beforeBlockComment: true,
      afterBlockComment: false,
      allowBlockStart: true,
      allowBlockEnd: true,
      allowObjectStart: true,
      allowObjectEnd: true,
      allowArrayStart: true,
      allowArrayEnd: true,
      allowClassStart: true,
      allowClassEnd: true,
      afterHashbangComment: true,
    },
  ],
  "@stylistic/js/lines-between-class-members": [
    "warn",
    {
      enforce: [
        { blankLine: "always", prev: "*", next: "method" },
        { blankLine: "always", prev: "method", next: "*" },
      ],
    },
  ],
  "@stylistic/js/max-len": [
    "warn",
    {
      code: 120,
      comments: 100,
      ignoreComments: false,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    },
  ],
  "@stylistic/js/max-statements-per-line": ["warn", { max: 1 }],
  "@stylistic/js/multiline-comment-style": ["warn", "starred-block"],
  "@stylistic/js/multiline-ternary": ["warn", "always-multiline"],
  "@stylistic/js/new-parens": ["error", "always"],
  "@stylistic/js/newline-per-chained-call": "off", // Note: this would be far more useful if it had better configuration options
  "@stylistic/js/no-confusing-arrow": "warn",
  "@stylistic/js/no-extra-parens": "off",
  "@stylistic/js/no-extra-semi": "error",
  "@stylistic/js/no-floating-decimal": "error",
  "@stylistic/js/no-mixed-operators": "warn",
  "@stylistic/js/no-mixed-spaces-and-tabs": ["warn", "smart-tabs"],
  "@stylistic/js/no-multi-spaces": "off",
  "@stylistic/js/no-multiple-empty-lines": ["warn", { max: 3 }],
  "@stylistic/js/no-tabs": "warn",
  "@stylistic/js/no-trailing-spaces": "warn",
  "@stylistic/js/no-whitespace-before-property": "warn",
  "@stylistic/js/nonblock-statement-body-position": ["warn", "beside"],
  "@stylistic/js/object-curly-newline": ["warn", { multiline: true }],
  "@stylistic/js/object-curly-spacing": [
    "warn",
    "always",
    { arraysInObjects: false, objectsInObjects: false },
  ],
  "@stylistic/js/object-property-newline": [
    "warn",
    { allowAllPropertiesOnSameLine: true },
  ],
  "@stylistic/js/one-var-declaration-per-line": ["warn", "initializations"],
  "@stylistic/js/operator-linebreak": ["warn", "after"],
  "@stylistic/js/padded-blocks": [
    "warn",
    "never",
    { allowSingleLineBlocks: true },
  ],
  "@stylistic/js/padding-line-between-statements": "off",
  "@stylistic/js/quote-props": ["warn", "consistent-as-needed"],
  "@stylistic/js/quotes": ["warn", "single"],
  "@stylistic/js/rest-spread-spacing": ["error", "never"],
  "@stylistic/js/semi": [
    "warn",
    "always",
    { omitLastInOneLineBlock: true, omitLastInOneLineClassBody: true },
  ],
  "@stylistic/js/semi-spacing": ["warn", { before: false, after: true }],
  "@stylistic/js/semi-style": ["warn", "last"],
  "@stylistic/js/space-before-blocks": ["warn", "always"],
  "@stylistic/js/space-before-function-paren": [
    "warn",
    { anonymous: "always", named: "never", asyncArrow: "always" },
  ],
  "@stylistic/js/space-in-parens": ["warn", "never"],
  "@stylistic/js/space-infix-ops": "warn",
  "@stylistic/js/space-unary-ops": "warn",
  "@stylistic/js/spaced-comment": [
    "warn",
    "always",
    { exceptions: ["-", "+", "*"] },
  ],
  "@stylistic/js/switch-colon-spacing": [
    "warn",
    { after: true, before: false },
  ],
  "@stylistic/js/template-curly-spacing": ["warn", "never"],
  "@stylistic/js/template-tag-spacing": ["warn", "never"],
  "@stylistic/js/wrap-iife": "warn",
  "@stylistic/js/yield-star-spacing": ["warn", { after: true, before: false }],
};
