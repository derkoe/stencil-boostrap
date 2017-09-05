exports.config = {
  bundles: [
    { components: ['dropdown-button', 'dropdown-item', 'dropdown-divider'] },
    { components: ['progress-bar'] }
  ],
  namespace: 'bootstrap'
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
