var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CategorieSchema = new Schema({
  title : String,
  description : String,
  boutiqueID : {
        type:mongoose.Schema.Types.ObjectId,
        ref :  "Boutique"
  },
  createdAt : {
    type : Date,
    default : Date.now
  },
});

module.exports = mongoose.model('Categorie', CategorieSchema);
