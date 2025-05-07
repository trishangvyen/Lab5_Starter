// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSel = document.getElementById('voice-select');
  const speakBtn = document.querySelector('button');
  const textInput = document.getElementById('text-to-speak');
  const faceImg = document.querySelector('#explore img');
  let voices = [];

  function addVoices() {
    voices = synth.getVoices();
    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = index;
      voiceSel.appendChild(option);
    });
  }
  addVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = addVoices;
  }

  speakBtn.addEventListener('click', () => {
    const text = textInput.value;
    const selectedIndex = voiceSel.value;
    if (!text || selectedIndex === 'select') return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voices[selectedIndex];

    utterance.onstart = () => {
      faceImg.src = 'assets/images/smiling-open.png';
      faceImg.alt = 'Smiling face with open mouth';
    }
    utterance.onend = () => {
      faceImg.src = 'assets/images/smiling.png';
      faceImg.alt = 'Smiling face with closed mouth';
    };
    synth.speak(utterance);
  });
}