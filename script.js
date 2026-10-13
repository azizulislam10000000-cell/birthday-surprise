
/* ===== Page Navigation ===== */
function showPage(id) {
  document.querySelectorAll("main section").forEach(function (section) {
    section.classList.add("hidden");
  });

  const page = document.getElementById(id);

  if (page) {
    page.classList.remove("hidden");
  }

  // Close the photo viewer when changing pages
  closePhoto();

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/* ===== Welcome and Surprise ===== */
function startSurprise() {
  showPage("gifts");
  hearts();
}

function restart() {
  document.getElementById("giftText").classList.add("hidden");
  document.getElementById("wishText").classList.add("hidden");

  document.querySelector(".gift").textContent = "🎁";
  document.querySelector(".cake").textContent = "🎂";

  showPage("welcome");
}

/* ===== Gift Page ===== */
function openGift() {
  document.getElementById("giftText").classList.remove("hidden");
  document.querySelector(".gift").textContent = "🎉";

  hearts();
  confetti();
}

/* ===== Birthday Cake ===== */
function showCake() {
  showPage("cakePage");
  hearts();
}

function makeWish() {
  document.getElementById("wishText").classList.remove("hidden");
  document.querySelector(".cake").textContent = "🍰";

  hearts();
  confetti();
}

/* ===== Birthday Letter ===== */
function showLetter() {
  showPage("letterPage");
  hearts();
}

/* ===== Photo Gallery ===== */
function showGallery() {
  showPage("galleryPage");
  hearts();
}

/* ===== Open Full-size Photo ===== */
function openPhoto(src) {
  const viewer = document.getElementById("photoViewer");
  const largePhoto = document.getElementById("largePhoto");

  if (!viewer || !largePhoto) {
    return;
  }

  largePhoto.src = src;
  viewer.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

/* ===== Close Full-size Photo ===== */
function closePhoto() {
  const viewer = document.getElementById("photoViewer");
  const largePhoto = document.getElementById("largePhoto");

  if (!viewer || !largePhoto) {
    return;
  }

  viewer.classList.add("hidden");
  largePhoto.src = "";
  document.body.style.overflow = "";
}

/* ===== Floating Hearts Animation ===== */
function hearts() {
  const emojis = ["💗", "💕", "💖", "💘", "❤️"];

  for (let i = 0; i < 8; i++) {
    const heart = document.createElement("span");

    heart.className = "heart";
    heart.textContent =
      emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration =
      (2 + Math.random() * 2) + "s";

    document.body.appendChild(heart);

    setTimeout(function () {
      heart.remove();
    }, 4500);
  }
}

/* ===== Confetti Animation ===== */
function confetti() {
  const emojis = ["🎉", "✨", "🎊", "💖", "🌸"];

  for (let i = 0; i < 18; i++) {
    const piece = document.createElement("span");

    piece.className = "heart";
    piece.textContent =
      emojis[Math.floor(Math.random() * emojis.length)];

    piece.style.left = Math.random() * 100 + "vw";
    piece.style.fontSize = (16 + Math.random() * 18) + "px";
    piece.style.animationDuration =
      (2 + Math.random() * 2) + "s";

    document.body.appendChild(piece);

    setTimeout(function () {
      piece.remove();
    }, 4500);
  }
}

/* ===== Keyboard Support for Gift ===== */
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closePhoto();
  }
});
