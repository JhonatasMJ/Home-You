window.addEventListener('load', function () {
    setTimeout(function () {
      document.body.classList.add('loaded');
    }, 3100);
  });

  const btnMobile = document.getElementById("hamburguer");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
