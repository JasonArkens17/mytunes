var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    params.library.on('play', function(song) {
     this.set('currentSong', song);
   }, this);


   params.library.on('enqueue', function(song) {
     this.get('songQueue').add(song);
   }, this);

   this.get('songQueue').on('stop', function() {
     this.set('currentSong', null);
   }, this);
     }

});
