$(document).ready(function () {
  console.log(work)
  let workPage = 0;
  // Titles of work
  workPageContent("Coding Quiz", "Work Schedule", "Emprise");
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  $("#workBtnRight").click(function () {
    workPage++;
    if (workPage > 1) {
      workPage = 1;
    }
    if (workPage === 1) {
      let card1Title = "card 4";
      let card2Title = "card 5";
      let card3Title = "card 6";
      workPageContent(card1Title, card2Title, card3Title);
    }
  });

  $("#workBtnLeft").click(function () {
    workPage--;
    if (workPage < 0) {
      workPage = 0;
    }
    if (workPage === 0) {
      workPageContent("Coding Quiz", "Work Schedule", "Emprise");
    }
    console.log(workPage);
  });
});

function workPageContent(title, title2, title3, img) {
  $(".card1Title").text(title);
  $(".card2Title").text(title2);
  $(".card3Title").text(title3);
}
