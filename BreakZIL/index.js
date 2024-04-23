const mobileLinks = document.querySelectorAll(".mobile-link")
const toggle = document.querySelector(".toggle")
console.log(mobileLinks)
mobileLinks.forEach(element => {
    element.addEventListener("click", (e) => {
        toggle.checked = false;
        console.log(123)
    })
});