// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
    this.collection.on('sync', this.render, this);
    this.collection.on('change:playCount', this.render, this);

  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th class="song  ">Library</th>').append(
      this.collection.map(function(song) {
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
