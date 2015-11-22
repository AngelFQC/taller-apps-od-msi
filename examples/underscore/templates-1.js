var data = {
    people: [
        {
            lastName: 'Baggins',
            firstName: 'Froddo'
        },
        {
            lastName: 'Baggins',
            firstName: 'Bilbo'
        },
        {
            lastName: 'Took',
            firstName: 'Peregrin'
        },
        {
            lastName: 'Gamgee',
            firstName: 'Samwise'
        }
    ]
};

var templateEl = document.getElementById('template'),
    containerEl = document.getElementById('container');

var compiled = _.template(templateEl.innerHTML);

containerEl.innerHTML = compiled(data);
