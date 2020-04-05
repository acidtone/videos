import { viewer } from './viewer.mjs';

function init() {
  viewer.loadVideo(videoId);
}

document.addEventListener('load',init(player));