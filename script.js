// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        // Animate hamburger menu
        const spans = mobileMenuBtn.querySelectorAll('span');
        if (navLinks.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// Navbar background and size change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const productsGlassNav = document.querySelector('.products-glass-nav');

    if (navbar) {
        if (window.scrollY > 20) {
            navbar.style.background = 'rgba(0, 0, 0, 0.4)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.15)';
        }
    }

    if (productsGlassNav) {
        if (window.scrollY > 50) {
            productsGlassNav.classList.add('scrolled');
        } else {
            productsGlassNav.classList.remove('scrolled');
        }
    }
});

// Product Data for Modal
const productData = {
    'SUPER SHAKTI GRANULAR': {
        category: '(Granulated SSP)',
        description: 'SUPER SHAKTI GRANULAR is a high-quality Granulated Single Super Phosphate (SSP) fertilizer, designed to enhance phosphorus and sulphur availability for crops. With a minimum 16% available P2O5 and 11% sulphate sulphur, it ensures better root development and higher yields. The granulated form improves nutrient absorption and soil conditioning, making it ideal for all types of crops and soil conditions.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Water Soluble P2O5 min. : 14.5',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'SUPER SHAKTI': {
        category: '(Powdered SSP)',
        description: 'SUPER SHAKTI is a premium quality Single Super Phosphate (SSP) fertilizer in powdered form. It provides essential phosphorus and sulphur nutrients to crops, promoting vigorous root development and improved flowering. Ideal for basal application in all types of soil and crops.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Water Soluble P2O5 min. : 14.5',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'ZEBON': {
        category: '(Zincated SSP)',
        description: 'ZEBON is a Zincated Single Super Phosphate fertilizer enriched with zinc, an essential micronutrient. It addresses zinc deficiency in soil and crops while providing phosphorus and sulphur. Zinc plays a crucial role in enzyme activation, protein synthesis, and growth regulation.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Zinc (as Zn) min. : 2.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'MAGICON': {
        category: '(Magnesium Enriched SSP)',
        description: 'MAGICON is a Magnesium-enriched Single Super Phosphate fertilizer. Magnesium is the central atom of chlorophyll and is essential for photosynthesis. This product ensures healthy green foliage and improved crop quality alongside phosphorus and sulphur nutrition.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Magnesium (as MgO) min. : 2.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'ZINCPHOS SUPER': {
        category: '(Zinc Phosphated SSP)',
        description: 'ZINCPHOS SUPER is a specially formulated fertilizer combining the benefits of phosphorus, sulphur, and zinc. It is designed for crops that require higher zinc availability. The balanced nutrient profile ensures optimal growth and yield in zinc-deficient soils.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Zinc (as Zn) min. : 2.5',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'BOROKING SUPER': {
        category: '(Boron Enriched SSP)',
        description: 'BOROKING SUPER is a Boron-enriched Single Super Phosphate fertilizer. Boron is vital for cell wall formation, pollen tube growth, and fruit development. This product is ideal for crops like cotton, sugarcane, and fruits that have high boron requirements.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Boron (as B) min. : 0.5',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'ZEFON': {
        category: '(Zinc & Iron Enriched SSP)',
        description: 'ZEFON is a multi-micronutrient enriched SSP fertilizer containing zinc and iron. Iron is essential for chlorophyll synthesis and enzyme function. This product addresses multiple micronutrient deficiencies simultaneously for healthier crop growth.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Zinc (as Zn) min. : 2.0',
            'Iron (as Fe) min. : 1.0',
            'Sulphate Sulphur min. : 11.0'
        ]
    },
    'UREASUPER': {
        category: '(Urea Blended SSP)',
        description: 'UREASUPER is a unique blend of Single Super Phosphate with Urea, providing both nitrogen and phosphorus in a single application. This combination ensures balanced nutrition for crops, reduces application cost, and improves nutrient use efficiency.',
        specs: [
            'Total Nitrogen (N) min. : 10.0',
            'Available P2O5 min. : 10.0',
            'Sulphate Sulphur min. : 7.0',
            'Moisture max. : 5.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 9': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 9 is a specialty fertilizer formulated for specific crop requirements. It provides balanced nutrition with essential macro and micronutrients for optimal plant growth and development.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 10': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 10 is a premium specialty fertilizer designed to meet the nutritional demands of high-value crops. Its unique formulation ensures sustained nutrient release and improved crop performance.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 11': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 11 is an advanced fertilizer blend that provides comprehensive nutrition for a wide range of crops. Its balanced nutrient profile supports healthy growth from root to shoot.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 12': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 12 is a high-performance fertilizer designed for intensive farming. It delivers essential nutrients efficiently, ensuring maximum crop yield and quality.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 13': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 13 is a quality fertilizer product suitable for a variety of field crops. It ensures proper nutrient availability throughout the growing season for consistent growth.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 14': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 14 is a specially formulated fertilizer for crops requiring enhanced phosphorus nutrition. Its granular form ensures easy application and uniform nutrient distribution.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 15': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 15 is a nutrient-rich fertilizer designed for balanced crop nutrition. It supports strong root development, vigorous vegetative growth, and improved flowering and fruiting.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 16': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 16 is a premium grade fertilizer with enhanced nutrient availability. It is suitable for all soil types and ensures optimal crop performance under varying field conditions.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 17': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 17 is a high-quality fertilizer product that provides essential nutrients for crop growth. Its formulation is optimized for maximum nutrient uptake and utilization by plants.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 18': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 18 is a reliable fertilizer for field application, providing balanced macro and micro nutrient supply. It enhances soil fertility and promotes sustainable crop production.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 19': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 19 is an innovative fertilizer product designed for modern farming practices. It combines traditional nutrient sources with advanced formulation technology for superior results.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 20': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 20 is a versatile fertilizer suitable for a wide range of crops and soil conditions. Its balanced nutrient composition ensures healthy plant growth and improved yield.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 21': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 21 is a quality-assured fertilizer product that delivers consistent performance across different agro-climatic zones. It supports sustainable agriculture and improved farm productivity.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 22': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 22 is a specially crafted fertilizer for crops in nutrient-depleted soils. It replenishes essential nutrients and restores soil health for long-term productivity.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 23': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 23 is a high-efficacy fertilizer designed for precision agriculture. Its nutrient release pattern matches crop demand, minimizing losses and maximizing uptake.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 24': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 24 is a trusted fertilizer product that provides reliable nutrition for field crops. Its consistent quality ensures predictable results season after season.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 25': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 25 is an eco-friendly fertilizer formulation that supports sustainable farming. It enhances nutrient use efficiency while minimizing environmental impact.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 26': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 26 is a premium crop nutrition product designed for high-value horticultural crops. It ensures superior produce quality and extended shelf life.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 27': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 27 is a multi-nutrient fertilizer that addresses complex crop nutritional needs. Its comprehensive formula ensures no nutrient deficiency limits crop potential.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 28': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 28 is a field-tested fertilizer proven to deliver excellent results across diverse growing conditions. It is trusted by farmers for its consistent quality and performance.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 29': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 29 is an advanced crop nutrition solution that combines traditional fertilizer benefits with modern technology. It is designed for progressive farmers seeking maximum returns.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 30': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 30 is a quality fertilizer that provides balanced nutrition for optimal crop growth. Its formulation is backed by extensive research and field trials.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 31': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 31 is a specialized fertilizer product formulated for specific soil and crop conditions. It delivers targeted nutrition for maximum agronomic benefit.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 32': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 32 is a high-grade fertilizer designed for commercial farming operations. It ensures uniform nutrient distribution and reliable crop response across large areas.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 33': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 33 is a premium quality fertilizer that supports intensive crop production. Its advanced formulation ensures efficient nutrient delivery and superior crop performance.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 34': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 34 is a scientifically developed fertilizer for modern agricultural needs. It provides complete nutrition for healthy crop growth and improved farm profitability.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 35': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 35 is a trusted fertilizer brand that delivers consistent results. It is suitable for all major field crops and ensures balanced nutrition throughout the growth cycle.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 36': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 36 is an innovative fertilizer product with enhanced nutrient availability. It is designed to meet the demands of high-yielding crop varieties and intensive farming systems.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 37': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 37 is a comprehensive crop nutrition product that addresses all major nutrient requirements. Its balanced formula ensures healthy growth and maximum yield potential.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 38': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 38 is a performance-oriented fertilizer designed for results-driven farming. It combines quality ingredients with advanced processing for superior nutrient delivery.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 39': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 39 is a premium crop nutrition solution for discerning farmers. It provides targeted nutrient delivery for specific crop stages and requirements.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    },
    'PRODUCT 40': {
        category: '(Specialty Fertilizer)',
        description: 'PRODUCT 40 is a top-tier fertilizer product representing the best in crop nutrition technology. It ensures maximum yield and quality while supporting sustainable agricultural practices.',
        specs: [
            'Moisture max. : 5.0',
            'Available P2O5 min. : 16.0',
            'Sulphate Sulphur min. : 11.0',
            'Free Phosphoric Acid P2O5 max. : 4.0'
        ]
    }
};

// Modal Elements
const modal = document.getElementById('productModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalDescription = document.getElementById('modalDescription');
const modalSpecs = document.getElementById('modalSpecs');
const closeModal = document.querySelector('.close-modal');

// Open Modal Function
function openProductModal(productName, imgSrc) {
    const data = productData[productName] || {
        category: '',
        description: 'Description not available for this product.',
        specs: []
    };

    modalImg.src = imgSrc;
    modalTitle.textContent = productName;
    modalCategory.textContent = data.category;
    modalDescription.textContent = data.description;
    
    // Clear and populate specs
    modalSpecs.innerHTML = '';
    data.specs.forEach(spec => {
        const li = document.createElement('li');
        li.textContent = spec;
        modalSpecs.appendChild(li);
    });

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

// Close Modal Function
if (closeModal) {
    closeModal.onclick = function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };
}

// Close on outside click
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
};

// Add click listeners to product cards
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        const name = card.querySelector('.product-label').textContent;
        const img = card.querySelector('img').getAttribute('src');
        // Navigate to the separate detail page with parameters
        window.location.href = `product-detail.html?name=${encodeURIComponent(name)}&img=${encodeURIComponent(img)}`;
    });
});

