const cardData = [
    { image: "./assets/emoji-face.png", title: "AI Persona Creator", smallTitle: "Craft Your Crypto Identity", description: "Design a unique digital persona that evolves as you earn XP — your vibe, your voice, your legend." },
    { image: "./assets/meme-battles.png", title: "Meme Battles (PvP Arena)", smallTitle: "Roast. Rank. Repeat.", description: "Enter head-to-head meme duels, earn XP through votes, and dominate the leaderboard with your content." },
    { image: "./assets/xp-small-card.png", title: "XP-Based Leaderboard", smallTitle: "Clout You Can Measure", description: "Climb the ranks by earning XP through posts, battles, quests, and engagement. The higher your XP, the more you unlock." },
]

const card2Data = [
  {
    heading: "NFT Badge Vault",
    subheading: "Earn It. Flex It. Own It.",
    description: "Unlock rare, on-chain NFT badges based on your performance — your proof of skill and cultural value.",
    image: "./assets/hand-icon.png"
  },
  {
    heading: "Creator Monetization",
    subheading: "Earn from Your Memes,",
    description: "Cross XP + engagement thresholds to activate monetization and start earning real revenue — no token needed.",
    image: "./assets/monetization.png"
  }
];


const container = document.querySelector(".card-spacing");
const card2Container = document.getElementById("card2Container");

cardData.map(data => {
    const card = document.createElement('div');
    card.className = 'first-card-design';

    card.innerHTML = `
    <div class="face-circle">
      <img class="face-circle-sizing" src="./assets/Concerned Face.png" alt="">
    </div>
    <img class="image-sizing" src="${data.image}" alt="">
    <p class="first-card-heading dm-sans-font">${data.title}</p>
    <p class="small-heading dm-sans-font">${data.smallTitle}</p>
    <p class="small-para dm-sans-font">${data.description}</p>
  `;

    container.appendChild(card);
})

card2Data.map(data => {
  const card = document.createElement('div');
  card.className = 'second-card-design';

  card.innerHTML = `
    <div class="flexing">
      <div>
        <div class="face-circle">
          <img class="face-circle-sizing" src="./assets/Concerned Face.png" alt="">
        </div>
        <p class="first-card-heading dm-sans-font mt">${data.heading}</p>
        <p class="small-heading dm-sans-font">${data.subheading}</p>
        <p class="small-para dm-sans-font">${data.description}</p>
      </div>
      <img class="card2-image-sizing" src="${data.image}" alt="">
    </div>
  `;

  card2Container.appendChild(card);
});