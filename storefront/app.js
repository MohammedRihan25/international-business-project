// FolliRoot Labs - Kinetic Storefront Interactivity & Conversion Engine
// Powered by React Bits & MotionSites Interactive Patterns

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Delivery Date (Today + 5 to 7 days)
  const deliveryDateEl = document.getElementById('dynamic-delivery-date');
  if (deliveryDateEl) {
    const today = new Date();
    const deliveryStart = new Date(today);
    deliveryStart.setDate(today.getDate() + 5);
    const deliveryEnd = new Date(today);
    deliveryEnd.setDate(today.getDate() + 8);

    const options = { month: 'short', day: 'numeric' };
    const dateStr = `${deliveryStart.toLocaleDateString('en-US', options)} – ${deliveryEnd.toLocaleDateString('en-US', options)}`;
    deliveryDateEl.textContent = dateStr;
  }

  // 2. Interactive 3-in-1 Treatment Mode Switcher
  const modeButtons = document.querySelectorAll('.mode-btn');
  const modeDescBox = document.getElementById('mode-desc');
  const badgeText = document.getElementById('badge-text');
  const redLightAura = document.getElementById('red-light-aura');

  const modeData = {
    redlight: {
      title: "650nm Red Light Active",
      badgeColor: "pulse-red",
      desc: "<strong>🔴 Medical-Grade 650nm Diode Array:</strong> Emits targeted photonic wavelengths directly to dermal papilla, energizing cellular mitochondria and awakening sluggish follicles without scalp heat.",
      auraBg: "radial-gradient(circle, rgba(255, 56, 92, 0.5) 0%, rgba(255, 56, 92, 0.15) 50%, transparent 75%)"
    },
    sonic: {
      title: "10,000 RPM Sonic Wave Active",
      badgeColor: "pulse-red",
      desc: "<strong>⚡ High-Frequency Micro-Vibration:</strong> 10,000 soothing pulses per minute relax scalp tension, unblock micro-channels, and dramatically boost nutrient delivery to root bulbs.",
      auraBg: "radial-gradient(circle, rgba(245, 158, 11, 0.45) 0%, rgba(245, 158, 11, 0.12) 50%, transparent 75%)"
    },
    touchless: {
      title: "Touchless Roll-Out Dispenser Active",
      badgeColor: "pulse-red",
      desc: "<strong>💧 Roll-Out Dispenser Teeth:</strong> Smooth alloy balls part hair effortlessly and dispense exact micro-doses directly onto roots only when gently pressed. Zero greasy hair shafts, zero oily pillowcases.",
      auraBg: "radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(16, 185, 129, 0.12) 50%, transparent 75%)"
    }
  };

  modeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      modeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.getAttribute('data-mode');
      if (modeData[mode]) {
        modeDescBox.innerHTML = modeData[mode].desc;
        if (badgeText) badgeText.textContent = modeData[mode].title;
        if (redLightAura) redLightAura.style.background = modeData[mode].auraBg;
      }
    });
  });

  // 3. React Bits Interactive Spotlight Cursor Tracking on Feature Cards
  const spotlightCards = document.querySelectorAll('.spotlight-card');
  spotlightCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // 4. Smooth Kinetic Count-Up Animation for Stats & Reviews
  const countUpElements = document.querySelectorAll('.count-up');
  const countObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        if (!isNaN(target)) {
          let current = 0;
          const duration = 1600;
          const stepTime = 25;
          const totalSteps = duration / stepTime;
          const increment = target / totalSteps;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              el.textContent = target.toLocaleString('en-US');
              clearInterval(timer);
            } else {
              el.textContent = Math.floor(current).toLocaleString('en-US');
            }
          }, stepTime);
        }
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.25 });

  countUpElements.forEach(el => countObserver.observe(el));

  // 5. 7-Angle Thumbnail Switcher with Cross-Fade
  const thumbnails = document.querySelectorAll('.thumbnail-item');
  const mainImage = document.getElementById('main-product-img');
  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
      thumbnails.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      const newSrc = thumb.getAttribute('data-img');
      if (newSrc && mainImage && mainImage.getAttribute('src') !== newSrc) {
        mainImage.style.opacity = '0.35';
        mainImage.style.transform = 'scale(0.98)';
        setTimeout(() => {
          mainImage.setAttribute('src', newSrc);
          mainImage.style.opacity = '1';
          mainImage.style.transform = 'scale(1)';
        }, 130);
      }
    });
  });

  // 6. Interactive FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        faqItems.forEach(i => {
          i.classList.remove('active');
          const q = i.querySelector('.faq-question');
          if (q) q.setAttribute('aria-expanded', 'false');
        });
        if (!isActive) {
          item.classList.add('active');
          question.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // 7. Sticky Mobile Add-to-Cart Trigger
  const mainCta = document.getElementById('main-cta-btn');
  const stickyBar = document.getElementById('sticky-mobile-bar');

  if (mainCta && stickyBar) {
    const handleScroll = () => {
      const rect = mainCta.getBoundingClientRect();
      if (rect.bottom < 0) {
        stickyBar.classList.add('visible');
      } else {
        stickyBar.classList.remove('visible');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  // 8. Social Proof Real-Time Toast Rotation
  const socialToast = document.getElementById('social-proof-toast');
  if (socialToast) {
    const recentBuyers = [
      { name: "Sarah M. from Austin, TX", time: "3m ago" },
      { name: "Jessica R. from London, UK", time: "7m ago" },
      { name: "David K. from Toronto, CA", time: "12m ago" },
      { name: "Elena P. from San Diego, CA", time: "18m ago" },
      { name: "Amanda T. from Melbourne, AU", time: "24m ago" }
    ];
    let buyerIndex = 0;

    const showToast = () => {
      const buyer = recentBuyers[buyerIndex];
      const nameEl = socialToast.querySelector('.toast-name');
      const timeEl = socialToast.querySelector('.toast-time');
      if (nameEl && timeEl) {
        nameEl.textContent = buyer.name;
        timeEl.textContent = buyer.time;
      }
      socialToast.classList.add('show');

      setTimeout(() => {
        socialToast.classList.remove('show');
      }, 4500);

      buyerIndex = (buyerIndex + 1) % recentBuyers.length;
    };

    // First appearance after 4 seconds, then repeat every 20 seconds
    setTimeout(showToast, 4000);
    setInterval(showToast, 22000);
  }

  // 9. Checkout Action Handler
  const buyButtons = document.querySelectorAll('.trigger-checkout');
  buyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const originalText = btn.innerHTML;
      btn.innerHTML = `<span style="display:flex;align-items:center;gap:8px;">🔒 Redirecting to Encrypted 256-Bit Checkout...</span>`;
      btn.style.opacity = '0.85';

      setTimeout(() => {
        alert("Redirecting to Secure 256-Bit Payment Gateway (PayPal Business / Razorpay / Stripe).\n\nIn testing mode: Connect your live checkout link in app.js.");
        btn.innerHTML = originalText;
        btn.style.opacity = '1';
      }, 700);
    });
  });
});
