window.addEventListener('load', function() {
    const profileImage = document.querySelector('.sidebar .profile img');
    setTimeout(() => {
        profileImage.classList.add('animate');
    }, 500);
});

window.onload = function() {
    document.querySelector('.home h1').classList.add('show');
    document.querySelector('.home p').classList.add('show');
};
function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}
document.addEventListener("DOMContentLoaded", function() {
const progressBars = document.querySelectorAll('.progress-bar');

// Animate the progress bars
progressBars.forEach(bar => {
let percentage = bar.getAttribute('data-percentage');
bar.style.width = percentage + '%';
});
});

