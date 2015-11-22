var txtLastName = document.getElementById('txt-lastname'),
    txtFirstName = document.getElementById('txt-firstname');

var Person = Backbone.Model.extend({
    defaults: {
        lastName: '',
        firstName: ''
    }
});

var personA = new Person({
    lastName: 'Baggins',
    firstName: 'Frodo'
});
