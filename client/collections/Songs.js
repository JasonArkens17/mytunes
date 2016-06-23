// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({
  url: 'https://api.parse.com/1/classes/songs/', 


  parse: function(data) {
    return data.results;
  }, 

  initialize: function() {
    this.fetch(); 
  }, 



  model: SongModel

  // initialize: function() {
  //   this.fetch();
  // }



});