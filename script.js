const produkItems = document.querySelectorAll('.produk-item');
const overlay = document.getElementById('overlay');
const overlayContent = document.getElementById('overlay-content');

produkItems.forEach(item => {
  item.addEventListener('click', () => {
    const title = item.getAttribute('data-title');
    const desc = item.getAttribute('data-desc');
    const imgSrc = item.getAttribute('data-img');
    overlayContent.innerHTML = `<h2>${title}</h2><img src="${imgSrc}"><p>${desc}</p>`;
    overlay.classList.add('show');
  });
});

function closeOverlay() {
  overlay.classList.remove('show');
}