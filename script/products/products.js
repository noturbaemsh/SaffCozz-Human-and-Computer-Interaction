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


    // document.addEventListener('DOMContentLoaded', function() {
    //     const pageNumbers = document.querySelectorAll('.page-num');
    //     const prevBtn = document.querySelector('.prev');
    //     const nextBtn = document.querySelector('.next');
    //     const productsPerPage = 9;
    //     let currentPage = 1;
    //     const totalPages = pageNumbers.length;
    
    //     // Get all products and hide them initially
    //     const allProducts = document.querySelectorAll('.col-3');
    //     const totalProducts = allProducts.length;
    
    //     function showProducts(page) {
    //         const start = (page - 1) * productsPerPage;
    //         const end = start + productsPerPage;
    
    //         // Hide all products first
    //         allProducts.forEach(product => {
    //             product.style.display = 'none';
    //         });
    
    //         // Show only products for current page
    //         for(let i = start; i < end && i < totalProducts; i++) {
    //             allProducts[i].style.display = 'flex';
    //         }
    //     }
    
    //     function updateActivePage(pageNum) {
    //         pageNumbers.forEach(num => num.classList.remove('active'));
    //         pageNumbers[pageNum - 1].classList.add('active');
    //         currentPage = pageNum;
            
    //         prevBtn.disabled = currentPage === 1;
    //         nextBtn.disabled = currentPage === totalPages;
    
    //         showProducts(currentPage);
    //     }
    
    //     pageNumbers.forEach((page, index) => {
    //         page.addEventListener('click', () => {
    //             updateActivePage(index + 1);
    //         });
    //     });
    
    //     prevBtn.addEventListener('click', () => {
    //         if (currentPage > 1) {
    //             updateActivePage(currentPage - 1);
    //         }
    //     });
    
    //     nextBtn.addEventListener('click', () => {
    //         if (currentPage < totalPages) {
    //             updateActivePage(currentPage + 1);
    //         }
    //     });
    
    //     // Initialize first page
    //     updateActivePage(1);
    // });

    // document.addEventListener('DOMContentLoaded', function() {
    //     const productsPerPage = 9;
    //     const allProducts = document.querySelectorAll('.col-3');
    //     const totalProducts = allProducts.length;
    //     const totalPages = Math.ceil(totalProducts / productsPerPage);
        
    //     const pageNumbersContainer = document.querySelector('.page-numbers');
    //     const pagination = document.querySelector('.pagination');
    //     pageNumbersContainer.innerHTML = '';
        
    //     if (totalProducts > 0) {
    //         const pageNum = document.createElement('button');
    //         pageNum.classList.add('page-num', 'active');
    //         pageNum.textContent = 1;
    //         pageNumbersContainer.appendChild(pageNum);
            
    //         for(let i = 2; i <= totalPages; i++) {
    //             const additionalPage = document.createElement('button');
    //             additionalPage.classList.add('page-num');
    //             additionalPage.textContent = i;
    //             pageNumbersContainer.appendChild(additionalPage);
    //         }
    //     }
    
    //     const pageNumbers = document.querySelectorAll('.page-num');
    //     const prevBtn = document.querySelector('.prev');
    //     const nextBtn = document.querySelector('.next');
    //     let currentPage = 1;
    
    //     function showProducts(page) {
    //         const start = (page - 1) * productsPerPage;
    //         const end = start + productsPerPage;
    
    //         allProducts.forEach((product, index) => {
    //             product.style.display = index >= start && index < end ? 'flex' : 'none';
    //         });
    //     }
        
    //     function updateActivePage(pageNum) {
    //         pageNumbers.forEach(num => num.classList.remove('active'));
    //         pageNumbers[pageNum - 1].classList.add('active');
    //         currentPage = pageNum;
            
    //         prevBtn.disabled = currentPage === 1;
    //         nextBtn.disabled = currentPage === totalPages;
    
    //         showProducts(currentPage);
    //     }
    
    //     pageNumbers.forEach((page, index) => {
    //         page.addEventListener('click', () => {
    //             updateActivePage(index + 1);
    //         });
    //     });
    
    //     prevBtn.addEventListener('click', () => {
    //         if (currentPage > 1) {
    //             updateActivePage(currentPage - 1);
    //         }
    //     });
    
    //     nextBtn.addEventListener('click', () => {
    //         if (currentPage < totalPages) {
    //             updateActivePage(currentPage + 1);
    //         }
    //     });
    
    //     updateActivePage(1);
    // });


    // function sortProducts(sortValue) {
    //     const products = Array.from(document.querySelectorAll('.col-3'));
        
    //     switch(sortValue) {
    //         case 'name-asc':
    //             products.sort((a, b) => {
    //                 const nameA = a.querySelector('h4').textContent;
    //                 const nameB = b.querySelector('h4').textContent;
    //                 return nameA.localeCompare(nameB);
    //             });
    //             break;
                
    //         case 'name-desc':
    //             products.sort((a, b) => {
    //                 const nameA = a.querySelector('h4').textContent;
    //                 const nameB = b.querySelector('h4').textContent;
    //                 return nameB.localeCompare(nameA);
    //             });
    //             break;
                
    //         case 'price-low':
    //             products.sort((a, b) => {
    //                 const priceA = parseInt(a.querySelector('small').textContent.split('Rp')[1].replace(/,/g, ''));
    //                 const priceB = parseInt(b.querySelector('small').textContent.split('Rp')[1].replace(/,/g, ''));
    //                 return priceA - priceB;
    //             });
    //             break;
                
    //         case 'price-high':
    //             products.sort((a, b) => {
    //                 const priceA = parseInt(a.querySelector('small').textContent.split('Rp')[1].replace(/,/g, ''));
    //                 const priceB = parseInt(b.querySelector('small').textContent.split('Rp')[1].replace(/,/g, ''));
    //                 return priceB - priceA;
    //             });
    //             break;
                
    //         case 'type':
    //             products.sort((a, b) => {
    //                 const typeA = a.querySelector('h5').textContent;
    //                 const typeB = b.querySelector('h5').textContent;
    //                 return typeA.localeCompare(typeB);
    //             });
    //             break;
    //     }
        
    //     const container = document.querySelector('.row');
    //     products.forEach(product => container.appendChild(product));
    // }
    
    // document.querySelector('.sort-select').addEventListener('change', function() {
    //     sortProducts(this.value);
    // });
    

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


    // document.addEventListener('DOMContentLoaded', function() {
    //     const pageNumbers = document.querySelectorAll('.page-num');
    //     const prevBtn = document.querySelector('.prev');
    //     const nextBtn = document.querySelector('.next');
    //     const productsPerPage = 9;
    //     let currentPage = 1;
    //     const totalPages = pageNumbers.length;
    
    //     // Get all products and hide them initially
    //     const allProducts = document.querySelectorAll('.col-3');
    //     const totalProducts = allProducts.length;
    
    //     function showProducts(page) {
    //         const start = (page - 1) * productsPerPage;
    //         const end = start + productsPerPage;
    
    //         // Hide all products first
    //         allProducts.forEach(product => {
    //             product.style.display = 'none';
    //         });
    
    //         // Show only products for current page
    //         for(let i = start; i < end && i < totalProducts; i++) {
    //             allProducts[i].style.display = 'flex';
    //         }
    //     }
    
    //     function updateActivePage(pageNum) {
    //         pageNumbers.forEach(num => num.classList.remove('active'));
    //         pageNumbers[pageNum - 1].classList.add('active');
    //         currentPage = pageNum;
            
    //         prevBtn.disabled = currentPage === 1;
    //         nextBtn.disabled = currentPage === totalPages;
    
    //         showProducts(currentPage);
    //     }
    
    //     pageNumbers.forEach((page, index) => {
    //         page.addEventListener('click', () => {
    //             updateActivePage(index + 1);
    //         });
    //     });
    
    //     prevBtn.addEventListener('click', () => {
    //         if (currentPage > 1) {
    //             updateActivePage(currentPage - 1);
    //         }
    //     });
    
    //     nextBtn.addEventListener('click', () => {
    //         if (currentPage < totalPages) {
    //             updateActivePage(currentPage + 1);
    //         }
    //     });
    
    //     // Initialize first page
    //     updateActivePage(1);
    // });

    document.addEventListener('DOMContentLoaded', function() {
        const productsPerPage = 9;
        let allProducts = Array.from(document.querySelectorAll('.col-3'));
        const totalPages = Math.ceil(allProducts.length / productsPerPage);
        let currentPage = 1;
    
        // Store the original order of products
        const originalOrder = [...allProducts];
    
        function sortAllProducts(sortValue) {
            // Create a new array with all products
            let sortedProducts = [...allProducts];
            
            switch(sortValue) {
                case 'name-asc':
                    sortedProducts.sort((a, b) => {
                        return a.querySelector('h4').textContent.localeCompare(b.querySelector('h4').textContent);
                    });
                    break;
                case 'name-desc':
                    sortedProducts.sort((a, b) => {
                        return b.querySelector('h4').textContent.localeCompare(a.querySelector('h4').textContent);
                    });
                    break;
                case 'price-low':
                    sortedProducts.sort((a, b) => {
                        const priceA = parseInt(a.querySelector('small').textContent.split('Rp')[1].replace(/,/g, ''));
                        const priceB = parseInt(b.querySelector('small').textContent.split('Rp')[1].replace(/,/g, ''));
                        return priceA - priceB;
                    });
                    break;
                case 'price-high':
                    sortedProducts.sort((a, b) => {
                        const priceA = parseInt(a.querySelector('small').textContent.split('Rp')[1].replace(/,/g, ''));
                        const priceB = parseInt(b.querySelector('small').textContent.split('Rp')[1].replace(/,/g, ''));
                        return priceB - priceA;
                    });
                    break;
                case 'type':
                    sortedProducts.sort((a, b) => {
                        return a.querySelector('h5').textContent.localeCompare(b.querySelector('h5').textContent);
                    });
                    break;
                case 'default':
                    sortedProducts = [...originalOrder];
                    break;
            }
    
            // Update the main products array with sorted order
            allProducts = sortedProducts;
            
            // Reset to first page and display
            currentPage = 1;
            updatePageDisplay();
            showProducts();
        }
    
        function showProducts() {
            const start = (currentPage - 1) * productsPerPage;
            const end = start + productsPerPage;
            
            const container = document.querySelector('.row');
            container.innerHTML = ''; // Clear current products
            
            // Display only products for current page
            allProducts.slice(start, end).forEach(product => {
                container.appendChild(product);
            });
        }
    
        function updatePageDisplay() {
            const pageNumbers = document.querySelectorAll('.page-num');
            pageNumbers.forEach((btn, index) => {
                btn.classList.toggle('active', index + 1 === currentPage);
            });
        }
    
        // Event Listeners
        document.querySelector('.sort-select').addEventListener('change', function() {
            sortAllProducts(this.value);
        });
    
        document.querySelector('.prev').addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                updatePageDisplay();
                showProducts();
            }
        });
    
        document.querySelector('.next').addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                updatePageDisplay();
                showProducts();
            }
        });
    
        document.querySelector('.page-numbers').addEventListener('click', (e) => {
            if (e.target.classList.contains('page-num')) {
                currentPage = parseInt(e.target.textContent);
                updatePageDisplay();
                showProducts();
            }
        });
    
        // Initialize pagination numbers
        const pageNumbersContainer = document.querySelector('.page-numbers');
        for (let i = 1; i <= totalPages; i++) {
            const pageNum = document.createElement('button');
            pageNum.classList.add('page-num');
            pageNum.textContent = i;
            if (i === 1) pageNum.classList.add('active');
            pageNumbersContainer.appendChild(pageNum);
        }
    
        // Initial display
        showProducts();
    });
    

    // document.querySelectorAll('.col-3').forEach(product => {
    //     product.addEventListener('click', () => {
    //         const productData = {
    //             name: product.querySelector('h4').textContent,
    //             type: product.querySelector('h5').textContent,
    //             description: product.querySelector('p').textContent,
    //             price: product.querySelector('.price').textContent,
    //             size: product.querySelector('.size').textContent,
    //             image: product.querySelector('img').src
    //         };
            
    //         // Store product data in localStorage
    //         localStorage.setItem('selectedProduct', JSON.stringify(productData));
            
    //         // Navigate to product detail page
    //         window.location.href = 'productDetails.html';
    //     });
    // });


    // First, in products.js, add click event to products
