module.exports = {
  extends: ['plugin:vue/vue3-recommended', 'airbnb-typescript/base'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
  },
};
