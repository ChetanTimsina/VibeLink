const videos = [
  "https://cdn.coverr.co/videos/coverr-snowy-road-6871/1080p.mp4",
  "https://cdn.coverr.co/videos/coverr-moonlight-3020/1080p.mp4",
  "https://cdn.coverr.co/videos/coverr-bird-flight-9161/1080p.mp4",
];

const random = Math.floor(Math.random() * videos.length);
const videoEl = document.getElementById("bg-video");
videoEl.querySelector("source").src = videos[random];
videoEl.load();
