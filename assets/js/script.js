const work = [
  {
    title: "Coding Quiz",
    desc: "A simple 5 question quiz that tests your knowledge of JavaScript.",
    img: "./assets/img/codingQuiz.jpg",
    site: "https://pandolfom.github.io/coding-quiz/",
    repo: "https://github.com/PandolfoM/coding-quiz"
  },
  {
    title: "Note Taker",
    desc: "A website that allows you to take notes and save them to a database to use for later.",
    img: "./assets/img/noteTaker.jpg",
    site: "https://salty-dawn-40447.herokuapp.com/",
    repo: "https://github.com/PandolfoM/note-taker"
  },
  {
    title: "Emprise",
    desc: "A browser based flight search app that allows a user to select the their origin, destination, start and end date of a trip. Based on the entered inputs the user will see information for the lowest price flights and the current 5 day weather forecast",
    img: "./assets/img/emprise.jpg",
    site: "https://codemasterdev.github.io/Project-1/",
    repo: "https://github.com/codemasterdev/Project-1",
  }
]

let title = ['Coding Quiz', 'Note Taker', 'Emprise']
let desc = ['A simple 5 question quiz that tests your knowledge of JavaScript.', 'A website that allows you to take notes and save them to a database to use for later.', 'A browser based flight search app that allows a user to select the their origin, destination, start and end date of a trip. Based on the entered inputs the user will see information for the lowest price flights and the current 5 day weather forecast']
let img = ['./assets/img/codingQuiz.jpg', './assets/img/noteTaker.jpg', './assets/img/emprise.jpg']
let site = ['https://pandolfom.github.io/coding-quiz/', 'https://salty-dawn-40447.herokuapp.com/', 'https://codemasterdev.github.io/Project-1/']
let repo = ['https://github.com/PandolfoM/coding-quiz', 'https://github.com/PandolfoM/note-taker', 'https://github.com/codemasterdev/Project-1']

$(document).ready(function () {
  console.log(work)
  let workPage = 0;
  // Work Card Content
  workPageContent(...title, ...desc, ...img, ...site, ...repo);
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
      // Page 2 details
      let title = ['Title', 'Title2', 'Title3'];
      let desc = ['Desc1', 'Desc2', 'Desc3'];
      let card3Title = 'Title';
      workPageContent(...title, ...desc);
    }
  });

  $("#workBtnLeft").click(function () {
    workPage--;
    if (workPage < 0) {
      workPage = 0;
    }
    if (workPage === 0) {
      let title = ['Coding Quiz', 'Note Taker', 'Emprise']
      let desc = ['A simple 5 question quiz that tests your knowledge of JavaScript.', 'A website that allows you to take notes and save them to a database to use for later.', 'A browser based flight search app that allows a user to select the their origin, destination, start and end date of a trip. Based on the entered inputs the user will see information for the lowest price flights and the current 5 day weather forecast']
      let img = ['./assets/img/codingQuiz.jpg', './assets/img/noteTaker.jpg', './assets/img/emprise.jpg']
      let site = ['https://pandolfom.github.io/coding-quiz/', 'https://salty-dawn-40447.herokuapp.com/', 'https://codemasterdev.github.io/Project-1/']
      let repo = ['https://github.com/PandolfoM/coding-quiz', 'https://github.com/PandolfoM/note-taker', 'https://github.com/codemasterdev/Project-1']
      workPageContent(...title, ...desc, ...img, ...site, ...repo);    
    }
  });
});

function workPageContent(title, title2, title3, desc, desc2, desc3, img, img2, img3, site, site2, site3, repo, repo2, repo3) {
  // card 1
  $(".card1Title").text(title);
  $(".card1Desc").text(desc);
  $('.btnSiteLink1').attr("href", site);
  $('.btnRepoLink1').attr("href", repo);
  $('.card1Img').attr("src", img);
  // card 2
  $(".card2Title").text(title2);
  $(".card2Desc").text(desc2);
  $('.btnSiteLink2').attr("href", site2);
  $('.btnRepoLink2').attr("href", repo2);
  $('.card2Img').attr("src", img2);
  // card 3
  $(".card3Title").text(title3);
  $(".card3Desc").text(desc3);
  $('.btnSiteLink3').attr("href", site3);
  $('.btnRepoLink3').attr("href", repo3);
  $('.card3Img').attr("src", img3);
}
