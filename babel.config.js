module.exports = {
  presets: ['module:@react-native/babel-preset'],

  plugins: [
    [
      'babel-plugin-inline-import',
      {
        extensions: ['.svg'],
      },
    ],
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        blacklist: null, // DEPRECATED
        whitelist: null, // DEPRECATED
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@customTypes': './src/types',
          '@customHooks': './src/hooks',
          '@navigation': './src/navigation',
          '@services': './src/services',
          '@store': './src/store',
          '@theme': './src/theme',
          '@screens': './src/screens',
          '@icons': './src/assets/icons',
          '@helpers': './src/helpers',
          '@globalStyles': './src/globalStyles',
        },
      },
    ],
  ],
};
