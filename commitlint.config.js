const conventional = require('@commitlint/config-conventional')

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    ...conventional.rules,
    'type-enum': [2, always, [...conventional.rules['type-enum'], 'content']],
  },
}