document.querySelectorAll('.col-3').forEach(product => {
    product.addEventListener('click', () => {
        const productName = product.querySelector('h4').textContent;
        const productData = {
            name: productName,
            image: product.querySelector('img').src,
            ...productDetails[productName] // This spreads the longDesc and details
        };
        
        localStorage.setItem('selectedProduct', JSON.stringify(productData));
        window.location.href = 'product-detail.html';
    });
});



const productDetails = {
    'BLOSSOM ELEGANCE': {
        longDesc: "Blossom Elegance menghadirkan perpaduan sempurna antara kelopak mawar segar, melati putih, dan sentuhan lembut freesia. Lapisan tengah mengungkapkan aroma peony dan lily of the valley, sementara base note vanilla dan musk memberikan kehangatan yang tahan lama. Cocok untuk acara formal maupun casual di siang hari.",
        details: {
            scent: ["Floral rose gourmand"],
            notes: [
                "Mandarin",
                "Cinnamon",
                "Peony",
                "Rose Centifolia",
                "Orris",
                "Cocoa Bean Absolute",
                "Champagne Truffle Accord",
                "Agaroud",
                "Amber",
                "Vanilla Infusion",
                "Musk",
                "Cetalox"
            ],
            size: ["75ml/2.5 oz"]
        }
    },
    'GOLDEN ESSENCE': {
        longDesc: "Golden Essence menghadirkan kemewahan dalam setiap semprotan, dengan aroma yang memikat dari jasmine lembut, amber hangat, dan sentuhan sandalwood yang elegan. Aroma ini menciptakan kesan yang abadi dan memikat, cocok untuk mereka yang ingin tampil berkelas sepanjang hari.",
        details: {
            scent: ["Floral woody oriental"],
            notes: ["Jasmine", "Amber", "Sandalwood", "Musk", "Cedar"],
            size: ["30ml/1 oz"]
        }
    },
    'MYSTIC AURA': {
        longDesc: "Mystic Aura membawa keharuman yang misterius dan memikat, dengan perpaduan aroma oud yang dalam, vanilla bourbon yang hangat, dan sentuhan mawar hitam. Cocok untuk malam yang istimewa dan memberikan aura yang tak terlupakan.",
        details: {
            scent: ["Oriental floral"],
            notes: ["Oud", "Vanilla Bourbon", "Black Rose", "Patchouli", "Incense"],
            size: ["80ml/2.7 oz"]
        }
    },
    'WARM & COZY': {
        longDesc: "Warm & Cozy menawarkan keharuman yang memeluk, dengan perpaduan sempurna antara vanilla yang manis, cinnamon yang hangat, dan sedikit sentuhan tonka bean. Parfum ini cocok untuk momen santai di musim dingin.",
        details: {
            scent: ["Gourmand spicy"],
            notes: ["Vanilla", "Cinnamon", "Tonka Bean", "Nutmeg", "Cashmere Wood"],
            size: ["40ml/1.35 oz"]
        }
    },
    'CITRUS BLISS': {
        longDesc: "Citrus Bliss menyegarkan dengan ledakan aroma jeruk mandarin, grapefruit, dan lemon yang ceria, dipadukan dengan sedikit sentuhan mint. Aroma ini memberikan semangat dan energi sepanjang hari.",
        details: {
            scent: ["Citrus aromatic"],
            notes: ["Mandarin", "Grapefruit", "Lemon", "Mint", "Bergamot"],
            size: ["50ml/1.7 oz"]
        }
    },
    'VELVET ROSE': {
        longDesc: "Velvet Rose memberikan kesan mewah dengan kombinasi kelopak mawar Damask, vanilla hitam yang manis, dan musk putih. Aroma sensual ini sempurna untuk malam romantis.",
        details: {
            scent: ["Floral oriental"],
            notes: ["Damask Rose", "Black Vanilla", "White Musk", "Amber", "Pink Pepper"],
            size: ["75ml/2.5 oz"]
        }
    },
    'HERBIFY SENSE': {
        longDesc: "Herbify Sense menyatukan keharuman herbal dengan ekstrak kayu manis yang memberikan sensasi relaksasi namun tetap berkarakter. Cocok untuk mereka yang menyukai aroma alami dan santai.",
        details: {
            scent: ["Herbal spicy"],
            notes: ["Cinnamon", "Clary Sage", "Thyme", "Lavender", "Oakmoss"],
            size: ["50ml/1.7 oz"]
        }
    },
    'AQUA SERENITY': {
        longDesc: "Aqua Serenity memancarkan kesegaran air dengan perpaduan aroma lotus biru, melon segar, dan cedarwood yang memberikan ketenangan. Cocok untuk aktivitas di luar ruangan.",
        details: {
            scent: ["Aquatic fresh"],
            notes: ["Blue Lotus", "Melon", "Cedarwood", "Sea Salt", "Ambergris"],
            size: ["50ml/1.7 oz"]
        }
    },
    'FRUITY EXORCISM': {
        longDesc: "Fruity Exorcism menawarkan ledakan aroma buah eksotis seperti mangga, markisa, dan nanas, dipadukan dengan sentuhan musk lembut. Aroma ini berani dan unik, cocok untuk mereka yang ingin tampil beda.",
        details: {
            scent: ["Fruity exotic"],
            notes: ["Mango", "Passionfruit", "Pineapple", "Coconut", "White Musk"],
            size: ["40ml/1.35 oz"]
        }
    },
    'GOLD\'S EXCLUSIVE': {
        longDesc: "Gold's Exclusive menghadirkan kemewahan dengan aroma melati yang lembut, vanila yang manis, dan kayu cendana yang hangat. Aroma ini menciptakan kesan eksklusif yang tak terlupakan.",
        details: {
            scent: ["Floral woody"],
            notes: ["Jasmine", "Vanilla", "Sandalwood", "Amber", "Patchouli"],
            size: ["75ml/2.5 oz"]
        }
    },
    'LOVELY ROSES': {
        longDesc: "Lovely Roses adalah keharuman romantis dengan kombinasi mawar merah yang segar, bunga melati yang lembut, dan kehangatan musk. Aroma ini sempurna untuk momen spesial.",
        details: {
            scent: ["Floral romantic"],
            notes: ["Red Rose", "Jasmine", "White Musk", "Amber", "Peony"],
            size: ["60ml/2 oz"]
        }
    },
    'ROYAL IRIS': {
        longDesc: "Royal Iris menghadirkan kemewahan dengan aroma bunga iris yang elegan, violet yang lembut, dan kehangatan amber. Aroma ini memancarkan keanggunan sejati.",
        details: {
            scent: ["Floral powdery"],
            notes: ["Iris", "Violet", "Amber", "Musk", "Tonka Bean"],
            size: ["40ml/1.35 oz"]
        }
    },
    'SAFFRON NOIR': {
        longDesc: "Saffron Noir adalah parfum yang memikat dengan aroma saffron yang kaya, blackberry yang manis, dan leather yang kuat, ditutup dengan sentuhan vanilla bourbon.",
        details: {
            scent: ["Oriental spicy"],
            notes: ["Saffron", "Blackberry", "Leather", "Vanilla Bourbon", "Oud"],
            size: ["50ml/1.7 oz"]
        }
    },
    'ESSENCE OF SIMPLE': {
        longDesc: "Essence of Simple menawarkan keharuman yang bersih dan menenangkan dengan aroma lily putih, musk lembut, dan sentuhan citrus. Parfum ini cocok untuk mereka yang menghargai kesederhanaan.",
        details: {
            scent: ["Fresh clean"],
            notes: ["White Lily", "Citrus", "Musk", "Green Tea", "Bamboo"],
            size: ["80ml/2.7 oz"]
        }
    }
};


// Add click event to each product
document.querySelectorAll('.col-3').forEach(product => {
    product.addEventListener('click', () => {
        const productName = product.querySelector('h4').textContent;
        const productData = {
            name: productName,
            image: product.querySelector('img').src,
            price: product.querySelector('.price').textContent,
            ...productDetails[productName]
        };
        
        localStorage.setItem('selectedProduct', JSON.stringify(productData));
        window.location.href = 'productDetails.html';
    });
});

    
    
    
    
    
    