// Know More button click event
const knowMoreBtn = document.querySelector('.know-more-btn');
if (knowMoreBtn) {
    knowMoreBtn.addEventListener('click', () => {
        const aboutSection = document.querySelector('.about-section');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Products Carousel
const carouselTrack = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slides = document.querySelectorAll('.carousel-slide');

if (carouselTrack && prevBtn && nextBtn && slides.length > 0) {
    const slideWidth = 230; // 200px card + 30px gap
    const visibleSlides = 3;
    const scrollAmount = slideWidth * visibleSlides; // Scroll 3 cards at a time
    const maxScroll = carouselTrack.scrollWidth - carouselTrack.clientWidth;
    let autoScrollInterval;
    const autoScrollDelay = 5000; // 5 seconds

    function updateActiveSlides() {
        const scrollLeft = carouselTrack.scrollLeft;
        const currentGroup = Math.round(scrollLeft / scrollAmount);
        
        slides.forEach((slide, index) => {
            // Active if in current visible group
            const isActive = index >= currentGroup * visibleSlides && index < (currentGroup + 1) * visibleSlides;
            slide.classList.toggle('active', isActive);
        });
    }

    function scrollNext() {
        const currentScroll = carouselTrack.scrollLeft;
        const maxScrollLeft = carouselTrack.scrollWidth - carouselTrack.clientWidth;
        
        if (currentScroll >= maxScrollLeft - 10) {
            // Reset to beginning when reaching the end
            carouselTrack.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            carouselTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
        setTimeout(updateActiveSlides, 300);
    }

    function startAutoScroll() {
        autoScrollInterval = setInterval(scrollNext, autoScrollDelay);
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    prevBtn.addEventListener('click', () => {
        carouselTrack.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        setTimeout(updateActiveSlides, 300);
        stopAutoScroll();
        startAutoScroll();
    });

    nextBtn.addEventListener('click', () => {
        carouselTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        setTimeout(updateActiveSlides, 300);
        stopAutoScroll();
        startAutoScroll();
    });

    // Pause auto-scroll on hover
    carouselTrack.addEventListener('mouseenter', stopAutoScroll);
    carouselTrack.addEventListener('mouseleave', startAutoScroll);

    // Initialize first 3 slides as active
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index < visibleSlides);
    });

    // Start auto-scroll
    startAutoScroll();
}

// Blur body background when Products section is visible only
window.addEventListener('scroll', () => {
    const productsSection = document.querySelector('.products-section');
    if (productsSection) {
        const rect = productsSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
            document.body.classList.add('products-section-active');
        } else {
            document.body.classList.remove('products-section-active');
        }
    }
});

