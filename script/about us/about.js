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

    // Animated Counter
    const counters = document.querySelectorAll('.number');
    const speed = 200;

counters.forEach(counter => {
    const animate = () => {
        const value = +counter.getAttribute('data-target');
        const data = +counter.innerText;
        
        const time = value / speed;
        
        if(data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 1);
        } else {
            counter.innerText = value;
        }
    }
    animate();
});

// Scroll Animation
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if(sectionTop < windowHeight * 0.75) {
            section.classList.add('active');
        }
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const productDetails = {
    'BLOSSOM ELEGANCE': {
        originalPrice: "Rp450.000",
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
        originalPrice: "Rp680.000",
        longDesc: "Golden Essence menghadirkan kemewahan dalam setiap semprotan, dengan aroma yang memikat dari jasmine lembut, amber hangat, dan sentuhan sandalwood yang elegan. Aroma ini menciptakan kesan yang abadi dan memikat, cocok untuk mereka yang ingin tampil berkelas sepanjang hari.",
        details: {
            scent: ["Floral woody oriental"],
            notes: ["Jasmine", "Amber", "Sandalwood", "Musk", "Cedar"],
            size: ["30ml/1 oz"]
        }
    },
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
    'VELVET ROSE': {
        originalPrice: "Rp850.000",
        longDesc: "Velvet Rose memberikan kesan mewah dengan kombinasi kelopak mawar Damask, vanilla hitam yang manis, dan musk putih. Aroma sensual ini sempurna untuk malam romantis.",
        details: {
            scent: ["Floral oriental"],
            notes: ["Damask Rose", "Black Vanilla", "White Musk", "Amber", "Pink Pepper"],
            size: ["75ml/2.5 oz"]
        }
    },
    'HERBIFY SENSE': {
        originalPrice: "Rp550.000",
        longDesc: "Herbify Sense menyatukan keharuman herbal dengan ekstrak kayu manis yang memberikan sensasi relaksasi namun tetap berkarakter. Cocok untuk mereka yang menyukai aroma alami dan santai.",
        details: {
            scent: ["Herbal spicy"],
            notes: ["Cinnamon", "Clary Sage", "Thyme", "Lavender", "Oakmoss"],
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
    'LOVELY ROSES': {
        originalPrice: "Rp820.000",
        longDesc: "Lovely Roses adalah keharuman romantis dengan kombinasi mawar merah yang segar, bunga melati yang lembut, dan kehangatan musk. Aroma ini sempurna untuk momen spesial.",
        details: {
            scent: ["Floral romantic"],
            notes: ["Red Rose", "Jasmine", "White Musk", "Amber", "Peony"],
            size: ["60ml/2 oz"]
        }
    },
    'ROYAL IRIS': {
        originalPrice: "Rp590.000",
        longDesc: "Royal Iris menghadirkan kemewahan dengan aroma bunga iris yang elegan, violet yang lembut, dan kehangatan amber. Aroma ini memancarkan keanggunan sejati.",
        details: {
            scent: ["Floral powdery"],
            notes: ["Iris", "Violet", "Amber", "Musk", "Tonka Bean"],
            size: ["40ml/1.35 oz"]
        }
    },
    'SAFFRON NOIR': {
        originalPrice: "Rp750.000",
        longDesc: "Saffron Noir adalah parfum yang memikat dengan aroma saffron yang kaya, blackberry yang manis, dan leather yang kuat, ditutup dengan sentuhan vanilla bourbon.",
        details: {
            scent: ["Oriental spicy"],
            notes: ["Saffron", "Blackberry", "Leather", "Vanilla Bourbon", "Oud"],
            size: ["50ml/1.7 oz"]
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

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.scent-card').forEach(card => {
        card.addEventListener('click', () => {
            const productName = card.getAttribute('data-product');
            const productData = {
                name: productName,
                image: card.querySelector('img').src,
                price: productDetails[productName].price,
                longDesc: productDetails[productName].longDesc,
                details: productDetails[productName].details
            };
            
            localStorage.setItem('selectedProduct', JSON.stringify(productData));
            window.location.href = '../products page/productDetails.html';
        });
    });
});


// Add hover effect styles
document.querySelectorAll('.scent-card').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.transition = 'transform 0.3s ease';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});


// Product Click Handler
function initProductClicks() {
    document.querySelectorAll('.scent-card').forEach(card => {
        card.addEventListener('click', () => {
            const productName = card.getAttribute('data-product');
            const productData = {
                name: productName,
                image: card.querySelector('img').src,
                originalPrice: productDetails[productName].originalPrice,
                longDesc: productDetails[productName].longDesc,
                details: productDetails[productName].details
            };
            
            localStorage.setItem('selectedProduct', JSON.stringify(productData));
            window.location.href = '../products page/productDetails.html';
        });

        // Hover effects
        card.style.cursor = 'pointer';
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

// Initialize product clicks when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initProductClicks();
}); 