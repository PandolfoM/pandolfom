let title = ['Fomo Mock Exchange', 'Note Taker', 'Emprise']
let desc = ['A real time stock exchange for people who just want to mess around with stocks and not use real currency', 'A website that allows you to take notes and save them to a database to use for later.', 'A browser based flight search app that allows a user to select the their origin, destination, start and end date of a trip. Based on the entered inputs the user will see information for the lowest price flights and the current 5 day weather forecast']
let img = ['./assets/img/fomoMockExchange.jpg', './assets/img/noteTaker.jpg', './assets/img/emprise.jpg']
let imgPrev = ['./assets/img/previews/imgPreview.jpeg', './assets/img/previews/img2Preview.jpeg', './assets/img/previews/img3Preview.jpeg']
let site = ['https://fomo-exchange.herokuapp.com/', 'https://salty-dawn-40447.herokuapp.com/', 'https://codemasterdev.github.io/Project-1/']
let repo = ['https://github.com/RynMrphy18/fomo-mock-exchange', 'https://github.com/PandolfoM/note-taker', 'https://github.com/codemasterdev/Project-1']

$(document).ready(function () {
  let workPage = 0;
  // Work Card Content
  workPageContent(...title, ...desc, ...img, ...imgPrev, ...site, ...repo);
  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function () {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
    $("#aboutNav").toggleClass("dark-text");
    $("#homeNav").toggleClass("dark-text");
    $("#workNav").toggleClass("dark-text");
    $("#contactNav").toggleClass("dark-text");
  });

  // Navigate My Work
  $("#workBtnRight").click(function () {
    $(".workSection ").addClass("animate__animated animate__fadeIn animate__faster");
    setTimeout(function () {
      $(".workSection").removeClass("animate__animated animate__fadeIn animate__faster");
    }, 500);
    workPage++;
    if (workPage > 1) {
      workPage = 1;
    }
    if (workPage === 1) {
      // Page 2 details
      let title = ["Coding Quiz", "Tech Blog", "Weather Dashboard"];
      let desc = [
        "A simple 5 question quiz that tests your knowledge of JavaScript.",
        "Tech blog is a blog where you can sign up and start posting anything you would like other people to see.",
        "Weather Dashboard is an app where you can search a city of your choice and it will bring up the 5 day forecast, temperature, wind speed, humidity, and UV index.",
      ];
      let img = ["./assets/img/codingQuiz.jpg", "./assets/img/techBlog.jpg", "./assets/img/weatherDashboard.jpg"];
      let imgPrev = ["./assets/img/previews/imgPreview.jpeg", "./assets/img/previews/img5Preview.jpeg", "./assets/img/previews/img6Preview.jpeg"];
      let site = ["https://pandolfom.github.io/coding-quiz/", "https://desolate-forest-49599.herokuapp.com/", "https://pandolfom.github.io/weather-dashboard/"];
      let repo = ["https://github.com/PandolfoM/coding-quiz", "https://github.com/PandolfoM/tech-blog", "https://github.com/PandolfoM/weather-dashboard"];
      workPageContent(...title, ...desc, ...img, ...imgPrev, ...site, ...repo);
    }
  });

  $("#workBtnLeft").click(function () {
    $(".workSection ").addClass("animate__animated animate__fadeIn animate__faster");
    setTimeout(function () {
      $(".workSection").removeClass("animate__animated animate__fadeIn animate__faster");
    }, 500);
    workPage--;
    if (workPage < 0) {
      workPage = 0;
    }
    if (workPage === 0) {
      let title = ['Fomo Mock Exchange', 'Note Taker', 'Emprise']
      let desc = ['A real time stock exchange for people who just want to mess around with stocks and not use real currency', 'A website that allows you to take notes and save them to a database to use for later.', 'A browser based flight search app that allows a user to select the their origin, destination, start and end date of a trip. Based on the entered inputs the user will see information for the lowest price flights and the current 5 day weather forecast']
      let img = ['./assets/img/fomoMockExchange.jpg', './assets/img/noteTaker.jpg', './assets/img/emprise.jpg']
      let imgPrev = ['./assets/img/previews/imgPreview.jpeg', './assets/img/previews/img2Preview.jpeg', './assets/img/previews/img3Preview.jpeg']
      let site = ['https://fomo-exchange.herokuapp.com/', 'https://salty-dawn-40447.herokuapp.com/', 'https://codemasterdev.github.io/Project-1/']
      let repo = ['https://github.com/RynMrphy18/fomo-mock-exchange', 'https://github.com/PandolfoM/note-taker', 'https://github.com/codemasterdev/Project-1']
      workPageContent(...title, ...desc, ...img, ...imgPrev, ...site, ...repo);    
    }
  });
  // Navigate Work END

  // Animations
  $('.nameTitle').toggleClass('animate__animated animate__fadeInLeft animate__slow');
  $('.subtitle').toggleClass('animate__animated animate__fadeInLeft animate__delay-1s animate__slow');
  $('.pfp').toggleClass('animate__animated animate__fadeIn animate__delay-3s animate__slow');

  $('.navbar').toggleClass('animate__animated animate__fadeInLeft animate__slow');

  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // entry.target.classList.add('fadeLeft')
        // entry.target.classList.remove('transparent')
        $('#workCard3').addClass('fadeLeft');
        $('#workCard3').removeClass('transparent');
        setTimeout(function() {
          $('#workCard2').addClass('fadeLeft');
          $('#workCard2').removeClass('transparent');
        }, 200)
        setTimeout(function() {
          $('#workCard1').addClass('fadeLeft');
          $('#workCard1').removeClass('transparent');
        }, 300)
      }
    });
  });
  
  observer.observe(document.querySelector('.workSection'));
  // Animations END

  // Copyright Date
  const date = new Date()
  $('#copyDate').text(date.getFullYear());
  // Copyright Date END
});

function workPageContent(title, title2, title3, desc, desc2, desc3, img, img2, img3, imgPrev, img2Prev, img3Prev, site, site2, site3, repo, repo2, repo3) {
  // card 1
  $(".card1Title").text(title);
  $(".card1Desc").text(desc);
  $('.btnSiteLink1').attr("href", site);
  $('.btnRepoLink1').attr("href", repo);
  $('.card1Img').attr("src", img);
  $('.card1Imgpreview').attr("href", imgPrev);
  // card 2
  $(".card2Title").text(title2);
  $(".card2Desc").text(desc2);
  $('.btnSiteLink2').attr("href", site2);
  $('.btnRepoLink2').attr("href", repo2);
  $('.card2Img').attr("src", img2);
  $('.card2Imgpreview').attr("href", img2Prev);
  // card 3
  $(".card3Title").text(title3);
  $(".card3Desc").text(desc3);
  $('.btnSiteLink3').attr("href", site3);
  $('.btnRepoLink3').attr("href", repo3);
  $('.card3Img').attr("src", img3);
  $('.card3Imgpreview').attr("href", img3Prev);
}