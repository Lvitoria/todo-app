const serve = require('./config/server');
require('./config/database');
require('./config/routes')(serve);