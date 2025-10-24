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

document.addEventListener("DOMContentLoaded", () => {

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

  const makeDtchaRain = () => {
    document.querySelectorAll(".dtcharain").forEach(el => el.innerHTML = "");

    let increment = 0;
    let drops = "";
    let backDrops = "";

    while (increment < 100) {
      let randoHundo = Math.floor(Math.random() * 98) + 1;
      let randoFiver = Math.floor(Math.random() * 4) + 2;
      increment += randoFiver;

      drops += `
        <div class="dtcharain-drop" style="left:${increment}%;animation-delay:0.${randoHundo}s;animation-duration:0.5${randoHundo}s;">
          <div class="dtcharain-stem" style="animation-delay:0.${randoHundo}s;animation-duration:0.5${randoHundo}s;"></div>
          <div class="dtcharain-splat" style="animation-delay:0.${randoHundo}s;animation-duration:0.5${randoHundo}s;"></div>
        </div>`;

      backDrops += `
        <div class="dtcharain-drop" style="right:${increment}%;animation-delay:0.${randoHundo}s;animation-duration:0.5${randoHundo}s;">
          <div class="dtcharain-stem" style="animation-delay:0.${randoHundo}s;animation-duration:0.5${randoHundo}s;"></div>
          <div class="dtcharain-splat" style="animation-delay:0.${randoHundo}s;animation-duration:0.5${randoHundo}s;"></div>
        </div>`;
    }

    document.querySelector(".dtcharain.front-row").innerHTML = drops;
    document.querySelector(".dtcharain.back-row").innerHTML = backDrops;
  };

  makeDtchaRain();
});


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


// === CHARACTER INTERACTION FINAL REVISED ===

