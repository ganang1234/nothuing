// Ambil elemen tombol dan pesan dari HTML
const greetingBtn = document.getElementById('greetingBtn');
const greetingMessage = document.getElementById('greetingMessage');

// Tambahkan event listener untuk tombol
greetingBtn.addEventListener('click', function() {
  greetingMessage.textContent = 'Terima kasih telah mengklik tombol! Semoga hari Anda menyenankan.';
});
