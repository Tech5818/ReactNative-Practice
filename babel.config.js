module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@types': './src/types',
          '@assets': './src/assets',
          '@navigation': './src/navigation',
          '@': './src',
        },
      },
    ],
  ],
};
