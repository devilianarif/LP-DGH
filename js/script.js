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
      img: "../images/s1.webp",
      title: "Judul 1",
      list: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Vivamus vel orci et urna vestibulum malesuada.",
        "Aliquam erat volutpat. Nulla facilisi."
      ]
    },
    {
      img: "../images/s2.webp",
      title: "Judul 2",
      list: [
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
        "Accusantium doloremque laudantium, totam rem aperiam.",
        "Eaque ipsa quae ab illo inventore veritatis."
      ]
    },
    {
      img: "../images/s3.webp",
      title: "Judul 3",
      list: [
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam.",
        "Quis autem vel eum iure reprehenderit qui in ea voluptate velit.",
        "Temporibus autem quibusdam et aut officiis debitis."
      ]
    },
    {
      img: "../images/s1.webp",
      title: "Judul 4",
      list: [
        "At vero eos et accusamus et iusto odio dignissimos ducimus.",
        "Et harum quidem rerum facilis est et expedita distinctio.",
        "Nam libero tempore, cum soluta nobis est eligendi optio."
      ]
    },
    {
      img: "../images/s2.webp",
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
// === Data Karakter Lengkap (Versi Final – Sinkron Screenshot + Naratif Panjang) ===
const characterDetails = [
  {
    id: 0,
    name: "Si Gadis Jubah Kuning",
    description:
      "Gadis misterius yang selalu muncul di tengah hujan, membawa pesan harapan di antara langit kelabu dan kenangan yang belum reda.",
    race: "Manusia / Arwah Penuntun",
    trait:
      "Lembut, penyayang, misterius, dan memiliki aura ketenangan yang tak biasa. Tatapannya seolah menyimpan duka masa lalu yang belum sempat diucapkan.",
    background:
      "Arya pertama kali melihatnya di perempatan kota saat hujan turun paling deras. Gadis itu berdiri di bawah payung kuning, tersenyum tenang di tengah gemuruh petir. Ia bukan sekadar sosok asing — tapi gema dari masa lalu yang ingin diperbaiki. Kehadirannya mengubah arah hidup Arya, menuntunnya untuk berdamai dengan rasa bersalah yang selama ini ia pendam.",
    imageDetail: "./images/nara3.webp",
    imageBackground: "./images/narakbg.webp",
  },
  {
    id: 1,
    name: "Dinda",
    description:
      "Wanita yang mencoba menebus kesalahan masa lalu di bawah hujan yang sama, saat kenangan dan kenyataan mulai saling berbaur.",
    race: "Manusia",
    trait:
      "Cerdas, penyayang, namun rentan diseret oleh rasa bersalah. Ia berusaha tampak kuat, tapi hatinya rapuh oleh kenangan yang tak mau pergi.",
    background:
      "Dinda adalah teman masa kecil Arya yang turut menyaksikan penderitaan Nara, tapi tak mampu berbuat apa pun. Bertahun-tahun kemudian, mereka dipertemukan kembali oleh takdir. Kini Dinda menolak untuk diam lagi — ia bertekad menguak misteri di balik hujan, berharap penebusannya bisa membawa ketenangan bagi arwah sahabat yang dulu ia khianati dalam diam.",
    imageDetail: "./images/dinda3.webp",
    imageBackground: "./images/dindakbg.webp",
  },
  {
    id: 2,
    name: "Arya / Raya",
    description:
      "Pria muda yang kehilangan dirinya di antara masa lalu dan dunia spiritual, berjalan dalam hujan untuk mencari arti pengampunan.",
    race: "Manusia",
    trait:
      "Pendiam, introspektif, dan mudah terjebak dalam pikirannya sendiri. Di balik ketenangannya, tersimpan badai rasa bersalah yang tak pernah padam.",
    background:
      "Dulu ia hanyalah anak laki-laki biasa yang takut bersuara saat kebenaran dihancurkan. Setelah tragedi itu, ia kehilangan segalanya — nama, keluarga, bahkan dirinya sendiri. Kini, dengan nama baru ‘Raya’, ia menjalani hidup kosong di kota, sampai hujan dan sosok berpayung kuning membangkitkan kembali masa lalu yang telah lama ia kubur. Dalam perjalanannya menembus dunia arwah, Arya belajar bahwa pengampunan bukan datang dari orang lain... tapi dari dirinya sendiri.",
    imageDetail: "./images/arya3.webp",
    imageBackground: "./images/aryakbg.webp",
  },
  {
    id: 3,
    name: "Bijo (Penjaga Kota)",
    description:
      "Entitas hijau purba yang menjaga batas antara dunia manusia dan dunia gaib. Ia bukan musuh, tapi ujian bagi mereka yang berani menatap ke dalam diri sendiri.",
    race: "Makhluk Gaib",
    trait:
      "Bijaksana, kuat, namun mudah murka bila keseimbangan terganggu. Ia berbicara dalam simbol, menilai hati, bukan tindakan.",
    background:
      "Bijo sudah ada jauh sebelum manusia mengenal nama. Ia adalah penjaga yang diciptakan dari amarah bumi dan air mata langit, ditugaskan untuk menilai jiwa-jiwa yang melintasi batas alam. Bagi Arya, Bijo bukan lawan — melainkan cermin. Saat dunia mulai runtuh, hanya dengan menerima amarahnya sendiri, Arya bisa melewati ujian yang Bijo berikan.",
    imageDetail: "./images/bijo2.webp",
    imageBackground: "./images/bijokbg.webp",
  },
  {
    id: 4,
    name: "Owo",
    description:
      "Bayangan abadi yang tumbuh dari ketakutan dan penyesalan manusia. Ia tak memiliki bentuk tetap, karena wujudnya adalah sisi gelap setiap jiwa.",
    race: "Makhluk Gaib",
    trait:
      "Tenang, karismatik, namun menipu dengan kata-kata lembut. Ia tahu cara berbicara dengan hati manusia, bukan hanya pikirannya.",
    background:
      "Owo bukan makhluk luar — ia adalah refleksi dari kegelapan dalam diri setiap manusia. Saat seseorang tenggelam dalam rasa bersalah, Owo lahir dari dalam pikirannya dan menjadi nyata. Ia menawarkan pemahaman, tapi menuntut kendali. Dalam dunia hujan yang suram, Owo berdiri sebagai lawan sejati Arya — bukan karena kebencian, tapi karena mereka berasal dari sumber yang sama: penyesalan.",
    imageDetail: "./images/owo2.webp",
    imageBackground: "./images/owokbg.webp",
  },
  {
    id: 5,
    name: "Arya (Mode Bijo)",
    description:
      "Perwujudan ketika manusia dan energi purba bersatu — antara amarah dan pencerahan, antara kemanusiaan dan kekuatan alam.",
    race: "Tasbih Mode",
    trait:
      "Kuat, emosional, dan penuh konflik batin. Dalam kekuatannya, tersimpan ketakutan akan kehilangan kendali.",
    background:
      "Dalam pertempuran terakhir di Kuil Jiwa Gelap, Arya memanggil kekuatan Bijo melalui tasbih suci peninggalan dunia arwah. Tubuhnya berubah sebagian menjadi makhluk hijau bercahaya — gabungan antara manusia dan penjaga alam. Dalam bentuk ini, ia memikul beban dua dunia: menjadi jembatan antara mereka yang hidup dan yang telah pergi. Namun setiap kali ia berubah, sebagian kemanusiaannya hilang sedikit demi sedikit.",
    imageDetail: "./images/aryai3.webp",
    imageBackground: "./images/aryaibg.webp",
  },
  {
    id: 6,
    name: "Kuyang",
    description:
      "Makhluk malam yang melepaskan tubuhnya untuk terbang mencari darah — simbol dari manusia yang kehilangan batas demi keabadian.",
    race: "Arwah Manusia",
    trait:
      "Licik, dingin, namun tragis di balik kutukannya. Ia masih ingat masa ketika ia disebut manusia.",
    background:
      "Kuyang dulunya seorang perempuan yang takut kehilangan kecantikannya. Dalam keputusasaan, ia mempelajari ilmu hitam agar awet muda, namun sihir itu memisahkan tubuh dan jiwanya. Kini ia hanya kepala melayang dengan organ menggantung, terbang rendah di atas rumah para ibu hamil. Di balik keganasannya, tersisa rasa rindu pada kehidupan yang ia tinggalkan — dan dosa yang tak pernah bisa ia tebus.",
    imageDetail: "./images/kuyang2.webp",
    imageBackground: "./images/kuyangbg.webp",
  },
  {
    id: 7,
    name: "Relta (Penunggu Rel)",
    description:
      "Arwah yang berdiri di rel sunyi, membungkam dunia agar manusia tak lagi mendengar panggilan hidupnya sendiri.",
    race: "Arwah Manusia",
    trait:
      "Tenang, menyeramkan, dan tanpa emosi. Ia hanya diam — tapi keheningannya bisa membunuh.",
    background:
      "Relta adalah korban kecelakaan kereta yang tidak pernah pergi. Arwahnya menunggu di perlintasan tanpa palang, menipu pendengaran manusia agar tak mendengar suara kereta yang mendekat. Ia tak jahat — hanya terjebak dalam waktu yang berhenti di detik kematiannya. Saat Arya bertemu dengannya, Relta memperlihatkan bahwa kadang sunyi adalah bentuk penyesalan yang paling keras di dunia arwah.",
    imageDetail: "./images/relta2.webp",
    imageBackground: "./images/reltabg.webp",
  },
];

  

  //   {
  //   id: 8,
  //   name: "Tianak (Kuntilanak)",
  //   description: "Dua roh yang tak terpisahkan — ibu dan anak yang mati bersama, kini menjerit bersama di setiap malam sunyi.",
  //   race: "Arwah Manusia",
  //   trait: "Sedih, pendendam, dan haus pengakuan.",
  //   background: "Tangisan mereka menyatu dalam satu tubuh, menjadi nyanyian maut yang memanggil jiwa-jiwa bersalah.",
  //   imageDetail: "./images/relt3a.webp",
  //   imageBackground: "./images/reltb-render.webp",
  // },
  // {
  //   id: 9,
  //   name: "Bati (Banaspati)",
  //   description: "Roh api dan bayangan — lahir dari dendam manusia dan terbakar oleh amarahnya sendiri.",
  //   race: "Makhluk Gaib",
  //   trait: "Panas, destruktif, dan tak mengenal belas kasihan.",
  //   background: "Banaspati adalah bola api yang menyambar siapa pun yang dipenuhi kebencian.",
  //   imageDetail: "./images/bg4.webp",
  //   imageBackground: "./images/bg23.webp",
  // },
  // {
  //   id: 10,
  //   name: "Sulong (Sundel Bolong)",
  //   description: "Roh perempuan dengan punggung berlubang, kini bereinkarnasi menjadi penjaga gerbang dunia arwah.",
  //   race: "Arwah Manusia",
  //   trait: "Tenang, lembut, namun membawa bayangan penderitaan lama.",
  //   background: "Sundel Bolong dulunya arwah pendendam yang mati melahirkan.",
  //   imageDetail: "./images/darahp1.webp",
  //   imageBackground: "./images/card1.webp",
  // },
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
