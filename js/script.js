const elHamburgerBtn = document.querySelector(".header__buttom")

const elHeader = document.querySelector(".header")

elHamburgerBtn.addEventListener("click", () => {
    elHeader.classList.toggle("header--open")
})