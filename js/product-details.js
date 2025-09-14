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
//===========================================================
const productData = JSON.parse(localStorage.getItem('productDetail'));
const defaultProduct = {
  imgSrc: "images/24a.jpg",
  name: "Chocolate Cookies Tin",
  price: "BDT 12500",
  id: "67890",
  desc: "Tasty Chocolate Cookies with rich cocoa flavor. Great for parties.",
  ratingStars: '<i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-line"></i><i class="ri-star-line"></i>',
  images: ["images/24a.jpg","images/24b.jpg","images/24c.jpg"]
};
const data = productData || defaultProduct;
const mainImg = document.getElementById('detail-img');
const nameEl = document.getElementById('detail-name');
const priceEl = document.getElementById('detail-price');
const idEl = document.getElementById('detail-id');
const descEl = document.getElementById('detail-desc');
const ratingEl = document.getElementById('detail-rating');
const thumbnailsContainer = document.getElementById('thumbnails');
mainImg.src = data.imgSrc;
nameEl.innerText = data.name;
priceEl.innerText = data.price;
idEl.innerText = data.id;
descEl.innerText = data.desc;
ratingEl.innerHTML = data.ratingStars + `<span class="text-gray-600 ml-2">(03 | 1 Review)</span>`;
thumbnailsContainer.innerHTML = '';
data.images.forEach(src => {
  const thumb = document.createElement('img');
  thumb.src = src;
  thumb.className = "border border-gray-200 cursor-pointer hover:shadow-md w-20 sm:w-full";
  thumb.addEventListener('click', () => mainImg.src = src);
  thumbnailsContainer.appendChild(thumb);
});
//=====================================================
let cart = [];
const cartCount = document.getElementById("cart-count");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartSidebar = document.getElementById("cart-sidebar");
const overlayer = document.getElementById("overlay");
const qtyInput = document.getElementById("qty");
function updateCart() {
  cartItemsContainer.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price * item.qty;
    const div = document.createElement("div");
    div.classList = "flex items-center justify-between py-4 px-2 rounded shadow";
    div.innerHTML = `
      <div class="flex items-center gap-2">
        <img src="${item.img}" alt="${item.name}" class="w-12 h-12 object-cover rounded">
        <div>
          <p class="font-semibold text-sm">${item.name}</p>
          <p class="text-xs text-gray-600">BDT ${item.price} x ${item.qty}</p>
        </div>
      </div>
      <button onclick="removeFromCart(${index})" class="text-red-500 hover:text-red-700">
        <i class="ri-delete-bin-line"></i>
      </button>
    `;
    cartItemsContainer.appendChild(div);
  });
  cartTotal.innerText = "BDT " + total.toLocaleString();
  cartCount.innerText = cart.reduce((acc, item) => acc + item.qty, 0);
}
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}
document.querySelectorAll(".add-to-cart").forEach((btn) => {
  btn.addEventListener("click", () => {
    const name = document.getElementById("detail-name").innerText;
    let priceText = document.getElementById("detail-price").innerText;
    priceText = priceText.replace("BDT", "").replace(/,/g, "").trim();
    const price = parseInt(priceText);
    const img = document.getElementById("detail-img").src;
    const qty = parseInt(qtyInput.value) || 1;
    const existing = cart.find((item) => item.name === name);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ name, price, img, qty });
    }

    updateCart();
  });
});
function openCart() {
  cartSidebar.classList.remove("translate-x-full");
  overlayer.classList.remove("hidden");
}
function closeCart() {
  cartSidebar.classList.add("translate-x-full");
  overlayer.classList.add("hidden");
}
document.getElementById("cart-icon").addEventListener("click", openCart);
document.getElementById("close-cart").addEventListener("click", closeCart);
overlayer.addEventListener("click", closeCart);
//=============================================================

document.getElementById("checkout-btn").addEventListener("click", function() {
    window.location.href = "payment.html";
  });
//=======================================================
 document.getElementById("buy-now-btn").addEventListener("click", function() {
    window.location.href = "payment.html";
  });

