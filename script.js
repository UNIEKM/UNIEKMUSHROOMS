document.addEventListener('DOMContentLoaded', function () {
    // Sidebar navigation logic
    var mySidebar = document.getElementById("mySidebar");
    var openNavBtn = document.getElementById("openNav");
    var closeNavBtn = document.getElementById("closeNav");

    openNavBtn.addEventListener("click", function () {
        mySidebar.style.display = "block";
    });

    closeNavBtn.addEventListener("click", function () {
        mySidebar.style.display = "none";
    });

    // Add click event listeners to images for modal display
    var images = document.querySelectorAll('.work-img');
    images.forEach(function (img) {
        img.addEventListener('click', function () {
            onClick(this);
        });
    });

    // Get the button for scrolling to the top
    var mybutton = document.getElementById("myBtn");

    // Calculate the height of the first page
    var firstPageHeight = document.querySelector('.w3-container').offsetHeight;

    // Function to show the "scroll to top" button after scrolling past the first page
    function scrollFunction() {
        if (window.pageYOffset > firstPageHeight) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    // Add scroll event listener
    window.onscroll = function () { scrollFunction(); };

    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", function () {
        topFunction();
    });

    // Function to scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    // Function to display modal image
    function onClick(element) {
        var modal = document.getElementById('modal01');
        var modalImg = document.getElementById('img01');
        var captionText = document.getElementById('caption');
        modal.style.display = "block";
        modalImg.src = element.src;
        captionText.innerHTML = element.alt;
    }

});
