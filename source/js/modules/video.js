let video = document.querySelector('.gym__video');
let videoBtn = document.querySelector('.gym__video-btn');

videoBtn.addEventListener('click', () => {
  if (document.querySelector('.gym__video')) {
    if (video.paused) {
      video.play();
      videoBtn.style.display = 'none';
    } else {
      video.pause();
    }
  } else {
    videoBtn.style.display = 'none';
  }
});

function videoOnclick() {
  video.pause();
  videoBtn.style.display = 'block';
}

if (video) {
  video.addEventListener('click', videoOnclick);
}
