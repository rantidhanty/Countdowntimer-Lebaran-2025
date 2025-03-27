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

document.addEventListener("DOMContentLoaded", function () {
  const music = document.getElementById("bgMusic");
  const musicBtn = document.getElementById("musicBtn");

  // Atur volume
  music.volume = 0.3;

  // Status musik
  let musicPlaying = false;
  let interactionOccurred = false;

  // Fungsi untuk memutar musik
  function playMusic() {
    music
      .play()
      .then(() => {
        musicPlaying = true;
        musicBtn.innerHTML = '<i class="ri-pause-fill"></i>';
      })
      .catch((e) => {
        console.log("Autoplay blocked, waiting for manual click");
        musicBtn.style.display = "block"; // Pastikan tombol terlihat
      });
  }

  // Fungsi untuk menghentikan musik
  function pauseMusic() {
    music.pause();
    musicPlaying = false;
    musicBtn.innerHTML = '<i class="ri-music-2-fill"></i>';
  }

  // Toggle musik saat tombol diklik
  musicBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // Mencegah event bubbling
    if (musicPlaying) {
      pauseMusic();
    } else {
      playMusic();
    }
  });

  // Coba autoplay saat interaksi pertama dengan dokumen
  function handleFirstInteraction() {
    if (!interactionOccurred) {
      interactionOccurred = true;
      playMusic();

      // Hapus event listeners setelah interaksi pertama
      document.removeEventListener("click", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    }
  }

  // Pasang listener untuk interaksi pertama
  document.addEventListener("click", handleFirstInteraction, { once: true });
  document.addEventListener("touchstart", handleFirstInteraction, {
    once: true,
  });

  // Fallback: Jika setelah 3 detik belum ada interaksi, tampilkan tombol
  setTimeout(() => {
    if (!interactionOccurred) {
      musicBtn.style.display = "block";
    }
  }, 3000);
});
