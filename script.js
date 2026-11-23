/* --- 1. Countdown Timer Logic --- */
const weddingDate = new Date("May 25, 2025 12:35:00").getTime();

const timer = setInterval(function () {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance < 0) {
            clearInterval(timer);
            document.getElementById("countdown").innerHTML = "<h2>शुभ विवाह संपन्न!</h2>";
            return;
      }

      document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
      document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);

/* --- 2. Falling Petals Logic --- */
function createPetal() {
      const petal = document.createElement('div');
      petal.classList.add('petal');

      // फुलांच्या पाकळीचा इमोजी किंवा इमेज
      petal.innerText = '🌸❤️';
      // किंवा तुम्ही इमेज वापरू शकता: petal.style.backgroundImage = "url('petal.png')";

      petal.style.left = Math.random() * 100 + 'vw';
      petal.style.animationDuration = Math.random() * 3 + 4 + 's'; // 4 ते 7 सेकंद
      petal.style.fontSize = Math.random() * 20 + 15 + 'px';

      document.body.appendChild(petal);

      setTimeout(() => {
            petal.remove();
      }, 7000);
}
// दर 150ms ने एक नवीन पाकळी पडेल
setInterval(createPetal, 150);

var music = document.getElementById("wedding-music");
var icon = document.getElementById("music-icon");

function toggleMusic() {
      if (music.paused) {
            music.play();
            icon.classList.remove("fa-play");
            icon.classList.add("fa-pause");
      } else {
            music.pause();
            icon.classList.remove("fa-pause");
            icon.classList.add("fa-play");
      }
}
