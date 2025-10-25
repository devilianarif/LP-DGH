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

// === Data Karakter Lengkap (11 karakter naratif setara Arya) ===
const characterDetails = [
  {
    id: 0,
    name: "Si Gadis Jubah Kuning",
    description:
      "Di bawah derasnya hujan, ia berdiri — sosok berpayung kuning yang menjadi lambang antara pengampunan dan kesedihan. Ia bukan sekadar roh, melainkan gema dari rasa yang tak sempat terucap. Nara, nama yang pernah disebut dalam hangatnya masa kecil, kini hanya tinggal dalam tetes air yang jatuh di setiap langkahnya. Setiap tatapan matanya memantulkan kenangan, setiap senyum samar menyimpan duka yang belum reda. Ia hadir bukan untuk menakut-nakuti, melainkan untuk mengingatkan: bahkan roh yang lembut pun bisa tersesat dalam penantian. Dalam keheningan hujan, Nara menuntun jiwa-jiwa yang mencari arti pulang, sekaligus menjadi penawar bagi hati yang telah lama kehilangan dirinya sendiri.",
    rightDesc:
      "Sosok arwah berpayung kuning, muncul di bawah hujan membawa kedamaian dan pesan dari masa lalu.",
    race:
      "Arwah Manusia — entitas yang hidup di antara dua dunia; tidak lagi manusia namun belum siap meninggalkan dunia fana karena ikatan perasaan yang belum terselesaikan.",
    trait:
      "Penyayang, bijak, dan misterius. Tatapannya membawa ketenangan sekaligus kepedihan, seolah tahu rahasia setiap hati yang menatapnya.",
    background:
      "Nara dulunya adalah gadis ceria yang dikenal oleh semua anak di kampungnya, terutama oleh Arya dan Dinda. Namun di balik senyum lembutnya, ia menyimpan tekanan yang tumbuh dari pengkhianatan dan kesepian. Setelah kematiannya yang tragis, arwahnya tak pernah benar-benar pergi. Ia memilih bertahan di dunia manusia untuk menuntun mereka yang masih hidup agar tak mengulangi kesalahannya. Kini, di setiap hujan yang turun, bayangan jubah kuningnya terlihat samar di tikungan jalan — bukan sebagai kutukan, tapi sebagai doa agar mereka yang menyesal dapat menemukan pengampunan.",
    imageDetail: "./images/nara3.webp",
    imageBackground: "./images/narakbg.webp",
  },
  {
    id: 1,
    name: "Dinda",
    description:
      "Hujan selalu mengingatkan Dinda pada satu hal — hari di mana ia memilih untuk diam. Ia yang dulu ceria, kini hidup dalam bayang rasa bersalah. Dalam setiap langkahnya, ada kenangan yang menjerat, dalam setiap senyumnya ada tangisan yang tertahan. Dinda bukan sekadar manusia biasa; ia adalah simbol dari penyesalan yang tumbuh bersama waktu. Di antara gemericik hujan dan dinginnya malam, ia mencari arti pengampunan, bukan dari orang lain, tapi dari dirinya sendiri. Meskipun hatinya retak, ia bertekad untuk tidak lagi menjadi saksi diam dalam tragedi yang berulang.",
    rightDesc:
      "Wanita yang hidup dengan bayangan masa lalu, mencoba menebus diamnya di masa remaja.",
    race:
      "Manusia — makhluk yang menyeberangi batas spiritual dan realitas, dikuasai oleh emosi, dan terus mencari keseimbangan antara luka dan harapan.",
    trait:
      "Cerdas, penuh empati, tapi rapuh. Dinda menutupi rasa bersalah dengan tawa, padahal di baliknya ada jiwa yang tak kunjung pulih.",
    background:
      "Dinda tumbuh bersama Arya dan Nara dalam persahabatan yang sederhana. Namun ketika dunia mereka mulai berubah, Dinda gagal menjadi penopang bagi sahabatnya. Ia menyaksikan bagaimana Nara hancur, dan dalam ketakutannya, ia memilih berdiam diri. Bertahun kemudian, Dinda kembali ke kota asalnya, hanya untuk disambut oleh kenangan yang menuntut pertanggungjawaban. Ia sadar bahwa menebus masa lalu bukan dengan kata maaf, tapi dengan keberanian untuk menghadapi kebenaran yang dulu ia tolak.",
    imageDetail: "./images/dinda3.webp",
    imageBackground: "./images/dindakbg.webp",
  },
  {
    id: 2,
    name: "Arya / Raya",
    description:
      "Arya adalah representasi manusia yang tenggelam dalam rutinitas, kehilangan makna hidup, dan dibayang-bayangi oleh rasa bersalah masa lalu. Pertemuannya dengan perempuan berpayung kuning membuka luka lama yang selama ini ia tekan. Dalam dirinya terjadi perang batin antara rasionalitas dan spiritualitas, realitas dan ilusi. Ia adalah simbol perjalanan menuju pemulihan — seseorang yang harus menghadapi sisi tergelap dari dirinya sendiri untuk menemukan kembali cahaya dan alasan untuk hidup.",
    rightDesc:
      "Pria muda dengan kepribadian tenang dan introspektif, sering digambarkan membawa beban batin dari masa lalunya.",
    race:
      "Manusia — pusat keseimbangan antara cahaya dan kegelapan; setiap keputusan menentukan nasib dunia spiritual di sekitarnya.",
    trait:
      "Pendiam, introspektif, dan sering terjebak dalam pikirannya sendiri. Ia mencari makna hidup di antara dosa dan pengampunan.",
    background:
      "Arya adalah seorang pria muda yang hidupnya tampak tenang di luar namun porak-poranda di dalam. Di masa kecilnya, ia pernah menjadi bagian dari kelompok sahabat yang akrab — Dinda, R, S, B, dan Nara — hingga satu kejadian di masa remaja membuatnya menyaksikan kehancuran seseorang yang tak mampu ia selamatkan. Rasa takut dan diamnya saat Nara dihina dan tersingkir berubah menjadi penyesalan yang menghantuinya bertahun-tahun kemudian. Setelah kehilangan orang tuanya dan diadopsi oleh keluarga baru, ia hidup dengan nama “Raya,” tapi pergantian identitas itu tak mampu menghapus luka lamanya. Kini, setiap tetes hujan yang turun selalu membawanya kembali pada masa lalu yang ia coba lupakan — masa di mana satu keputusan untuk diam mengubah segalanya.",
    imageDetail: "./images/arya3.webp",
    imageBackground: "./images/aryakbg.webp",
  },
  {
    id: 3,
    name: "Bijo (Penjaga Kota)",
    description:
      "Makhluk hijau berwujud raksasa dengan sorot mata seperti batu giok purba. Ia bukan iblis, melainkan penjaga — pengawas yang menjaga hukum antara manusia dan dunia roh. Dalam diamnya, ia menilai manusia yang menodai alam, memberi peringatan dengan kekuatan yang tak terukur. Bijo adalah manifestasi kehendak bumi, lahir dari doa dan tangisan para leluhur yang pernah memohon keseimbangan dunia.",
    rightDesc:
      "Entitas penjaga keseimbangan yang menilai setiap jiwa yang berani menantang hukum alam.",
    race:
      "Makhluk Gaib — lahir dari energi alam yang murni, bukan dari kegelapan melainkan dari kehendak bumi itu sendiri.",
    trait:
      "Tegas, penuh wibawa, dan bijaksana. Ia tidak mengenal amarah manusia, hanya keseimbangan yang harus ditegakkan.",
    background:
      "Bijo telah ada jauh sebelum manusia memahami arti waktu. Ia muncul setiap kali batas antara dunia manusia dan arwah mulai kabur. Saat keseimbangan terganggu, ia turun tangan untuk menimbang siapa yang pantas hidup dan siapa yang harus kembali pada tanah. Dalam pertemuannya dengan Arya, Bijo menjadi cermin bagi kemanusiaan: kekuatan sejati tidak datang dari penguasaan, tapi dari kesediaan untuk mengakui sisi gelap dalam diri.",
    imageDetail: "./images/bijo2.webp",
    imageBackground: "./images/bijokbg.webp",
  },
  {
    id: 4,
    name: "Owo",
    description:
      "Owo adalah kegelapan yang lahir dari manusia — bayangan yang mengikuti di mana cahaya ada. Ia tidak diciptakan, melainkan tumbuh dari setiap penyesalan, kebencian, dan ketakutan manusia. Saat seseorang menolak memaafkan diri, Owo berwujud, menampakkan dirinya sebagai penguasa kegelapan dalam bentuk manusia yang tak berwajah. Ia adalah bisikan di malam hari, penolak cahaya yang hidup dari luka batin manusia.",
    rightDesc:
      "Manifestasi kegelapan manusia, tumbuh dari rasa bersalah dan kebencian yang tak terselesaikan.",
    race:
      "Makhluk Gaib — energi hidup dari sisi tergelap kesadaran manusia yang terpisah dan membentuk entitas sendiri.",
    trait:
      "Tenang, licik, dan menyesatkan. Ia menawarkan solusi bagi penderitaan, namun setiap bantuan memiliki harga yang tak terbayar.",
    background:
      "Owo dulunya adalah entitas tak bernama yang muncul setiap kali seseorang menolak pengampunan. Ia memberi kekuatan kepada manusia yang putus asa, namun menagih jiwa mereka sebagai imbalan. Dalam perjalanan Arya, Owo menjadi lawan utama — perwujudan dari sisi terdalam jiwanya yang ingin menyerah. Dalam menghadapi Owo, Arya tidak melawan musuh luar, melainkan dirinya sendiri.",
    imageDetail: "./images/owo2.webp",
    imageBackground: "./images/owokbg.webp",
  },
  {
    id: 5,
    name: "Arya (Mode Bijo)",
    description:
      "Saat dunia spiritual dan dunia manusia bertabrakan, Arya menemukan dirinya di ambang kehancuran. Dalam keputusasaan melawan Owo, ia memanggil kekuatan dari Tasbih Al-Muqayyad — artefak kuno yang mengikat energi Bijo. Tubuhnya berubah: uratnya bersinar hijau, matanya berpendar seperti zamrud. Mode ini bukan hanya kekuatan, tapi ujian — karena setiap amarah yang ia keluarkan, mengikis sisi manusianya sedikit demi sedikit.",
    rightDesc:
      "Wujud transendental Arya ketika kekuatan Bijo membanjiri tubuh dan jiwanya.",
    race:
      "Tasbih Mode — perpaduan energi manusia dan makhluk penjaga, wujud paling murni dari kehendak alam yang melebur dengan jiwa manusia.",
    trait:
      "Kuat, emosional, dan kehilangan batas antara manusia dan roh. Ia bisa menjadi penyelamat atau kehancuran.",
    background:
      "Dalam pertarungan terakhir di Kuil Jiwa Gelap, Arya melepaskan segel tasbih yang mengikat kekuatan Bijo. Tubuhnya setengah manusia, setengah roh penjaga. Setiap langkahnya mengguncang bumi, setiap teriakannya membelah langit. Namun di balik kekuatan itu, ada sisi rapuh yang terus berteriak untuk berhenti. Mode Bijo adalah perwujudan manusia yang melampaui batasnya, tapi juga pengingat bahwa kekuatan tanpa kendali bisa menelan jiwanya sendiri.",
    imageDetail: "./images/aryai3.webp",
    imageBackground: "./images/aryaibg.webp",
  },
  {
    id: 6,
    name: "Kuyang",
    description:
      "Kuyang melayang di malam hari, membawa aroma darah dan keheningan. Ia dulunya manusia, seorang perempuan yang menolak tua, menukar jiwanya demi keindahan abadi. Kini, hanya kepala dan organ tubuhnya yang tersisa, berkelana mencari darah segar untuk bertahan hidup. Di balik teriakannya yang menyeramkan, tersimpan kesepian panjang dari jiwa yang kehilangan makna kemanusiaannya.",
    rightDesc:
      "Perempuan yang menukar jiwanya demi keabadian, kini hanya kepala dan organ yang melayang di malam hari.",
    race:
      "Arwah Manusia — hasil kutukan dari ilmu hitam, entitas yang kehilangan tubuh namun masih terikat pada dunia fana.",
    trait:
      "Licik, haus darah, namun penuh kesedihan. Ia menangis di malam hari, bukan karena lapar, tapi karena tak bisa mati.",
    background:
      "Kuyang dulunya seorang tabib muda yang haus akan kecantikan dan kekuasaan. Ia menolak waktu dan menolak takdir. Setelah melakukan ritual hitam untuk mempertahankan usia mudanya, tubuhnya terlepas dari jiwa. Kini, setiap malam ia berburu darah segar untuk mempertahankan wujudnya. Namun dalam keabadiannya, ia menanggung kesepian tanpa batas, menjadi simbol bahwa keindahan yang dipaksakan hanya melahirkan penderitaan abadi.",
    imageDetail: "./images/kuyang2.webp",
    imageBackground: "./images/kuyangbg.webp",
  },
  {
    id: 7,
    name: "Relta (Penunggu Rel)",
    description:
      "Relta muncul di antara kabut malam, di rel-rel sunyi yang tak lagi dilalui manusia. Ia adalah sosok tanpa suara, roh yang menghantui perlintasan kereta. Dalam kematiannya, ia kehilangan kemampuan untuk berteriak, dan kini, ia membuat dunia ikut sunyi bersamanya. Suaranya dicuri oleh roda besi, dan kini ia mencuri suara dari siapa pun yang mendekat.",
    rightDesc:
      "Roh tanpa suara yang menghantui rel kereta, mencuri pendengaran manusia agar merasakan kematiannya.",
    race:
      "Arwah Manusia — jiwa yang mati secara tragis dan terjebak di lokasi kematian tanpa arah untuk pergi.",
    trait:
      "Diam, menakutkan, namun tidak jahat. Ia hanya ingin orang lain mendengar kesepiannya.",
    background:
      "Relta dulunya seorang perempuan muda yang menunggu kekasihnya di rel kereta setiap malam. Suatu malam, ia tertabrak tanpa sempat menjerit. Kini, ia menghantui tempat yang sama, membuat orang kehilangan pendengaran seketika. Suara roda kereta bergema di kepala mereka, seolah mengingatkan bahwa waktu tak memberi kesempatan kedua. Dalam kisah Arya, Relta menjadi simbol dari rasa bersalah yang membungkam hati manusia.",
    imageDetail: "./images/relta2.webp",
    imageBackground: "./images/reltabg.webp",
  },
  {
    id: 8,
    name: "Sulong (Sundel Bolong)",
    description:
      "Roh wanita bergaun putih dengan punggung berlubang, dulunya korban kejahatan manusia. Namun, waktu mengubah dendamnya menjadi kekuatan spiritual. Kini, ia menjaga batas antara hidup dan mati, menuntun arwah yang tersesat menuju cahaya.",
    rightDesc:
      "Penjaga gerbang arwah yang dulunya mati melahirkan dalam derita dan penghinaan.",
    race:
      "Arwah Manusia — roh yang menebus dosanya sendiri, melewati siklus dendam dan pencerahan untuk menjadi cahaya.",
    trait:
      "Tenang, penyayang, dan bijak. Di balik luka punggungnya yang menganga, ia menyimpan kekuatan pengampunan.",
    background:
      "Sundel Bolong dulunya seorang wanita hamil yang mati dalam kehinaan. Arwahnya menuntut balas selama ratusan tahun, hingga akhirnya ia menemukan ketenangan melalui kasih pada roh-roh lain. Ia bereinkarnasi sebagai Sulong, sang penjaga gerbang arwah. Dalam bentuk barunya, ia menjadi cahaya bagi roh yang hilang, mengajarkan bahwa bahkan dari penderitaan terdalam, pengampunan masih bisa tumbuh.",
    imageDetail: "./images/darahp1.webp",
    imageBackground: "./images/card1.webp",
  },
  {
    id: 9,
    name: "Tianak (Kuntilanak)",
    description:
      "Di tengah malam yang sunyi, terdengar tangisan bayi dari balik pepohonan. Tianak bukan sekadar arwah anak kecil, melainkan dua jiwa dalam satu tubuh — sang ibu dan bayi yang mati bersamaan. Kuntilanak menangis mencari anaknya, dan Tianak tertawa di pelukannya, terjebak dalam lingkaran kematian yang abadi.",
    rightDesc:
      "Roh ibu dan anak yang mati bersamaan, menangis mencari satu sama lain di malam sunyi.",
    race:
      "Arwah Manusia — roh wanita dan anaknya yang terikat karena kematian yang tak adil.",
    trait:
      "Sedih, penuh dendam, namun menyimpan kelembutan kasih ibu yang abadi.",
    background:
      "Kuntilanak dulunya seorang wanita muda yang dibunuh saat hamil. Bayinya mati bersamanya, dan arwah keduanya menyatu, menjadi roh yang menangis dan tertawa bersamaan. Tangis Kuntilanak menandakan kematian, tawa Tianak adalah panggilan pada jiwa yang akan pergi. Dalam dunia hujan, mereka adalah simbol kehilangan yang tak pernah selesai — cinta yang bahkan kematian pun tak bisa pisahkan.",
    imageDetail: "./images/relt3a.webp",
    imageBackground: "./images/reltb-render.webp",
  },
  {
    id: 10,
    name: "Bati (Banaspati)",
    description:
      "Bola api merah membara melayang di langit malam — itu Bati, roh yang lahir dari amarah manusia. Ia bukan api biasa, melainkan nyala kebencian yang tak bisa padam. Ketika dendam manusia mencapai puncaknya, Bati muncul untuk membakar sumber kebencian itu, sekaligus dirinya sendiri.",
    rightDesc:
      "Roh api yang lahir dari dendam manusia, terbakar oleh amarah yang menciptakannya.",
    race:
      "Makhluk Gaib — entitas elemen api yang muncul dari ritual terlarang dan emosi kebencian manusia.",
    trait:
      "Panas, destruktif, tapi tidak jahat. Ia membakar hanya yang menolak memaafkan.",
    background:
      "Banaspati dulunya diciptakan melalui ajian hitam untuk membalas dendam. Namun energi kebencian yang menelannya membuatnya hidup tanpa kendali. Kini ia menjelma sebagai Bati, sosok berapi dengan mata bara, berkelana membakar kebencian manusia. Dalam kisah Arya, Bati menjadi lambang pembersihan — bahwa kadang api diperlukan untuk memusnahkan kegelapan sebelum cahaya bisa lahir kembali.",
    imageDetail: "./images/bg4.webp",
    imageBackground: "./images/bg23.webp",
  },
];

