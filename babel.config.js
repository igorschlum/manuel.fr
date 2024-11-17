/* module.exports = {
  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
};

*/
module.exports = function(api) {
  api.cache(true);
  
  return {
    presets: [
      require.resolve('@docusaurus/core/lib/babel/preset'),
      ['@babel/preset-env', { modules: false }]
    ],
    plugins: [
      ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
      '@babel/plugin-transform-class-properties',
      // Autres plugins si nécessaire
    ],
  };
};
