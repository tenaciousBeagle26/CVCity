function expand(id, iconId){
  document.getElementById(id).classList.toggle("expand");
  document.getElementById(iconId).classList.toggle("rotate");
}

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'UA-238473598-1');

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) { mybutton.style.display = "block";} 
  else { mybutton.style.display = "none"; }
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  /* document.body.scrollTop = 0; // For Safari*/
}