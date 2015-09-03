// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
  },
  
  playFirst: function() {
    if (this.models.length) {
      this.models[0].play();
    }
  },

  dequeue: function() {
    console.log('dequeued function on songqueue ran');
    this.shift(this.models[0]);
    this.playFirst();
  }

  //don't need add function cause it already exists

});
