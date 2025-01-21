document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // Toggle mobile menu
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Rotate ads in the ad space
    const adSpace = document.querySelector(".ad-space");
    const ads = [
        "Ad 1: Learn more with Corner Report!",
        "Ad 2: Explore our premium guides!",
        "Ad 3: Become a pro with our resources!"
    ];

    let adIndex = 0;
    setInterval(() => {
        adIndex = (adIndex + 1) % ads.length;
        adSpace.textContent = ads[adIndex];
    }, 5000);
});
