const thumbnails = document.querySelectorAll('.thumbnail-container');
const lightbox = document.getElementById('video-lightbox');
const frame = document.getElementById('video-frame');
const closeBtn = document.querySelector('.close-video');

thumbnails.forEach(thumb => {
  thumb.addEventListener('click', () => {

    const videoId = thumb.dataset.video;

    frame.innerHTML =
      `<iframe 
      src="https://player.vimeo.com/video/${videoId}&amp;autoplay=1"
      frameborder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      style="position:absolute;top:0;left:0;width:100%;height:100%;"
      allowfullscreen></iframe>`;

    lightbox.style.display = "flex";
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = "none";
  frame.innerHTML = "";
});

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
    frame.innerHTML = "";
  }
});