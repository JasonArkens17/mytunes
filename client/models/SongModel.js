var SongModel = Backbone.Model.extend({

  play: function() {
    
    this.trigger('play', this);
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  ended: function() {
    this.trigger('ended', this);
  },


  initialize: function() {
    this.set('playCount', 0);
  }

});
