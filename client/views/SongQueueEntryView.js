// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),



  events: {
    'click': function(){this.trigger('helo',this);}
  },
  // initialize: function() {
  //   this.on('click', this.removeSong, this.model);
  // },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  },

  // removeSong: function() {
  //   console.log(this);
  //   this.removeSong();
  // }
});