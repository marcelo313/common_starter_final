document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;

    window.addEventListener("scroll", function() {
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop) {
            // Scroll Down
            document.querySelector('nav').style.top = '-100px';
        } else {
            // Scroll Up
            document.querySelector('nav').style.top = '0px';
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }, false);

    document.getElementById('bringToFront').addEventListener('click', function() {
        document.querySelector('.background-image').style.zIndex = "1500"; // Lower than buttons but higher than other content
    });

    document.getElementById('sendToBack').addEventListener('click', function() {
        document.querySelector('.background-image').style.zIndex = "-1"; // Original z-index
    });


    document.getElementById('toggleBackground').addEventListener('click', function() {
        var bg = document.querySelector('.background-image');
        if (bg.style.display === "none") {
            bg.style.display = "block";
        } else {
            bg.style.display = "none";
        }
    });
});
