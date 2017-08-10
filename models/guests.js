const _logger    = require('tracer').console();
const mongoose   = require('mongoose');
var schema = {
  "name": {type:String, default:'-'},
  "email": {type:String, default:'-'},
  "message": {type:String, default:'-'}
}
module.exports.schema = schema;
var schemaObject =  new mongoose.Schema(schema);
var model = mongoose.model('guests', schemaObject);
module.exports = model;
