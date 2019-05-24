module.exports = {
  extends: ['stylelint-config-wolox'],
  rules: {
    'selector-max-type': 2,
    'at-rule-no-unknown': [ true, {
      ignoreAtRules: ['if', 'for', 'extend']
    }]
  }
};
