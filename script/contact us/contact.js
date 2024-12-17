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

    function validateForm() {
        let isValid = true;
        
        // 1. Name Validation (minimum 3 characters, no numbers)
        const name = document.getElementById('fullName').value;
        if (name.length < 3) {
            document.getElementById('nameError').textContent = 'Name must be at least 3 characters long';
            isValid = false;
        } else if (containsNumbers(name)) {
            document.getElementById('nameError').textContent = 'Name cannot contain numbers';
            isValid = false;
        } else {
            document.getElementById('nameError').textContent = '';
        }
    
        // 2. Email Validation (must contain @ and .)
        const email = document.getElementById('email').value;
        if (!email.includes('@') || !email.includes('.')) {
            document.getElementById('emailError').textContent = 'Please enter a valid email address';
            isValid = false;
        } else {
            document.getElementById('emailError').textContent = '';
        }
    
        // 3. Phone Validation (minimum 10 digits, numbers only)
        const phone = document.getElementById('phone').value;
        if (phone.length < 10 || !containsOnlyNumbers(phone)) {
            document.getElementById('phoneError').textContent = 'Please enter a valid phone number (minimum 10 digits)';
            isValid = false;
        } else {
            document.getElementById('phoneError').textContent = '';
        }
    
        // 4. Gender Validation (must select one)
        const gender = document.querySelector('input[name="gender"]:checked');
        if (!gender) {
            document.getElementById('genderError').textContent = 'Please select your gender';
            isValid = false;
        } else {
            document.getElementById('genderError').textContent = '';
        }
    
        // 5. Newsletter Validation (optional but tracked)
        const newsletter = document.getElementById('newsletter').checked;
        
        if (isValid) {
            // Store form data
            const formData = {
                name: name,
                email: email,
                phone: phone,
                gender: gender.value,
                newsletter: newsletter
            };
            
            // Clear the form
            document.getElementById('contactForm').reset();
            
            // Show success message
            showSuccessMessage();
        }
    
        return false; // Prevent actual form submission
    }
    
    // Helper functions
    function containsNumbers(str) {
        for (let char of str) {
            if (!isNaN(parseInt(char))) return true;
        }
        return false;
    }
    
    function containsOnlyNumbers(str) {
        for (let char of str) {
            if (isNaN(parseInt(char))) return false;
        }
        return true;
    }

    
    function showSuccessMessage() {
        // Create success message element
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.innerHTML = `
            <h4>Terimakasih telah menghubungi kami!</h4>
            <p>Pesan anda telah disampaikan</p>
        `;
        
        // Insert before the form
        const form = document.getElementById('contactForm');
        form.parentNode.insertBefore(successDiv, form);
        
        // Scroll to message
        successDiv.scrollIntoView({ behavior: 'smooth' });
        
        // Remove message after 5 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }
    