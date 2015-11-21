var txtLastName = document.getElementById('txt-lastname'),
    txtFirstName = document.getElementById('txt-firstname');

var Person = Backbone.Model.extend({
    defaults: {
        lastName: '',
        firstName: ''
    },
    validate: function (attributes) {
        if (attributes.firstName.length === 0) {
            return 'Ingrese el nombre';
        }
    },
});

var personA = new Person({
    lastName: 'Baggins',
    firstName: 'Frodo'
});
personA.on('invalid', function (model, errorMessage) {
    //alert(errorMessage);
});
personA.set({
    lastName: 'lalala',
    firstName: ''
});
//personA.save();

if (!personA.isValid()) {
    alert(personA.validationError);
}

