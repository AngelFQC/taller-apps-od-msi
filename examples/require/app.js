requirejs.config({
	baseUrl: 'js'
});

requirejs([
	'main'
], function (maink) {
	mainl.init();
});
