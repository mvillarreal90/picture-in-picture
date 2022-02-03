const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaStrem() {
  try {
    const mediaStrem = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStrem;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch(error) {
    window.alert(error);
  } 
}

button.addEventListener('click', async () => {
  button.disabled = true;
  await videoElement.requestPictureInPicture();
  button.disabled = false;
});

selectMediaStrem();

