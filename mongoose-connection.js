//file js for db connection
const _logger    = require('tracer').console();
const _config = require('./config');
var mongoose   = require('mongoose');

mongoose.connect('mongodb://'+_config.database.mongodb.host+':'+_config.database.mongodb.port+'/' + _config.database.mongodb.database);
module.exports = mongoose.connection;
mongoose.connection.on('error', function(){
    console.error.bind(console, 'connection error:');
});
mongoose.connection.once('open', function (callback) {
    _logger.info('mongoose success connect');
});
