var Person = Backbone.Model.extend({
    defaults: {
        apellido: '',
        nombre: ''
    }
});

var People = Backbone.Collection.extend({
    model: Person
});

var personas = new People([
    {
        apellido: 'Baggins',
        nombre: 'Frodo'
    },
    {
        apellido: 'Took',
        nombre: 'Peregrin'
    }
]);

personas.each(function (persona, key) {
    console.log(
        persona.get('apellido') + ' ' +persona.get('nombre')
    );
});

personas.on('add', function (model) {
    alert('Se agregó a ' + model.get('nombre'));
});




