const sidebar = document.getElementById('sidebar');
function toggleSidebar() {
    sidebar.classList.toggle('show');
}

const addImageBtn = document.getElementById("addImageBtn");
const imageInput = document.getElementById("imageInput");
const previewImage = document.getElementById("preview-image");
const previewText = document.getElementById("preview-text");

addImageBtn.addEventListener("click", () => {
    imageInput.click();
});

imageInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            previewImage.src = e.target.result;
            previewImage.classList.remove("hidden");
            previewText.classList.add("hidden");
        };
        reader.readAsDataURL(file);
    }
});

const modal = document.getElementById("productModal");
const closeModal = document.getElementById("closeModal");
const discardBtn = document.getElementById("discardBtn");
const deleteBtn = document.getElementById("Delete");

const pname = document.getElementById("pname");
const pid = document.getElementById("pid");
const pdesc = document.getElementById("pdesc");
const pcat = document.getElementById("pcat");
const pqty = document.getElementById("pqty");
const pprice = document.getElementById("pprice");
const psize = document.getElementById("psize");
const pdate = document.getElementById("pdate");

// Fill modal fields
function fillModal() {
    document.getElementById("modalName").innerText = pname.value;
    document.getElementById("modalId").innerText = pid.value;
    document.getElementById("modalDesc").innerText = pdesc.value;
    document.getElementById("modalCat").innerText = pcat.value;
    document.getElementById("modalQty").innerText = pqty.value;
    document.getElementById("modalPrice").innerText = pprice.value;
    document.getElementById("modalSize").innerText = psize.value;
    document.getElementById("modalDate").innerText = pdate.value;
    document.getElementById("modalImage").src = previewImage.src;
}

// Reset form function
function resetForm() {
    [pname, pid, pdesc, pqty, pprice, psize, pdate].forEach((el) => (el.value = ""));
    pcat.selectedIndex = 0;
    previewImage.src = "";
    previewImage.classList.add("hidden");
    previewText.classList.remove("hidden");
}

// Add product button
document.querySelector(".bg-blue-600").addEventListener("click", () => {
    if (
        pname.value &&
        pid.value &&
        pqty.value &&
        pprice.value &&
        psize.value &&
        pdate.value &&
        previewImage.src
    ) {
        fillModal();
        modal.classList.remove("hidden");
        modal.classList.add("flex");

        // Animate open
        modal.classList.remove("opacity-0", "scale-90");
        modal.classList.add("opacity-100", "scale-100");
    } else {
        alert("⚠️ Please fill all required fields and add an image.");
    }
});

// Close modal (Save successful)
closeModal.addEventListener("click", () => {
    // Animate close
    modal.classList.remove("opacity-100", "scale-100");
    modal.classList.add("opacity-0", "scale-90");

    setTimeout(() => {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    }, 200); // match transition duration

    alert("Save Successful");
});

// Discard → clear fields + close modal
discardBtn.addEventListener("click", () => {
    resetForm();

    modal.classList.remove("opacity-100", "scale-100");
    modal.classList.add("opacity-0", "scale-90");

    setTimeout(() => {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    }, 200);
});

// Delete → clear fields + close modal
deleteBtn.addEventListener("click", () => {
    resetForm();

    modal.classList.remove("opacity-100", "scale-100");
    modal.classList.add("opacity-0", "scale-90");

    setTimeout(() => {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
    }, 200);
});
