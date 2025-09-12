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
