requirejs.config({
	baseUrl: 'js',
	paths: {
		jquery: '../libs/jquery',
		underscore: '../libs/underscore',
		text: '../libs/text',
		template: '../templates'
	}
});

requirejs([
	'main'
], function (main) {
	main.init();
});
