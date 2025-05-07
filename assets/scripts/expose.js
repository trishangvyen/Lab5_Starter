// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const audioElement = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener('change', function () {
    const selectedHorn = hornSelect.value;
    if (selectedHorn === 'air-horn') {
      hornImage.src = './assets/images/air-horn.svg';
      hornImage.alt = 'Air Horn';
      audioElement.src = './assets/audio/air-horn.mp3';
    } else if (selectedHorn === 'car-horn') {
      hornImage.src = './assets/images/car-horn.svg';
      hornImage.alt = 'Car Horn';
      audioElement.src = './assets/audio/car-horn.mp3';
    } else if (selectedHorn === 'party-horn') {
      hornImage.src = './assets/images/party-horn.svg';
      hornImage.alt = 'Party Horn';
      audioElement.src = './assets/audio/party-horn.mp3';
    } else {
      hornImage.src = '';
      hornImage.alt = '';
      audioElement.src = '';
    }
  });

  volumeSlider.addEventListener('input', function () {
    const volume = parseInt(volumeSlider.value);
    audioElement.volume = volume / 100;
    if (volume === 0) {
      volumeIcon.src = './assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume Level 0';
    } else if (volume < 33) {
      volumeIcon.src = './assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume Level 1';
    } else if (volume < 67) {
      volumeIcon.src = './assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume Level 2';
    } else {
      volumeIcon.src = './assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume Level 3';
    }
  });

  playButton.addEventListener('click', function () {
    if (!audioElement.src) {
      return;
    }
    audioElement.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}

