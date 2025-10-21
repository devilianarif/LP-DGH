// === Rain Effect ===
const canvas = document.getElementById('rain-canvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const raindrops = [];
const numberOfDrops = 200; // jumlah titik hujan

function createRaindrops() {
    for (let i = 0; i < numberOfDrops; i++) {
        const speed = 0.5 + Math.random() * 0.8; // lebih lambat & acak ringan
        raindrops.push({
            x: Math.random() * width,
            y: Math.random() * height,
            length: 8 + Math.random() * 4,
            velocity: speed,
        });
    }
}

function drawRain() {
    ctx.clearRect(0, 0, width, height);
    ctx.strokeStyle = 'rgba(174,194,224,0.5)';
    ctx.lineWidth = 1;
    ctx.lineCap = 'round';

    for (let i = 0; i < raindrops.length; i++) {
        let d = raindrops[i];
        ctx.beginPath();
        ctx.moveTo(d.x, d.y);
        ctx.lineTo(d.x, d.y + d.length);
        ctx.stroke();

        d.y += d.velocity * 3; // ubah faktor ini (2–4) untuk kontrol kecepatan umum
        if (d.y > height) {
            d.y = -d.length;
            d.x = Math.random() * width; // posisi ulang acak biar lebih natural
        }
    }

    requestAnimationFrame(drawRain);
}

createRaindrops();
drawRain();

// resize canvas jika window berubah
window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});
// === Custom Auto Slide Carousel ===
document.addEventListener('DOMContentLoaded', () => {
  const carouselEl = document.querySelector('#picsumCarousel');
  const carousel = new bootstrap.Carousel(carouselEl, { interval: false }); // nonaktifkan interval internal

  let autoSlide; // untuk menyimpan interval custom
  let isPaused = false;

  // Fungsi untuk berpindah ke slide berikut
  function nextSlide() {
    if (!isPaused) {
      carousel.next();
    }
  }

  // Mulai auto-slide setiap 4 detik
  function startAutoSlide() {
    stopAutoSlide(); // pastikan gak dobel
    autoSlide = setInterval(nextSlide, 8000);
  }

  // Berhenti auto-slide
  function stopAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = null;
  }

  // Jalankan auto-slide saat awal halaman
  startAutoSlide();

  // === Integrasi dengan tombol Play & Modal ===
  const playButtons = document.querySelectorAll('.btn-play-center');
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('youtubePlayer');
  const closeBtn = modal.querySelector('.close-modal');

  // Saat tombol Play diklik
  playButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const videoId = btn.getAttribute('data-video');
      iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&controls=1&modestbranding=1&rel=0`;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';

      // Hentikan auto-slide saat Play ditekan
      stopAutoSlide();
      isPaused = true;
    });
  });

  // Saat modal ditutup (klik X atau luar)
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target === closeBtn) {
      modal.classList.remove('active');
      iframe.src = "";
      document.body.style.overflow = 'auto';

      // Mulai lagi auto-slide
      isPaused = false;
      startAutoSlide();
    }
  });
});


// === Character Interaction ===
const charTrack = document.querySelector('.character-track');
const carCard = document.querySelectorAll('.kartu-character');
let currentCharacter = 2; // posisi tengah awal

function updateCharacter() {
  const cardWidth = carCard[0].offsetWidth + 30;
  const offset = (charTrack.offsetWidth / 2) - (cardWidth / 2) - (currentCharacter * cardWidth);
  charTrack.style.transform = `translateX(${offset}px)`;

  carCard.forEach((card, index) => {
    const distance = Math.abs(currentCharacter - index);
    card.classList.toggle('aktif', index === currentCharacter);
    card.style.transform = index === currentCharacter
      ? 'scale(1.1)'
      : distance === 1
      ? 'scale(0.9)'
      : 'scale(0.8)';
    card.style.opacity = index === currentCharacter ? '1' : distance === 1 ? '0.6' : '0.3';
  });
}

// klik kartu untuk pindah ke tengah
carCard.forEach((card, index) => {
  card.addEventListener('click', () => {
    currentCharacter = index;
    updateCharacter();
  });
});

// inisialisasi awal
updateCharacter();

// === Halter Rain Effect ===
const halterCount = 100; // jumlah garis hujan

for (let i = 0; i < halterCount; i++) {
  const line = document.createElement("hr");

  if (i === halterCount - 1) {
    line.className = "halter-thunder";
  } else {
    line.className = "halter-line";
    line.style.left = Math.floor(Math.random() * window.innerWidth) + "px";
    line.style.animationDuration = 0.2 + Math.random() * 0.3 + "s";
    line.style.animationDelay = Math.random() * 5 + "s";
  }

  document.querySelector(".halter-container").appendChild(line);
}

// === Dtcha Rain Effect ===
const makeDtchaRain = () => {
  document.querySelectorAll(".dtcharain").forEach(el => el.innerHTML = "");

  let increment = 0;
  let drops = "";
  let backDrops = "";

  while (increment < 100) {
    let randoHundo = Math.floor(Math.random() * 97) + 1;
    let randoFiver = Math.floor(Math.random() * 4) + 2;
    increment += randoFiver;

    drops += `
      <div class="dtcharain-drop" style="left:${increment}%;bottom:${randoFiver + 100}%;animation-delay:0.${randoHundo}s;animation-duration:0.5${randoHundo}s;">
        <div class="dtcharain-stem" style="animation-delay:0.${randoHundo}s;animation-duration:0.5${randoHundo}s;"></div>
        <div class="dtcharain-splat" style="animation-delay:0.${randoHundo}s;animation-duration:0.5${randoHundo}s;"></div>
      </div>`;

    backDrops += `
      <div class="dtcharain-drop" style="right:${increment}%;bottom:${randoFiver + 100}%;animation-delay:0.${randoHundo}s;animation-duration:0.5${randoHundo}s;">
        <div class="dtcharain-stem" style="animation-delay:0.${randoHundo}s;animation-duration:0.5${randoHundo}s;"></div>
        <div class="dtcharain-splat" style="animation-delay:0.${randoHundo}s;animation-duration:0.5${randoHundo}s;"></div>
      </div>`;
  }

  document.querySelector(".dtcharain.front-row").innerHTML = drops;
  document.querySelector(".dtcharain.back-row").innerHTML = backDrops;
};

makeDtchaRain();

// === Showcase Section ===
document.addEventListener("DOMContentLoaded", () => {
  const data = [
    {
      img: "../aset/s1.png",
      title: "Judul 1",
      list: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Vivamus vel orci et urna vestibulum malesuada.",
        "Aliquam erat volutpat. Nulla facilisi."
      ]
    },
    {
      img: "../aset/s2.png",
      title: "Judul 2",
      list: [
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        "Accusantium doloremque laudantium, totam rem aperiam.",
        "Eaque ipsa quae ab illo inventore veritatis."
      ]
    },
    {
      img: "../aset/s3.png",
      title: "Judul 3",
      list: [
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam.",
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit.",
        "Temporibus autem quibusdam et aut officiis debitis."
      ]
    },
    {
      img: "../aset/s1.png",
      title: "Judul 4",
      list: [
        "At vero eos et accusamus et iusto odio dignissimos ducimus.",
        "Et harum quidem rerum facilis est et expedita distinctio.",
        "Nam libero tempore, cum soluta nobis est eligendi optio."
      ]
    },
    {
      img: "../aset/s2.png",
      title: "Judul 5",
      list: [
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
        "Consectetur, adipisci velit, sed quia non numquam eius modi tempora.",
        "Labore et dolore magnam aliquam quaerat voluptatem."
      ]
    }
  ];

  let index = 0;
  const imgEl = document.getElementById("showcase-img");
  const titleEl = document.getElementById("showcase-title");
  const textEl = document.getElementById("showcase-text");
  const dots = document.querySelectorAll(".showcase-dot");

  function updateShowcase(i) {
    const d = data[i];
    imgEl.style.opacity = "0";
    setTimeout(() => {
      imgEl.src = d.img;
      titleEl.textContent = d.title;
      textEl.innerHTML = d.list.map(t => `<li>${t}</li>`).join("");
      dots.forEach(dot => dot.classList.remove("active"));
      dots[i].classList.add("active");
      imgEl.style.opacity = "1";
    }, 300);
  }

  function nextSlide() {
    index = (index + 1) % data.length;
    updateShowcase(index);
  }

  // Auto slide tiap 5 detik
  let autoPlay = setInterval(nextSlide, 5000);

  // Klik manual
  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      updateShowcase(i);
      clearInterval(autoPlay);
      autoPlay = setInterval(nextSlide, 5000);
    });
  });

  // Awal
  updateShowcase(0);
});

// === Scroll to Top ===
document.getElementById("scrollTop").addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// === Ripple Overlay Effect ===
document.addEventListener("click", function(e) {
  const overlay = document.getElementById("ripple-overlay");
  if (!overlay) return;

  const x = e.clientX;
  const y = e.clientY;

  // Create large ripple
  createRipple(x, y, false);

  // Create small ripple with slight delay
  setTimeout(() => {
    createRipple(x, y, true);
  }, 200);

  function createRipple(x, y, small = false) {
    const ripple = document.createElement("div");
    ripple.classList.add("ripple");
    if (small) ripple.classList.add("small");

    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    const size = small ? 40 + Math.random() * 20 : 70 + Math.random() * 40;
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;

    overlay.appendChild(ripple);

    ripple.addEventListener("animationend", () => ripple.remove());
  }
});


// === Scroll & Drag Navigasi ===

// Elemen section
const sectionCharacters = document.getElementById('characters');

// Simpan data background dan detail tiap karakter
const characterData = [
  { id: 0, bg: "url('aset/bg_nara.png')", name: "Si Gadis Jubah Kuning" },
  { id: 1, bg: "url('aset/bg_dinda.png')", name: "Dinda" },
  { id: 2, bg: "url('aset/bg_arya.png')", name: "Arya / Raya" },
  { id: 3, bg: "url('aset/bg_bijo.png')", name: "Bijo" },
  { id: 4, bg: "url('aset/bg_owo.png')", name: "Owo" },
];


// drag support
let startX = 0;
let isDragging = false;

charTrack.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.pageX;
});

window.addEventListener("mouseup", () => {
  isDragging = false;
});

window.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const diff = e.pageX - startX;
  if (Math.abs(diff) > 50) {
    if (diff < 0 && currentCharacter < carCard.length - 1) {
      currentCharacter++;
    } else if (diff > 0 && currentCharacter > 0) {
      currentCharacter--;
    }
    updateCharacter();
    startX = e.pageX;
  }
});

// scroll wheel navigasi
sectionCharacters.addEventListener("wheel", (e) => {
  if (e.deltaY > 0 && currentCharacter < carCard.length - 1) {
    currentCharacter++;
  } else if (e.deltaY < 0 && currentCharacter > 0) {
    currentCharacter--;
  }
  updateCharacter();
});
