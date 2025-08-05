document.addEventListener("DOMContentLoaded", () => {
  const messageDiv = document.getElementById("last-visit-message");
  const MS_IN_DAY = 86400000;

  const lastVisit = localStorage.getItem("lastVisit");
  const now = Date.now();

  if (!lastVisit) {
    messageDiv.textContent = "Welcome! Do you have any questions.";
  } else {
    const daysElapsed = Math.floor((now - lastVisit) / MS_IN_DAY);

    if (daysElapsed < 1) {
      messageDiv.textContent = "Need Help, Go to Contact Us!";
    } else if (daysElapsed === 1) {
      messageDiv.textContent = "You last visited 1 day ago.";
    } else {
      messageDiv.textContent = `You last visited ${daysElapsed} days ago.`;
    }
  }

  localStorage.setItem("lastVisit", now);

  fetch('./data/discover.json')
    .then(res => res.json())
    .then(data => {
      const container = document.createElement('discoverCards');
      container.innerHTML = "";
      container.classList.add('discover-card-grid');
      document.querySelector('main').appendChild(container);

      data.discover.forEach((item, index) => {
        const card = document.createElement('section');
        card.classList.add('discover-card', 'delay1');

        card.innerHTML = `
        <h2>${item.name}</h2>
        <img src="${item.image}" alt="${item.name}" width="${item.width || 300}" height="${item.height || 200}" class="card-img" ${index === "Tarkwa Bay Beach" ? '' : 'loading="lazy"'}>
        <div class="discover-card-content">
          <p class="description">${item.description}</p>
          <p class="cost"><strong>Cost:</strong> ${item.cost}</p>
          <p class="location"><strong>Address:</strong> ${item.address}</p>
          <a href="${item.website}" target="_blank" class="learn-more">Learn More about ${item.name}</a>
        </div>
      `;

        container.appendChild(card);
      });
    })
    .catch(err => {
      console.error('Error loading discover data:', err);
    });
});











