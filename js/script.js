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
        "Pertemuan Arya dengan gadis berpayung kuning di tengah hujan membuka kembali masa lalu yang terkubur. Gadis itu ternyata sudah meninggal tiga tahun lalu dan menjadi kunci rahasia antara rasa bersalah, kehilangan, dan pengkhianatan masa kecil. Dari balik hujan, kenangan lama mulai hidup kembali."
      ]
    },
    {
      img: "../images/s2sc.webp",
      title: "Season 2 — Jalan Tanpa Ujung",
      list: [
        "Terseret ke dunia roh, Arya menghadapi sisi tergelap dalam dirinya. Bersama Dinda dan gadis payung kuning, ia berjuang menyeimbangkan dunia spiritual yang dikendalikan entitas dendam bernama Gundorowo. Namun saat kembali, ia tak tahu apakah dunia yang ia injak masih nyata… atau hanya bayangan roh."
      ]
    },
    {
      img: "../images/s3sc.webp",
      title: "Season 3 — Jejak Kematian & Dunia Terbelah",
      list: [
        "Nara, gadis berpayung kuning, ternyata tidak mati—melainkan terjebak di antara dua dunia. Saat Arya dan Dinda mencoba menyelamatkannya, masa lalu mulai menghapus batas logika. Nara kembali, tapi bukan lagi manusia. Di balik semua itu, sosok misterius mulai mengawasi mereka dari jauh."
      ]
    },
    {
      img: "../images/s4sc.webp",
      title: "Season 4 — Perburuan Roh",
      list: [
        "Sebuah proyek di Kalimantan membawa Arya, Dinda, dan Nara ke wilayah roh yang haus jiwa. Batu Segitiga Arya memanggil entitas lama—Kuyang dan Tianak—yang bangkit mencari asal kekuatan mereka. Semakin dalam perburuan berlangsung, semakin jelas bahwa sumber kekacauan ada dalam diri Arya sendiri."
      ]
    },
     {
      img: "../images/s5sc.webp",
      title: "Season 5 — Perang Tak Beraturan ",
      list: [
        "Keseimbangan dunia hancur. Bati dan Owo memicu perang antara roh dan manusia, membawa kekacauan hingga kesurupan massal. Bersama sekutu baru, Arya berhadapan dengan makhluk-makhluk legenda: Relta, Sulong, dan Tuyul. Saat kebenaran terungkap—Arya dan Owo berasal dari sumber yang sama—dunia diselamatkan dengan satu harga: kemanusiaan Arya sendiri."
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
      "Kehidupan yang monoton membuat Arya harus mengulanginya terus menerus, tidur, berangkat kerja, lembur, pulang malam, dan seterusnya, hingga suatu hari ia sempat lapar dan mengunjungi sebuah warung untuk makan, usai makan hujan deras mengguyur, membuat Arya terpaksa berlari mencari tempat berteduh yaitu sebuah halte.Seorang Pria Dewasa yang pendiam, tanpa pertemanan, baginnya teman merepotkan, di balik rutinitasnya ia terpaksa harus bergadang membuat matanya menjadi lebam, namun ia pun tetap menerimanya dan berharap bisa mati dengan cepat, karena ia tidak mempunyai alasan untuk hidup, hingga pertemuaanya dengan Si Gadis Jubah Kuning, mengubahnya segalanya, yang mulanya monoton kini menjadi menegangkan, hingga hasrat untuk mati, berubah menjadi hasrat untuk hidup.",
    rightDesc:
      "",
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
  id:6,
  name: "Rian",
  description:
    "Rian adalah simbol dari kebebasan yang hilang. Seorang pria yang dahulu berjiwa petualang, namun kini terjebak dalam rutinitas dan kesepian kota. Ia hidup dengan wajah yang selalu tersenyum, tetapi matanya menyimpan hujan yang tak pernah reda. Di balik tawa, ada kerinduan pada masa muda — masa di mana ia, Arya, dan Dinda bermimpi tentang dunia yang lebih luas sebelum semuanya hancur oleh waktu dan pilihan.",
  rightDesc:
    "Pria ceria yang menyembunyikan kesedihan di balik senyum, sahabat lama Arya yang kini terjebak dalam rutinitas tanpa arah.",
  race:
    "Manusia — pengembara yang kehilangan arah, terjebak antara nostalgia masa lalu dan realitas yang pahit.",
  trait:
    "Riang di luar, namun rapuh di dalam. Setia, mudah berempati, tapi takut menghadapi kebenaran.",
  background:
    "Rian adalah sahabat dekat Arya sejak kecil. Ia selalu menjadi sosok penengah yang membuat kelompok mereka tetap utuh. Namun setelah tragedi yang menimpa Nara, ia menjauh dan mencoba melupakan semuanya. Bertahun-tahun kemudian, Rian kembali bertemu Arya dalam situasi yang sama — di tengah hujan, di kota yang sama. Ia menyadari bahwa pelariannya selama ini tak menghapus rasa bersalah, melainkan menumbuhkan kehampaan. Rian belajar bahwa beberapa luka hanya bisa sembuh ketika dihadapi, bukan dilupakan.",
  imageDetail: "./images/rian2.webp",
  imageBackground: "./images/rianbg.webp",
},
{
  id: 7,
  name: "Sultan",
  description:
    "Sultan adalah jiwa pemberontak yang menolak diam. Ia tumbuh dalam kekerasan dan kehilangan, menjadikan dunia sebagai lawan yang harus ditaklukkan. Namun di balik kekasarannya, tersembunyi hati yang terluka dan kerinduan akan penerimaan. Ia melihat hidup sebagai medan perang, dan setiap manusia sebagai musuh yang bisa mengkhianatinya kapan saja. Tetapi jauh di dalam dirinya, ada bagian kecil yang masih percaya pada kebaikan — bagian yang Arya coba bangkitkan kembali.",
  rightDesc:
    "Pria keras kepala dan berjiwa pemberontak, membawa amarah dari masa kecil yang penuh luka.",
  race:
    "Manusia — sisi liar dari kemanusiaan yang lahir dari penderitaan dan kehilangan arah.",
  trait:
    "Keras, impulsif, dan protektif. Meski kasar, ia rela mengorbankan dirinya untuk orang yang ia anggap keluarga.",
  background:
    "Sultan dibesarkan di lingkungan keras, di mana kekuatan menentukan hidup dan mati. Ia menjadi simbol manusia yang kehilangan arah karena terlalu lama bertarung melawan dunia. Dalam perjalanan bersama Arya, Sultan menjadi pelindung yang garang namun juga teman yang jujur. Ia mengajarkan bahwa meski masa lalu tidak bisa dihapus, manusia selalu punya kesempatan untuk berubah. Di akhir cerita, ia adalah satu-satunya yang memilih berdiri melawan Owo tanpa motif pribadi — hanya karena ia tak ingin melihat temannya tenggelam dalam kegelapan yang sama.",
  imageDetail: "./images/sultanp.webp",
  imageBackground: "./images/sultanbg.webp",
},
{
  id: 8,
  name: "Burhan",
  description:
    "Burhan adalah suara nurani yang terlambat disadari. Guru tua yang mengenal dunia spiritual lebih dalam dari siapa pun, namun menyembunyikan rahasia masa mudanya yang kelam. Ia adalah penjaga keseimbangan yang memilih diam daripada berperang, hingga akhirnya menyadari bahwa diam pun bisa menjadi bentuk dosa. Ia adalah guru bagi Arya, pembimbing dalam memahami perbatasan antara dunia manusia dan dunia roh.",
  rightDesc:
    "Orang tua bijak yang menjadi pembimbing spiritual bagi Arya, menyimpan rahasia masa lalu yang masih menghantui.",
  race:
    "Manusia — manusia yang telah melampaui batas spiritual, hidup di ambang antara dunia roh dan dunia nyata.",
  trait:
    "Bijak, sabar, dan penuh teka-teki. Ucapannya sedikit, namun setiap kata mengandung makna yang dalam.",
  background:
    "Burhan pernah menjadi bagian dari sekte penjaga Tasbih Al-Muqayyad, artefak yang kemudian terikat pada Arya. Di masa mudanya, ia melakukan kesalahan besar yang menyebabkan terbukanya celah antara dunia manusia dan roh. Selama puluhan tahun, ia berkelana menebus dosanya dengan membantu arwah yang tersesat. Saat bertemu Arya, Burhan tahu waktunya telah tiba — bukan untuk menebus masa lalunya, tetapi untuk memastikan generasi berikutnya tidak mengulang kesalahan yang sama. Dalam kata-kata terakhirnya, ia berpesan: 'Keseimbangan bukan tentang siapa yang menang, tapi siapa yang berani mengampuni.'",
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
