var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProduitSchema = new Schema({
  title : String,
  description : String,
  prix : Number,
  photo : {
    type :String,
    default : null
  },
  categorieID : {
        type:mongoose.Schema.Types.ObjectId,
        ref :  "Categorie"
  },
  createdAt : {
    type : Date,
    default : Date.now
  },
});

module.exports = mongoose.model('Produit', ProduitSchema);
