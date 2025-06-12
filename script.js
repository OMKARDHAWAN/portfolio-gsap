const darkinput = document.querySelectorAll(".darkinput");
const rightarrow = document.querySelectorAll(".right-arrow");
const projectCard = document.querySelectorAll('.project-card');
const LANDing = document.querySelector(".landing");
const modal = document.querySelector(".project-modal");
const modal1 = document.createElement("div");
const modal2 = document.createElement("div");
const modal3 = document.createElement("div");
const modal4 = document.createElement("div");
const circle = document.querySelectorAll('circle');
const navbar = document.querySelector('.navbar');
// ------------------------- landing-SVG using js -------------------------------//
const ScreenWidth = window.innerWidth;
const ScreenHeight = "";




// set circle svg co-ordinates as per widow size
const Gtag = document.createElementNS("http://www.w3.org/2000/svg", "g");
const circle1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
const circle2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
const circle3 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
const circle4 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
const landingDiv = document.querySelector(".landingsvg");
const landingsvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const scroller = this.scrollY;
console.log(scroller);

if(ScreenWidth >= 1040 && ScreenWidth <= 1440 ){
  landingsvg.setAttribute("viewBox", "0 0 1440 1440");
  landingsvg.setAttribute("fill", "currentColor");
  
  circle1.setAttribute("r", "111");  // radius of the circle1
  circle1.setAttribute("cx", "327");  // X coordinate of the circle1
  circle1.setAttribute("cy", "282");  // Y coordinate of the circle1
  circle1.setAttribute("id","circle1")

  // circle1.setAttribute("r", "111");  // radius of the circle1
  // circle1.setAttribute("cx", "370");  // X coordinate of the circle1
  // circle1.setAttribute("cy", "282");  // Y coordinate of the circle1
  // circle1.setAttribute("id","circle1")
  
  
   circle2.setAttribute("r", "311");    // radius of the circle2
   circle2.setAttribute("cx", "77");  // X coordinate of the circle2
   circle2.setAttribute("cy", "892");  // Y coordinate of the circle2
   circle2.setAttribute("id","circle2")
   
   circle3.setAttribute("r", "119");    // radius of the circle2
   circle3.setAttribute("cx", "1209");  // X coordinate of the circle2
   circle3.setAttribute("cy", "800");  // Y coordinate of the circle2
   circle3.setAttribute("id","circle3")
   
   circle4.setAttribute("r", "147");    // radius of the circle2
   circle4.setAttribute("cx", "1381");  // X coordinate of the circle2
   circle4.setAttribute("cy", "37");  // Y coordinate of the circle2
   circle4.setAttribute("id","circle4")
   // create gtag
   Gtag.setAttribute("fill","#000");
   
   // Gtag.append(circle1,circle2,circle3,circle4);
   
   Gtag.appendChild(circle1);
   Gtag.appendChild(circle2);
   Gtag.appendChild(circle3);
   Gtag.appendChild(circle4);
   
  // console.log(circle1);
  //  console.log(Gtag);
  //  console.log(landingsvg)
   landingsvg.appendChild(Gtag);
   
   landingDiv.appendChild(landingsvg);
    //  console.log(landingDiv)

}
 else if( ScreenWidth > 900 && ScreenWidth <= 1040 ){
    landingsvg.setAttribute("viewBox", "0 0 1041 1040");
    landingsvg.setAttribute("fill", "currentColor");
    
    
    circle1.setAttribute("r", "80");  // radius of the circle1
    circle1.setAttribute("cx", "250");  // X coordinate of the circle1
    circle1.setAttribute("cy", "282");  // Y coordinate of the circle1
    circle1.setAttribute("id","circle1")
    
    
    circle2.setAttribute("r", "201");    // radius of the circle2
     circle2.setAttribute("cx", "77");  // X coordinate of the circle2
     circle2.setAttribute("cy", "782");  // Y coordinate of the circle2
     circle2.setAttribute("id","circle2")
     
     circle3.setAttribute("r", "109");    // radius of the circle2
     circle3.setAttribute("cx", "950");  // X coordinate of the circle2
     circle3.setAttribute("cy", "700");  // Y coordinate of the circle2
     circle3.setAttribute("id","circle3")
     
     circle4.setAttribute("r", "147");    // radius of the circle2
     circle4.setAttribute("cx", "999");  // X coordinate of the circle2
     circle4.setAttribute("cy", "37");  // Y coordinate of the circle2
     circle4.setAttribute("id","circle4")
     // create gtag
     Gtag.setAttribute("fill","#000");
     
     // Gtag.append(circle1,circle2,circle3,circle4);
     
     Gtag.appendChild(circle1);
     Gtag.appendChild(circle2);
     Gtag.appendChild(circle3);
     Gtag.appendChild(circle4);
     
    // console.log(circle1);
    //  console.log(Gtag);
    //  console.log(landingsvg)
     landingsvg.appendChild(Gtag);
     
     landingDiv.appendChild(landingsvg);
      //  console.log(landingDiv)
  
  }
  else if( ScreenWidth > 768 && ScreenWidth <= 900 ){
    landingsvg.setAttribute("viewBox", "0 0 1041 1140");
    landingsvg.setAttribute("fill", "currentColor");
    
    
    circle1.setAttribute("r", "80");  // radius of the circle1
    circle1.setAttribute("cx", "250");  // X coordinate of the circle1
    circle1.setAttribute("cy", "282");  // Y coordinate of the circle1
    circle1.setAttribute("id","circle1")
    
    
    circle2.setAttribute("r", "201");    // radius of the circle2
     circle2.setAttribute("cx", "77");  // X coordinate of the circle2
     circle2.setAttribute("cy", "882");  // Y coordinate of the circle2
     circle2.setAttribute("id","circle2")
     
     circle3.setAttribute("r", "109");    // radius of the circle3
     circle3.setAttribute("cx", "850");  // X coordinate of the circle2
     circle3.setAttribute("cy", "850");  // Y coordinate of the circle2
     circle3.setAttribute("id","circle3")
     
     circle4.setAttribute("r", "147");    // radius of the circle4
     circle4.setAttribute("cx", "999");  // X coordinate of the circle2
     circle4.setAttribute("cy", "37");  // Y coordinate of the circle2
     circle4.setAttribute("id","circle4")
     // create gtag
     Gtag.setAttribute("fill","#000");
     
     // Gtag.append(circle1,circle2,circle3,circle4);
     
     Gtag.appendChild(circle1);
     Gtag.appendChild(circle2);
     Gtag.appendChild(circle3);
     Gtag.appendChild(circle4);
     
    // console.log(circle1);
    //  console.log(Gtag);
    //  console.log(landingsvg)
     landingsvg.appendChild(Gtag);
     
     landingDiv.appendChild(landingsvg);
      //  console.log(landingDiv)
  
  }
  else if(ScreenWidth <= 768 && ScreenWidth >= 730 ){
     
  landingsvg.setAttribute("viewBox", "0 0 768 868");
  landingsvg.setAttribute("fill", "currentColor");
  
  
  circle1.setAttribute("r", "81");  // radius of the circle1
  circle1.setAttribute("cx", "150");  // X coordinate of the circle1
  circle1.setAttribute("cy", "222");  // Y coordinate of the circle1
  circle1.setAttribute("id","circle1")
  
  
  circle2.setAttribute("r", "151");    // radius of the circle2
   circle2.setAttribute("cx", "80");  // X coordinate of the circle2
   circle2.setAttribute("cy", "668");  // Y coordinate of the circle2
   circle2.setAttribute("id","circle2")
   
   circle3.setAttribute("r", "90");    // radius of the circle2
   circle3.setAttribute("cx", "700");  // X coordinate of the circle2
   circle3.setAttribute("cy", "500");  // Y coordinate of the circle2
   circle3.setAttribute("id","circle3")
   
   circle4.setAttribute("r", "100");    // radius of the circle2
   circle4.setAttribute("cx", "730");  // X coordinate of the circle2
   circle4.setAttribute("cy", "20");  // Y coordinate of the circle2
   circle4.setAttribute("id","circle4")
   // create gtag
   Gtag.setAttribute("fill","#000");
   
   // Gtag.append(circle1,circle2,circle3,circle4);
   
   Gtag.appendChild(circle1);
   Gtag.appendChild(circle2);
   Gtag.appendChild(circle3);
   Gtag.appendChild(circle4);
   
  // console.log(circle1);
  //  console.log(Gtag);
  //  console.log(landingsvg)
   landingsvg.appendChild(Gtag);
   
   landingDiv.appendChild(landingsvg);
    //  console.log(landingDiv)
  
  
  }
  else if(ScreenWidth <= 730 && ScreenWidth > 630 ){
     
    landingsvg.setAttribute("viewBox", "0 0 768 868");
    landingsvg.setAttribute("fill", "currentColor");
    
    
    circle1.setAttribute("r", "51");  // radius of the circle1
    circle1.setAttribute("cx", "110");  // X coordinate of the circle1
    circle1.setAttribute("cy", "172");  // Y coordinate of the circle1
    circle1.setAttribute("id","circle1")
    
    
    circle2.setAttribute("r", "151");    // radius of the circle2
     circle2.setAttribute("cx", "80");  // X coordinate of the circle2
     circle2.setAttribute("cy", "668");  // Y coordinate of the circle2
     circle2.setAttribute("id","circle2")
     
     circle3.setAttribute("r", "90");    // radius of the circle2
     circle3.setAttribute("cx", "700");  // X coordinate of the circle2
     circle3.setAttribute("cy", "550");  // Y coordinate of the circle2
     circle3.setAttribute("id","circle3")
     
     circle4.setAttribute("r", "100");    // radius of the circle2
     circle4.setAttribute("cx", "730");  // X coordinate of the circle2
     circle4.setAttribute("cy", "20");  // Y coordinate of the circle2
     circle4.setAttribute("id","circle4")
     // create gtag
     Gtag.setAttribute("fill","#000");
     
     // Gtag.append(circle1,circle2,circle3,circle4);
     
     Gtag.appendChild(circle1);
     Gtag.appendChild(circle2);
     Gtag.appendChild(circle3);
     Gtag.appendChild(circle4);
     
    // console.log(circle1);
    //  console.log(Gtag);
    //  console.log(landingsvg)
     landingsvg.appendChild(Gtag);
     
     landingDiv.appendChild(landingsvg);
      //  console.log(landingDiv)
    
    
    }
  else if(ScreenWidth <= 630 && ScreenWidth > 530 ){
    
    landingsvg.setAttribute("viewBox", "0 0 425 925");
    landingsvg.setAttribute("fill", "currentColor");
    
    
    circle1.setAttribute("r", "40");  // radius of the circle1
    circle1.setAttribute("cx", "90");  // X coordinate of the circle1
    circle1.setAttribute("cy", "110");  // Y coordinate of the circle1
    circle1.setAttribute("id","circle1")
    
    
    circle2.setAttribute("r", "71");    // radius of the circle2
     circle2.setAttribute("cx", "57");  // X coordinate of the circle2
     circle2.setAttribute("cy", "500");  // Y coordinate of the circle2
     circle2.setAttribute("id","circle2")
     
     circle3.setAttribute("r", "60");    // radius of the circle2
     circle3.setAttribute("cx", "425");  // X coordinate of the circle2
     circle3.setAttribute("cy", "342");  // Y coordinate of the circle2
     circle3.setAttribute("id","circle3")
     
     circle4.setAttribute("r", "67");    // radius of the circle2
     circle4.setAttribute("cx", "426");  // X coordinate of the circle2
     circle4.setAttribute("cy", "37");  // Y coordinate of the circle2
     circle4.setAttribute("id","circle4")
     // create gtag
     Gtag.setAttribute("fill","#000");
     
     // Gtag.append(circle1,circle2,circle3,circle4);
     
     Gtag.appendChild(circle1);
     Gtag.appendChild(circle2);
     Gtag.appendChild(circle3);
     Gtag.appendChild(circle4);
     
    // console.log(circle1);
    //  console.log(Gtag);
    //  console.log(landingsvg)
     landingsvg.appendChild(Gtag);
     
     landingDiv.appendChild(landingsvg);
      //  console.log(landingDiv)
  
  }
  else if(ScreenWidth <= 530 && ScreenWidth > 425 ){
    
    

    landingsvg.setAttribute("viewBox", "0 0 425 925");
    landingsvg.setAttribute("fill", "currentColor");
    
    
    circle1.setAttribute("r", "50");  // radius of the circle1
    circle1.setAttribute("cx", "70");  // X coordinate of the circle1
    circle1.setAttribute("cy", "130");  // Y coordinate of the circle1
    circle1.setAttribute("id","circle1")
    
    
    circle2.setAttribute("r", "91");    // radius of the circle2
     circle2.setAttribute("cx", "57");  // X coordinate of the circle2
     circle2.setAttribute("cy", "650");  // Y coordinate of the circle2
     circle2.setAttribute("id","circle2")
     
     circle3.setAttribute("r", "80");    // radius of the circle2
     circle3.setAttribute("cx", "425");  // X coordinate of the circle2
     circle3.setAttribute("cy", "482");  // Y coordinate of the circle2
     circle3.setAttribute("id","circle3")
     
     circle4.setAttribute("r", "97");    // radius of the circle2
     circle4.setAttribute("cx", "426");  // X coordinate of the circle2
     circle4.setAttribute("cy", "37");  // Y coordinate of the circle2
     circle4.setAttribute("id","circle4")
     // create gtag
     Gtag.setAttribute("fill","#000");
     
     // Gtag.append(circle1,circle2,circle3,circle4);
     
     Gtag.appendChild(circle1);
     Gtag.appendChild(circle2);
     Gtag.appendChild(circle3);
     Gtag.appendChild(circle4);
     
    // console.log(circle1);
    //  console.log(Gtag);
    //  console.log(landingsvg)
     landingsvg.appendChild(Gtag);
     
     landingDiv.appendChild(landingsvg);
       console.log(landingDiv)
  
  }
  else if(ScreenWidth <= 425 && ScreenWidth > 375 ){
    
    

    landingsvg.setAttribute("viewBox", "0 0 425 925");
    landingsvg.setAttribute("fill", "currentColor");
    
    
    circle1.setAttribute("r", "50");  // radius of the circle1
    circle1.setAttribute("cx", "50");  // X coordinate of the circle1
    circle1.setAttribute("cy", "170");  // Y coordinate of the circle1
    circle1.setAttribute("id","circle1")
    
    
    circle2.setAttribute("r", "111");    // radius of the circle2
     circle2.setAttribute("cx", "57");  // X coordinate of the circle2
     circle2.setAttribute("cy", "800");  // Y coordinate of the circle2
     circle2.setAttribute("id","circle2")
     
     circle3.setAttribute("r", "80");    // radius of the circle2
     circle3.setAttribute("cx", "425");  // X coordinate of the circle2
     circle3.setAttribute("cy", "582");  // Y coordinate of the circle2
     circle3.setAttribute("id","circle3")
     
     circle4.setAttribute("r", "107");    // radius of the circle2
     circle4.setAttribute("cx", "426");  // X coordinate of the circle2
     circle4.setAttribute("cy", "37");  // Y coordinate of the circle2
     circle4.setAttribute("id","circle4")
     // create gtag
     Gtag.setAttribute("fill","#000");
     
     // Gtag.append(circle1,circle2,circle3,circle4);
     
     Gtag.appendChild(circle1);
     Gtag.appendChild(circle2);
     Gtag.appendChild(circle3);
     Gtag.appendChild(circle4);
     
    // console.log(circle1);
    //  console.log(Gtag);
    //  console.log(landingsvg)
     landingsvg.appendChild(Gtag);
     landingDiv.appendChild(landingsvg);
    //  console.log(landingDiv)
  
  }
  else if(ScreenWidth <= 375 && ScreenWidth > 320){
  
    if(scroller >10){
      navbar.classList.remove("navbarOnScroll");
   }

    landingsvg.setAttribute("viewBox", "0 0 375 820");
    landingsvg.setAttribute("fill", "currentColor");
    
    
    circle1.setAttribute("r", "40");  // radius of the circle1
    circle1.setAttribute("cx", "55");  // X coordinate of the circle1
    circle1.setAttribute("cy", "115");  // Y coordinate of the circle1
    circle1.setAttribute("id","circle1")
    
    
    circle2.setAttribute("r", "80");    // radius of the circle2
     circle2.setAttribute("cx", "57");  // X coordinate of the circle2
     circle2.setAttribute("cy", "650");  // Y coordinate of the circle2
     circle2.setAttribute("id","circle2")
     
     circle3.setAttribute("r", "80");    // radius of the circle2
     circle3.setAttribute("cx", "400");  // X coordinate of the circle2
     circle3.setAttribute("cy", "500");  // Y coordinate of the circle2
     circle3.setAttribute("id","circle3")
     
     circle4.setAttribute("r", "100");    // radius of the circle2
     circle4.setAttribute("cx", "370");  // X coordinate of the circle2
     circle4.setAttribute("cy", "37");  // Y coordinate of the circle2
     circle4.setAttribute("id","circle4")
     // create gtag
     Gtag.setAttribute("fill","#000");
     
     // Gtag.append(circle1,circle2,circle3,circle4);
     
     Gtag.appendChild(circle1);
     Gtag.appendChild(circle2);
     Gtag.appendChild(circle3);
     Gtag.appendChild(circle4);
     
    // console.log(circle1);
    //  console.log(Gtag);
    //  console.log(landingsvg)
     landingsvg.appendChild(Gtag);
     
     landingDiv.appendChild(landingsvg);
      //  console.log(landingDiv)   
  
  }
  else if( 320 >= ScreenWidth){
  
    if(scroller >10){
      navbar.classList.remove("navbarOnScroll");
    }

    landingsvg.setAttribute("viewBox", "0 0 375 950");
    landingsvg.setAttribute("fill", "currentColor");


    circle1.setAttribute("r", "50");  // radius of the circle1
    circle1.setAttribute("cx", "60");  // X coordinate of the circle1
    circle1.setAttribute("cy", "120");  // Y coordinate of the circle1
    circle1.setAttribute("id","circle1")
    
    
    circle2.setAttribute("r", "80");    // radius of the circle2
     circle2.setAttribute("cx", "38");  // X coordinate of the circle2
     circle2.setAttribute("cy", "750");  // Y coordinate of the circle2
     circle2.setAttribute("id","circle2")
     
     circle3.setAttribute("r", "80");    // radius of the circle2
     circle3.setAttribute("cx", "400");  // X coordinate of the circle2
     circle3.setAttribute("cy", "500");  // Y coordinate of the circle2
     circle3.setAttribute("id","circle3")
     
     circle4.setAttribute("r", "100");    // radius of the circle2
     circle4.setAttribute("cx", "370");  // X coordinate of the circle2
     circle4.setAttribute("cy", "37");  // Y coordinate of the circle2
     circle4.setAttribute("id","circle4")
     // create gtag
     Gtag.setAttribute("fill","#000");
     
     // Gtag.append(circle1,circle2,circle3,circle4);
     
     Gtag.appendChild(circle1);
     Gtag.appendChild(circle2);
     Gtag.appendChild(circle3);
     Gtag.appendChild(circle4);
     
    // console.log(circle1);
    //  console.log(Gtag);
    //  console.log(landingsvg)
     landingsvg.appendChild(Gtag);
     
     landingDiv.appendChild(landingsvg);
      //  console.log(landingDiv)   
  
  }
  else{
    
  
  landingsvg.setAttribute("viewBox", "0 0 1440 950");
  landingsvg.setAttribute("fill", "currentColor");
  
  
  circle1.setAttribute("r", "111");  // radius of the circle1
  circle1.setAttribute("cx", "327");  // X coordinate of the circle1
  circle1.setAttribute("cy", "182");  // Y coordinate of the circle1
  circle1.setAttribute("id","circle1")
  
  
  circle2.setAttribute("r", "211");    // radius of the circle2
   circle2.setAttribute("cx", "77");  // X coordinate of the circle2
   circle2.setAttribute("cy", "682");  // Y coordinate of the circle2
   circle2.setAttribute("id","circle2")
   
   circle3.setAttribute("r", "119");    // radius of the circle2
   circle3.setAttribute("cx", "1209");  // X coordinate of the circle2
   circle3.setAttribute("cy", "722");  // Y coordinate of the circle2
   circle3.setAttribute("id","circle3")
   
   circle4.setAttribute("r", "147");    // radius of the circle2
   circle4.setAttribute("cx", "1381");  // X coordinate of the circle2
   circle4.setAttribute("cy", "37");  // Y coordinate of the circle2
   circle4.setAttribute("id","circle4")
   // create gtag
   Gtag.setAttribute("fill","#000");
   
   // Gtag.append(circle1,circle2,circle3,circle4);
   
   Gtag.appendChild(circle1);
   Gtag.appendChild(circle2);
   Gtag.appendChild(circle3);
   Gtag.appendChild(circle4);
   
  // console.log(circle1);
  //  console.log(Gtag);
  //  console.log(landingsvg)
   landingsvg.appendChild(Gtag);
   
   landingDiv.appendChild(landingsvg);
    //  console.log(landingDiv)
     }
     
     //------------------- cross button appended with svg  --------------------------//
     // const crossBtn = document.createElement("div");
     // const cross = document.createElement("button");
     // crossBtn.classList.add("cross-btn");
     // cross.classList.add("cross");
     // // Create the SVG namespace
