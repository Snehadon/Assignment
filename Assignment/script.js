document.getElementById('contactBtn').addEventListener('click', function() {
    document.getElementById('ContactForm').style.display = 'flex';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('ContactForm')) {
        document.getElementById('ContactForm').style.display = 'none';
    }
});





let slideIndex = 0;
        let slider = document.querySelector('.slide__img');

        function currentSlide(n) {
            showSlides(slideIndex = n - 1);
        }

        function showSlides(n) {
            let dots = document.getElementsByClassName("dot");
            if (n >= dots.length) { slideIndex = 0 }
            if (n < 0) { slideIndex = dots.length - 1 }
            slider.style.transform = `translateX(-${slideIndex * 80}%)`;
            for (let dot of dots) {
                dot.classList.remove("active");
            }
            dots[slideIndex].classList.add("active");
        }

        function autoSlide() {
            showSlides(slideIndex += 1);
        }

        setInterval(autoSlide, 5000); // Change slide every 5 seconds

        showSlides(slideIndex);



        document.addEventListener('DOMContentLoaded', function () {
            const images = document.querySelectorAll('.card');
            const hoverContent = document.querySelector('.hover-content');
        
            images.forEach((img, index) => {
                img.addEventListener('mouseover', () => {
                    // Position the hover content in place of the hovered image
                    hoverContent.style.width = `${img.offsetWidth}px`;
                    hoverContent.style.height = `${img.offsetHeight}px`;
                    hoverContent.style.top = `${img.offsetTop}px`;
                    hoverContent.style.left = `${img.offsetLeft}px`;
                    hoverContent.style.display = 'block'; // Ensure the hover content is displayed
        
                    img.style.opacity = 0; // Hide the image
                });
        
                img.addEventListener('mouseout', () => {
                    hoverContent.style.display = 'none'; // Hide the hover content
                    img.style.opacity = 1; // Show the image again
                });
            });
        });
        



        function changeImage(imageSrc) {
            const mainImage = document.getElementById('main-img');
            if (mainImage) {
                mainImage.src = imageSrc;
            } else {
                console.error('Element with id "main-img" not found');
            }
        }