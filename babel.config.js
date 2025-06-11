module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@api': './src/api',
          '@components': './src/components',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@utils': './src/utils',
          '@interfaces': './src/interfaces',
          '@assets': './src/assets',
          '@hooks': './src/hooks',
          '@theme': './src/theme',
        },
      },
    ],
  ],
};