// const svgNS = "http://www.w3.org/2000/svg";

// // Create the SVG element
// const svg = document.createElementNS(svgNS, "svg");

// // Create the path element
// const path = document.createElementNS(svgNS, "path");
// path.setAttribute(
//   "d",
//   "M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"
// );

// const landingsvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");


//  // console.log(Gtag);
// landingsvg.setAttribute("width", "100%");
// landingsvg.setAttribute("height", "100%");

// landingsvg.style.border = "5px solid black"

// 
// landingsvg.appendChild(Gtag);
// LANDing.append(landingsvg);

// console.log(landingsvg);



//  // Create a circle element
//  circle.setAttribute("cx", "100");  // X coordinate of the center
//  circle.setAttribute("cy", "100");  // Y coordinate of the center
//  circle.setAttribute("r", "50");    // Radius of the circle
//  circle.setAttribute("stroke", "black"); // Stroke color
//  circle.setAttribute("stroke-width", "4"); // Stroke width
//  circle.setAttribute("fill", "lightblue"); // Fill color

// // ap
//  // Append the circle to the SVG







// ---------- fetch data from project.json file and insert created modal --------//
fetch("project.json")
  .then((response) => response.json())
  .then((data) => {
    data.projects.forEach((project, index) => {
      const img = document.createElement("img");
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
          modal1.classList.add("modal");
          break;

        case projectInfo.classList.contains("2"):
          modal2.appendChild(projectInfo);
          modal2.classList.add("modal");
          // Code to execute if expression === value2
          break;

        case projectInfo.classList.contains("3"):
          modal3.appendChild(projectInfo);
          modal3.classList.add("modal");
          // Code to execute if expression === value2
          break;

        // Add more cases as needed
        default:
          // Code to execute if none of the cases match
          modal4.textContent = "Something went wrong";
      }
    });
  });

