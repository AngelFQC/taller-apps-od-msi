var Persona = Backbone.Model.extend({
    defaults: {
        apellido: '',
        nombre: ''
    }
});

var Gente = Backbone.Collection.extend({
    model: Persona
});

var PersonaVista = Backbone.View.extend({
    tagName: 'li',
    render: function () {
        this.el.innerHTML = this.model.get('nombre') + ' ' +
            this.model.get('apellido');

        return this;
    }
});

var GenteVista = Backbone.View.extend({
    el: '#personas',
    render: function () {
        this.collection.each(function (personaModelo) {
            var personaVista = new PersonaVista({
                model: personaModelo
            });
            this.el.appendChild(
                personaVista.render().el
            )
        }, this);

        return this;
    }
});

var gente = new Gente([
    {nombre: 'Frodo', apellido: 'Baggins'},
    {nombre: 'Bilbo', apellido: 'Baggins'},
    {nombre: 'Peregrin', apellido: 'Tool'},
    {nombre: 'Samwise', apellido: 'Gamgee'}
]);

var genteVista = new GenteVista({
    collection: gente
});
genteVista.render(); 

