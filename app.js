const sidebar = document.querySelector('.sidebar');
const toggleSidebar = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');

toggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', () => {
    if (sidebar.classList.contains('show-sidebar')) {
        sidebar.classList.remove('show-sidebar');
    }
});