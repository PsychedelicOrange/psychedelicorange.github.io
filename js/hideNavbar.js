var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("navbar")[0].style.top = "0";
    console.log("fired.")
  } else {
    document.getElementsByClassName("navbar")[0].style.top = "-75px";
  }
  prevScrollpos = currentScrollPos;
}
