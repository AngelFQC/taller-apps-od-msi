requirejs.config({
	baseUrl: 'js'
});

requirejs([
	'main'
], function (main, $) {
	main.init();
});
