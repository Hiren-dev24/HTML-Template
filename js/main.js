// tab js starts here 
function openService(evt, workName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(workName).style.display = "block";
  evt.currentTarget.className += " active";
}
// tab js ends here 

// our team js starts here 
$('.tw-team-slider-inner').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// our team js ends here 

// faq js starts here 
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  const icon = item.querySelector(".icon");

  question.addEventListener("click", () => {
    // Close any open answers
    faqItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.querySelector(".faq-answer").classList.remove("open");
        otherItem.querySelector(".icon").src = "./images/down.png";
      }
    });

    // Toggle current item
    const isOpen = answer.classList.contains("open");
    answer.classList.toggle("open");
    icon.src = isOpen ? "./images/down.png" : "./images/up.png";
  });
});
// faq js ends here 
