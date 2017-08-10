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

mdule.exports.createData = function(guestData,callback){
        var guest = model(guestData);
        guest.save(function(e,o){
            if(e) return callback(false);
            else{
                callback(true,o);
            }
        });

}
