// THRIFT BETTER - Main JavaScript
// Handles all interactive functionality

// ============================================
// NAVIGATION - Mobile Menu Toggle
// ============================================
function initNavigation() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
      menuToggle.textContent = nav.classList.contains('active') ? '✕' : '☰';
    });

    // Close menu on link click
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
        menuToggle.textContent = '☰';
      });
    });
  }
}

// ============================================
// ACCORDION - FAQ Functionality
// ============================================
function initAccordion() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', () => {
      // Close other open items
      accordionItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });

      // Toggle current item
      item.classList.toggle('active');
    });
  });
}

// ============================================
// LIGHTBOX - Image Modal
// ============================================
function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxClose = document.querySelector('.lightbox-close');
  const itemImages = document.querySelectorAll('.item-image img');

  if (!lightbox) return;

  itemImages.forEach(image => {
    image.addEventListener('click', (e) => {
      lightbox.classList.add('active');
      lightboxImage.src = image.src;
      lightboxImage.alt = image.alt;
      document.body.style.overflow = 'hidden';
    });
  });

  lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });

  // Keyboard close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      lightbox.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });
}

// ============================================
// FORMS - Handling Submissions
// ============================================
function initForms() {
  // Newsletter Form
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector('input[type="email"]');
      showNotification('Thanks for subscribing!', 'success');
      email.value = '';
    });
  }

  // Consign Form
  const consignForm = document.getElementById('consign-form');
  if (consignForm) {
    consignForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showNotification('Your submission has been received! We\'ll get back to you soon.', 'success');
      consignForm.reset();
    });
  }

  // Contact Form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showNotification('Message sent! We\'ll be in touch.', 'success');
      contactForm.reset();
    });
  }

  // Enquiry Modal (if exists)
  const enquiryForm = document.getElementById('enquiry-form');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showNotification('Enquiry sent! Check your email.', 'success');
      enquiryForm.reset();
      closeEnquiryModal();
    });
  }
}

// ============================================
// FILE UPLOAD
// ============================================
function initFileUpload() {
  const fileUploadAreas = document.querySelectorAll('.file-upload');

  fileUploadAreas.forEach(area => {
    const input = area.querySelector('input[type="file"]');

    area.addEventListener('click', () => input.click());

    // Drag and drop
    area.addEventListener('dragover', (e) => {
      e.preventDefault();
      area.style.borderColor = 'var(--accent-moss)';
      area.style.backgroundColor = 'var(--bg-primary)';
    });

    area.addEventListener('dragleave', () => {
      area.style.borderColor = 'var(--border-light)';
      area.style.backgroundColor = 'var(--bg-secondary)';
    });

    area.addEventListener('drop', (e) => {
      e.preventDefault();
      area.style.borderColor = 'var(--border-light)';
      area.style.backgroundColor = 'var(--bg-secondary)';

      const files = e.dataTransfer.files;
      if (files.length > 0) {
        input.files = files;
        updateFileUploadDisplay(area, files);
      }
    });

    input.addEventListener('change', () => {
      if (input.files.length > 0) {
        updateFileUploadDisplay(area, input.files);
      }
    });
  });
}

