module.exports = {
  env: {
    mocha: true
  },
  plugins: [
    'chai-friendly'
  ],
  overrides: [{
    files: '*.spec.ts',
    rules: {
      'chai-friendly/no-unused-expressions': 'off'
    }
  }]
}
