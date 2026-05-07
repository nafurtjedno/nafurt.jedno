const weddingDate = new Date("May 1, 2026 15:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const diff = now - weddingDate;

  if (diff > 0) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (diff % (1000 * 60 * 60)) / (1000 * 60)
    );

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();


/* Gallery tap support (Safari / mobile) */

document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", function () {

    document.querySelectorAll(".gallery-item").forEach(el => {
      if (el !== this) el.classList.remove("active");
    });

    this.classList.toggle("active");
  });
});