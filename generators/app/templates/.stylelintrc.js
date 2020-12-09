module.exports = {
  extends: ['stylelint-config-wolox'],
  rules: {
    'selector-max-type': 2,
    'at-rule-no-unknown': [ true, {
      ignoreAtRules: ['if', 'for', 'extend', 'mixin']
    }],
    'scss/no-duplicate-dollar-variables': [ true, {
      ignoreInsideAtRules: ['if', 'mixin', 'media']
    }],
    'scss/at-import-no-partial-leading-underscore': null,
  }
};
