// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('removeMe', this.removeFromQueue, this);
  },
  
  playFirst: function() {
    if (this.models.length) {
      this.models[0].play();
    }
  },

  dequeue: function() {
    this.shift();
    this.playFirst();
  },

  removeFromQueue: function(song){
    this.models[0] === song ? this.dequeue() : this.remove(song);
  }

  //don't need add function cause it already exists

});
