requirejs.config({
	baseUrl: 'js',
	paths: {
		jquery: '../libs/jquery',
		underscore: '../libs/underscore',
		text: '../libs/text',
		template: '../templates',
		backbone: '../libs/backbone'
	}
});

requirejs([
	'persona',
	'personaVista'
], function (Persona, PersonaVista) {
	var miPersona = new Persona();
	miPersona.set({
		apellido: 'Took',
		nombre: 'Peregrin'
	});

	var miPersonaVista = new PersonaVista({
		model: miPersona
	});

	$('body').append(
		miPersonaVista.render().el
	);
});
