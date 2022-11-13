let mybutton = document.getElementById("myBtn");
mybutton.addEventListener("click", topFunction);

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {

  document.documentElement.scrollTop = 0;
}