function updateCountdown() {
  const targetDate = new Date("March 31, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const difference = targetDate - now;

  if (difference <= 0) {
    clearInterval(countdownInterval);
    document.getElementById("timer").innerHTML = `
        <div class="eid-message">
            <h2>Selamat Hari Raya Idul Fitri 1446 H!</h2>
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

// document.addEventListener("DOMContentLoaded", function () {
//   const music = document.getElementById("bgMusic");
//   const musicBtn = document.getElementById("musicBtn");

//   // Atur volume
//   music.volume = 0.3;
//   musicBtn.style.display = "flex";

//   // Deteksi perangkat mobile
//   const isMobile =
//     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//       navigator.userAgent
//     );

//   // Fungsi toggle musik
//   function toggleMusic() {
//     if (music.paused) {
//       music
//         .play()
//         .then(() => {
//           musicBtn.innerHTML = '<i class="ri-pause-fill"></i>';
//         })
//         .catch((e) => {
//           console.log("Playback blocked:", e);
//           // Tampilkan instruksi khusus untuk mobile
//           if (isMobile) {
//             alert(
//               "Silakan ketuk tombol musik di pojok kanan atas untuk memulai"
//             );
//           }
//         });
//     } else {
//       music.pause();
//       musicBtn.innerHTML = '<i class="ri-music-2-fill"></i>';
//     }
//   }

//   // Untuk Desktop - Autoplay saat interaksi pertama
//   if (!isMobile) {
//     const handleFirstInteraction = () => {
//       toggleMusic();
//       document.removeEventListener("click", handleFirstInteraction);
//       document.removeEventListener("keydown", handleFirstInteraction);
//     };

//     document.addEventListener("click", handleFirstInteraction, { once: true });
//     document.addEventListener("keydown", handleFirstInteraction, {
//       once: true,
//     });
//   }

//   // Untuk semua perangkat - Tombol kontrol manual
//   musicBtn.addEventListener("click", function (e) {
//     e.stopPropagation();
//     toggleMusic();
//   });

//   // Fallback universal
//   setTimeout(() => {
//     if (music.paused) {
//       musicBtn.style.display = "flex";
//     }
//   }, 3000);
// });

document.addEventListener("DOMContentLoaded", function () {
  const music = document.getElementById("bgMusic");
  const musicBtn = document.getElementById("musicBtn");
  const musicIcon = musicBtn.querySelector("i"); // Ambil ikon di dalam tombol

  // Tampilkan alert di awal
  alert(
    "🌙 Taqabbalallahu minna wa minkum, Kami dari Keluarga Besar TK Islam Harapan Sukatani mengucapkan Selamat Hari Raya Idul Fitri! mohon maaf lahir dan batin. Klik tombol musik di pojok kanan untuk merasakan suasana yang lebih indah 🎶"
  );

  // Fungsi toggle musik (Play/Pause)
  function toggleMusic() {
    if (music.paused) {
      music.play();
      musicIcon.className = "ri-pause-fill";
    } else {
      music.pause();
      musicIcon.className = "ri-music-2-fill";
    }
  }

  // Fungsi autoplay saat interaksi pertama (klik sembarang, scroll, atau swipe)
  function autoPlayMusic() {
    music.play().catch(() => {
      console.log("Autoplay diblokir, menunggu interaksi pengguna...");
    });

    // Hapus event listener setelah pertama kali dipicu
    removeAutoPlayListeners();
  }

  // Hapus event listener setelah autoplay berhasil
  function removeAutoPlayListeners() {
    document.body.removeEventListener("click", autoPlayMusic);
    window.removeEventListener("scroll", autoPlayMusic);
    document.body.removeEventListener("touchmove", autoPlayMusic);
  }

  // 🔥 Pisahkan event listener tombol musik & autoplay
  musicBtn.addEventListener("click", function (e) {
    e.stopPropagation(); // Hindari konflik dengan klik global
    toggleMusic();
  });

  // 🔥 Event listener autoplay (klik bebas, scroll, atau geser layar)
  document.body.addEventListener("click", autoPlayMusic, { once: true });
  window.addEventListener("scroll", autoPlayMusic, { once: true });
  document.body.addEventListener("touchmove", autoPlayMusic, { once: true });
});
