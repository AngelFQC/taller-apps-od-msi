define([
	'jquery', 'underscore', 'backbone'
], function ($, _, Backone) {
	var PersonaView = Backbone.View.extend({
		tagName: 'p',
		render: function () {
			this.el.innerHTML += this.model.get('nombre');
			this.el.innerHTML += ' ';
			this.el.innerHTML += this.model.get('apellido');

			return this;
		}
	});

	return PersonaView;
});