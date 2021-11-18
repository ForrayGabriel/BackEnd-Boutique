var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BoutiqueSchema = new Schema({
  title : String,
  description : String,
  createdAt : {
    type : Date,
    default : Date.now
  },
});

module.exports = mongoose.model('Boutique', BoutiqueSchema);
