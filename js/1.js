window.addEventListener("scroll", function() {
    const header = document.getElementById("header");
    if (window.scrollY > 20) { // Ubah 50 sesuai dengan tinggi scroll yang Anda inginkan
        header.classList.remove("transparent");
        header.classList.add("header");
    } else {
        header.classList.remove("header");
        header.classList.add("transparent");
    }
});
