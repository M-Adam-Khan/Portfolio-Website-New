// ==== Video Playback Speed Control ====
window.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('hero-video');
  if (video) {
    video.playbackRate = 0.5;
  }

  // Start Typewriter after DOM is loaded
  if (document.getElementById('typewriter-text')) {
    startTypewriter();
  }
});

// ==== Fade-in on Scroll ====
const faders = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    }
  });
});
faders.forEach(fader => observer.observe(fader));

// ==== Typewriter Effect ====
function startTypewriter() {
  const typedTextSpan = document.getElementById('typewriter-text');
  const textArray = [
    "an AI/ML Engineer ",
    "a Python Developer",
    "a Generative AI Enthusiast"
  ];
  const typingDelay = 100;
  const erasingDelay = 50;
  const newTextDelay = 2000;

  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      textArrayIndex = (textArrayIndex + 1) % textArray.length;
      setTimeout(type, typingDelay);
    }
  }

  setTimeout(type, 800); // Initial delay
}
