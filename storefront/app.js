// FolliRoot Labs - Storefront Interactivity & Conversion Engine

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Estimated Delivery Date (Order today -> Delivers in 6-8 days)
  const deliveryDateEl = document.getElementById('dynamic-delivery-date');
  if (deliveryDateEl) {
    const today = new Date();
    const deliveryStart = new Date(today);
    deliveryStart.setDate(today.getDate() + 6);
    const deliveryEnd = new Date(today);
    deliveryEnd.setDate(today.getDate() + 9);

    const options = { month: 'short', day: 'numeric' };
    const dateStr = `${deliveryStart.toLocaleDateString('en-US', options)} – ${deliveryEnd.toLocaleDateString('en-US', options)}`;
    deliveryDateEl.textContent = dateStr;
  }

  // 2. FAQ Accordion Logic
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 3. Thumbnail Gallery Switcher
  const thumbnails = document.querySelectorAll('.thumbnail-item');
  const mainImage = document.getElementById('main-product-img');
  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbnails.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const newSrc = thumb.getAttribute('data-img');
      if (newSrc && mainImage) {
        mainImage.setAttribute('src', newSrc);
      }
    });
  });

  // 4. Sticky Mobile Add-to-Cart Trigger
  const mainCta = document.getElementById('main-cta-btn');
  const stickyBar = document.getElementById('sticky-mobile-bar');

  if (mainCta && stickyBar) {
    window.addEventListener('scroll', () => {
      const rect = mainCta.getBoundingClientRect();
      if (rect.bottom < 0) {
        stickyBar.style.display = 'flex';
      } else {
        stickyBar.style.display = 'none';
      }
    });
  }

  // 5. Checkout Action Handler
  const buyButtons = document.querySelectorAll('.trigger-checkout');
  buyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // Stage 1: Trigger PayPal / Razorpay International Checkout or alert guidance
      const originalText = btn.innerHTML;
      btn.innerHTML = `<span>Redirecting to Encrypted 256-bit Checkout...</span>`;
      btn.style.opacity = '0.8';

      setTimeout(() => {
        // In live production, replace with:
        // window.location.href = "https://buy.stripe.com/..." OR window.paypal.Buttons()
        alert("Redirecting to Secure 256-Bit Payment Gateway (PayPal / Razorpay / Stripe).\n\nIn testing mode: Link your PayPal Business or Stripe payment link in app.js.");
        btn.innerHTML = originalText;
        btn.style.opacity = '1';
      }, 800);
    });
  });
});
