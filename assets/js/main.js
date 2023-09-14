// loader js
$(window).on("load", function () {
  $(".loader-container").delay(300).fadeOut(1000);
});

// Header Fixed
let header = document.querySelector(".page-navbar");
header.classList.toggle("scroll", window.scrollY > 20);

window.addEventListener("scroll", function () {
  header.classList.toggle("scroll", window.scrollY > 20);
});

// Active Link
$(".page-navbar .links .link").each(function () {
  if (window.location.href.includes($(this).attr("href"))) {
    $(this).addClass("active");
  }
});

// SideBar
$(".side-open").on("click", function () {
  $(".links").toggleClass("active");
  $(".overlay-m").fadeIn(600);
});

$(".side-close").on("click", function () {
  $(".links").removeClass("active");
  $(".overlay-m").fadeOut(500);
});

$(".side-user-open").on("click", function () {
  $(".sidebar").addClass("active");
  $(".overlay-m").fadeIn(600);
});

$(".close").on("click", function () {
  $(".links").removeClass("active");
  $(".overlay-m").fadeOut(500);
});

$(".overlay-m").on("click", function () {
  $(".links").removeClass("active");
  $(".sidebar").removeClass("active");
  $(this).fadeOut(500);
});

// dropDown stopPropagation
$(".dropdown-menu").click(function (e) {
  e.stopPropagation();
});

// PassWord Show In Setting Page
const iconsPassSet = document.querySelectorAll(".pass-icon");

if (iconsPassSet) {
  iconsPassSet.forEach((ic) => {
    ic.addEventListener("click", function () {
      let input = ic.parentElement.querySelector("input");
      showPassword(input, ic);
    });
  });
}

// Function To Show And Hide Password
function showPassword(input, icon) {
  if (input.type == "password") {
    input.setAttribute("type", "text");
    // icon.innerHTML = `<i class="fa-regular fa-eye"></i>`;
  } else {
    input.setAttribute("type", "password");
    // icon.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;
  }

  icon.classList.toggle("show");
}

let isRtl = $('html[lang="ar"]').length > 0;

// Normal Select To
$(".select").select2({
  dir: isRtl ? "rtl" : "ltr",
  minimumResultsForSearch: Infinity,
});

// Heart
$(document).on("click", ".heart", function () {
  if ($(this).find("i").hasClass("fa-regular")) {
    $(this).find("i").addClass("fa-solid yellow");
    $(this).find("i").removeClass("fa-regular");
  } else {
    $(this).find("i").removeClass("fa-solid yellow");
    $(this).find("i").addClass("fa-regular");
  }
});

$("[data-pass]").on("click", function () {
  let item = $(this).attr("data-pass");
  sessionStorage.setItem("activeTab", JSON.stringify(item));
});
