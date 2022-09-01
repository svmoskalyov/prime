(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  // const mobilePhBtn = document.querySelector("[data-ph-btn]");
  
  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    document.body.classList.toggle("overflow");
    // mobilePhBtn.classList.toggle("active");
  });
})();

// $(".navigation__link").click(function () {
//   $(".menu").removeClass("is-open");
//   $(".menu-button").removeClass("is-open");
//   // $(".page-header__btn").removeClass("active");
//   $("body").removeClass("overflow");
// });
