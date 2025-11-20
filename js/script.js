//Rain Effect 
const canvas = document.getElementById('rain-canvas');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const raindrops = [];
const numberOfDrops = 200; // jumlah titik hujan

function createRaindrops() {
    for (let i = 0; i < numberOfDrops; i++) {
        const speed = 0.5 + Math.random() * 0.8; // spped & random
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
            d.x = Math.random() * width; 
        }
    }

    requestAnimationFrame(drawRain);
}

createRaindrops();
drawRain();

// resize canvas  window ubh
window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});
// auto slide 
document.addEventListener('DOMContentLoaded', () => {
  const carouselEl = document.querySelector('#picsumCarousel');
  const carousel = new bootstrap.Carousel(carouselEl, { interval: false }); // matikan auto 

  let autoSlide; //var auto-slide
  let isPaused = false;

 //nextslide
  function nextSlide() {
    if (!isPaused) {
      carousel.next();
    }
  }

  // Mautoslide 4dtk
  function startAutoSlide() {
    stopAutoSlide(); 
    autoSlide = setInterval(nextSlide, 8000);
  }

  // stop auto-slide
  function stopAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = null;
  }

  // run
  startAutoSlide();

  //modalplay
  const playButtons = document.querySelectorAll('.btn-play-center');
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('youtubePlayer');
  const closeBtn = modal.querySelector('.close-modal');

  //playklik
  playButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const videoId = btn.getAttribute('data-video');
      iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&controls=1&modestbranding=1&rel=0`;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';

      //stopslide
      stopAutoSlide();
      isPaused = true;
    });
  });

  // closemodal
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target === closeBtn) {
      modal.classList.remove('active');
      iframe.src = "";
      document.body.style.overflow = 'auto';

      // run
      isPaused = false;
      startAutoSlide();
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {

// Halter Rain Effect 
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


//Showcase Section 
document.addEventListener("DOMContentLoaded", () => {
  const data = [
    {
      img: "../images/s1sc.webp",
      title: "Season 1 — Di Balik Guyur Hujan",
      list: [
        "Pertemuan Arya dengan gadis jubah kuning di tengah hujan membuka kembali masa lalu yang terkubur. Gadis itu muncul karena menagih janji masa kecilnya kepada Arya, yang nantinya membuat Arya harus mengalami insiden supernatural."
      ]
    },
    {
      img: "../images/s2sc.webp",
      title: "Season 2 — Jalan Tanpa Ujung",
      list: [
        "Terseret ke dunia roh, Arya menghadapi sisi tergelap dalam dirinya. Bersama gadis jubah kuning, ia berjuang menyeimbangkan dunia spiritual yang dikendalikan entitas dendam bernama Owo. Namun dalam pertarungan di dunia Roh, Arya malah membunuh penyeimbang terseut membuat bencana besar berdatangan."
      ]
    },
    {
      img: "../images/s3sc.webp",
      title: "Season 3 — Jejak Kematian & Dunia Terbelah",
      list: [
        "Nara, gadis jubah kuning, ternyata tidak benar-benar mati melainkan terjebak di antara dua dunia. Saat Arya dan Dinda mencoba menyelamatkannya, masa lalu mulai menghapus batas logika. diantara para roh Arya dan Dinda harus berhadapan dengan mayat hidup dan bentuk siksaan kubur."
      ]
    },
    {
      img: "../images/s4sc.webp",
      title: "Season 4 — Perburuan Roh",
      list: [
        "Sebuah proyek di Kalimantan membawa Arya, Dinda, dan Nara ke wilayah roh yang haus jiwa. Dalam perjalanan dinas nya Arya di hadapkan dengan sosok baru yang dikenal dengan istilah wabah. Sosok baru seperti Kuyang dan Tianak menjadi akar dari wabah. Perburuan besar ini kembali melahirkan kebersamaan 5 sahabat."
      ]
    },
     {
      img: "../images/s5sc.webp",
      title: "Season 5 — Perang Tak Beraturan ",
      list: [
        "Insiden besar di kota, listrik padam berkepanjangan dan penampakan, serta tabrakan beruntun, dan kerupan massal, menjadi puncak dari keseimbangan dunia hancur, Bati dan Owo muncul di Alam Fana, alamnya manusia, selain tragedi kelam Relta, Sulong, dan Tuyul harus segera di hentikan, bagaimana 5 sahabat ini menghentikan mereka, akankah ada pengorbanan dalam peristiwa ini."
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

  // run
  updateShowcase(0);
});

// scrol to Top 
document.getElementById("scrollTop").addEventListener("click", function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

//  Ripple Overlay Effect 
document.addEventListener("click", function(e) {
  const overlay = document.getElementById("ripple-overlay");
  if (!overlay) return;

  const x = e.clientX;
  const y = e.clientY;

  
  createRipple(x, y, false);

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

//character section
const charTrack = document.querySelector('.character-track');
const carCard = document.querySelectorAll('.kartu-character');
const sectionCharacters = document.getElementById('characters');
let currentCharacter = 2;
let isDragging = false;
let startX = 0;

const characterDetails = [
  {
    id: 0,
    name: "Si Gadis Jubah Kuning",
    description:
      "Simbol awal dari derasnya hujan, sosok penuh harapan yang pupus, tanpa nama, tanpa di kenal ialah Sigadis Jubah Kuning, setiap senyumannya menyimpan duka yang belum reda, terdapat secercah penantian di setiap tetes air matanya, hanya satu yang ia kejar, yaitu janji masa kecil, untuk menjadi sahabat selamanya.",
    rightDesc:
      "Bermula muncul di tengah malam dekat warung kecil di tengah jalanan sepi sekitar halte, sedang menunggu seseorang yang mungkin bisa membantunya menghentikan para pemakan roh penasaran, seseorang yang sangat ia percayai, dan selalu baik padanya orang tersebut menjadi alasan kuat sebelum gadis jubah kuning ini menghilang untuk selamanya.",
    race:
      "Arwah Manusia : entitas yang hidup di antara dua dunia, Alam Fana dan Alam Roh, terkadang hanya berbuat usil, terkadang juga meminta pertolongan.",
   trait:
      "Penyayang, bijak, dan misterius.",
    background:
      "Si Gadis Jubah Kuning, atau Nara, dulunya bocah ceria yang bersahabat dengan Arya, Dinda, Rian, Sultan, dan Burhan, namun setelah berpisah karena pindah, janji persahabatan mereka hancur, ketika Nara SMP justru dijauhi dan disakiti oleh teman-temannya sendiri, hingga suatu hari, setelah keluarganya terlilit utang demi pengobatannya, Nara kabur dari kejaran rentenir di tengah hujan deras dan tertabrak di dekat halte, dengan payung kuning koyak tergeletak di sampingnya.", imageDetail: "./images/nara3.webp",
    imageBackground: "./images/narakbg.webp",
  },
 {
    id: 1,
    name: "Dinda",
    description:
      "Hidup seorang diri dengan penuh penyesalan, hari demi hari merupakan rutinitas biasa, Dinda merupakan gadis yang tomboi, dan ceria, namun ketika dewesa setiap langkah sering di hina, hardik, serta rumor buruk lainnya, membuatnya ia berubah drastis menjadi wanita pendiam, diantara hujan deras, Dinda melihat temannya hampir tertabrak kereta sejak saat itu meskipun hatinya retak, Dinda berusaha untuk tidak terikat dengan ucapan orang lain, karena ia tidak ingin mengulangi kejadian masa lalunya.",
    rightDesc:
     "Wanita Dewasa yang pendiam, yang berusaha membantu Arya keluar dari keterpurukannya, namun malah terlibat dalam insiden supernatural, yang sempat mengira bahwa ini adalah salah Arya atau hukuman baginya, yang faktanya Dinda juga di hantui oleh Si Gadis Jubah kuning.",
    race:
      "Manusia : Sosok makhluk hidup yang rapuh di Alam Fana, penuh dengan emosi, dan esensi untuk penasaran.",
    trait:
      "Cerdas, penuh empati, tapi rapuh.",
    background:
    "Teman masa kecil dari Arya dan Nara, dan satu SMP dengan Nara, pertemuannya dengan Nara tidak baik, karena Dinda jauh lebih memiliki circle barunya, dan malahan Nara menjadi sasaran caci makinya, sebaliknya Nara malah tetap berusaha untuk berteman dan siap disuruh-suruh oleh grupnya Dinda, tanpa ada belas kasih membuat Nara harus sering mengalami penindasan, hingga saat SMA mereka bertemu karena Nara pindah, dan saat keluar dari sebuah toko Dinda melihat seorang gadis di kejar oleh orang lain, Dinda yang penasaran dan mengikutinya hingga melihat sebuah kerumunan saat itu juga Dinda terkejut bahwa itu adalah Nara yang telah tewas mengenaskan.",
    imageDetail: "./images/dinda3.webp",
    imageBackground: "./images/dindakbg.webp",
  },
  {
    id: 2,
    name: "Arya / Raya",
    description:
      "Seorang Pria Dewasa yang pendiam, tanpa pertemanan, baginnya teman merepotkan, di balik rutinitasnya ia terpaksa harus bergadang membuat matanya menjadi lebam, namun ia pun tetap menerimanya dan berharap bisa mati dengan cepat, karena ia tidak mempunyai alasan untuk hidup, hingga pertemuaanya dengan Si Gadis Jubah Kuning, mengubahnya segalanya, yang mulanya monoton kini menjadi menegangkan, hingga hasrat untuk mati, berubah menjadi hasrat untuk hidup.",
    rightDesc:
      "Kehidupan yang monoton membuat Arya harus mengulanginya terus menerus, tidur, berangkat kerja, lembur, pulang malam, dan seterusnya, hingga suatu hari ia sempat lapar dan mengunjungi sebuah warung untuk makan, usai makan hujan deras mengguyur, membuat Arya terpaksa berlari mencari tempat berteduh yaitu sebuah halte.",
    race:
      "Manusia : Sosok makhluk hidup yang rapuh di Alam Fana, penuh dengan emosi, dan esensi untuk penasaran.",
    trait:
      "Pendiam, introspektif, dan sering terjebak dalam pikirannya sendiri.",
    background:
      "Hidup penuh dengan broken home, ditinggal mati kedua orang tua di usia dini membuat Arya harus pindah asuh beberapa kali oleh keluarga hingga yang terakhir ia harus tinggal dengan pamannya, di momen itu tubuh Arya mengalami mati rasa, dan membuatnya harus tinggal di rumah sakit, dan ternyata pamanya menghilang dan Arya terpaksa menjadi anak asuh di panti asuhan hingga ia di adopsi orang lain, dengan nama baru yaitu Raya ketika checkup di rumah sakit ia tak sadar bertemu dan berbicara dengan Nara, Nara yang mencoba bertanya namanya yang menyangka ia adalah Arya, sedikit kecewa karena Arya mengenalkan diri sebagai raya, Nara pun kehilangan semangatnya, namun ia tetap mencoba untuk berteman di Arya hingga mereka berdua membuat janji, jika bertemu lagi akan menjadi teman.",
    imageDetail: "./images/arya3.webp",
    imageBackground: "./images/aryakbg.webp",
  },
  {
    id: 3,
    name: "Bijo (Penjaga Kota)",
    description:
      "Makhluk hijau besar berwujud raksasa, yang memiliki tugas spesial yang menjadi gerbang Roh, agar roh penasaran tidak masuk kesana, dan roh jahat tidak keluar dari sana, tugas dan peranan Penjaga menjaga agar 2 roh tidak saling bertemu.",
    rightDesc:
      "Entitas penjaga keseimbangan antara 2 roh, yaitu roh penasaran roh dari orang telah tiada, dan roh jahat dari makhluk gaib yang bermutasi dan ingin memakan para manusia agar memakan roh penasaran atau menguasai roh penasaran, peran Bijo cukup penting karena tanpanya dunia akan hancur.",
    race:
      "Makhluk Gaib : makhluk yang terlahir murni dari energi gelap yang memiliki peranan penting mengelola dan menjaga para Roh",
    trait:
      "Tegas, penuh wibawa, dan Amarah",
    background:
      "Bijo telah ada sebelum Manusia ada, sosok Bijo di ciptakan untuk sebagai penjaga batas antara dunia Alam Roh dan makhluk gaib, namun kadang makhluk gaib berusaha mempengaruhi Bijo dan melepaskan roh jahat untuk mengambil alih roh penasaran yang nantinya bisa memasuki dunia manusia yaitu Alam Fana, disinilah Bijo bertugas menghentikan para makhluk gaib lepas atau manusia memasuki alam roh, siapapun yang menerobos akan menjadi musuhnya.",
    imageDetail: "./images/bijo2.webp",
    imageBackground: "./images/bijokbg.webp",
  },

{
    id: 4,
    name: "Owo",
    description:
      "Perwujudan mutlak dari kegelapan, makhluk paling berbahaya, sebuah entitas khusus yang di ciptakan untuk mengelabuhi manusia, memiliki tubuh besar, dan kekar dengan bulu gelap ungu, semua yang berbau manusia ia benci, suka dengan duka manusia dan lahap dalam memakan arwah manusia.",
    rightDesc:
      "Terlahir dari kebencian, tumbuh dari rasa bersalah, sekali Owo muncul semua akan ia makan, tidak ada roh jahat atau makhluk gaib yang berani melawannya, kecuali satu yaitu Si Gadis Jubah Kuning, hanya satu kelemahan Owo yaitu hasrat untuk semangat hidup.",
    race:
      "Makhluk Gaib : makhluk yang terlahir murni dari energi gelap yang memiliki peranan penting mengelola dan menjaga para Roh",
    trait:
      "Tenang, licik, dan menyesatkan.",
    background:
      "Owo dulunya adalah roh penasaran yang terjebak dengan dendamnya yang tak kunjung usai, memupuk seiring waktu berlalu hingga berubah menjadi ambisi khusus menuntun para roh lain yang tersesat untuk makanannya, kini Owo telah mengalami perubahan dari roh penasaran menjadi makhluk gaib, hingga dunia melupakan muasal dari Owo, dan karena ambisinya juga cara sesatnya membuat manusia cepat mati dan menjadi roh penasaran, membuat Arya tidak ada pilihan lain selain menghentikannya, menjadi lawan utamanya, hanya tasbih yang bisa mengalahkan Owo.",
    imageDetail: "./images/owo2.webp",
    imageBackground: "./images/owokbg.webp",
  },
  {
    id: 5,
    name: "Arya (Mode Bijo)",
    description:
      "Dalam pertarungan sengit di Alam Perbatasan, Bijo berhasil di kalahkan namun, bencana baru malah terlahir, dalam pertarungan terakhir, Arya dan Nara sepakat menggunakan kekuatan Bijo sebagai bentuk kekuatan baru dari Tasbih Mode, namun kekuatan itu tidak lengkap karena wujud tersebut merupakan sisa dari wujud Bijo terakhir kalinya yaitu satu lengan.",
    rightDesc:
      "Salah satu kekuatan Arya dalam Tasbih Mode, yaitu Transformasi Arya berhasil berubah wujud menjadi Bijo dengan satu lengan, kekuatan Tasbih kini hanya bersifat sementara, namun selain kekuatan Arya harus bisa mengendalikan emosinya, karena sifat asli dari Bijo juga perlahan mengambil alih pikiran dan hasrat Arya.",
    race:
      "Tasbih Mode : adalah salah kekuatan Arya yang dimana setiap butir bisa menyimpan bentuk Roh atau makhluk gaib yang nantinya bisa digunakan Arya sebagai bala bantuan atau kekuatannya.",
    trait:
      "Kuat, emosional, dan kehancuran.",
    background:
      "Dalam pertarungan terakhir di Kuil Jiwa Gelap, Arya melepaskan segel tasbih yang mengikat kekuatan Bijo. Tubuhnya setengah manusia, setengah Makhluk gaib, setiap emosi dan kekuatan bercampur aduk membuat Arya harus bisa mengendalikan sifat dari Bijo tersebut agar Arya tidak di kendalikan dan terjebak di alam bawah sadar, kekuatan baru ini menjadi penanda bahwa nantinya Arya akan bertemu dengan Makhluk gaib lain atau Roh penasaran lain, untuk persiapan melawan Owo.",
    imageDetail: "./images/aryai3.webp",
    imageBackground: "./images/aryaibg.webp",
  },
{
  id:6,
  name: "Rian",
  description:
    "Bocah sepermainan Arya, memiliki karakteristik rapuh di dalamnya, dalam prinsipnya mengikuti arus adalah jalan keluar, Seorang pria yang berjiwa petualang, namun kini terjebak dalam rutinitas kesepian, wajahnya yang selalu berpura-pura senyum untuk menutup sifat aslinya.",
  rightDesc:
    "Memiliki kelemahan yaitu keluarganya, berusaha menghindari topik akan keluarga, selalu berpura-pura dan bergaul dengan Sultan agar terlihat kaya, terdapat trauma yang mendalam akibat masalah internal dalam hidupnya.",
  race:
    "Manusia : Sosok makhluk hidup yang rapuh di Alam Fana, penuh dengan emosi, dan esensi untuk penasaran.",
  trait:
    "Riang, Rapuh, Setia, Eempati, dan Penakut.",
  background:
    "Rian adalah sahabat dekat Arya sejak kecil, selalu menjadi penengah di setiap pertengkaran, membenci mereka yang membuli namun ia malah jadi pembuli, karena hidupnya yang broken home, membuat ia terpaksa harus melakukan segala cara agar bisa tetap hidup, salah satu penyesalannya yaitu menjadi bagian dari tragedi Nara, mencoba melupakan, namun pelarian tersebut menjadi bentuk karma di kehidupan dewasa, sampai saat ini Rian berusaha menebus kesalhannya dengan selalu mencari informasi tentang Nara untuk meminta maaf, namun sayangnya ia tidak tahu, bahwa Nara telah tiada.",
  imageDetail: "./images/rian2.webp",
  imageBackground: "./images/rianbg.webp",
},
{
  id: 7,
  name: "Sultan",
  description:
    "Bocah sepermainan Arya, hidupnya yang lebih dari cukup membuat ia menjadi buta akan sekitar di seiring pertumbuhannya, jiwa pemberontak dalamnya selalu menolak untuk dia, tubuh dengan kekerasan dan kehilangan kasih sayang, ia selalu tampil percaya, memanfaatkan harta orang tuanya, namun ia tahu, bahwa mereka yang di dekatnya hanya mengincar uangnya, kecuali teman masa kecilnya.",
  rightDesc:
    "Pria yang selalu bermain dengan kesombongan dan egonya, membuat ia lupa bahwa dirinya pernah melukai beberapa orang, hingga pada akhirnya sifat buruk tersebut tertutup oleh tingkahnya yang sangat sok baik, berusaha memendam amarah, hingga meninggalkan bekas luka yang dalam pada sekitar korbannya yang tanpa sadar berusaha membalaskan dendam kepadanya.",
  race:
    "Manusia : Sosok makhluk hidup yang rapuh di Alam Fana, penuh dengan emosi, dan esensi untuk penasaran.",
  trait:
    "Keras, impulsif, dan protektif.",
  background:
    "Hidup tanpa kasih sayang berusaha mencari perhatian di berbagai tempat, tanpa ada teguran membuat ia menutup hatinya, semua orang tidak ada yang mampu memarahinya karena peran orang tuanya, Sultan dibesarkan di lingkungan yang keras, dimana harta menjadi kekuatan penentu, berusaha membuat dunia melihatnya, membuat ia lupa kesalahannya, karena itulah versi dewasanya ia berusaha menebus segalanya untuk menjadi pelindung dari teman-temannya.",
  imageDetail: "./images/sultanp.webp",
  imageBackground: "./images/sultanbg.webp",
},
{
  id: 8,
  name: "Burhan",
  description:
    "Bocah sepermainan Arya, hidupnya yang biasa membuatnya monoton, ia memiliki kemampuan untuk melihat makhluk halus, namun karena itu kadang ia dianggap aneh, oleh keluarga, dan teman-temannya, namun ia berusaha untuk membahas itu sampai ia lupa membedakan mana yang hidup dan yang sudah mati.",
  rightDesc:
    "Dalam versi dewasa Burhan adalah teman yang bijak membimbing Arya dalam menguasai kekuatannya, tindakan yang ia lakukan untuk menebus kesalahan masa lalunya dan upaya dia menerima takdirnya, karena ia sudah lelah kabur menghindari kemampuannya, dan kini ia mencoba menerima kemampuannya.",
  race:
    "Manusia : Sosok makhluk hidup yang rapuh di Alam Fana, penuh dengan emosi, dan esensi untuk penasaran.",
  trait:
    "Bijak, sabar, dan penuh teka-teki.",
  background:
    "Burhan sebenarnya pernah terlibat dengan garis keturunan pembuatan Tasbih, tapi dulu selalu di sebut sekte sesat, karena bermain-main dengan leluhur, karena itulah ketika Arya memperkenalkan Tasbihnya, membuat Burhan teringat catatan dan lukisan dari keluarganya, disinilah Burhan berusaha menyusun informasi kenapa tasbih itu kembali muncul dan mengapa Arya yang dipilih, bukan dirinya, ia mencoba menilai walau terdapat sedikit iri, namun ia berusaha memahami maksud dan tujuan tasbih tersebut dan hubungan dari tujuan Owo.",
  imageDetail: "./images/burhanp.webp",
  imageBackground: "./images/burhanbg.webp",
},

  {
    id: 9,
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
   id: 10,
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
    imageDetail: "./images/tianakp.webp",
    imageBackground: "./images/tianakbg.webp",
  },
  {
    id: 11,
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
    id: 12,
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
    imageDetail: "./images/sulongp.webp",
    imageBackground: "./images/sulongbg.webp",
  },
  {
  id: 13,
  name: "Tuyul (Bocil Kematian)",
  description:
    "Makhluk kecil berkulit kelabu yang lahir dari perjanjian manusia dengan kekayaan terlarang. Tuyul tidak mengenal moral — hanya tawa kecil di malam sunyi, saat tangan mungilnya mengambil rezeki yang bukan miliknya. Ia adalah hasil dari keserakahan manusia, wujud polos namun jahat, pengingat bahwa kekayaan tanpa berkah hanyalah kutukan dalam bentuk tawa anak-anak.",
  rightDesc:
    "Jin kecil hasil pesugihan, suka mencuri uang dan menebar kesialan pada tuannya sendiri.",
  race:
    "Makhluk Gaib — entitas bawah yang lahir dari perjanjian manusia untuk kekayaan instan.",
  trait:
    "Usil, licik, dan lincah. Tuyul punya sifat seperti anak kecil: polos tapi berbahaya bila dikendalikan manusia tamak.",
  background:
    "Tuyul dikenal sebagai jin pesugihan yang sering dipelihara manusia serakah. Ia diciptakan dari energi kelahiran yang dibatalkan, menjadikannya entitas yang selalu kekurangan kasih sayang. Tuyul takut pada bawang putih, kaca pecah, dan doa malam hari. Dalam dunia 'Di Balik Guyur Hujan', Tuyul menjadi simbol keserakahan modern — di mana manusia masih rela menjual jiwanya hanya demi secarik uang.",
  imageDetail: "./images/tuyulp.webp",
  imageBackground: "./images/tuyulbg.webp",
},

  {
    id: 14,
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
    imageDetail: "./images/batip.webp",
    imageBackground: "./images/batibg.webp",
  },
];
// update view karakter
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
// update detail karakter
function updateCharacterDetails(characterId) {
  const c = characterDetails[characterId];
  if (!c) return;

  // update teks
  document.querySelector(".dtchara-left h2").textContent = c.name;
  document.querySelector(".dtchara-left p").textContent = c.description;
  document.querySelector("#right-desc p").textContent = c.rightDesc;
  document.querySelector("#right-race p").textContent = c.race;
  document.querySelector("#right-trait p").textContent = c.trait;

  // update gmbr tengah
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

  // update gmbr kiri bawah
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

  // scroll alus ke detail
  document.getElementById("detailcharacter").scrollIntoView({ behavior: "smooth" });
}

//  Klik kartu 
carCard.forEach((card, index) => {
  card.addEventListener("click", () => {
    currentCharacter = index;
    updateCharacter();
    updateCharacterDetails(index);
  });
});

//  Drag Desktop ===
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

// === Drag toch (Mobile) ===
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

updateCharacter();
updateCharacterDetails(currentCharacter);
const rightBox = document.querySelector(".bschara-right");
rightBox.classList.remove("show");
setTimeout(() => rightBox.classList.add("show"), 50);
