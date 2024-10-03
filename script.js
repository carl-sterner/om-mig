const sections = document.querySelectorAll('.hero-top, .hero-middle, .hero-bottom');
const progressBars = document.querySelectorAll('.progress-bar');
const menuItems = document.querySelectorAll('.menu-item');
const buttonOverlay = document.getElementById('kontakt-overlay');
const toggleButton = document.getElementById('kontakt');
const closeButton = document.getElementById('X');

console.log("asdifooadisfjoasdijfoiadfjs")

function showOverlay() {
    buttonOverlay.classList.add('show');
}
function hideOverlay() {
    buttonOverlay.classList.remove('show');
}
toggleButton.addEventListener('click', showOverlay);
closeButton.addEventListener('click', hideOverlay);
buttonOverlay.addEventListener('click', (event) => {
    if (event.target === buttonOverlay) {
        hideOverlay();
    }
});
function calculateAge(date) {
    const now = new Date();
    const birthDate = new Date(date);
    const diff = now - birthDate;
    const ageInYears = diff / (1000 * 60 * 60 * 24 * 365.25);
    return ageInYears.toFixed(10);
}
function updateAge() {
    const age = document.getElementById('age');
    age.textContent = calculateAge('2008-01-02');
}
updateAge();
setInterval(updateAge, 10);
function updateProgressBars() {
    const scrollPosition = window.scrollY;

    let currentSectionIndex = -1;

    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;
    
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSectionIndex = index;
        
            const progress = ((scrollPosition - sectionTop) / sectionHeight) * 100;
        
            if (progressBars[index]) {
                progressBars[index].style.height = progress + '%';
            }
        } else if (scrollPosition < sectionTop) {
            if (progressBars[index]) {
                progressBars[index].style.height = '0%';
            }
        } else if (scrollPosition >= sectionBottom) {
            if (progressBars[index]) {
                progressBars[index].style.height = '100%';
            }
        }
    });

    menuItems.forEach(item => item.classList.remove('active'));

    if (currentSectionIndex >= 0 && menuItems[currentSectionIndex]) {
        menuItems[currentSectionIndex].classList.add('active');
    }
}
window.addEventListener('scroll', updateProgressBars);
updateProgressBars();