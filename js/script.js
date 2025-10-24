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
// === Data Karakter Lengkap (Versi Final – dengan Nama Mitologinya) ===
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
    trait: "Pendiam, introspektif, dan penuh rasa bersalah.",
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
    name: "Kuyang",
    description: "Makhluk mistis asal Kalimantan yang mengejar darah wanita hamil dan bayi.",
    race: "Makhluk Gaib",
    trait: "Licik, haus darah, dan berwujud menyeramkan di malam hari.",
    background:
      "Kuyang berasal dari perempuan yang mempelajari ilmu hitam untuk tetap muda dan abadi. Saat malam, tubuhnya lepas dan hanya kepala melayang dengan organ tubuh menggantung. Ia menyamar sebagai perempuan biasa di siang hari dan berburu darah segar di malam hari.",
    imageDetail: "aset/kuyangd.png",
    imageBackground: "aset/kuyang_render1.png",
  },
  {
    id: 6,
    name: "Tianak (Kuntilanak)",
    description: "Dua roh dalam satu tubuh: ibu dan anak yang terikat oleh kematian yang tragis.",
    race: "Arwah Wanita dan Anak",
    trait: "Sedih, penuh dendam, dan merindukan keadilan.",
    background:
      "Kuntilanak adalah roh wanita yang meninggal saat hamil. Bayinya, Tianak, tak pernah lahir dan menjadi bagian dari jeritannya. Kuntilanak sering muncul sambil menangis, sementara suara tangis Tianak menandakan kehadirannya. Mereka melambangkan kehilangan dan keinginan untuk diselamatkan.",
    imageDetail: "aset/kuntilanakd.png",
    imageBackground: "aset/kuntilanak_render1.png",
  },
  {
    id: 7,
    name: "Bati (Banaspati)",
    description: "Dua bentuk dari entitas api dan bayangan — makhluk yang lahir dari energi dendam manusia.",
    race: "Makhluk Gaib (Elemen Api & Bayangan)",
    trait: "Panas, destruktif, dan sulit dikendalikan.",
    background:
      "Banaspati adalah wujud bola api hasil ajian hitam. Saat energi apinya mengeras, ia berubah menjadi Bati, entitas bersayap hitam yang mengintai dari langit. Keduanya adalah dua sisi dari unsur api: terang dan kegelapan, ciptaan amarah manusia.",
    imageDetail: "aset/banaspatid.png",
    imageBackground: "aset/bati_render1.png",
  },
  {
    id: 8,
    name: "Sulong (Sundel Bolong)",
    description: "Roh perempuan dengan punggung berlubang yang berevolusi menjadi penjaga dunia arwah.",
    race: "Arwah Wanita (Bereinkarnasi)",
    trait: "Diam, penyayang, dan membawa cahaya setelah dendamnya sirna.",
    background:
      "Sundel Bolong adalah roh perempuan korban kekerasan yang mati melahirkan. Setelah menuntaskan dendamnya, arwahnya berubah menjadi Sulong — penjaga gerbang antara dunia manusia dan dunia arwah. Ia menuntun roh-roh tersesat menuju kedamaian, menjelma dari kegelapan menuju pencerahan.",
    imageDetail: "aset/sundeld.png",
    imageBackground: "aset/sulong_render1.png",
  },
  {
    id: 9,
    name: "Relta (Penunggu Rel / Setan Budek)",
    description: "Arwah korban kecelakaan kereta yang menghantui perlintasan tanpa palang.",
    race: "Arwah Manusia",
    trait: "Diam, kabur, dan menyesatkan indera pendengaran manusia.",
    background:
      "Relta atau Setan Budek adalah arwah yang menghuni rel kereta dan menghapus suara dari pendengaran manusia. Ia menjerat korban agar tidak mendengar kereta datang, simbol bisu dan penyesalan manusia yang mati mendadak.",
    imageDetail: "aset/reltad.png",
    imageBackground: "aset/relta_render1.png",
  },
  {
    id: 10,
    name: "Tuyul (Bocil Kematian)",
    description: "Jin kecil hasil pesugihan yang dipelihara manusia untuk mencuri uang.",
    race: "Makhluk Gaib",
    trait: "Usil, lincah, dan polos tapi jahat bila dikendalikan.",
    background:
      "Tuyul adalah jin kecil yang menyerupai anak-anak. Ia hasil perjanjian pesugihan manusia yang ingin kaya cepat. Tuyul sering terlihat di malam hari, tertawa kecil sambil mencuri uang. Ia takut jarum, kaca pecah, dan bawang putih.",
    imageDetail: "aset/tuyuld.png",
    imageBackground: "aset/tuyul_render1.png",
  },
  {
    id: 11,
    name: "Arya (Mode Bijo)",
    description: "Wujud gabungan antara manusia dan energi hijau purba milik Bijo.",
    race: "Tasbih Mode",
    trait: "Kuat, emosional, dan sulit dikendalikan.",
    background:
      "Dalam pertarungan melawan Owo di Kuil Jiwa Gelap, Arya menyatu dengan energi Bijo melalui tasbih suci. Tubuhnya sebagian berubah menjadi raksasa hijau, simbol kekuatan dan amarah spiritual yang belum sepenuhnya dikendalikan.",
    imageDetail: "aset/aryabijod.png",
    imageBackground: "aset/aryabijo_render1.png",
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
