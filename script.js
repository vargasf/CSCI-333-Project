// --------------- portfolio --------------- //

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// --------------- Index Portfolio--------------- //


const card = document.querySelector('.card');
		const cardImage = card.querySelector('.card-image');
		const cardInfo = card.querySelector('.card-info');
		let isFlipped = false;

		card.addEventListener('mouseenter', () => {
		  if (!isFlipped) {
		    cardImage.style.transform = 'rotateY(180deg)';
		    cardInfo.style.transform = 'rotateY(0deg)';
		    isFlipped = true;
		  }
		});

		card.addEventListener('mouseleave', () => {
		  if (isFlipped) {
		    cardImage.style.transform = 'rotateY(0deg)';
		    cardInfo.style.transform = 'rotateY(-180deg)';
		    isFlipped = false;
		  }
		});
