// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  context : this,

  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});

    this.songQueueView = new SongQueueView({ collection: this.model.get('songQueue') });

    this.playerView.el.addEventListener('ended', this.dummyfunction.bind(this), this);

    // this.songQueueView.collection.on('click', function() {
    //   console.log('SOMETHING IS WORKING');
    //   var playnext = false;
    //   if (this.songQueueView.collection.model === this.songQueueView.collection.models[0]) {
    //     playnext = true;
    //   }
    //   this.songQueueView.collection.model.removeSong();
    //   this.playerView.$el.stop();
    //   if (playnext) {
    //     this.songQueueView.collection.models[0].play();
    //   }
    //   this.playerView.setSong(this.songQueueView.collection.models[0]);
    //   this.playerView.$el.attr('src', this.songQueueView.collection.models[0] ? this.songQueueView.collection.models[0].get('url') : '');
    // }, this);
    // this.playerView.el.addEventListener('ended', function(){
    //   this.currentTime = 0;
    //   this.pause();
    //   this.playFirstSong();
    //   });
    

    //###########################V I'M IMPORTANT V##################################################
    this.libraryView.collection.on('enqueue', function(song){
      this.songQueueView.collection.add(song);
    },this);


    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      this.playerView.setSong(model.get('currentSong'));
    }, this);
  },

  render: function() {
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  },

  dummyfunction: function() {
    this.songQueueView.dequeue();
  }
  
});
