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

    document.addEventListener('DOMContentLoaded', () => {
        // Menu Toggle Function
        var menuItems = document.getElementById("menu-item");
        menuItems.style.maxHeight = "0px";
        
        window.menuToggle = function() {
            menuItems.style.maxHeight = menuItems.style.maxHeight === "0px" ? "200px" : "0px";
        }
    
        // Product Detail Population
        const productData = JSON.parse(localStorage.getItem('selectedProduct'));
        
        // Populate main product info
        document.getElementById('product-img').src = productData.image;
        document.getElementById('product-name').textContent = productData.name;
        document.getElementById('product-description').textContent = productData.longDesc;
        document.getElementById('product-price').textContent = productData.price;
    
        // Populate details sections
        const populateList = (listId, items) => {
            const ul = document.getElementById(listId);
            items.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                ul.appendChild(li);
            });
        };
    
        populateList('scent-list', productData.details.scent);
        populateList('notes-list', productData.details.notes);
        populateList('size-list', productData.details.size);
    
        // Sticky navbar
        window.onscroll = function() {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                document.querySelector('.navbar').classList.add('sticky');
            } else {
                document.querySelector('.navbar').classList.remove('sticky');
            }
        };
    });

    document.querySelectorAll('.section-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const toggleBtn = header.querySelector('.toggle-btn');
            
            // Toggle content visibility
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
            
            // Toggle button symbol
            toggleBtn.textContent = content.style.display === 'none' ? '+' : '-';
        });
    });
    