var slideIndex = 0;
showDivs();


function showDivs() {
  var x = document.getElementsByClassName("slides");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  };
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex - 1].style.display = "block";
  setTimeout(showDivs, 4000);
}
