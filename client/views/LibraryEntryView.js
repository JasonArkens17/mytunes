// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="song">(<%= artist %>)</td><td><%= title %>'),

  events: {
    'click': function() {
      this.model.enqueue();
      // this.model.play();
    }
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes)).append(this.model.get('playCount'));
  }

});
