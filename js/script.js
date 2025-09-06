//=======================================================
 const openBtn = document.getElementById("open-login-btn");
    const closeBtn = document.getElementById("close-login-btn");
    const overlaye = document.getElementById("login-overlay");
    const form = document.getElementById("login-form");
    openBtn.addEventListener("click", () => {
        overlaye.classList.remove("hidden");
        setTimeout(() => {
            form.classList.remove("translate-x-full");
            form.classList.add("translate-x-0");
        }, 50);
    });
    closeBtn.addEventListener("click", () => {
        form.classList.add("translate-x-full");
        setTimeout(() => {
            overlaye.classList.add("hidden");
        }, 500);
    });
    overlaye.addEventListener("click", (e) => {
        if (e.target === overlaye) {
            form.classList.add("translate-x-full");
            setTimeout(() => {
                overlaye.classList.add("hidden");
            }, 500);
        }
    });

//=========================================================
const openRegisterBtn = document.getElementById("open-register-btn");
  const closeRegisterBtn = document.getElementById("close-register-btn");
  const registerOverlay = document.getElementById("register-overlay");
  const registerForm = document.getElementById("register-form");
  openRegisterBtn.addEventListener("click", () => {
      registerOverlay.classList.remove("hidden");
      setTimeout(() => {
          registerForm.classList.remove("translate-x-full");
          registerForm.classList.add("translate-x-0");
      }, 50);
  });
  closeRegisterBtn.addEventListener("click", () => {
      registerForm.classList.add("translate-x-full");
      setTimeout(() => {
          registerOverlay.classList.add("hidden");
      }, 500);
  });
  registerOverlay.addEventListener("click", (e) => {
      if (e.target === registerOverlay) {
          registerForm.classList.add("translate-x-full");
          setTimeout(() => {
              registerOverlay.classList.add("hidden");
          }, 500);
      }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !registerOverlay.classList.contains("hidden")) {
      registerForm.classList.add("translate-x-full");
      setTimeout(() => {
          registerOverlay.classList.add("hidden");
      }, 500);
    }
  });
//=========================================================
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileSidebar = document.getElementById("mobileSidebar");
const closeSidebar = document.getElementById("closeSidebar");
const overlay = document.getElementById("overlay");

mobileMenuBtn.addEventListener("click", () => {
  mobileSidebar.classList.remove("-translate-x-full");
  overlay.classList.remove("hidden");
});

closeSidebar.addEventListener("click", () => {
  mobileSidebar.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", () => {
  mobileSidebar.classList.add("-translate-x-full");
  overlay.classList.add("hidden");
});

const menuItems = document.querySelectorAll("#mobileSidebar .menu-item");
menuItems.forEach(item => {
  item.addEventListener("touchstart", () => {
    menuItems.forEach(i => i.classList.remove("text-yellow-400")); 
    item.classList.add("text-yellow-400");
  });
});
//==============================================
const slidesContainer = document.getElementById('slides-container');
const slides = document.querySelectorAll('#slides-container .slide');
const nextBtn = document.getElementById('next-slide');
let currentIndex = 0;

function updateSlide() {
  const offset = -currentIndex * 100; 
  slidesContainer.style.transform = `translateX(${offset}%)`;
}
nextBtn.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSlide();
  }
});
const autoSlide = setInterval(() => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSlide();
  } else {
    clearInterval(autoSlide);
  }
}, 2000);

//==========================================
const slider = document.getElementById('slider');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const scrollAmount = 240; 
next.addEventListener('click', () => {
  slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

prev.addEventListener('click', () => {
  slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

setInterval(() => {
  if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
    slider.scrollTo({ left: 0, behavior: 'smooth' }); // Reset to start
  } else {
    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}, 2000);

// =============================================
const slider_2 = document.getElementById('slider_2');
const next_2 = document.getElementById('next_2');
const prev_2 = document.getElementById('prev_2');
const scrollAmount_2 = 240; 
next_2.addEventListener('click', () => {
  slider_2.scrollBy({ left: scrollAmount_2, behavior: 'smooth' });
});

prev_2.addEventListener('click', () => {
  slider_2.scrollBy({ left: -scrollAmount_2, behavior: 'smooth' });
});

setInterval(() => {
  if (slider_2.scrollLeft + slider_2.clientWidth >= slider_2.scrollWidth) {
    slider_2.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    slider_2.scrollBy({ left: scrollAmount_2, behavior: 'smooth' });
  }
}, 2000);