/*=================== menu icon navbar =====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
};


/*=================== scroll section active link =====================*/
let sections =  document.querySelectorAll('section');
let navLinks =  document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
      });
    };
  });


  /*===================  sticky navbar =====================*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*=================== remove menu icon navbar when click navbar link(scroll) =====================*/
menuIcon.classList.remove('fa-xmark');
navbar.classList.remove('active');

};



/*=============== dark light mode =====================*/


let darkModeicon = document.querySelector('#darkMode-icon');


  if(localStorage.getItem('mode')){
    var mode = localStorage.getItem('mode');
    if(mode == "dark"){
      document.body.classList.add('dark-mode');
      darkModeicon.classList.add('fa-moon');
      var darkmode = true;
    }else{
      document.body.classList.remove('dark-mode');
      darkModeicon.classList.remove ('fa-moon');
      var darkmode = false;
    }
  }

  darkModeicon.onclick = () => {
    darkModeicon.classList.toggle('bx-moon');

    document.body.classList.toggle('dark-mode');  

    if (darkmode == true){
      localStorage.setItem('mode', 'light')
     darkmode = false
    }
    else{
      localStorage.setItem('mode', 'dark')
      darkmode = true
    } 
};

/*============== scroll Reveal =====================*/
 ScrollReveal({ 
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });
