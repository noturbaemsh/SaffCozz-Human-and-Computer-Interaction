var menuItems = document.getElementById("menu-item");
        menuItems.style.maxHeight = "0px";
        function menuToggle()
        {
            if(menuItems.style.maxHeight == "0px")
            {
                menuItems.style.maxHeight = "200px"
            }
            else 
            {
            menuItems.style.maxHeight = "0px"
            }
        }


        function startSlider() {
        const slides = document.querySelectorAll('.banner-slide');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        let currentSlide = 0;
        
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
        
        function prevSlide() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        }
        
        // Event listeners for buttons
        nextBtn.addEventListener('click', nextSlide);
        prevBtn.addEventListener('click', prevSlide);
        
        // Show first slide
        showSlide(0);
        
        // Auto advance slides
        const slideInterval = setInterval(nextSlide, 5000);
        
        // Pause auto-advance when hovering over slider
        document.querySelector('.banner-slider').addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
    }

    document.addEventListener('DOMContentLoaded', startSlider);

    function initProductSlider() {
    const productRow = document.querySelector('.product-slider .row');
    const prevBtn = document.querySelector('.product-prev');
    const nextBtn = document.querySelector('.product-next');
    
    function getProductsPerPage() {
    if (window.innerWidth <= 767) return 1;
    if (window.innerWidth <= 1000) return 2;
    return 3;
    }

    let productsPerPage = getProductsPerPage();
    let currentPage = 0;

    function showProducts(page) {
        const products = document.querySelectorAll('.col-3');
        products.forEach((product, index) => {
            if (index >= page * productsPerPage && index < (page + 1) * productsPerPage) {
                product.style.display = 'flex';
            } else {
                product.style.display = 'none';
            }
        });
    }

    prevBtn.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            showProducts(currentPage);
        }
    });

    nextBtn.addEventListener('click', () => {
        const products = document.querySelectorAll('.col-3');
        const maxPages = Math.ceil(products.length / productsPerPage) - 1;
        if (currentPage < maxPages) {
            currentPage++;
            showProducts(currentPage);
        }
    });

    window.addEventListener('resize', () => {
        productsPerPage = getProductsPerPage();
        currentPage = 0; // Reset to first page on resize
        showProducts(currentPage);
    });

    showProducts(0);
}

    document.addEventListener('DOMContentLoaded', initProductSlider);
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.querySelector('.navbar').classList.add('sticky');
        } else {
            document.querySelector('.navbar').classList.remove('sticky');
        }
    };