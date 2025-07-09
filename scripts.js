// Archive cards generation
fetch('/data/archives.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('archiveGrid');
    container.innerHTML = '';
    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'archive-item';
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
      container.appendChild(card);
    });
  })
  .catch(err => console.error('Failed to load archive data:', err));

// Navigation toggle with accessibility
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.setAttribute('aria-expanded', 'false');
navMenu.setAttribute('aria-hidden', 'true');

navToggle.addEventListener('click', () => {
  const isActive = navMenu.classList.toggle('active');

  // Update hamburger icon
  navToggle.innerHTML = isActive ? '&times;' : '&#9776;';

  // Update accessibility attributes
  navToggle.setAttribute('aria-expanded', isActive.toString());
  navMenu.setAttribute('aria-hidden', (!isActive).toString());
});
