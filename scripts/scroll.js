var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("container")[0].style.top = "0";
  } else {
    document.getElementsByClassName("container")[0].style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}