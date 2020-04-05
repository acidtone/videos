import { viewer } from './viewer.mjs';

function init() {
  // Make-shift controller
  if (/(.*)video.html$/.test(window.location.pathname)) {
    viewer.loadVideo(videoId);
  } else {
    console.log('list');
    viewer.listVideos();
  }
}

document.addEventListener('load',init());