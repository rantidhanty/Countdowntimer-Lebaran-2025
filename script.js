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
    document.querySelector(".eid-message").classList.add("fade-in");
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

// 🔒 Blokir Klik Kanan
// document.addEventListener("contextmenu", function (e) {
//   e.preventDefault();
// });

// 🔒 Blokir F12, Ctrl+Shift+I, Ctrl+U
// document.addEventListener("keydown", function (e) {
//   if (
//     e.key === "F12" ||
//     (e.ctrlKey && e.shiftKey && e.key === "I") ||
//     (e.ctrlKey && e.key === "u")
//   ) {
//     e.preventDefault();
//   }
// });

// setInterval(() => {
//   let before = new Date().getTime();
//   debugger;
//   let after = new Date().getTime();
//   if (after - before > 100) {
//     window.location.href = "https://google.com";
//   }
// }, 1000);
