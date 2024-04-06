// swiper-initialization.js
document.addEventListener('DOMContentLoaded', function () {
    console.log('Document loaded, initializing Swiper...');
    
    var swiper = new Swiper('.swiper-container', {
        // Parameters
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // Responsive breakpoints
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        },
        on: {
            init: function () {
                console.log('Swiper initialized, setting filter...');
                filterSwiperSlides('all');
            }
        }
    });

    var difficultyFilter = document.getElementById('difficulty-filter');
    
    if (difficultyFilter) {
        console.log('Difficulty filter found, attaching event listener...');
        difficultyFilter.addEventListener('change', function () {
            console.log('Filter changed to:', difficultyFilter.value);
            filterSwiperSlides(difficultyFilter.value);
        });
    } else {
        console.error('Difficulty filter not found!');
    }

    function filterSwiperSlides(selectedDifficulty) {
        var slides = document.querySelectorAll('.swiper-slide-custom');
        if (!slides.length) {
            console.error('No swiper slides found!');
            return;
        }
        slides.forEach(function (slide) {
            if (selectedDifficulty === 'all' || slide.dataset.difficulty === selectedDifficulty) {
                slide.style.display = 'block'; // Use 'block' or 'flex' depending on your layout
            } else {
                slide.style.display = 'none';
            }
        });

        // Necessary to refresh Swiper layout after changing slide visibility
        setTimeout(function() {
            swiper.update();
            swiper.slideTo(0);
        }, 50); // You can experiment with this delay
    }

    filterSwiperSlides(difficultyFilter.value);
});
