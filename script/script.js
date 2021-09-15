const arrow = document.querySelectorAll('.arrow');
const hamburger = document.querySelector('.hamburger');
if (window.innerWidth < 760) {
  arrow.forEach(e => e.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="10" height="7"><path fill="none" stroke="#FF7B86" stroke-width="2" d="M1 1l4 4 4-4"/></svg>')
  hamburger.addEventListener('click', () => {
  document.querySelector('.links').classList.toggle('open');
  });
}