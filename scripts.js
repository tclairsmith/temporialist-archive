

const latestCard = document.getElementById("latest-card");

// Simulated metadata object
const metadata = {
  image: "images/001.jpg",
  kicker: "ARCHIVE ITEM NO. 001",
  title: "The Red Sand Shard",
  subhead: "Recovered from Site Gamma",
  date: "2025-07-01",
  link: "archive/001.html"
};

// Inject into card

card.innerHTML = `
  <a href="${item.link}">
    <div class="archive-image-wrapper">
      <img src="${item.image}" alt="${item.title}" />
    </div>
    <p class="archive-id">ARCHIVE ITEM NO. ${item.id}</p>
    <h3>${item.title}</h3>
    <p class="archive-date">${item.date}</p>
    <p class="desc">${item.desc}</p>
  </a>
`;

const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');

  if (navMenu.classList.contains('active')) {
    navToggle.innerHTML = '&times;'; // × close icon
  } else {
    navToggle.innerHTML = '&#9776;'; // ☰ hamburger icon
  }
});