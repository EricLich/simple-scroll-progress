const progressBar = document.getElementById('progress-bar');
const mainHeight = document.getElementById('main').offsetHeight

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight } = document.documentElement
  let percentageScrolled = (scrollTop / (scrollHeight - window.innerHeight)) * 100;
  progressBar.style.width = `${percentageScrolled}%`;
})