// Elemen utama
const charTrack = document.querySelector('.character-track');
const carCard = document.querySelectorAll('.kartu-character');
const sectionCharacters = document.getElementById('characters');
let currentCharacter = 2;
let isDragging = false;
let startX = 0;
// === Data karakter lengkap (update terbaru) ===
const characterDetails = [
  {
    id: 0,
    name: "Si Gadis Jubah Kuning (Nara)",
    description: "Sosok berpayung kuning yang hadir di tengah hujan, menjadi jembatan antara dunia hidup dan arwah.",
    race: "Arwah Manusia",
    trait: "Lembut, misterius, penuh kasih dan kesedihan.",
    background:
      "Nara adalah teman masa kecil Arya yang meninggal karena tekanan batin dan pengkhianatan. Setelah kematiannya, jiwanya terjebak di antara dunia arwah dan manusia. Ia hadir kembali sebagai roh penuntun yang membantu Arya menghadapi masa lalunya.",
    imageDetail: "aset/nara3.png",
    imageBackground: "aset/nara_render1.png",
  },
  {
    id: 1,
    name: "Dinda",
    description: "Teman masa kecil Arya yang dihantui rasa bersalah dan ingin menebus masa lalu.",
    race: "Manusia",
    trait: "Cerdas, penyayang, rapuh secara emosional.",
    background:
      "Dinda menyaksikan penderitaan Nara tanpa berani menolong. Kini di masa dewasa, ia kembali dekat dengan Arya dan ikut terlibat dalam misteri hujan yang membuka kembali luka lama.",
    imageDetail: "aset/dindad.png",
    imageBackground: "aset/dinda_render1.png",
  },
  {
    id: 2,
    name: "Arya / Raya",
    description: "Pria muda yang terjebak antara masa lalu dan dunia spiritual.",
    race: "Manusia",
    trait: "Pendiam, introspektif, penuh rasa bersalah.",
    background:
      "Dikenal sebagai Arya di masa kecil dan Raya setelah diadopsi, ia berjuang melawan rasa bersalah terhadap kematian Nara. Hujan menjadi simbol dari kenangan dan pengampunan yang belum selesai.",
    imageDetail: "aset/arya3.png",
    imageBackground: "aset/aryakbg.png",
  },
  {
    id: 3,
    name: "Bijo (Penjaga Kota)",
    description: "Entitas besar berkulit hijau, penjaga keseimbangan antara dunia manusia dan gaib.",
    race: "Makhluk Gaib",
    trait: "Bijaksana, kuat, tapi mudah murka bila keseimbangan terganggu.",
    background:
      "Bijo adalah penjaga dimensi antara dunia manusia dan dunia arwah. Ia tidak jahat, tetapi menghancurkan siapapun yang melanggar hukum alam. Ia menjadi ujian bagi Arya untuk memahami batas antara terang dan gelap.",
    imageDetail: "aset/bijod.png",
    imageBackground: "aset/bijo_render1.png",
  },
  {
    id: 4,
    name: "Owo",
    description: "Entitas kegelapan yang lahir dari rasa takut dan trauma manusia.",
    race: "Makhluk Gaib",
    trait: "Manipulatif, sadis, berwibawa dalam kegelapan.",
    background:
      "Owo adalah manifestasi dari sisi gelap manusia—ketakutan, dendam, dan rasa bersalah. Ia mencerminkan sisi terdalam dari jiwa Arya dan berusaha menariknya ke dalam dunia kegelapan.",
    imageDetail: "aset/owod.png",
    imageBackground: "aset/owo_render1.png",
  },
  {
    id: 5,
    name: "Sulong",
    description: "Pemimpin roh penjaga hujan yang menjaga gerbang dunia arwah.",
    race: "Arwah Manusia",
    trait: "Tenang, disiplin, dan memiliki aura tua.",
    background:
      "Sulong adalah roh penjaga air yang menjaga keseimbangan hujan di dunia spiritual. Ia menjadi sosok yang menuntun Arya dalam memahami peran hujan sebagai penghubung antar dunia.",
    imageDetail: "aset/sulongd.png",
    imageBackground: "aset/sulong_render1.png",
  },
  {
    id: 6,
    name: "Tuyul",
    description: "Roh anak kecil penggoda yang mencuri energi manusia yang kehilangan arah.",
    race: "Makhluk Gaib",
    trait: "Usil, lincah, tapi sebenarnya kesepian.",
    background:
      "Tuyul dalam dunia ini bukan sekadar pencuri uang, melainkan simbol jiwa muda yang mati sebelum waktunya. Ia berinteraksi dengan Arya, menampakkan sisi lain dunia gaib yang tak selalu jahat.",
    imageDetail: "aset/tuyuld.png",
    imageBackground: "aset/tuyul_render1.png",
  },
  {
    id: 7,
    name: "Relta",
    description: "Roh perempuan penjaga sungai yang mengetahui rahasia kelahiran Owo.",
    race: "Arwah Alam / Penjaga Air",
    trait: "Lembut, misterius, dan penuh teka-teki.",
    background:
      "Relta adalah arwah tua yang menghuni aliran sungai purba. Ia menyimpan pengetahuan tentang asal mula Owo dan cara menyeimbangkan energi antara dunia manusia dan dunia arwah.",
    imageDetail: "aset/reltad.png",
    imageBackground: "aset/relta_render1.png",
  },
  {
    id: 8,
    name: "Arya Mode Bijo",
    description: "Wujud gabungan antara manusia dan energi hijau purba Bijo.",
    race: "Hybrid (Manusia × Makhluk Gaib)",
    trait: "Kuat, emosional, dan hampir tak terkendali.",
    background:
      "Ketika menghadapi Owo di Kuil Jiwa Gelap, Arya menyatu dengan energi Bijo melalui tasbih suci. Tubuhnya berubah sebagian menjadi makhluk hijau raksasa, mewakili kekuatan dan amarah yang belum terkontrol.",
    imageDetail: "aset/aryabijod.png",
    imageBackground: "aset/aryabijo_render1.png",
  },
  {
    id: 9,
    name: "Kuyang",
    description: "Makhluk wanita malam yang haus darah, melambangkan dendam yang tak terampuni.",
    race: "Makhluk Gaib (Kutukan)",
    trait: "Licik, menyeramkan, dan tragis.",
    background:
      "Kuyang adalah arwah wanita yang mati karena pengkhianatan dan kini berkeliaran mencari balas. Ia menjadi pengingat bagi Arya bahwa kebencian hanya memperpanjang penderitaan jiwa.",
    imageDetail: "aset/kuyangd.png",
    imageBackground: "aset/kuyang_render1.png",
  },
  {
    id: 10,
    name: "Tianak",
    description: "Roh bayi terkutuk yang menangis di hutan untuk menjerat pelancong.",
    race: "Makhluk Gaib (Arwah Terikat)",
    trait: "Menangis, memohon, tapi berbahaya.",
    background:
      "Tianak adalah simbol kepolosan yang hilang. Ia bukan jahat sepenuhnya—menangis bukan untuk menakuti, tetapi sebagai panggilan agar jiwanya dibebaskan dari ikatan masa lalu.",
    imageDetail: "aset/tianakd.png",
    imageBackground: "aset/tianak_render1.png",
  },
  {
    id: 11,
    name: "Bati",
    description: "Makhluk terbang bertubuh hitam dengan sayap lebar, pengintai dari dunia gaib.",
    race: "Makhluk Gaib / Bayangan",
    trait: "Cepat, memburu, dan penuh pengamatan.",
    background:
      "Bati adalah pengintai dunia Owo, terbang di atas kota manusia untuk memantau batas dimensi. Ia menjadi simbol dari rasa takut yang selalu mengawasi di kejauhan, menunggu manusia jatuh ke dalam kegelapan.",
    imageDetail: "aset/batid.png",
    imageBackground: "aset/bati_render1.png",
  },
];