function updateFileUploadDisplay(area, files) {
  const fileNames = Array.from(files)
    .map(f => f.name)
    .join(', ');
  
  const text = area.querySelector('.file-upload-text');
  if (text) {
    text.innerHTML = `📁 ${fileNames}`;
  }
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 16px 24px;
    background-color: ${type === 'success' ? 'var(--accent-moss)' : 'var(--accent-terracotta)'};
    color: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 3000;
    animation: slideInLeft 0.3s ease-out;
    max-width: 300px;
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'fadeIn 0.3s ease-out reverse';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// ============================================
// ENQUIRY MODAL (For Curations Page)
// ============================================
function initEnquiryModal() {
  const enquiryButtons = document.querySelectorAll('.enquiry-btn');
  const enquiryModal = document.getElementById('enquiry-modal');
  const closeBtn = document.querySelector('.modal-close');

  if (!enquiryModal) return;

  enquiryButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const itemName = btn.closest('.item-card').querySelector('.item-name').textContent;
      const itemInput = enquiryModal.querySelector('input[name="item"]');
      if (itemInput) {
        itemInput.value = itemName;
      }
      enquiryModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  closeBtn?.addEventListener('click', closeEnquiryModal);

  enquiryModal?.addEventListener('click', (e) => {
    if (e.target === enquiryModal) {
      closeEnquiryModal();
    }
  });
}

function closeEnquiryModal() {
  const enquiryModal = document.getElementById('enquiry-modal');
  if (enquiryModal) {
    enquiryModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
}

// ============================================
// LAZY LOADING - Fade-in on Scroll
// ============================================
function initLazyLoading() {
  const elements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

// ============================================
// SMOOTH SCROLL ANCHOR LINKS
// ============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#') return;

      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ============================================
// LOAD CMS DATA
// ============================================
async function loadCMSData(dataType) {
  try {
    const response = await fetch(`data/${dataType}.json`);
    if (!response.ok) throw new Error('Data not found');
    return await response.json();
  } catch (error) {
    console.warn(`Could not load ${dataType}.json:`, error);
    // Return fallback data
    if (dataType === 'curations') {
      return getFallbackCurations();
    } else if (dataType === 'faqs') {
      return getFallbackFAQs();
    }
    return null;
  }
}

// ============================================
// FALLBACK DATA
// ============================================
function getFallbackCurations() {
  return {
    items: [
      {
        id: 1,
        name: "Vintage Leather Jacket",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%23d4c4b6' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='14' fill='%23666' text-anchor='middle' dy='.3em'%3EVintage Leather Jacket%3C/text%3E%3C/svg%3E",
        story: "Buttery soft leather from the 90s. Perfectly aged with character. Pairs with everything.",
        condition: "Excellent",
        style: "Timeless",
        price: "$45"
      },
      {
        id: 2,
        name: "Floral Midi Dress",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%23e8dcd3' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='14' fill='%23666' text-anchor='middle' dy='.3em'%3EFloral Midi Dress%3C/text%3E%3C/svg%3E",
        story: "Spring vibes in a 70s-inspired print. Lightweight linen. Perfect for picnics.",
        condition: "Like New",
        style: "Romantic",
        price: "$32"
      },
      {
        id: 3,
        name: "Wide Leg Trousers",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%23d0c7bd' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='14' fill='%23666' text-anchor='middle' dy='.3em'%3EWide Leg Trousers%3C/text%3E%3C/svg%3E",
        story: "High-waisted, chic, and oh-so-comfortable. Pleated front detail. True 80s glamour.",
        condition: "Very Good",
        style: "Minimalist",
        price: "$28"
      },
      {
        id: 4,
        name: "Oversized Denim Shirt",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%23c5b5a8' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='14' fill='%23666' text-anchor='middle' dy='.3em'%3EOversized Denim Shirt%3C/text%3E%3C/svg%3E",
        story: "The ultimate thrift find. Perfect faded blue. Wear it oversized or tucked.",
        condition: "Good",
        style: "Casual",
        price: "$24"
      },
      {
        id: 5,
        name: "Silk Slip Dress",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%23e5d5ca' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='14' fill='%23666' text-anchor='middle' dy='.3em'%3ESilk Slip Dress%3C/text%3E%3C/svg%3E",
        story: "Champagne silk in a delicate bias cut. Effortlessly elegant. Layer it or wear alone.",
        condition: "Excellent",
        style: "Chic",
        price: "$38"
      },
      {
        id: 6,
        name: "Vintage Band Tee",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400'%3E%3Crect fill='%23bfb1a5' width='300' height='400'/%3E%3Ctext x='50%25' y='50%25' font-size='14' fill='%23666' text-anchor='middle' dy='.3em'%3EVintage Band Tee%3C/text%3E%3C/svg%3E",
        story: "Rare 90s concert tee. Authentic vintage vibes. Soft, worn-in feel.",
        condition: "Good",
        style: "Edgy",
        price: "$52"
      }
    ]
  };
}

function getFallbackFAQs() {
  return {
    items: [
      {
        question: "What exactly is thrifting?",
        answer: "Thrifting is shopping for secondhand clothes and goods—usually at thrift stores, vintage shops, or online platforms. You're buying pre-loved items instead of new, which saves money and is way better for the planet."
      },
      {
        question: "Why should I thrift instead of fast fashion?",
        answer: "Thrifting means unique pieces no one else has, saving money, and reducing waste. Fast fashion is designed to fall apart, but thrifted pieces are built to last. Plus, you're supporting sustainable fashion without the guilt."
      },
      {
        question: "How do I know if something is good quality?",
        answer: "Check the fabric content, inspect seams and zippers, and feel the material. Natural fabrics like cotton, linen, and wool last longer. Look for solid construction and minimal damage. Trust your instincts—if it feels cheap, it probably is."
      },
      {
        question: "Is thrifting only for vintage clothes?",
        answer: "Nope! Thrifting includes vintage, but also modern secondhand pieces. You'll find designer items, high-street brands, and hidden gems all mixed in. The fun is in the hunt."
      },
      {
        question: "What sizes do thrift stores usually carry?",
        answer: "It varies. Most carry a range, but inventory is always different. That's why thrifting is an adventure—you might find XS or XXXL depending on the day. The key is patience and checking regularly."
      },
      {
        question: "Can I really find luxury brands while thrifting?",
        answer: "100%. People donate designer bags, shoes, and clothes all the time. You'll need patience and an eye for spotting them, but luxury secondhand is absolutely real and way cheaper."
      }
    ]
  };
}

// ============================================
// POPULATE CURATIONS FROM CMS
// ============================================
async function populateCurations() {
  const curationsContainer = document.getElementById('curations-container');
  if (!curationsContainer) return;

  const curations = await loadCMSData('curations');
  if (!curations) return;

  curationsContainer.innerHTML = curations.items.map(item => `
    <div class="item-card fade-in">
      <div class="item-image">
        <img src="${item.image}" alt="${item.name}" />
      </div>
      <div class="item-details">
        <h3 class="item-name">${item.name}</h3>
        <p class="item-story">${item.story}</p>
        <div class="item-meta">
          <span class="item-condition">${item.condition}</span>
          <span class="item-style">${item.style}</span>
        </div>
        <button class="btn btn-secondary enquiry-btn">Enquire About This</button>
      </div>
    </div>
  `).join('');

  // Re-initialize interactions
  initLightbox();
  initEnquiryModal();
  initLazyLoading();
}

// ============================================
// POPULATE FAQ FROM CMS
// ============================================
async function populateFAQ() {
  const faqContainer = document.getElementById('faq-container');
  if (!faqContainer) return;

  const faqs = await loadCMSData('faqs');
  if (!faqs) return;

  faqContainer.innerHTML = faqs.items.map((item, index) => `
    <div class="accordion-item">
      <button class="accordion-header">
        <span>${item.question}</span>
        <span class="accordion-icon"></span>
      </button>
      <div class="accordion-content">
        <p class="accordion-text">${item.answer}</p>
      </div>
    </div>
  `).join('');

  initAccordion();
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initAccordion();
  initLightbox();
  initForms();
  initFileUpload();
  initEnquiryModal();
  initLazyLoading();
  initSmoothScroll();

  // Load CMS data on relevant pages
  if (document.getElementById('curations-container')) {
    populateCurations();
  }
  
  if (document.getElementById('faq-container')) {
    populateFAQ();
  }
});
