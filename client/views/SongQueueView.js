// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagname: "table",

  initialize: function() {
    this.render();
    // console.log(this.library);
    // this.collection.on('enqueue', this.addSong, this);
    this.collection.on('add', this.render, this);
    
  },

  addSong: function(song) {
    this.collection.add(song);
  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});

// render: function() {
//     // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
//     // see http://api.jquery.com/detach/
//     this.$el.children().detach();

//     this.$el.html('<th>Library</th>').append(
//       this.collection.map(function(song) {
//         return new LibraryEntryView({model: song}).render();
//       })
//     );
//   }