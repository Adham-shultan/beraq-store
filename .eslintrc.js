module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
        "react/react-in-jsx-scope": "off",
        "jsx-ally/anchor-is-valid": "off",
        "react/jsx-props-no-spreading": "off",
        "quotes": ["error", "single"],
        "semi": ["error", "always"],
    // we use 2 spaces to indent our code
        "indent": ["error", 2],
    // we want to avoid extraneous spaces
        "no-multi-spaces": ["error"]
  }
}
