var mongoose = require('mongoose');
var User = require('./models/user');
var seeder = require('mongoose-seed');

var data = [
    { 
        'model': 'User',
        'documents': [
            {
                'name': 'Robert Stewart',
                'email': 'robertstewart@gmail.com',
                'password': 'mckenzie',
                'dob': '1970-02-15',
                'gender': 'Male',
                'rating': 1
            },
            {
                'name': 'Casey Cartwright',
                'email': 'cartwrightcasey@gmail.com',
                'password': 'writestuff',
                'dob': '2001-12-03',
                'gender': 'Male',
                'rating': 2
            },
            {
                'name': 'Willa Morgan',
                'email': 'willa-morgan@gmail.com',
                'password': 'storming',
                'dob': '1994-09-12',
                'gender': 'Female',
                'rating': 3
            },
            {
                'name': 'Samantha Wilson',
                'email': 'sammywilson@gmail.com',
                'password': 'sparklepearsfruitmoon',
                'dob': '1984-09-31',
                'gender': 'Female',
                'rating': 4
            },
            {
                'name': 'Alicia Stewart',
                'email': 'aliciastewart@gmail.com',
                'password': 'dancingnotqueenabba',
                'dob': '1986-04-29',
                'gender': 'Female',
                'rating': 0
            },
            {
                'name': 'Andy Edwards',
                'email': 'andrew_edwards@gmail.com',
                'password': 'tenniswayworldforever',
                'dob': '1980-05-23',
                'gender': 'Male',
                'rating': 5
            }
        ]
    }
];  

module.exports = data;