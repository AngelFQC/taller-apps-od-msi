define([
	'jquery',
	'underscore',
	'text!template/tabla.html'
], function ($, _, tablaTemplate) {
	var datos = {
		personas: [
			{
				apellido: 'Baggins',
				nombre: 'Frodo'
			},
			{
				apellido: 'Baggins',
				nombre: 'Bilbo'
			}
		]
	};

	return {
		init: function () {
			var plantilla = _.template(tablaTemplate);

			$('body').html(
				plantilla(datos)
			);
		}
	}; 
});
