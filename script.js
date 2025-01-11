const rightarrow = document.querySelectorAll(".right-arrow");
const projectCard = document.querySelectorAll('.project-card');
const modal = document.querySelector(".project-modal");
const modal1 = document.createElement("div");
const modal2 = document.createElement("div");
const modal3 = document.createElement("div");
const modal4 = document.createElement("div");
const projectheading = document.querySelector(".project-heading");
const h2 = document.createElement("h2");
const span = document.createElement("span");
var word = "WORK"
var clutter = ""
const splitedword = word.split("");

console.log(splitedword);

splitedword.forEach(function (char) {
  clutter += `<span>${char}</span>`
  h2.innerHTML = clutter
  projectheading.appendChild(h2);
})
console.log(projectheading);

// fetch data from project.json file and insert created modal
fetch("project.json")
  .then((response) => response.json())
  .then((data) => {
    data.projects.forEach((project, index) => {
      const img = document.createElement("img");

      //     // create div class projectInfo
      const projectInfo = document.createElement("div");
      projectInfo.classList.add("project-info", project.id);

      // Code to execute if expression === value1
      // create div with class projectInfo1
      const projectInfo1 = document.createElement("div");
      projectInfo1.classList.add("project-info1");
      // Append the projectinfo1 with img
      img.setAttribute("src", project.imgUrl);
      img.setAttribute("alt", "thubmnail of " + project.title);
      img.classList.add("img");
      projectInfo1.appendChild(img);

      // create div with class projectInfo2
      const projectInfo2 = document.createElement("div");
      projectInfo2.classList.add("project-info2");

      const heading1 = document.createElement("h2");
      heading1.innerHTML = project.title;

      const heading2 = document.createElement("h2");
      const span = document.createElement("span");

      const ptag = document.createElement("p");
      ptag.innerHTML =
        "&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;" +
        project.description;

      span.innerHTML = project.technologies + "&nbsp;etc.";
      heading2.innerText = "Technologies Used - ";
      heading2.appendChild(span);
      const visitBtn = document.createElement("button");
      visitBtn.classList.add("visit-btn");
      visitBtn.innerHTML = "<span>Visit Button</span>";
      const atag = document.createElement("a");
      atag.setAttribute("href", project.URL);
      atag.appendChild(visitBtn);
      projectInfo2.appendChild(heading1);
      projectInfo2.appendChild(heading2);
      projectInfo2.appendChild(ptag);
      projectInfo2.appendChild(atag);
      projectInfo.appendChild(projectInfo1);
      projectInfo.appendChild(projectInfo2);

      switch (true) {
        case projectInfo.classList.contains("1"):
          modal1.appendChild(projectInfo);
          break;
        case projectInfo.classList.contains("2"):
          modal2.appendChild(projectInfo);
          // Code to execute if expression === value2
          break;

        case projectInfo.classList.contains("3"):
          modal3.appendChild(projectInfo);
          // Code to execute if expression === value2
          break;
        // Add more cases as needed
        default:
          // Code to execute if none of the cases match
          modal4.textContent = "Something went wrong";
      }
    });
  });

// cross button appended with svg
const crossBtn = document.createElement("div");
const cross = document.createElement("button");
crossBtn.classList.add("cross-btn");
cross.classList.add("cross");
// Create the SVG namespace
const svgNS = "http://www.w3.org/2000/svg";

// Create the SVG element
const svg = document.createElementNS(svgNS, "svg");
svg.setAttribute("viewBox", "0 0 24 24");
svg.setAttribute("fill", "currentColor");

// Create the path element
const path = document.createElementNS(svgNS, "path");
path.setAttribute(
  "d",
  "M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"
);

// Append the path to the SVG
svg.appendChild(path);
cross.appendChild(svg);
crossBtn.appendChild(cross);

