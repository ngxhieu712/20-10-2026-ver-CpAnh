const wishes = [
  "Mong nụ cười luôn ở trên môi, và mọi ước mơ sẽ trở thành hiện thực.",
  "Chúc chị thật nhiều niềm vui, nhiều sức khoẻ và nhiều niềm hạnh phúc.",
  "Chúc chị luôn trẻ trung, xinh đẹp và nhiều tiền nhiều tiền",
];

const wishButton = document.querySelector("#wish-button");
const toast = document.querySelector("#toast");
const toastMessage = document.querySelector("#toast-message");
const toastClose = document.querySelector("#toast-close");
const petalField = document.querySelector(".petal-field");
let toastTimer;

function showWish() {
  const wish = wishes[Math.floor(Math.random() * wishes.length)];
  toastMessage.textContent = wish;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 6000);
  releasePetals();
}

function releasePetals() {
  for (let i = 0; i < 18; i += 1) {
    const petal = document.createElement("span");
    const duration = 3.8 + Math.random() * 3.5;
    petal.className = "petal";
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.setProperty("--drift", `${Math.random() * 180 - 90}px`);
    petal.style.animationDuration = `${duration}s`;
    petal.style.animationDelay = `${Math.random() * .8}s`;
    petalField.append(petal);
    window.setTimeout(() => petal.remove(), (duration + 1) * 1000);
  }
}

wishButton.addEventListener("click", showWish);
toastClose.addEventListener("click", () => {
  toast.classList.remove("show");
  window.clearTimeout(toastTimer);
});
