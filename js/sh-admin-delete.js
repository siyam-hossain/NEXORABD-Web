const sidebar = document.getElementById('sidebar');
function toggleSidebar() {
    sidebar.classList.toggle('show');
}
// Select all delete buttons
const deleteButtons = document.querySelectorAll('.delete-btn');

deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove the row (tr) containing this button
        button.closest('tr').remove();
    });
});
