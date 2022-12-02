/**
 * babel é tradutor. Ele traduz código React em JavaScript puro
 * 
 */

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin',],
  };
};
