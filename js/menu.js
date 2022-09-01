(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  
  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    document.body.classList.toggle("overflow");
  });
})();

// $(".navigation__link").click(function () {
//   $(".menu").removeClass("is-open");
//   $(".menu-button").removeClass("is-open");
//   // $(".page-header__btn").removeClass("active");
//   $("body").removeClass("overflow");
// });
