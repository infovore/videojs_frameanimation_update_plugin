var Plugin = videojs.getPlugin('plugin');

var EnableFrameAnimationUpdate = videojs.extend(Plugin, {

  constructor: function(player, options) {
    Plugin.call(this, player, options);
    
    player.lastFrameTime = -1;

    player.frameUpdateFunc = function() {
      var time = player.currentTime();

      if ((!player.paused()) && (time !== player.lastFrameTime)) {
        player.trigger('timeupdate');
        player.lastFrameTime = time;
      }

      player.requestAnimationFrame(player.frameUpdateFunc);
    }

    player.requestAnimationFrame(player.frameUpdateFunc);
  }

});

videojs.registerPlugin('enableFrameAnimationUpdate', EnableFrameAnimationUpdate);

