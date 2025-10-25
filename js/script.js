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
// === Data Karakter Lengkap (Versi Naratif Setara Arya) ===
const characterDetails = [
  {
    id: 0,
    name: "Si Gadis Jubah Kuning",
    description:
      "Sosok berpayung kuning yang muncul di bawah hujan — menjadi penghubung antara dunia manusia dan arwah, membawa pesan pengampunan bagi jiwa yang tersesat.",
    race:
      "Arwah Manusia — makhluk yang berada di antara dua dunia, tidak lagi hidup namun belum siap meninggalkan rasa yang tertinggal di bumi.",
    trait:
      "Lembut, penuh kasih, misterius, dan bijak dalam kesunyian. Tatapannya selalu teduh namun sarat makna, seolah memahami segala kesedihan manusia.",
    background:
      "Nara adalah gadis yang meninggal karena tekanan batin dan pengkhianatan orang-orang terdekatnya. Namun arwahnya tak pergi jauh — ia terperangkap di antara dua dunia, terikat oleh rasa ingin menolong mereka yang juga tersesat oleh rasa bersalah. Dalam bentuknya yang berpayung kuning, ia muncul di tengah hujan sebagai penuntun bagi mereka yang hampir kehilangan diri. Setiap langkahnya membawa ketenangan, tapi juga peringatan bahwa tidak semua luka bisa disembuhkan oleh waktu. Bagi Arya, ia adalah kenangan, sekaligus pengampunan yang datang dalam bentuk paling indah dan menyakitkan.",
    imageDetail: "./images/nara3.webp",
    imageBackground: "./images/narakbg.webp",
  },
  {
    id: 1,
    name: "Dinda",
    description:
      "Wanita yang hidup di antara penyesalan dan harapan, mencoba menebus dosa masa lalu di bawah hujan yang sama tempat semuanya bermula.",
    race:
      "Manusia — makhluk yang menjadi jembatan antara dunia spiritual dan dunia nyata, berjuang menyeimbangkan logika dan perasaan.",
    trait:
      "Cerdas, hangat, tapi rapuh secara batin. Ia tampak kuat di luar, namun selalu takut kehilangan kepercayaan orang yang ia sayangi.",
    background:
      "Dinda adalah teman masa kecil Arya yang menyaksikan penderitaan Nara tanpa berani menolong. Sejak hari itu, rasa bersalah menjadi bayangan yang selalu mengikutinya. Bertahun kemudian, saat hujan kembali turun dan masa lalu mengetuk pintu, Dinda bertekad menghadapi ketakutannya. Ia ingin menebus apa yang dulu ia biarkan terjadi, meski itu berarti membuka kembali luka yang belum sembuh. Dalam dirinya, ia belajar bahwa memaafkan orang lain tak akan berarti jika belum memaafkan diri sendiri.",
    imageDetail: "./images/dinda3.webp",
    imageBackground: "./images/dindakbg.webp",
  },
  {
    id: 2,
    name: "Arya / Raya",
    description:
      "Pria muda yang hidup dalam keheningan panjang, dihantui masa lalu yang tak bisa ia ubah, dan berjuang menemukan arti pengampunan.",
    race:
      "Manusia — pusat keseimbangan antara cahaya dan kegelapan; setiap keputusan menentukan nasib dunia spiritual di sekitarnya.",
    trait:
      "Pendiam, introspektif, dan sering terjebak dalam pikirannya sendiri. Ia mencari makna hidup di antara dosa dan pengampunan.",
    background:
      "Arya pernah menjadi saksi kehancuran seseorang yang tak sempat ia selamatkan. Ketakutannya untuk berbicara di masa lalu menjelma menjadi penyesalan yang menghantuinya di masa kini. Kini, dengan identitas baru sebagai Raya, ia mencoba melupakan semuanya — hingga sosok gadis berpayung kuning muncul kembali dalam hidupnya. Hujan, yang dulu ia benci, kini menjadi panggilan spiritual yang menuntunnya menghadapi sisi tergelap dirinya. Arya adalah cermin manusia modern: hampa, tapi terus berjalan, mencari cahaya di tengah badai yang ia buat sendiri.",
    imageDetail: "./images/arya3.webp",
    imageBackground: "./images/aryakbg.webp",
  },
  {
    id: 3,
    name: "Bijo (Penjaga Kota)",
    description:
      "Entitas hijau purba, penjaga keseimbangan antara dunia manusia dan dunia gaib — penguji setiap jiwa yang berani melanggar hukum alam.",
    race:
      "Makhluk Gaib — penjaga dimensi spiritual yang lahir dari energi bumi, bukan dari kegelapan tapi dari keseimbangan alam itu sendiri.",
    trait:
      "Bijaksana, kuat, dan tegas. Ia tidak mengenal kasih, tapi mengenal keadilan yang murni tanpa sisi manusia.",
    background:
      "Bijo telah ada sejak sebelum manusia mengenal waktu. Ia adalah perwujudan dari kehendak alam untuk menjaga keseimbangan antara yang hidup dan yang mati. Ketika batas antara dua dunia mulai kabur akibat kekacauan spiritual, Bijo bangkit untuk menilai jiwa yang berani melintas. Bagi Arya, Bijo bukan musuh, tapi refleksi — makhluk yang memperlihatkan bahwa kekuatan sejati datang dari keberanian menerima kegelapan dalam diri tanpa harus dikuasai olehnya.",
    imageDetail: "./images/bijo2.webp",
    imageBackground: "./images/bijokbg.webp",
  },
  {
    id: 4,
    name: "Owo",
    description:
      "Bayangan hidup dari sisi tergelap manusia — entitas yang tumbuh dari penyesalan, ketakutan, dan kebencian yang tak terselesaikan.",
    race:
      "Makhluk Gaib — entitas kesadaran gelap yang terbentuk dari emosi manusia, bukan diciptakan tapi lahir dari rasa bersalah kolektif.",
    trait:
      "Tenang, manipulatif, dan karismatik dalam kegelapan. Ia berbicara dengan lembut, tapi setiap kata adalah belenggu.",
    background:
      "Owo adalah cerminan dari sisi tergelap manusia. Ia tak memiliki bentuk tetap, karena wujudnya adalah bayangan dari hati yang berdosa. Saat seseorang menolak untuk memaafkan dirinya, Owo tumbuh dan memperkuat dirinya dari energi itu. Ia berbisik di telinga manusia, meyakinkan mereka bahwa penderitaan adalah takdir. Dalam perjalanannya, Arya menyadari bahwa Owo bukan musuh yang harus dimusnahkan, tapi bagian dari dirinya yang harus ia terima dan kendalikan.",
    imageDetail: "./images/owo2.webp",
    imageBackground: "./images/owokbg.webp",
  },
  {
    id: 5,
    name: "Arya (Mode Bijo)",
    description:
      "Perwujudan spiritual di mana manusia dan kekuatan alam bersatu — antara amarah dan kesadaran, antara kehancuran dan kebangkitan.",
    race:
      "Tasbih Mode — manifestasi energi spiritual yang tersambung dengan Bijo melalui tasbih sakral pengendali dimensi.",
    trait:
      "Kuat, emosional, namun kehilangan batas antara manusia dan roh. Ia bisa menjadi penyelamat atau kehancuran.",
    background:
      "Ketika pertarungan melawan Owo mencapai puncak, Arya memanggil kekuatan Bijo melalui Tasbih Al-Muqayyad, artefak kuno yang mengikat makhluk spiritual. Tubuhnya mulai berubah, sebagian menjadi hijau bercahaya — wujud gabungan manusia dan penjaga kota. Dalam mode ini, setiap amarah yang ia lepaskan menjadi kekuatan besar, tapi setiap kekuatan yang ia keluarkan mengikis sisi manusianya. Arya Mode Bijo adalah bentuk tertinggi dari konflik spiritual: antara kekuasaan dan kehilangan diri.",
    imageDetail: "./images/aryai3.webp",
    imageBackground: "./images/aryaibg.webp",
  },
  {
    id: 6,
    name: "Kuyang",
    description:
      "Makhluk malam yang haus darah, terlahir dari ambisi manusia yang ingin menolak waktu dan kematian.",
    race:
      "Arwah Manusia — roh perempuan yang kehilangan tubuhnya setelah menukar jiwanya demi keabadian.",
    trait:
      "Licik, haus darah, tapi menyimpan kesedihan terdalam tentang apa artinya menjadi manusia.",
    background:
      "Kuyang dulunya adalah seorang perempuan yang tak rela menua. Ia belajar ilmu hitam untuk tetap muda, tapi membayar mahal dengan jiwanya sendiri. Kini, hanya kepala dan organ tubuhnya yang tersisa, melayang di malam hari mencari darah segar ibu hamil dan bayi. Ia adalah simbol dari obsesi manusia terhadap keindahan dan ketakutan akan kematian. Dalam dunia hujan, Kuyang bukan hanya momok — tapi peringatan tentang harga dari keserakahan dan penolakan terhadap takdir.",
    imageDetail: "./images/kuyang2.webp",
    imageBackground: "./images/kuyangbg.webp",
  },
  {
    id: 7,
    name: "Relta (Penunggu Rel)",
    description:
      "Arwah bisu di perlintasan kereta — mencuri suara agar manusia tak lagi mendengar panggilan hidupnya sendiri.",
    race:
      "Arwah Manusia — jiwa korban yang terjebak di antara hidup dan mati, tertinggal di lokasi kematiannya.",
    trait:
      "Tenang, menyeramkan, tapi tidak jahat. Ia hanya ingin dunia merasakan keheningan yang ia alami selamanya.",
    background:
      "Relta adalah arwah seorang wanita yang tewas tertabrak kereta di perlintasan sunyi. Sejak saat itu, suaranya hilang, tapi bisunya menjadi kutukan bagi siapa pun yang melewati tempat itu. Orang-orang yang mendekat mengaku tidak mendengar suara apa pun — bahkan kereta yang melaju cepat di belakang mereka. Ia disebut 'Setan Budek' karena mencuri pendengaran manusia agar tak ada lagi yang bisa menjerit. Dalam kisah Arya, Relta menjadi peringatan bahwa kesunyian pun bisa membunuh, terutama jika yang hening adalah hati manusia itu sendiri.",
    imageDetail: "./images/relta2.webp",
    imageBackground: "./images/reltabg.webp",
  },
  {
    id: 8,
    name: "Tianak (Kuntilanak)",
    description:
      "Dua roh yang tak terpisahkan — ibu dan anak yang mati bersama, menangis di setiap malam untuk cinta yang tak sempat disampaikan.",
    race:
      "Arwah Manusia — roh wanita yang meninggal melahirkan bersama anaknya, kini menyatu sebagai satu entitas.",
    trait:
      "Lemah lembut tapi tragis. Ia menangis bukan untuk menakuti, tapi untuk didengar.",
    background:
      "Kuntilanak dulunya seorang wanita muda yang wafat saat melahirkan, dan Tianak adalah bayi yang tak pernah sempat menangis. Jiwa mereka menyatu, membentuk roh yang menjerit di malam hari, mencari kasih yang tak pernah sempat ada. Dalam mitologi dunia hujan, Tianak adalah pengingat bahwa cinta yang mati tetap mencari jalan pulang. Tangisnya adalah doa, dan setiap orang yang mendengarnya akan dihadapkan pada luka yang belum mereka hadapi sendiri.",
    imageDetail: "./images/relt3a.webp",
    imageBackground: "./images/reltb-render.webp",
  },
  {
    id: 9,
    name: "Bati (Banaspati)",
    description:
      "Roh api yang lahir dari amarah manusia — nyala dendam yang tak bisa dipadamkan oleh air, hanya oleh keikhlasan.",
    race:
      "Makhluk Gaib — entitas energi panas yang terbentuk dari kebencian manusia, bebas saat keseimbangan spiritual terganggu.",
    trait:
      "Menyala, garang, namun tidak jahat. Ia hanya menjalankan kehendak dari amarah yang menciptakannya.",
    background:
      "Banaspati adalah roh api hasil ajian hitam yang diciptakan manusia untuk menyerang. Namun seiring waktu, energi dendam itu kehilangan tuannya dan berubah menjadi makhluk hidup — Bati, sang penjelajah malam berapi yang membakar apa pun yang menyimpan kebencian. Ketika Arya menghadapi Bati, ia menyadari bahwa api tidak selalu berarti kehancuran — kadang, ia adalah cara alam untuk menghapus yang busuk dan memberi kesempatan untuk tumbuh kembali.",
    imageDetail: "./images/bg4.webp",
    imageBackground: "./images/bg23.webp",
  },
  {
    id: 10,
    name: "Sulong (Sundel Bolong)",
    description:
      "Roh perempuan yang menebus dosanya sendiri — dari arwah pendendam menjadi penjaga cahaya bagi jiwa-jiwa yang tersesat.",
    race:
      "Arwah Manusia — roh wanita yang telah bereinkarnasi setelah melewati siklus dendam dan pencerahan.",
    trait:
      "Tenang, bijak, dan menyimpan luka yang dalam. Ia membawa cahaya di punggung yang dulu berlubang.",
    background:
      "Sundel Bolong dulunya adalah korban kejahatan manusia, mati melahirkan dalam penderitaan dan penghinaan. Namun setelah ratusan tahun, ia menebus amarahnya dan bereinkarnasi sebagai Sulong — penjaga gerbang dunia arwah. Kini ia membantu arwah lain untuk melepaskan dendam mereka. Dalam dirinya, kegelapan dan cahaya berdampingan, mengajarkan bahwa bahkan dari penderitaan paling kelam, manusia masih bisa menjadi cahaya bagi yang lain.",
    imageDetail: "./images/darahp1.webp",
    imageBackground: "./images/card1.webp",
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
