var mongoose = require('../../modules/mongoose/mongoose').Mongoose;
var db = mongoose.connect('mongodb://localhost/tapasnews');

mongoose.model('News', {

    properties: ['title', 'subtitle', 'imageUri', 'article', 'excerpt', 'appid', 'updated_at'],

    indexes: ['title'],

    methods: {
        save: function(fn){
            this.updated_at = new Date();
            this.__super__(fn);
        }
    }

});

module.exports = db.model('News');
