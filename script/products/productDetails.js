document.addEventListener('DOMContentLoaded', () => {
    // Menu Toggle Function
    var menuItems = document.getElementById("menu-item");
    menuItems.style.maxHeight = "0px";
    
    window.menuToggle = function() {
        menuItems.style.maxHeight = menuItems.style.maxHeight === "0px" ? "200px" : "0px";
    }

    const productData = JSON.parse(localStorage.getItem('selectedProduct'));
    
    // Basic info population
    document.getElementById('product-img').src = productData.image;
    document.getElementById('product-name').textContent = productData.name;
    document.getElementById('product-description').textContent = productData.longDesc;
    
    // Enhanced price display logic
    const originalPriceElement = document.getElementById('original-price');
    const discountPriceElement = document.getElementById('product-price');

    if (productData.discountPrice) {
        // Show both prices for discounted items
        originalPriceElement.textContent = productData.originalPrice;
        discountPriceElement.textContent = productData.discountPrice;
    } else {
        // Show only regular price for non-discounted items
        originalPriceElement.style.display = 'none';
        discountPriceElement.textContent = productData.originalPrice;
    }

    // Populate details sections
    const populateList = (listId, items) => {
        const element = document.getElementById(listId);
        element.textContent = items.join(', ');
    };

    populateList('scent-list', productData.details.scent);
    populateList('notes-list', productData.details.notes);
    populateList('size-list', productData.details.size);

    // Section toggle functionality
    document.querySelectorAll('.section-header').forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            const toggleBtn = header.querySelector('.toggle-btn');
            content.style.display = content.style.display === 'none' ? 'block' : 'none';
            toggleBtn.textContent = content.style.display === 'none' ? '+' : '-';
        });
    });

    // Sticky navbar
    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            document.querySelector('.navbar').classList.add('sticky');
        } else {
            document.querySelector('.navbar').classList.remove('sticky');
        }
    };
});
