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
personA.on('change', function (model) {
    txtLastName.value = model.get('lastName');
    txtFirstName.value = model.get('firstName');
});

personA.trigger('change', personA);

personA.set({
    lastName: 'Took',
    firstName: 'Peregrin'
});
