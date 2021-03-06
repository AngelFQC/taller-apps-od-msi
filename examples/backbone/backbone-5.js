var Persona = Backbone.Model.extend({
    defaults: {
        apellido: '',
        nombre: ''
    }
});

var Gente = Backbone.Collection.extend({
    model: Persona
});

var PersonaTemplate = document.getElementById('persona').innerHTML;

var PersonaVista = Backbone.View.extend({
    template: _.template(PersonaTemplate),
    render: function (PersonaTemplate) {
        this.el.innerHTML = this.template(
            this.model.toJSON()
        );

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
