define([
	'jquery',
	'underscore',
	'backbone'
], function ($, _, Backbone) {
	var Persona = Backbone.Model.extend({
		defaults: {
			nombre: '',
			apellido: ''
		}
	});

	return Persona;
});