//---created an event for on press of respective project's right arrow button respective project modal should open.
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







//------------------- cross button appended with svg  --------------------------//
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


// if(document.body.classList.contains("dark-mode")){
//  // Add hover event to project cards
//   projectCard.forEach(function (card) {
//     card.addEventListener("mouseenter", function (event) {
//       const arrow = card.querySelector('.right-arrow');
//       if (arrow.classList.contains("MakeAblog")) {
//         // Add a hover effect on the respective arrow
//         arrow.classList.add("hover-btn");
//       } else if (arrow.classList.contains("BookYourTable")) {
//         arrow.classList.add("hover-btn");
//       } else if (arrow.classList.contains("Art-Exlporer")) {
//         arrow.classList.add("hover-btn");
//       }
//     });

//     card.addEventListener("mouseleave", function () {

//       const arrow = card.querySelector(".right-arrow");

//       // Remove the hover effect when the mouse leaves
//       arrow.classList.remove("hover-btn", "hover-btn", "hover-btn");
//     });
//   });
// }else{
//  // Add hover event to project cards
//  darkprojectCard.forEach(function (card) {
//    card.addEventListener("mouseenter", function (event) {
//      const arrow = card.querySelector('.dark-rightarrowbtn');
//      if (arrow.classList.contains("MakeAblog")) {
//        // Add a hover effect on the respective arrow
//        arrow.classList.add("darkhover-btn");
//      } else if (arrow.classList.contains("BookYourTable")) {
//        arrow.classList.add("darkhover-btn");
//      } else if (arrow.classList.contains("Art-Exlporer")) {
//        arrow.classList.add("darkhover-btn");
//      }

