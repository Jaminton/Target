function getSlides() {
    return(document.querySelectorAll('ion-slides'));
}

var slides = document.querySelectorAll('ion-slides');
slides.options = {
  effect: 'flip'
}