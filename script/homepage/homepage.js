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

    // document.addEventListener('DOMContentLoaded', initProductSlider);
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.querySelector('.navbar').classList.add('sticky');
        } else {
            document.querySelector('.navbar').classList.remove('sticky');
        }
    };

    function initAllProductSliders() {
        const sliderContainers = document.querySelectorAll('.product-slider');
        
        sliderContainers.forEach(container => {
            const prevBtn = container.querySelector('.product-prev');
            const nextBtn = container.querySelector('.product-next');
            // Scope the products selection to this container only
            const products = container.querySelectorAll('.row .col-3');
            let currentPage = 0;
            
            function getProductsPerPage() {
                if (window.innerWidth <= 767) return 1;
                if (window.innerWidth <= 1000) return 2;
                return 3;
            }
            
            let productsPerPage = getProductsPerPage();
            
            function showProducts(page) {
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
                const maxPages = Math.ceil(products.length / productsPerPage) - 1;
                if (currentPage < maxPages) {
                    currentPage++;
                    showProducts(currentPage);
                }
            });
            
            window.addEventListener('resize', () => {
                productsPerPage = getProductsPerPage();
                currentPage = 0;
                showProducts(currentPage);
            });
            
            showProducts(0);
        });
    }

    // document.addEventListener('DOMContentLoaded', () => {
    //     startSlider();
    //     // Remove this line since we're using initAllProductSliders
    //     // document.addEventListener('DOMContentLoaded', initProductSlider);
    //     initAllProductSliders();
    // });



    const productData = {
    
    'MYSTIC AURA': {
        originalPrice: "Rp520.000",
        longDesc: "Mystic Aura membawa keharuman yang misterius dan memikat, dengan perpaduan aroma oud yang dalam, vanilla bourbon yang hangat, dan sentuhan mawar hitam. Cocok untuk malam yang istimewa dan memberikan aura yang tak terlupakan.",
        details: {
            scent: ["Oriental floral"],
            notes: ["Oud", "Vanilla Bourbon", "Black Rose", "Patchouli", "Incense"],
            size: ["80ml/2.7 oz"]
        }
    },
    'WARM & COZY': {
        originalPrice: "Rp580.000",
        longDesc: "Warm & Cozy menawarkan keharuman yang memeluk, dengan perpaduan sempurna antara vanilla yang manis, cinnamon yang hangat, dan sedikit sentuhan tonka bean. Parfum ini cocok untuk momen santai di musim dingin.",
        details: {
            scent: ["Gourmand spicy"],
            notes: ["Vanilla", "Cinnamon", "Tonka Bean", "Nutmeg", "Cashmere Wood"],
            size: ["40ml/1.35 oz"]
        }
    },
    'CITRUS BLISS': {
        originalPrice: "Rp420.000",
        longDesc: "Citrus Bliss menyegarkan dengan ledakan aroma jeruk mandarin, grapefruit, dan lemon yang ceria, dipadukan dengan sedikit sentuhan mint. Aroma ini memberikan semangat dan energi sepanjang hari.",
        details: {
            scent: ["Citrus aromatic"],
            notes: ["Mandarin", "Grapefruit", "Lemon", "Mint", "Bergamot"],
            size: ["50ml/1.7 oz"]
        }
    },
    
    'AQUA SERENITY': {
        originalPrice: "Rp480.000", 
        longDesc: "Aqua Serenity memancarkan kesegaran air dengan perpaduan aroma lotus biru, melon segar, dan cedarwood yang memberikan ketenangan. Cocok untuk aktivitas di luar ruangan.",
        details: {
            scent: ["Aquatic fresh"],
            notes: ["Blue Lotus", "Melon", "Cedarwood", "Sea Salt", "Ambergris"],
            size: ["50ml/1.7 oz"]
        }
    },
    'FRUITY EXORCISM': {
        originalPrice: "Rp780.000",
        discountPrice: "Rp546.000",
        longDesc: "Fruity Exorcism menawarkan ledakan aroma buah eksotis seperti mangga, markisa, dan nanas, dipadukan dengan sentuhan musk lembut. Aroma ini berani dan unik, cocok untuk mereka yang ingin tampil beda.",
        details: {
            scent: ["Fruity exotic"],
            notes: ["Mango", "Passionfruit", "Pineapple", "Coconut", "White Musk"],
            size: ["40ml/1.35 oz"]
        }
    },
    'GOLD EXCLUSIVE': {
        originalPrice: "Rp650.000",
        discountPrice: "Rp455.000",
        longDesc: "Gold's Exclusive menghadirkan kemewahan dengan aroma melati yang lembut, vanila yang manis, dan kayu cendana yang hangat. Aroma ini menciptakan kesan eksklusif yang tak terlupakan.",
        details: {
            scent: ["Floral woody"],
            notes: ["Jasmine", "Vanilla", "Sandalwood", "Amber", "Patchouli"],
            size: ["75ml/2.5 oz"]
        }
    },
    
    'ESSENCE OF SIMPLE': {
        originalPrice: "Rp380.000",
        longDesc: "Essence of Simple menawarkan keharuman yang bersih dan menenangkan dengan aroma lily putih, musk lembut, dan sentuhan citrus. Parfum ini cocok untuk mereka yang menghargai kesederhanaan.",
        details: {
            scent: ["Fresh clean"],
            notes: ["White Lily", "Citrus", "Musk", "Green Tea", "Bamboo"],
            size: ["80ml/2.7 oz"]
        }
    }   
    };
    

    function initializeProductClicks() {
        document.querySelectorAll('.col-3').forEach(product => {
            product.addEventListener('click', () => {
                const name = product.querySelector('h4').textContent;
                const originalPrice = product.querySelector('.original-price')?.textContent;
                const discountPrice = product.querySelector('.discount-price')?.textContent;
                
                const productInfo = {
                    name: name,
                    image: product.querySelector('img').src,
                    originalPrice: originalPrice,
                    discountPrice: discountPrice,
                    ...productData[name]
                };
                
                localStorage.setItem('selectedProduct', JSON.stringify(productInfo));
                window.location.href = 'src/products page/productDetails.html';
            });
        });
    }
    
    // Add this to your existing DOMContentLoaded event
    document.addEventListener('DOMContentLoaded', () => {
        startSlider();
        initAllProductSliders();
        initializeProductClicks(); // Add this line
    });