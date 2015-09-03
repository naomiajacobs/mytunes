// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  events : {
    'click': function(){
      console.log('helo');
    }
  },


  initialize: function() {
    this.render();
    this.collection.on('add', this.render, this);
    this.collection.on('add', this.playAfterAdding, this);
    this.collection.on('ended', this.dequeue, this); //pass in event
    this.collection.on('remove', this.render, this);
    // this.collection.on('click', this.);
    this.collection.on('helo',function(){console.log('hello')},this);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  },

  playAfterAdding: function() {
    if (this.collection.length === 1) {
      this.collection.playFirst();
    }
  },

  dequeue: function() {
    this.collection.dequeue();
  },

  removeSong: function(){
    console.log('this is working');
    this.model.removeSong();
  }

});
