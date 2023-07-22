const playButton = document.querySelector('.video__button');
const link = document.querySelector('.video__link');
const video = document.querySelector('.video');
const videoIframe = video.querySelector('[data-video-container]');

// eslint-disable-next-line consistent-return
const createIframe = (block) => {
  if (video !== null) {
    const iframe = document.createElement('iframe');

    iframe.setAttribute('width', 364);
    iframe.setAttribute('height', 228);
    iframe.setAttribute('allow', 'autoplay');
    iframe.setAttribute('src', block.dataset.src);

    return iframe;
  }
};

export const initPlayVideo = () => {
  link.removeAttribute('href');
  playButton.addEventListener('click', () => {
    if (video && videoIframe) {
      playButton.remove();
      link.remove();
      const newIframe = createIframe(videoIframe);
      videoIframe.append(newIframe);
    }
  });
};
