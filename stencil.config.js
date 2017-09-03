exports.config = {
	bundles: [
		{ components: ['bs-dropdown-button', 'bs-progress-bar'] }
	],
	namespace: 'bootstrap'
};

exports.devServer = {
	root: 'www',
	watchGlob: '**/**'
}
