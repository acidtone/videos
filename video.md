---
layout: video
---
  <main class="grid grid-cols2 center-outside full-height">
    <header class="grid-item-span2">
      <a href="index.html"><-</a>
      <h1 class="vid-title"></h1>
      <address class="vid-author"></address>
    </header>
    <div id="player"></div>
    <section>
      <!-- Video Template: to be looped through -->
      <ul id="ts-list" class="clear-style">
        <template id="timestamps">
          <!-- topics by timestamp -->
          <li><button class="ts-click"></button></li>
        </template>
      </ul>
    </section>
  </main>
  <script>
    // 1. What video are we playing?
    const url = new URL(window.location.href);
    const videoId = url.searchParams.get("v") || null;
    const timestamp = url.searchParams.get("t") || 0;

    // 2. This code loads the IFrame Player API code asynchronously.
    if (videoId) {
      var tag = document.createElement('script');
      
      
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  
      // 3. This function creates an <iframe> (and YouTube player) after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          videoId: videoId,
          startSeconds: timestamp,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
        console.log(document.querySelector('#player').contentWindow.document.body.scrollHeight);
      }
      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
    
      }
  
      // 5. The API calls this function when the player's state changes.
      function onPlayerStateChange(event) {
      
      }
    }
  </script>