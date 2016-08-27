var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SearchSchema = new Scheme({
  searchTerm: {
    type: String
  },
  searchTime: {
    type: Date,
    default: Date.now
  },
  searchID: {
    type: Number

  }
});

var Search = mongoose.model('Search', SearchSchema);

module.exports = Search;
