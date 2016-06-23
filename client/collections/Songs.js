// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({
  url: 'api.parse.com/1/classes/songs/',

  parse: function(data) {
    return data; 
  },

  fetch: function(songs) {
    songs = songs || {}; 
    return Backbone.Collection.prototype.fetch.call(this, songs); 
  },


  model: SongModel

  // initialize: function() {
  //   this.fetch();
  // }



});