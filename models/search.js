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
});

var Search = mongoose.model('Search', SearchSchema);

module.exports = Search;
