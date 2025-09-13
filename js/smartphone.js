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
 let cart = [];
    const cartCount = document.getElementById("cart-count");
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const cartSidebar = document.getElementById("cart-sidebar");

    document.querySelectorAll(".add-to-cart").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const card = e.target.closest(".group");
        const name = card.querySelector("p").innerText;
        const priceText = card.querySelector("h3").innerText.replace("BDT: ", "");
        const price = parseInt(priceText);
        const img = card.querySelector("img").src;

        cart.push({ name, price, img });
        cartCount.innerText = cart.length;
        renderCart();
      });
    });
    function renderCart() {
      cartItemsContainer.innerHTML = "";
      let total = 0;
      cart.forEach((item, index) => {
        total += item.price;
        const div = document.createElement("div");
        div.classList = "flex items-center justify-between  p-2 rounded shadow";
        div.innerHTML = `
          <div class="flex items-center gap-2">
            <img src="${item.img}" alt="${item.name}" class="w-12 h-12 object-cover rounded">
            <div>
              <p class="font-semibold text-sm">${item.name}</p>
              <p class="text-xs text-gray-600">BDT ${item.price}</p>
            </div>
          </div>
          <button onclick="removeFromCart(${index})" class="text-red-500 hover:text-red-700">
            <i class="ri-delete-bin-line"></i>
          </button>
        `;
        cartItemsContainer.appendChild(div);
      });

      cartTotal.innerText = "BDT " + total;
    }
    function removeFromCart(index) {
      cart.splice(index, 1);
      cartCount.innerText = cart.length;
      renderCart();
    }
    document.getElementById("cart-icon").addEventListener("click", () => {
      cartSidebar.classList.remove("translate-x-full");
    });
    document.getElementById("close-cart").addEventListener("click", () => {
      cartSidebar.classList.add("translate-x-full");
    });
//==============================================
  const slidesContainer = document.getElementById("slides-container");
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  let currentIndex = 0;

  const nextBtn = document.getElementById("next-slide");
  const prevBtn = document.getElementById("prev-slide");

  function showSlide(index) {
    const offset = -index * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
  }

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }, 3000);

//======================================================
const productImages = document.querySelectorAll('.bg-white.border img');
productImages.forEach(img => {
  img.addEventListener('click', (e) => {
    const card = e.target.closest('.bg-white.border'); 
    const imgSrc = img.src;
    const name = card.querySelector('p').innerText;
    const price = card.querySelector('h3').innerText;
    const ratingStars = card.querySelector('.flex.items-center.gap-1').innerHTML;
    const id = card.dataset.id || '12345';
    const desc = card.dataset.desc || 'No description available.';
    const images = JSON.parse(card.dataset.images || `["${imgSrc}"]`);
    localStorage.setItem('productDetail', JSON.stringify({
      imgSrc,
      name,
      price,
      ratingStars,
      id,
      desc,
      images
    }));
    window.location.href = 'product-details.html';
  });
});
