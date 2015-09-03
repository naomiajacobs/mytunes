// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    this.render();
    this.collection.on('add', this.render, this);
  },

  addSong: function(song) {
    this.collection.add(song);
    this.playSongs();
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  },

  playSongs: function() {
    console.log('this collection',this.collection);
    //while it has songs
    // while (this.collection.length) {
      // if(this.collection.models.length) {
        this.collection.models[0].play();
      

      // this.playSongs();
      //play collection[0]
      //dequeue collection by shifting it
  }

});