//    });

//    card.addEventListener("mouseleave", function () {

//      const arrow = card.querySelector(".dark-rightarrowbtn");

//      // Remove the hover effect when the mouse leaves
//      arrow.classList.remove("darkhover-btn", "darkhover-btn", "darkhover-btn");
//    });
//  });
// }



// if(document.body.classList.contains(" ")){
//   // Add hover event to project cards
//   projectCard.forEach(function (card) {
//     card.addEventListener("mouseenter", function (event) {
//       const arrow = card.querySelector('.right-arrow');
//       if (arrow.classList.contains("MakeAblog")) {
//         // Add a hover effect on the respective arrow
//         arrow.classList.add("hover-btn");
//       } else if (arrow.classList.contains("BookYourTable")) {
//         arrow.classList.add("hover-btn");
//       } else if (arrow.classList.contains("Art-Exlporer")) {
//         arrow.classList.add("hover-btn");
//       }
//     });

//     card.addEventListener("mouseleave", function () {

//       const arrow = card.querySelector(".right-arrow");

//       // Remove the hover effect when the mouse leaves
//       arrow.classList.remove("hover-btn", "hover-btn", "hover-btn");
//     });
//   });
// }
// else if (document.body.classList.contains("dark-mode")){
//   // Add hover event to project cards
//  darkprojectCard.forEach(function (card) {
//    card.addEventListener("mouseenter", function (event) {
//      const arrow = card.querySelector('.dark-rightarrowbtn');
//      if (arrow.classList.contains("MakeAblog")) {
//        // Add a hover effect on the respective arrow
//        arrow.classList.add("darkhover-btn");
//      } else if (arrow.classList.contains("BookYourTable")) {
//        arrow.classList.add("darkhover-btn");
//      } else if (arrow.classList.contains("Art-Exlporer")) {
//        arrow.classList.add("darkhover-btn");
//      }

