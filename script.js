const produkItems = document.querySelectorAll('.produk-item');
const overlay = document.getElementById('overlay');
const overlayContent = document.getElementById('overlay-content');

produkItems.forEach(item => {
  item.addEventListener('click', () => {
    const title = item.getAttribute('data-title');
    const desc = item.getAttribute('data-desc');
    const katalogImg = item.getAttribute('data-katalog') || item.getAttribute('data-img');
    overlayContent.innerHTML = `<h2>${title}</h2><img src="${katalogImg}"><p>${desc}</p>`;
    overlay.classList.add('show');
  });
});

function closeOverlay() {
  overlay.classList.remove('show');
}

function sendWA() {
  const nama = document.getElementById('nama').value.trim();
  const email = document.getElementById('email').value.trim();
  const alamat = document.getElementById('alamat').value.trim();
  const pesan = document.getElementById('pesan').value.trim();
  const nomor = '6281234567890';
  const text = `Halo SNIPZZ! Saya mau order:%0ANama: ${nama}%0AEmail: ${email}%0AAlamat: ${alamat}%0APesanan: ${pesan}`;
  window.open(`https://wa.me/${nomor}?text=${text}`, '_blank');
  return false;
}