module.exports = {
  extends: [
    '../.eslintrc.js',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'react/prop-types': 'off',
    'prefer-arrow-callback': "off", // Doesn't make sense in react applications with for example React.memo
  },
};