//    });

//    card.addEventListener("mouseleave", function () {

//      const arrow = card.querySelector(".dark-rightarrowbtn");

//      // Remove the hover effect when the mouse leaves
//      arrow.classList.remove("darkhover-btn", "darkhover-btn", "darkhover-btn");
//    });
//  });
//  }
//  else{
//    // Add hover event to project cards
//    projectCard.forEach(function (card) {
//      card.addEventListener("mouseenter", function (event) {
//        const arrow = card.querySelector('.right-arrow');
//        if (arrow.classList.contains("MakeAblog")) {
//          // Add a hover effect on the respective arrow
//          arrow.classList.add("hover-btn");
//        } else if (arrow.classList.contains("BookYourTable")) {
//          arrow.classList.add("hover-btn");
//        } else if (arrow.classList.contains("Art-Exlporer")) {
//          arrow.classList.add("hover-btn");
//        }
//      });

//      card.addEventListener("mouseleave", function () {

//        const arrow = card.querySelector(".right-arrow");

//        // Remove the hover effect when the mouse leaves
//        arrow.classList.remove("hover-btn", "hover-btn", "hover-btn");
//      });
//    });
//  }



// ------------------------ project-card hover effect ------------------------- //
projectCard.forEach(function (card) {
  card.addEventListener("mouseenter", function (event) {
    const arrow = card.querySelector('.right-arrow');
    if (arrow.classList.contains("MakeAblog")) {
      // Add a hover effect on the respective arrow
      arrow.classList.add("hover-btn");
      if (document.body.classList.contains("dark-mode")) {
        rightarrow.forEach((button)=>{
          button.classList.replace("hover-btn", "darkhover-btn");
        })
      } else {
        darkresumebtn.forEach((button)=>{
          button.classList.replace("darkhover-btn","hover-btn");
        })
        // aboutMain.classList.replace("about-darkmode", "about-main");
      }

    } else if (arrow.classList.contains("BookYourTable")) {
      arrow.classList.add("hover-btn");
      if (document.body.classList.contains("dark-mode")) {
        rightarrow.forEach((button)=>{
          button.classList.replace("hover-btn", "darkhover-btn");
        })
      } else {
        darkresumebtn.forEach((button)=>{
          button.classList.replace("darkhover-btn","hover-btn");
        })
        // aboutMain.classList.replace("about-darkmode", "about-main");
      }
    } else if (arrow.classList.contains("Art-Exlporer")) {
      arrow.classList.add("hover-btn");
      if (document.body.classList.contains("dark-mode")) {
        rightarrow.forEach((button)=>{
          button.classList.replace("hover-btn", "darkhover-btn");
        })
      } else {
        darkresumebtn.forEach((button)=>{
          button.classList.replace("darkhover-btn","hover-btn");
        })
        // aboutMain.classList.replace("about-darkmode", "about-main");
      }
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



window.addEventListener('scroll',function(scroll){
  const scrollPosition =this.scrollY;
  console.log(scrollPosition);

 if(document.body.classList.contains("dark-mode")){
  navbar.classList.remove('navbarOnScroll');

  if(scrollPosition >10){
     navbar.classList.add("DarknavScroll");
  }
  else{
    navbar.classList.remove('DarknavScroll');
  }
if(ScreenWidth <= 730 && ScreenWidth > 426){
  if(document.body.classList.contains("dark-mode")){
    navbar.classList.remove("DarknavScroll");
  }else{
    navbar.classList.remove('navbarOnScroll');
  }
 }

  if(ScreenWidth <= 425 && ScreenWidth > 375){
    if(document.body.classList.contains("dark-mode")){
      navbar.classList.remove("DarknavScroll");
    }else{
      navbar.classList.remove('navbarOnScroll');
    }
  }
  
  
  if(ScreenWidth <= 375 && ScreenWidth > 320){
    if(document.body.classList.contains("dark-mode")){
      navbar.classList.remove("DarknavScroll");
    }else{
      navbar.classList.remove('navbarOnScroll');
    }
  }
  
  if(320 >= ScreenWidth){
    if(document.body.classList.contains("dark-mode")){
      navbar.classList.remove("DarknavScroll");
    }else{
      navbar.classList.remove('navbarOnScroll');
    }
  }


 }else{
  navbar.classList.remove('DarknavScroll');




  if(scrollPosition >10){
    navbar.classList.add("navbarOnScroll");
 }
 else{
   navbar.classList.remove('navbarOnScroll');
 }

 if(ScreenWidth <= 730 && ScreenWidth >= 426){
  if(document.body.classList.contains("dark-mode")){
    navbar.classList.remove("DarknavScroll");
  }else{
    navbar.classList.remove('navbarOnScroll');
  }
 }


if(ScreenWidth <= 425 && ScreenWidth > 375){
  if(document.body.classList.contains("dark-mode")){
    navbar.classList.remove("DarknavScroll");
  }else{
    navbar.classList.remove('navbarOnScroll');
  }
}


if(ScreenWidth <= 375 && ScreenWidth > 320){
  if(document.body.classList.contains("dark-mode")){
    navbar.classList.remove("DarknavScroll");
  }else{
    navbar.classList.remove('navbarOnScroll');
  }
}

if(320 >= ScreenWidth){
  if(document.body.classList.contains("dark-mode")){
    navbar.classList.remove("DarknavScroll");
  }else{
    navbar.classList.remove('navbarOnScroll');
  }
}
 
}

// navbar.classList.add('navbarOnScroll');

  // if(scrollPosition >10){
  //   navbar.classList.add('navbarOnScroll');
  // }
  // else{
  //   navbar.classList.remove('navbarOnScroll');
  // }
})







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

t1.from(".resumebtn", {
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
  opacity: 0,
  duration: 3,
  scale: 1.5,
  //  stagger:0.5,
  scrollTrigger: {
    trigger: ".work-div",
    scroller: "body",
    start: "top 50%",
    // markers:true
  }
})

const projectitle = document.querySelectorAll("h2 span");

t2.from(projectitle, {
  x: 0,
  y: -30,
  opacity: 0,
  duration: 1,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".project",
    scroller: "body",
    // markers:true,
    scrub: 2,
    end: "top 30%"
  }
})
t2.from(".project-card", {
  opacity: 0,
  duration: 2,
  stagger: 0.5,
  scrollTrigger: {
    trigger: ".project-card",
    scroller: "body",
    // markers:true,
    scrub: 1,
    // start:"top 70%",
    // end:"top 30%"
  }
})

t2.to("#contact", {
  opacity: 1,
  scale: 1,
  duration: 5,
  scrollTrigger: {
    trigger: "form",
    scroller: "body",
    // markers:true,
    start: "top 70%",
  }
})

// const t3 = gsap.timeline();
// t3.from(".main-footer2", {
//   opacity: 0,
//   y:20,
//   duration: 5,
//   scrollTrigger:{
//     trigger:".footer",
//     scroller:"body",
//     start:"top 30%",
//     markers:true
//   }
// })


//----------------------------------  dark mode  -------------------------------//
const htmlElement = document.documentElement;
const darkmodebtn = document.querySelector(".nightmodebtn");
const hamburgerpath1 = document.querySelector("#path1")
const hamburgerpath2 = document.querySelector("#path2")
const hamburgerpath3 = document.querySelector("#path3")

const landing = document.querySelector(".landing");
const aboutMain = document.querySelector("#about-main");
const button = document.querySelectorAll("button");






const resumebtn = document.querySelectorAll(".resumebtn");
const Socialicon = document.querySelectorAll(".social-icon");

const input = document.querySelectorAll("input");
const textarea = document.querySelectorAll("textarea");

const label = document.querySelectorAll("label");
const formbutton = document.querySelectorAll(".form-btn");


const footer = document.querySelector(".main-footer2");


const path1 = document.querySelector("#footer-svgpath1");
const path2 = document.querySelector("#footer-svgpath2");
const path3 = document.querySelector("#footer-svgpath3");
const path4 = document.querySelector("#footer-svgpath4");
const path5 = document.querySelector("#footer-svgpath5");
const darkMenu = document.querySelector(".dark-menu");
const Darkcross = document.querySelector(".Darkcross");
const darkresumebtn = document.querySelectorAll(".darkhover-btn")
// // Select the <g> element

// const gElement = document.querySelector("g");
// const circle = gElement.querySelectorAll("circle");

const navbarText = document.querySelectorAll("nav ul li a");


const NavColorChanged = () => {
  
  const Position =this.scrollY;
  if(document.body.classList.contains("dark-mode")){
    console.log(Position);
    if(Position >10){
      navbar.classList.add("DarknavScroll");
      navbar.classList.remove("navbarOnScroll");
   }
   else{
     navbar.classList.remove('DarknavScroll');
   }
  }else{
   
    navbar.classList.remove('DarknavScroll');
    if(Position>10){
      navbar.classList.add("navbarOnScroll");
    }

    if(ScreenWidth <= 425 && ScreenWidth > 375){
      if(document.body.classList.contains("dark-mode")){
        navbar.classList.remove("DarknavScroll");
      }else{
        navbar.classList.remove('navbarOnScroll');
      }
    }
    
    
    if(ScreenWidth <= 375 && ScreenWidth > 320){
      if(document.body.classList.contains("dark-mode")){
        navbar.classList.remove("DarknavScroll");
      }else{
        navbar.classList.remove('navbarOnScroll');
      }
    }
    
    if(320 >= ScreenWidth){
      if(document.body.classList.contains("dark-mode")){
        navbar.classList.remove("DarknavScroll");
      }else{
        navbar.classList.remove('navbarOnScroll');
      }
    }    
 }
}

const footerClassChanged = () => {
  const darkfooters = document.querySelector(".footer-darkmode");
  console.log(darkfooters);




  if (document.body.classList.contains("dark-mode")) {
    // added dark-mode to the footer 
    footer.classList.replace("main-footer2", "footer-darkmode")
  } else {
    // added dark-mode to the footer 
    darkfooters.classList.replace("footer-darkmode", "main-footer2")
  }
}


const projectCardChanged = () => {
  const darkprojectCard = document.querySelectorAll(".darkproject-card");

  // changed project card section to dark mode
  if (document.body.classList.contains("dark-mode")) {
    projectCard.forEach((card) => {
      card.classList.replace("project-card", "darkproject-card")
    })
  } else {
    darkprojectCard.forEach((card) => {
      card.classList.replace("darkproject-card", "project-card");
    })
  }
}


darkmodebtn.addEventListener("click", function (click) {


  if (click) {

    document.body.classList.toggle("dark-mode");
    htmlElement.classList.toggle("dark-mode");
    button.forEach((btn) => {
      btn.classList.toggle("button");
    })
    // toggle darkmodebtn backgorund color
    darkmodebtn.classList.toggle("dark-mode");
    // toggle navbar text color 
    navbarText.forEach((selectedicon) => {
      selectedicon.classList.toggle("color");
    })



    // changed hamburger stroke value
    if (document.body.classList.contains("dark-mode")) {
      hamburgerpath1.setAttribute("stroke", "#ffffff");
      hamburgerpath2.setAttribute("stroke", "#ffffff");
      hamburgerpath3.setAttribute("stroke", "#ffffff");
    } else {
      hamburgerpath1.setAttribute("stroke", "#000");
      hamburgerpath2.setAttribute("stroke", "#000");
      hamburgerpath3.setAttribute("stroke", "#000");
    }

    // changed nav-menu to transparent
    navMenu.classList.toggle("dark-menu");

    NavColorChanged();
   

    
    
    // Change About section to dark mode
    // aboutMain.classList.toggle("about-darkmode");
    if (document.body.classList.contains("dark-mode")) {
      aboutMain.classList.replace("about-main", "about-darkmode");
    } else {
      aboutMain.classList.replace("about-darkmode", "about-main");
    }

    // swtiching projectCard class from dark to light mode and vice versa  
    projectCardChanged();

    // swithching footer class from dark to light mode. and vice versa
    footerClassChanged();



    // Change About section to dark mode
    if (document.body.classList.contains("dark-mode")) {
      path5.setAttribute("fill", "#222f3e")
      path4.setAttribute("fill", "#2b3d4f")
      path3.setAttribute("fill", "#2f475d")
      path2.setAttribute("fill", "#35526f")
      path1.setAttribute("fill", "#416688")
    } else {
      path5.setAttribute("fill", "#292929")
      path4.setAttribute("fill", "#3d3d3d")
      path3.setAttribute("fill", "#454545")
      path2.setAttribute("fill", "#4f4f4f")
      path1.setAttribute("fill", "#5d5d5d")
    }






    // switch input and textarea classes from dark-mode to light-mode

    input.forEach((input) => {
      input.classList.toggle("darkinput");
    })

    textarea.forEach((textarea) => {
      textarea.classList.toggle("darktextarea");
    })
  }

  


  // added dark mode to label field
  if (document.body.classList.contains("dark-mode")) {
    label.forEach((button) => {
      button.classList.add("darklabel")
    })
  } else {
    label.forEach((button) => {
      button.classList.remove("darklabel");
    })
  }

  //  added dark mode to form button
  if (document.body.classList.contains("dark-mode")) {
    formbutton.forEach((button) => {
      button.classList.replace("form-btn", "dark-formbtn");
    })
  } else {
    formbutton.forEach((button) => {
      button.classList.replace("dark-formbtn", "form-btn");
    })
  }


  if (document.body.classList.contains("dark-mode")) {
    Gtag.setAttribute("fill", "#222f3e");
  }
  else {
    // If dark mode is not active, set fill to light mode color
    Gtag.setAttribute("fill", "#000");
  }


  if (document.body.classList.contains("dark-mode")) {
    rightarrow.forEach((button)=>{
      button.classList.replace("hover-btn", "darkhover-btn");
    })
  } else {
    darkresumebtn.forEach((button)=>{
      button.classList.replace("darkhover-btn","hover-btn");
    })
    // aboutMain.classList.replace("about-darkmode", "about-main");
  }


})
// -----------------  function to changed project-modal to ---------------------- //
function handleClick() {
  const Modal = document.querySelectorAll(".project-modal");
  const projectModal = document.querySelectorAll(".project-info");
  const projectInfo1 = document.querySelectorAll(".project-info1");
  const projectInfo2 = document.querySelectorAll(".project-info2");
  const visitBtn = document.querySelectorAll(".visit-btn");
  const crossBtn = document.querySelectorAll(".cross")
  const Crossdiv = document.querySelectorAll(".cross-btn");
  const DarkprojectModal = document.querySelectorAll(".DarkprojectModal");
  const DarkprojectInfo = document.querySelectorAll(".DarkprojectInfo");
  const DarkprojectInfo1 = document.querySelectorAll(".DarkprojectInfo1");
  const DarkprojectInfo2 = document.querySelectorAll(".DarkprojectInfo2");
  const DarkVisitBtn = document.querySelectorAll(".dark-visitbtn");
  const DarkcrossBtn = document.querySelectorAll(".Darkcross")
  const modal = document.querySelectorAll(".modal")
  //  const modal = document.querySelectorAll(".modal");
  if (document.body.classList.contains("dark-mode")) {

    // Replace project-modal class with DarkprojectModal
    visitBtn.forEach((modal) => {
      modal.classList.replace("visit-btn", "dark-visitbtn");
    });

    Crossdiv.forEach((modal) => {
      modal.classList.replace("cross-btn", "Darkcrossbtn")
    })

    // Replace project-modal class with DarkprojectModal
    crossBtn.forEach((modal) => {
      modal.classList.replace("cross", "Darkcross");
    });


    // Replace project-modal class with DarkprojectModal
    Modal.forEach((modal) => {
      modal.classList.replace("project-modal", "DarkprojectModal");
    });

    modal.forEach((modal) => {
      modal.classList.replace("modal", "Darkmodal");
    })

    // Replace project-info class with DarkprojectInfo
    projectModal.forEach((modal) => {
      modal.classList.replace("project-info", "DarkprojectInfo");
    });

    projectInfo1.forEach((modal) => {
      modal.classList.replace("project-info1", "DarkprojectInfo1");
    });


    projectInfo2.forEach((modal) => {
      modal.classList.replace("project-info2", "DarkprojectInfo2");
    });


  } else {

    // Replace project-modal class with DarkprojectModal
    DarkVisitBtn.forEach((modal) => {
      modal.classList.replace("dark-visitbtn", "visit-btn");
    });

    // Replace project-modal class with DarkprojectModal
    DarkcrossBtn.forEach((modal) => {
      modal.classList.replace("Darkcross", "cross");
    });


    // Replace DarkprojectModal class with project-modal
    DarkprojectModal.forEach((modal) => {
      modal.classList.replace("DarkprojectModal", "project-modal");
    });

    // Replace DarkprojectInfo class with project-info
    DarkprojectInfo.forEach((modal) => {
      modal.classList.replace("DarkprojectInfo", "project-info");
    });

    DarkprojectInfo1.forEach((modal) => {
      modal.classList.replace("DarkprojectInfo1", "project-info1");
    });


    DarkprojectInfo2.forEach((modal) => {
      modal.classList.replace("DarkprojectInfo2", "project-info2");
    });

  }
}



rightarrow.forEach((btnClick) => {
  btnClick.addEventListener("click", handleClick);
});

































// -------------------------- hamburger menu ------------------------------------ //
const hamburgerBtn = document.querySelector(".hamburger-btn");
const navMenu = document.querySelector(".nav-menu");
const cancel = document.querySelector(".cancel");

hamburgerBtn.addEventListener("click", function (click) {
  navMenu.style.display = "flex";
  navMenu.style.left = "0%";
  document.body.style.overflow = "hidden";

})

cancel.addEventListener("click", function (click) {
  navMenu.style.left = "-100%";
  document.body.style.overflow = "scroll";
})


// Event listener to close the sidebar when clicking outside of it
document.addEventListener("click", function (event) {
  
  if(ScreenWidth <= 530 && ScreenWidth > 425){
    if (!navMenu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
      navMenu.style.left = "-100%";
      document.body.style.overflow = "scroll";
    }  
  }


  if(ScreenWidth <= 425 && ScreenWidth > 375){
    if (!navMenu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
      navMenu.style.left = "-100%";
      document.body.style.overflow = "scroll";
    }  
  }

  if(ScreenWidth <= 425 && ScreenWidth > 375){
    if (!navMenu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
      navMenu.style.left = "-100%";
      document.body.style.overflow = "scroll";
    }  
  }
  
  
  if(ScreenWidth <= 375 && ScreenWidth > 320){
    if (!navMenu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
      navMenu.style.left = "-100%";
      document.body.style.overflow = "scroll";
    }
  }
  
  if(320 >= ScreenWidth){
    if (!navMenu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
      navMenu.style.left = "-100%";
      document.body.style.overflow = "scroll";
    }
  }

});