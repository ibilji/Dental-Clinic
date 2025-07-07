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

cards.forEach(({ image, text }) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${image}" alt="Card Image" />
    <div class="card-content">
      <p>${text}</p>
      <button onclick="location.href='slider.html'">Know More</button>
    </div>
  `;

  container.appendChild(card);
});
