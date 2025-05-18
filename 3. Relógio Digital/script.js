const clock = document.querySelector(".clock");

function tick() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const html = `
    <span>${hours}</span> :
    <span>${minutes}</span> :
    <span>${seconds}</span>
  `;
  clock.innerHTML = html;
}

// Atualiza imediatamente ao carregar
tick();
// Atualiza a cada segundo
setInterval(tick, 1000);
