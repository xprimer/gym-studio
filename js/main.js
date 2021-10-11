// MENU SCROLL

let banner = document.querySelector(".banner");
let menu = document.querySelector(".menu");
function menuScript() {
  if (document.documentElement.scrollTop >= banner.clientHeight / 2) {
    menu.classList.add("sticky-menu");
  } else {
    menu.classList.remove("sticky-menu");
  }
}

// MENU HIGHLIGHT SCRUPT

let homeLink = document.querySelector(".menu_links[data-link='home-link']");
let aboutLink = document.querySelector(".menu_links[data-link='about-link']");
let classesLink = document.querySelector(
  ".menu_links[data-link='classes-link']"
);
let scheduleLink = document.querySelector(
  ".menu_links[data-link='schedule-link']"
);
let contactLink = document.querySelector(
  ".menu_links[data-link='contact-link']"
);

let headerSection = document.querySelector("#head");
let aboutSection = document.querySelector("section#about");
let classesSection = document.querySelector("section#classes");
let scheduleSection = document.querySelector("section#schedule");
let contactSection = document.querySelector("section#contact");

document.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    removeLinksActive();
    addLinkActive(homeLink);
  } else {
    highlightWhenInview(aboutLink, aboutSection);
    highlightWhenInview(classesLink, classesSection);
    highlightWhenInview(scheduleLink, scheduleSection);
    highlightWhenInview(contactLink, contactSection);
  }
  
});

if (window.scrollY == 0 ) {
    removeLinksActive();
    addLinkActive(homeLink);
  }

function highlightWhenInview(menuEle, sectionEle) {
  if (isInViewport(sectionEle)) {
    removeLinksActive();
    addLinkActive(menuEle);
  }
}

function removeLinksActive() {
  let menuLinks = document.querySelectorAll(".menu_links");
  menuLinks.forEach((link) => {
    link.classList.remove("active");
  });
}

function addLinkActive(ele) {
  ele.classList.add("active");
}

function isInViewport(ele) {
  const { top, bottom } = ele.getBoundingClientRect();
  const vHeight = window.innerHeight || document.documentElement.clientHeight;

  return (top > 0 || bottom > 0) && top < vHeight;
}


// TOGGLE MOBILE SIDE MENU 
let mobileMenu = document.querySelector(".menu_list-mobile");
let modalLayerMobile = document.querySelector(".modal-layer");
let mobileMenuLinks = document.querySelectorAll(".menu_links")
let mobileMenuHamburgerBtn = document.querySelector(".menu_hamburger-btn");

elementToToggleMobileMenu(mobileMenuHamburgerBtn);
elementsToToggleMobileMenu(mobileMenuLinks);
elementToToggleMobileMenu(modalLayerMobile);

function elementToToggleMobileMenu(ele) {
  ele.addEventListener("click", () => {
    mobileMenu.classList.toggle("close");
  })
}

function elementsToToggleMobileMenu(eles) {
  eles.forEach( (ele) => {
    ele.addEventListener("click", () => {
      mobileMenu.classList.toggle("close");
    })
  })
}


// CLASSES SECTION SCRIPTS

let classData = [
  {
    heading: "Class 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempora accusantium nesciunt, fugiat quam fuga optio quidem incidunt officiis et ut id ipsa hic nam.",
    img: "./assets/img/training-image-01.jpg",
    link: "#",
  },
  {
    heading: "Class 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempora accusantium nesciunt, fugiat quam fuga optio quidem incidunt officiis et ut id ipsa hic nam.",
    img: "./assets/img/training-image-02.jpg",
    link: "#",
  },
  {
    heading: "Class 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempora accusantium nesciunt, fugiat quam fuga optio quidem incidunt officiis et ut id ipsa hic nam.",
    img: "./assets/img/training-image-03.jpg",
    link: "#",
  },
  {
    heading: "Class 4",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempora accusantium nesciunt, fugiat quam fuga optio quidem incidunt officiis et ut id ipsa hic nam.",
    img: "./assets/img/training-image-04.jpg",
    link: "#",
  },
];
let defaultSelect = 0;
let selections = document.querySelectorAll(".section-content_classes-select");

// Set default
selections[defaultSelect].classList.add("active");
let tabData = classData[defaultSelect];
setTabData(tabData);

function setTabData(data) {
  let tabImg = document.querySelector(".section-content_classes-img");
  let tabHeading = document.querySelector(".section-content_classes-heading");
  let tabText = document.querySelector(".section-content_classes-text");
  let tabLink = document.querySelector(".section-content_classes-btn");
  tabImg.classList.remove("animate__fadeInDown");
  tabImg.classList.add("animate__fadeInDown");
  tabImg.setAttribute("src", data.img);
  tabHeading.innerText = data.heading;
  tabText.innerText = data.text;
  tabLink.setAttribute("href", data.link);
}

