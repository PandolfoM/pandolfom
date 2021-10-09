const work = [
  {
    title: "Coding Quiz",
    desc: "A simple 5 question quiz that tests your knowledge of JavaScript.",
    img: "",
    site: "https://pandolfom.github.io/coding-quiz/",
    repo: "https://github.com/PandolfoM/coding-quiz"
  },
  {
    title: "Note Taker",
    desc: "A website that allows you to take notes and save them to a database to use for later.",
    img: "",
    site: "https://salty-dawn-40447.herokuapp.com/",
    repo: "https://github.com/PandolfoM/note-taker"
  },
  {
    title: "Emprise",
    desc: "A browser based flight search app that allows a user to select the their origin, destination, start and end date of a trip. Based on the entered inputs the user will see information for the lowest price flights and the current 5 day weather forecast",
    img: ""
  }
]

$(document).ready(function () {
  console.log(work)
  let workPage = 0;
  // Work Card Content
  workPageContent("Coding Quiz", "Work Schedule", "Emprise", work[0].site, work[1].site, work[2].site, work[0].repo, work[1].repo, work[2].repo);
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
      let card1Title = 'work[0].card1Title';
      let card2Title = 'work[1].card2Title';
      let card3Title = 'work[2].card3Title';
      workPageContent(card1Title, card2Title, card3Title);
    }
  });

  $("#workBtnLeft").click(function () {
    workPage--;
    if (workPage < 0) {
      workPage = 0;
    }
    if (workPage === 0) {
      workPageContent(work[0].title, work[1].title, work[2].title, work[0].site);
    }
  });
});

function workPageContent(title, title2, title3, site, site2, site3, repo, repo2, repo3) {
  // card 1
  $(".card1Title").text(title);
  $('.btnSiteLink1').attr("href", site);
  $('.btnRepoLink1').attr("href", repo);
  // card 2
  $(".card2Title").text(title2);
  $('.btnSiteLink2').attr("href", site2);
  $('.btnRepoLink2').attr("href", repo2);
  // card 3
  $(".card3Title").text(title3);

}
