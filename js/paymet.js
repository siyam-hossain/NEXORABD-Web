
 const confirmBtn = document.getElementById('confirmBtn');
  const alertBox = document.getElementById('alertBox');
  const loader = document.getElementById('loader');
  const success = document.getElementById('success');
  const closeAlert = document.getElementById('closeAlert');
  confirmBtn.addEventListener('click', () => {
    const inputs = document.querySelectorAll('input[placeholder$="*"], textarea[placeholder$="*"]');
    let allFilled = true;

    inputs.forEach(input => {
      if (input.value.trim() === "") {
        allFilled = false;
        input.classList.add('border-red-500'); 
      } else {
        input.classList.remove('border-red-500');
      }
    });

    if (!allFilled) {
      alert("Please fill all required fields!");
      return;
    }
    alertBox.classList.remove('hidden');
    loader.classList.remove('hidden');
    success.classList.add('hidden');

    setTimeout(() => {
      loader.classList.add('hidden');
      success.classList.remove('hidden');

      inputs.forEach(input => input.value = '');
    }, 2000); 
  });

  closeAlert.addEventListener('click', () => {
    alertBox.classList.add('hidden');
  });

  alertBox.addEventListener('click', (e) => {
    if (e.target === alertBox) {
      alertBox.classList.add('hidden');
    }
  });
  //=================================================
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
  
  
  
  
  
  
  
  
  
  
  
  
  
 