var slideIndex__second = 1;
showSlides__second(slideIndex__second);

function plusSlides__second(n) {
showSlides__second(slideIndex__second += n);
}

function currentSlide__second(n) {
showSlides__second(slideIndex__second = n);
}

function showSlides__second(n) {
var i;
var slides = document.getElementsByClassName("mySlides__second");
var dot__second = document.getElementsByClassName("dot");
if (n > slides.length) {
slideIndex__second = 1
}
if (n < 1) {
slideIndex__second = slides.length
}
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
for (i = 0; i < dot__second.length; i++) {
dot__second[i].className = dot__second[i].className.replace(" active", "");
}
slides[slideIndex__second - 1].style.display = "block";
dot__second[slideIndex__second - 1].className += " active";
}