const ham = document.querySelector(".ham");
const head = document.querySelector(".heading");
ham.addEventListener("click", function(e) {
    head.classList.toggle('hidden');
})