//created an event for on press of respective project's right arrow button respective project modal should open.
rightarrow.forEach(function (btn) {
  btn.addEventListener("click", function (event) {
    // console.log(event)
    const clickedElement = event.currentTarget;

    // Clear previous modal content
    modal.innerHTML = "";
    switch (true) {
      case clickedElement.classList.contains("MakeAblog"):
        modal.append(crossBtn, modal1);

        break;
      case clickedElement.classList.contains("BookYourTable"):
        modal.append(crossBtn, modal2);
        break;
      case clickedElement.classList.contains("Art-Exlporer"):
        modal.append(crossBtn, modal3);
        break;

      default:
        modal.append(crossBtn, modal4);
        break;
    }

    modal.style.display = "flex";
  });
});

// Add hover event to project cards
projectCard.forEach(function (card) {
  card.addEventListener("mouseenter", function (event) {
    const arrow = card.querySelector('.right-arrow');

    if (arrow.classList.contains("MakeAblog")) {
      // Add a hover effect on the respective arrow
      console.log("yes")
      arrow.classList.add("hover-btn");
    } else if (arrow.classList.contains("BookYourTable")) {
      arrow.classList.add("hover-btn");
    } else if (arrow.classList.contains("Art-Exlporer")) {
      arrow.classList.add("hover-btn");
    }
  });

  card.addEventListener("mouseleave", function () {

    const arrow = card.querySelector(".right-arrow");

    // Remove the hover effect when the mouse leaves
    arrow.classList.remove("hover-btn", "hover-btn", "hover-btn");
  });
});


// created event to close modal on click event of cross
cross.addEventListener("click", function (event) {
  modal.style.display = "";
});

// -------------------------- navabr scroll animation ------------------------ //
// 1.condition 1 at initial postion navbar background will be transparent
// 2. condition 2 on scroll 10 px navbar background should become white

// const navbar = document.querySelector('.navbar');

// window.addEventListener('scroll',function(scroll){
//   const scrollPosition =this.scrollY;
//   console.log(scrollPosition);
//   if(scrollPosition >10){
//     navbar.classList.add('navbarOnScroll');
//   }
//   else{
//     navbar.classList.remove('navbarOnScroll');
//   }
// })







// --------------------------- gsap animation -------------------------------- //
const t1 = gsap.timeline();

gsap.from("#circle1", {
  x: -50,
  y: -30,
  opacity: 0,
  duration: 1.5,
})
gsap.from("#circle2", {
  x: -50,
  y: 30,
  opacity: 0,
  duration: 1.5,
})
gsap.from("#circle3", {
  x: 50,
  y: 30,
  opacity: 0,
  duration: 1.5,
})
gsap.from("#circle4", {
  x: 50,
  y: -30,
  opacity: 0,
  duration: 1.5,
})
t1.from(".nav-ul", {
  y: -30,
  opacity: 0,
  duration: 0.5,
  delay: 1.1,
  stagger: 2
})

t1.from(".text", {
  y: -30,
  opacity: 0,
  stagger: 0.5
})

t1.from(".nav-btn", {
  opacity: 0,
  scale: 2,
  rotate: 20,
})
t1.from(".Social-media a", {
  opacity: 0,
  y: -30,
  stagger: 0.5
})

t1.from(".about-main", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".about-main",
    scroller: "body",
    start: "top 90%",
    end: "top 50%",
    scrub: 1
  }
})





t1.to(".card", {
  x: -3790,
  zIndex: -1,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".skill",
    scroller: "body",
    scrub: 2,
    pin: true,
    start: "top 0%",
    end: "top -90%",
    // markers:true
  }
})





const t2 = gsap.timeline();

t2.from(".work-card", {
 opacity:0,
 duration:3,
 scale:1.5,
//  stagger:0.5,
  scrollTrigger: {
    trigger: ".work-div",
    scroller: "body",
    start: "top 50%",
    // markers:true
  }
})




//----------------------------------  dark mode  -------------------------------//

// const darkmodebtn = document.querySelector("");

// darkmodebtn.addEventListener("click",function(click){
//  if(click){
//   document.body
//  }   
// })