function selectClass(selected) {
  let selectedIndex = selected.dataset.tab;
  selections.forEach((select) => {
    select.classList.remove("active");
  });
  selected.classList.add("active");
  setTabData(classData[selectedIndex]);
}

// SCHEDULE SCRIPTS

let scheduleData = {
  friday: {
    fitness: {
      morning: "",
      afternoon: "",
    },
    muscle: {
      morning: "10:00AM - 11:30PM",
      afternoon: "",
    },
    body: {
      morning: "",
      afternoon: "",
    },
    yoga: {
      morning: "",
      afternoon: "2:00PM - 2:30PM",
    },
    advanced: {
      morning: "",
      afternoon: "",
    },
  },
  tuesday: {
    fitness: {
      morning: "",
      afternoon: "2:00PM - 3:30PM",
    },
    muscle: {
      morning: "",
      afternoon: "",
    },
    body: {
      morning: "10:00AM - 11:30PM",
      afternoon: "",
    },
    yoga: {
      morning: "",
      afternoon: "",
    },
    advanced: {
      morning: "",
      afternoon: "",
    },
  },
  wednesday: {
    fitness: {
      morning: "",
      afternoon: "",
    },
    muscle: {
      morning: "",
      afternoon: "",
    },
    body: {
      morning: "",
      afternoon: "",
    },
    yoga: {
      morning: "10:00AM - 11:30PM",
      afternoon: "",
    },
    advanced: {
      morning: "",
      afternoon: "2:00PM - 2:30PM",
    },
  },
  thursday: {
    fitness: {
      morning: "",
      afternoon: "",
    },
    muscle: {
      morning: "",
      afternoon: "2:00PM - 2:30PM",
    },
    body: {
      morning: "",
      afternoon: "",
    },
    yoga: {
      morning: "",
      afternoon: "",
    },
    advanced: {
      morning: "10:00AM - 11:30PM",
      afternoon: "",
    },
  },
  monday: {
    fitness: {
      morning: "10:00AM - 11:30PM",
      afternoon: "",
    },
    muscle: {
      morning: "",
      afternoon: "",
    },
    body: {
      morning: "",
      afternoon: "2:00PM - 2:30PM",
    },
    yoga: {
      morning: "",
      afternoon: "",
    },
    advanced: {
      morning: "",
      afternoon: "",
    },
  },
};

let defaultSchedule = "monday";
let scheduleDay = document.querySelectorAll(".schedule_day");
// Set default day
scheduleDay[0].classList.add("active");
setScheduleData(scheduleData[scheduleDay[0].dataset.date]);

function setScheduleData(data) {
  let fitnessMorningClass = document.querySelector(
    "th[data-time='fitness-morning']"
  );
  let fitnessAfternoonClass = document.querySelector(
    "th[data-time='fitness-afternoon']"
  );
  let muscleMorningClass = document.querySelector(
    "th[data-time='muscle-morning']"
  );
  let muscleAfternoonClass = document.querySelector(
    "th[data-time='muscle-afternoon']"
  );
  let bodyMorningClass = document.querySelector("th[data-time='body-morning']");
  let bodyAfternoonClass = document.querySelector(
    "th[data-time='body-afternoon']"
  );
  let yogaMorningClass = document.querySelector("th[data-time='yoga-morning']");
  let yogaAfternoonClass = document.querySelector(
    "th[data-time='yoga-afternoon']"
  );
  let advancedMorningclass = document.querySelector(
    "th[data-time='advanced-morning']"
  );
  let advancedAfternoonClass = document.querySelector(
    "th[data-time='advanced-afternoon']"
  );

  fitnessMorningClass.innerText = data.fitness.morning;
  fitnessAfternoonClass.innerText = data.fitness.afternoon;
  muscleMorningClass.innerText = data.muscle.morning;
  muscleAfternoonClass.innerText = data.muscle.afternoon;
  bodyMorningClass.innerText = data.body.morning;
  bodyAfternoonClass.innerText = data.body.afternoon;
  yogaMorningClass.innerText = data.yoga.morning;
  yogaAfternoonClass.innerText = data.yoga.afternoon;
  advancedMorningclass.innerText = data.advanced.morning;
  advancedAfternoonClass.innerText = data.advanced.afternoon;
}

function selectDay(selectedDay) {
  scheduleDay.forEach((day) => {
    day.classList.remove("active");
  });
  selectedDay.classList.add("active");
  setScheduleData(scheduleData[selectedDay.dataset.date]);
}
