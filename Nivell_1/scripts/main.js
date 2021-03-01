let mybutton = document.getElementById("myBtn");

// Cuando hay scrolls down 20px aparece el button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Cuando aprietas el button va hacia arriba del todo
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}