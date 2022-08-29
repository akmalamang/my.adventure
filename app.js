const humb = document.querySelectorAll('.humberger span');
const humber = document.querySelector('.humberger');

humber.addEventListener('click', () => {
  humb.forEach((a) => {
    a.classList.toggle('tambah');
  });
});
