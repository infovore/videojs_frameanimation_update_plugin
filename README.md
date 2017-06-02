# Frame Animation timeupdate plugin for video.js

This plugin acts as a simple extension to [videojs][videojs] to enable videos to send `timeupdate` events at frameAninmation rates (ie, 60fps) when a video is playing.

## Installation

Put the `videojs.enable_frameanimation_update.js` file somewhere in your application and include it in an HTML page in whatever way you prefer. (I'm fine with `<script>` tags; you may prefer a more complex build/pack routine).

## Usage

Sample usage: to enable frame animation on a video, and then handle events.

```javascript
video = videojs("my-video");

video.enableFrameAnimationUpdate();

window.video.on('timeupdate', function() {
  console.log('frame!');
});
```

`timeupdate` events will be emitted as normal from the player; however, when the video is actively playing back, they'll be emitted at frameAnimation rates.