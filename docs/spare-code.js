
// app setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.set('views', './views')
app.set('view engine', 'jade');

// our routes
var routes = require('./config/routes');
app.use(routes);


var chalk = require('chalk');
var _ = require('lodash');


/* Phones (portrait and landscape) ----------- */
@media only screen and (max-device-width : 480px) {
/* Styles */
}

/* Tablets (portrait and landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
/* Styles */
}

@media screen 
  and (min-device-width: 1024px)

