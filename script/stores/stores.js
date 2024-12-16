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


    const storeLocations = {
        'SAFFCOZZ - JAKARTA': {
            image: '../../assets/store locations/stores/HCI_SaffCoz-Store1.jpeg',
            address: 'Jl. MH. Thamrin No. 28-30, Jakarta Pusat',
            hours: 'Senin - Minggu: 10:00 - 22:00',
            phone: '+62 21 2358 0001',
            maps: 'https://maps.app.goo.gl/vVqFsZH4gyiMaX2d8'
        },
        'SAFFCOZZ - BANDUNG': {
            image: '../../assets/store locations/stores/HCI_SaffCoz-Store2.jpeg',
            address: 'Jl. Riau No. 105, Bandung',
            hours: 'Senin - Minggu: 10:00 - 21:00',
            phone: '+62 22 4267 0002',
            maps: 'https://maps.app.goo.gl/AU7HgXMGk4KZ7Jxk9'
        },
        'SAFFCOZZ - SEMARANG': {
            image: '../../assets/store locations/stores/HCI_SaffCoz-Store3.jpeg',
            address: 'Jl. Sukamadu 15, Semarang',
            hours: 'Senin - Minggu: 10:00 - 22:00',
            phone: '+62 82 8213 7121',
            maps: 'https://maps.app.goo.gl/aNzmYyXELmDqNhsEA'
        },
        'SAFFCOZZ - BALI': {
            image: '../../assets/store locations/stores/HCI_SaffCoz_Store4.jpeg',
            address: 'Jl. Mulia No. 21, Bali',
            hours: 'Senin - Sabtu: 08:00 - 22:00',
            phone: '+62 22 4267 0003',
            maps: 'https://maps.app.goo.gl/i4KUme6NjWMnosFT6'
        },
        'SAFFCOZZ - BALIKPAPAN': {
            image: '../../assets/store locations/stores/HCI_SaffCoz_Store5.jpeg',
            address: 'Jl. Sudirman No. 123, Balikpapan',
            hours: 'Senin - Minggu: 09:00 - 21:00',
            phone: '+62 54 2345 6789',
            maps: 'https://maps.app.goo.gl/TabbtkG2kY8rrdxE6'
        }
    };
    
    
    // Create store cards
    // function createStoreCards() {
    //     const storesGrid = document.querySelector('.stores-grid');
        
    //     for (const [storeName, storeInfo] of Object.entries(storeLocations)) {
    //         const storeCard = `
    //             <div class="store-card">
    //                 <img src="${storeInfo.image}" alt="${storeName}">
    //                 <div class="store-info">
    //                     <h2>${storeName}</h2>
    //                     <p>${storeInfo.address}</p>
    //                     <p>${storeInfo.hours}</p>
    //                     <p>${storeInfo.phone}</p>
    //                     <a href="${storeInfo.maps}" target="_blank" class="maps-link">View on Maps</a>
    //                 </div>
    //             </div>
    //         `;
    //         storesGrid.innerHTML += storeCard;
    //     }
    // }
    
    // function createStoreCards() {
    //     const storesGrid = document.querySelector('.stores-grid');
    //     storesGrid.innerHTML = ''; // Clear existing content
        
    //     for (const [storeName, storeInfo] of Object.entries(storeLocations)) {
    //         const storeCard = `
    //             <div class="store-card">
    //                 <img src="${storeInfo.image}" alt="${storeName}">
    //                 <div class="store-info">
    //                     <h2>${storeName}</h2>
    //                     <p>${storeInfo.address}</p>
    //                     <p>${storeInfo.hours}</p>
    //                     <p>${storeInfo.phone}</p>
    //                     <a href="${storeInfo.maps}" target="_blank" class="maps-link">View on Maps</a>
    //                 </div>
    //             </div>
    //         `;
    //         storesGrid.innerHTML += storeCard;
    //     }
    // }

    let showingAllStores = false;

function createStoreCards() {
    const storesGrid = document.querySelector('.stores-grid');
    storesGrid.innerHTML = '';
    
    const stores = Object.entries(storeLocations);
    const storesToShow = showingAllStores ? stores : stores.slice(0, 4);
    
    storesToShow.forEach(([storeName, storeInfo]) => {
        const storeCard = `
            <div class="store-card">
                <img src="${storeInfo.image}" alt="${storeName}">
                <div class="store-info">
                    <h2>${storeName}</h2>
                    <p>${storeInfo.address}</p>
                    <p>${storeInfo.hours}</p>
                    <p>${storeInfo.phone}</p>
                    <a href="${storeInfo.maps}" target="_blank" class="maps-link">LIHAT LOKASI</a>
                </div>
            </div>
        `;
        storesGrid.innerHTML += storeCard;
    });
}

document.querySelector('.more-stores-btn').addEventListener('click', () => {
    showingAllStores = true;
    createStoreCards();
    document.querySelector('.more-stores').style.display = 'none';
});


    document.addEventListener('DOMContentLoaded', createStoreCards);

    document.addEventListener('DOMContentLoaded', () => {
        console.log('Starting to create store cards');
        createStoreCards();
        console.log('Store cards created');
    });
    