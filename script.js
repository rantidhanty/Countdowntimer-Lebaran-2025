function updateCountdown() {
  const targetDate = new Date("March 31, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference <= 0) {
    clearInterval(countdownInterval);
    document.getElementById("timer").innerHTML = `
        <div class="eid-message">
            <h2>🌙 Selamat Hari Raya Idul Fitri 1446 H! 🌙</h2>
            <p>Semoga Idul Fitri ini membawa keberkahan, kedamaian, dan kebahagiaan untuk kita semua.</p>
            <p class="highlight">Mohon maaf lahir dan batin. 🤲✨</p>
        </div>
    `;
    document.querySelector(".eid-message").classList.add("fade-in"); // Animasi muncul
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
