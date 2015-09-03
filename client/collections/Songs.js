// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  url:'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/'

});