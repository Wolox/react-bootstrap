module.exports = {
  extends: ["wolox", "wolox-react", "@wolox/eslint-config-typescript"],
  parser: "@typescript-eslint/parser",
  rules: {
    "import/order": "off",
    "import/no-unresolved": "off",
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/ban-types": [
      "error",
      {
        "extendDefaults": true,
        "types": {
          "{}": false
        }
      }
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "default",
        "format": ["camelCase"]
      },
      {
        "selector": "variableLike",
        "format": ["camelCase", "UPPER_CASE", "PascalCase"]
      },
      {
        "selector": "typeLike",
        "format": ["PascalCase"]
      },
      {
        "selector": "enumMember",
        "format": ["UPPER_CASE"]
      }
    ]
  },
  settings: {
    react: {
      version: "detect"
    },
    'import/resolver': 'typescript'
  }
};
