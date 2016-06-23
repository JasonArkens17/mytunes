// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
  //  on enqueue
    //this is fire through an enqueue call
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function(model) {
      if (model === this.at(0)) {
        this.remove(model);
        if (this.length > 0) {
          this.playFirst();
        } 
      }

      this.remove(model);
    });

    this.on('dequeue', function (model) {
      this.remove(model);
      if (this.length > 0) {
        this.playFirst();
      }
    });

  },

  playFirst: function() {
    this.at(0).play();  
  }

});