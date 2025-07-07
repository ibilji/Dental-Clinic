const cards = [
  {
    image: "https://via.placeholder.com/300x200.png?text=Denture+Before+After",
    text: "Denture is a removable replacement for missing teeth and surrounding tissues. We offer both complete and partial dentures."
  },
  {
    image: "https://via.placeholder.com/300x200.png?text=Wisdom+Tooth+Extraction",
    text: "Say goodbye to wisdom tooth pain with a smooth & gentle extraction — quick, safe, and stress-free at our clinic!"
  },
  {
    image: "https://via.placeholder.com/300x200.png?text=Implants",
    text: "Restore your smile with strong, natural-looking dental implants – the permanent solution to missing teeth!"
  },
  {
    image: "https://via.placeholder.com/300x200.png?text=Full+Mouth+Rehabilitation",
    text: "Full Mouth Rehabilitation restores the function and aesthetics of your entire mouth through a comprehensive approach."
  },
  {
    image: "https://via.placeholder.com/300x200.png?text=Root+Canal",
    text: "Save your natural tooth with a painless Root Canal Treatment — no fear, just relief, done in a single sitting by experts!"
  },
  {
    image: "https://via.placeholder.com/300x200.png?text=Teeth+Whitening",
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