// === Fungsi update posisi kartu ===
function updateCharacter() {
  const cardWidth = carCard[0].offsetWidth + 30;
  const offset = (charTrack.offsetWidth / 2) - (cardWidth / 2) - (currentCharacter * cardWidth);
  charTrack.style.transform = `translateX(${offset}px)`;

  carCard.forEach((card, index) => {
    const distance = Math.abs(currentCharacter - index);
    card.classList.toggle('aktif', index === currentCharacter);
    card.style.transform = index === currentCharacter
      ? 'scale(1.1) translateY(-10px)'
      : distance === 1
      ? 'scale(0.9) translateY(5px)'
      : 'scale(0.8) translateY(15px)';
    card.style.opacity = index === currentCharacter ? '1' : distance === 1 ? '0.6' : '0.3';
  });
}

// === Fungsi update detail & gambar ===
function updateCharacterDetails(characterId) {
  const c = characterDetails[characterId];
  if (!c) return;

  // update teks
  document.querySelector(".dtchara-left h2").textContent = c.name;
  document.querySelector(".dtchara-left p").textContent = c.description;
  document.querySelector("#right-desc p").textContent = c.description;
  document.querySelector("#right-race p").textContent = c.race;
  document.querySelector("#right-trait p").textContent = c.trait;

  // update gambar tengah
  const centerImg = document.querySelector(".dtchara-center .dtchara-img");
  if (centerImg) {
    centerImg.style.opacity = "0";
    setTimeout(() => {
      centerImg.src = c.imageDetail;
      centerImg.style.opacity = "1";
      centerImg.style.transform = "scale(1.05)";
      setTimeout(() => (centerImg.style.transform = "scale(1)"), 400);
    }, 200);
  }

  // update gambar kiri bawah
  const bgLeftImg = document.querySelector(".bschara-left .char-img");
  if (bgLeftImg) {
    bgLeftImg.style.opacity = "0";
    setTimeout(() => {
      bgLeftImg.src = c.imageBackground;
      bgLeftImg.style.opacity = "1";
    }, 200);
  }

  // update teks bawah
  document.querySelector(".bschara-right h3").textContent = c.name;
  document.querySelector(".bschara-right p").textContent = c.background;

  // scroll halus ke detail
  document.getElementById("detailcharacter").scrollIntoView({ behavior: "smooth" });
}


// === Klik kartu ===
carCard.forEach((card, index) => {
  card.addEventListener("click", () => {
    currentCharacter = index;
    updateCharacter();
    updateCharacterDetails(index);
  });
});

// === Drag Desktop ===
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
  if (Math.abs(diff) > 60) {
    if (diff < 0 && currentCharacter < carCard.length - 1) {
      currentCharacter++;
    } else if (diff > 0 && currentCharacter > 0) {
      currentCharacter--;
    }
    updateCharacter();
    startX = e.pageX;
  }
});

// === Drag Sentuh (Mobile) ===
charTrack.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].clientX;
});

charTrack.addEventListener("touchend", () => {
  isDragging = false;
});

charTrack.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const diff = e.touches[0].clientX - startX;
  if (Math.abs(diff) > 60) {
    if (diff < 0 && currentCharacter < carCard.length - 1) {
      currentCharacter++;
    } else if (diff > 0 && currentCharacter > 0) {
      currentCharacter--;
    }
    updateCharacter();
    startX = e.touches[0].clientX;
  }
});



// === Inisialisasi awal ===
updateCharacter();
const rightBox = document.querySelector(".bschara-right");
rightBox.classList.remove("show");
setTimeout(() => rightBox.classList.add("show"), 50);
