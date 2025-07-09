const cards = [
  {
    image: "images/haikyu.jpeg",
    text: "Denture is a removable replacement for missing teeth and surrounding tissues. We offer both complete and partial dentures."
  },
  {
    image: "images/haikyu.jpeg",
    text: "Say goodbye to wisdom tooth pain with a smooth & gentle extraction — quick, safe, and stress-free at our clinic!"
  },
  {
    image: "images/haikyu.jpeg",
    text: "Restore your smile with strong, natural-looking dental implants – the permanent solution to missing teeth!"
  },
  {
    image: "images/haikyu.jpeg",
    text: "Full Mouth Rehabilitation restores the function and aesthetics of your entire mouth through a comprehensive approach."
  },
  {
    image: "images/haikyu.jpeg",
    text: "Save your natural tooth with a painless Root Canal Treatment — no fear, just relief, done in a single sitting by experts!"
  },
  {
    image: "images/haikyu.jpeg",
    text: "Get a Radiant Smile with Professional Teeth Whitening & Natural-Looking Composite Restorations."
  }
];

const container = document.getElementById("card-container");
const modal = document.getElementById("slider-modal");
const iframe = document.getElementById("slider-frame");
const closeBtn = document.querySelector(".close-btn");

cards.forEach(({ image, text }, index) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${image}" alt="Card Image" />
    <div class="card-content">
      <p>${text}</p>
      <button class="know-more-btn" data-index="${index}">Know More</button>
    </div>
  `;

  container.appendChild(card);
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".know-more-btn").forEach(button => {
    button.addEventListener("click", () => {
      const index = button.getAttribute("data-index");
      modal.style.display = "block";
      iframe.src = `slider.html?index=${index}`;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    iframe.src = "";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      iframe.src = "";
    }
  });
});
