// Cuenta regresiva
const countdown = () => {
  const eventDate = new Date('2026-01-08T18:15:00');
  const now = new Date();
  const diff = eventDate - now;

  if (diff <= 0) {
    document.querySelector('.countdown').innerHTML = '¡El evento ha comenzado!';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent = days.toString().padStart(2, '0');
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
};

setInterval(countdown, 1000);
countdown();