// === Fungsi update posisi kartu ===
function updateCharacter() {
  const cardWidth = carCard[0].offsetWidth + 30;
  const offset =
    charTrack.offsetWidth / 2 - cardWidth / 2 - currentCharacter * cardWidth;
  charTrack.style.transform = `translateX(${offset}px)`;

  carCard.forEach((card, index) => {
    const distance = Math.abs(currentCharacter - index);
    card.classList.toggle("aktif", index === currentCharacter);
    card.style.transform =
      index === currentCharacter
        ? "scale(1.1) translateY(-10px)"
        : distance === 1
        ? "scale(0.9) translateY(5px)"
        : "scale(0.8) translateY(15px)";
    card.style.opacity = index === currentCharacter ? "1" : distance === 1 ? "0.6" : "0.3";
  });
}

// === Fungsi update detail & gambar ===
function updateCharacterDetails(characterId) {
  const c = characterDetails[characterId];
  if (!c) return;

  // update teks
  document.querySelector(".dtchara-left h2").textContent = c.name;
  document.querySelector(".dtchara-left p").textContent = c.description;
  document.querySelector("#right-desc p").textContent = c.rightDesc;
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
updateCharacterDetails(currentCharacter);
const rightBox = document.querySelector(".bschara-right");
rightBox.classList.remove("show");
setTimeout(() => rightBox.classList.add("show"), 50);
