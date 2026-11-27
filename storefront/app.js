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

  // 4. Apple-Style 3D Gyro/Tilt Perspective Physics
  const tiltElements = document.querySelectorAll('.main-image-wrap, .anatomy-visual-card, .protocol-calculator-box');
  tiltElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5; // max 5 deg tilt
      const rotateY = ((x - centerX) / centerX) * 5;

      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      el.style.transition = 'transform 0.4s ease';
    });

    el.addEventListener('mouseenter', () => {
      el.style.transition = 'none';
    });
  });

  // 5. Interactive Before/After Split-Screen Reveal Slider (Drag + Touch)
  const baContainer = document.getElementById('ba-slider');
  const baAfterLayer = document.getElementById('ba-after-layer');
  const baHandle = document.getElementById('ba-handle');

  if (baContainer && baAfterLayer && baHandle) {
    let isDragging = false;

    const updateSlider = (clientX) => {
      const rect = baContainer.getBoundingClientRect();
      let offsetX = clientX - rect.left;
      if (offsetX < 0) offsetX = 0;
      if (offsetX > rect.width) offsetX = rect.width;
      const percent = (offsetX / rect.width) * 100;

      baAfterLayer.style.width = `${percent}%`;
      baHandle.style.left = `${percent}%`;
    };

    const onStart = (e) => {
      isDragging = true;
      const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
      updateSlider(clientX);
    };

    const onMove = (e) => {
      if (!isDragging) return;
      const clientX = e.type.startsWith('touch') ? e.touches[0].clientX : e.clientX;
      updateSlider(clientX);
    };

    const onEnd = () => {
      isDragging = false;
    };

    baContainer.addEventListener('mousedown', onStart);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onEnd);

    baContainer.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onEnd);
  }

  // 6. Interactive Personalized Routine & Dosage Protocol Engine
  const concernChips = document.querySelectorAll('#concern-chips .chip');
  const liquidChips = document.querySelectorAll('#liquid-chips .chip');
  const protocolTitle = document.getElementById('output-protocol-title');
  const protocolMode = document.getElementById('output-mode');
  const protocolDosage = document.getElementById('output-dosage');
  const protocolDuration = document.getElementById('output-duration');
  const protocolTimeframe = document.getElementById('output-timeframe');
  const protocolSummary = document.getElementById('output-summary-text');

  let currentConcern = 'hairline';
  let currentLiquid = 'rosemary';

  const protocolData = {
    hairline: {
      rosemary: {
        title: "Temples & Hairline Density Protocol",
        mode: "650nm Red Light + Sonic Pulse",
        dosage: "1.2 ml Touchless Reservoir",
        duration: "8 Minutes Every Evening",
        timeframe: "21 – 28 Days Visible Lift",
        summary: "Using Rosemary Essential Blend with 650nm phototherapy stimulates micro-circulation around delicate front follicles with zero greasy residue on forehead or hair."
      },
      minoxidil: {
        title: "Precision Hairline Minoxidil Regrowth Protocol",
        mode: "650nm Phototherapy + Micro-Vibration",
        dosage: "1.0 ml Direct Scalp Dosing",
        duration: "5 Minutes Twice Daily",
        timeframe: "14 – 21 Days Activation",
        summary: "Delivers topical Minoxidil directly into scalp pores, eliminating 70% evaporation and preventing drips from running down your forehead."
      },
      peptide: {
        title: "Frontal Copper Tripeptide Fortifier",
        mode: "650nm Red Light + 10,000 RPM Pulse",
        dosage: "1.5 ml Micro-Channel Infusion",
        duration: "10 Minutes Daily",
        timeframe: "28 – 35 Days Density Lift",
        summary: "Copper peptides boost follicle collagen synthesis while 650nm laser phototherapy energizes cellular mitochondria for thicker frontal caliber."
      },
      castor: {
        title: "Castor & Biotin Temple Edge Thickening",
        mode: "Sonic Vibration + Roll-Out Teeth",
        dosage: "1.0 ml Deep Root Flow",
        duration: "7 Minutes Daily",
        timeframe: "30 Days Root Revival",
        summary: "The sonic massage eases high-viscosity castor oil directly through thick strands down to root bulbs without clumps or grease."
      }
    },
    crown: {
      rosemary: {
        title: "Crown Part & Vertex Density Protocol",
        mode: "650nm Red Light Array + Sonic Wave",
        dosage: "1.5 ml Touchless Reservoir",
        duration: "10 Minutes Daily",
        timeframe: "28 – 35 Days Vertex Lift",
        summary: "Focuses concentrated 650nm light directly through parted hair to awaken miniaturized vertex follicles and close wide part lines."
      },
      minoxidil: {
        title: "Crown Direct Minoxidil Target Regimen",
        mode: "Sonic Pulse + Direct Scalp Guide",
        dosage: "1.0 ml Root-Lock Flow",
        duration: "5 Minutes Daily",
        timeframe: "21 Days Follicle Surge",
        summary: "Direct spring-loaded alloy teeth ensure minoxidil targets vertex thinning without wetting surrounding hair."
      },
      peptide: {
        title: "Crown Peptides Matrix Restructuring",
        mode: "650nm Phototherapy + Micro-Dose",
        dosage: "1.5 ml Follicle Feed",
        duration: "8 Minutes Daily",
        timeframe: "30 Days Cellular Boost",
        summary: "Stimulates structural keratin matrix in crown follicles with pure touchless delivery."
      },
      castor: {
        title: "Crown Intense Moisture & Density Blend",
        mode: "10,000 RPM Sonic Root Permeation",
        dosage: "1.5 ml Smooth Flow",
        duration: "10 Minutes Evening",
        timeframe: "30 – 45 Days Fullness",
        summary: "Sonic vibrations ensure deep absorption of thick oils across crown thinning zones."
      }
    },
    shedding: {
      rosemary: {
        title: "Anti-Shedding & Telogen Reversal Routine",
        mode: "650nm Red Light Phototherapy Active",
        dosage: "1.0 ml Light Micro-Dose",
        duration: "6 Minutes Nightly",
        timeframe: "14 – 21 Days Shedding Drop",
        summary: "Calms scalp inflammation and halts rapid shedding phase (telogen effluvium) within 2 to 3 weeks."
      },
      minoxidil: {
        title: "Follicle Retention Minoxidil Protocol",
        mode: "Sonic Micro-Vibration",
        dosage: "1.0 ml Stabilizing Dose",
        duration: "5 Minutes Evening",
        timeframe: "14 Days Root Retention",
        summary: "Stabilizes active shedding while nourishing roots directly."
      },
      peptide: {
        title: "Bio-Peptide Follicle Anchor System",
        mode: "650nm Phototherapy + Sonic Wave",
        dosage: "1.2 ml Dermal Infusion",
        duration: "8 Minutes Nightly",
        timeframe: "21 Days Anchor Lift",
        summary: "Strengthens extracellular follicle sheath anchoring roots firmly in the scalp."
      },
      castor: {
        title: "Scalp Barrier & Shedding Repair Protocol",
        mode: "Touchless Roll-Out Dispenser Active",
        dosage: "1.2 ml Hydration Dose",
        duration: "8 Minutes Evening",
        timeframe: "28 Days Barrier Calm",
        summary: "Restores dry, irritated scalp conditions causing shedding."
      }
    },
    beard: {
      rosemary: {
        title: "Beard & Patchy Edge Density Routine",
        mode: "Sonic Micro-Pulse + Touchless Dispense",
        dosage: "0.8 ml Precision Dosing",
        duration: "5 Minutes Morning",
        timeframe: "21 Days Patch Filling",
        summary: "Parts dense facial hair to deliver density serums straight to the skin under your beard."
      },
      minoxidil: {
        title: "Beard Follicle Awakening Minoxidil Protocol",
        mode: "650nm Phototherapy + Micro-Vibration",
        dosage: "0.75 ml Direct Skin Touch",
        duration: "4 Minutes Daily",
        timeframe: "14 – 21 Days Activation",
        summary: "Direct skin contact activates vellus beard hairs into terminal thick hairs."
      },
      peptide: {
        title: "Jawline & Edge Peptide Nourishment",
        mode: "650nm Red Light Wave",
        dosage: "1.0 ml Edge Flow",
        duration: "6 Minutes Daily",
        timeframe: "28 Days Edge Density",
        summary: "Feeds edge follicles essential amino-peptides for crisp hairline definition."
      },
      castor: {
        title: "Beard Softening & Conditioning Protocol",
        mode: "10,000 RPM Sonic Softener",
        dosage: "1.0 ml Conditioning Flow",
        duration: "5 Minutes Evening",
        timeframe: "14 Days Soft & Dense",
        summary: "Softens coarse beard texture while stimulating dormant underlying roots."
      }
    }
  };

  const updateProtocol = () => {
    const data = protocolData[currentConcern] && protocolData[currentConcern][currentLiquid];
    if (data && protocolTitle) {
      protocolTitle.textContent = data.title;
      protocolMode.textContent = data.mode;
      protocolDosage.textContent = data.dosage;
      protocolDuration.textContent = data.duration;
      protocolTimeframe.textContent = data.timeframe;
      protocolSummary.textContent = data.summary;
    }
  };

  concernChips.forEach(chip => {
    chip.addEventListener('click', () => {
      concernChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentConcern = chip.getAttribute('data-concern');
      updateProtocol();
    });
  });

  liquidChips.forEach(chip => {
    chip.addEventListener('click', () => {
      liquidChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentLiquid = chip.getAttribute('data-liquid');
      updateProtocol();
    });
  });

  // 7. Smooth Kinetic Count-Up Animation for Stats & Reviews
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

  // 8. 7-Angle Thumbnail Switcher with Cross-Fade
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

  // 9. Interactive FAQ Accordion
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

  // 10. Sticky Mobile Add-to-Cart Trigger
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

  // 11. Social Proof Real-Time Toast Rotation
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

    setTimeout(showToast, 4000);
    setInterval(showToast, 22000);
  }

  // 12. Checkout Action Handler
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
