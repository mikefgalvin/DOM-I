const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//#### Create selectors to point your data into elements
// [ ] Create selectors by using any of the DOM element's methods
// [ ] Note that IDs have been used on all images. Use the IDs to update src path content

// ------------- Selectors ----------------
//Main Selectors
const mainContainer = document.querySelector(".container");

//Header Selectors
const header = document.querySelector("header");
  const headerImage = header.querySelector("img");
  const headerNav = header.querySelector("nav");
  const link1headerNav = header.querySelector("a");
  const link2headerNav = link1headerNav.nextElementSibling;
  const link3headerNav = link2headerNav.nextElementSibling;
  const link4headerNav = link3headerNav.nextElementSibling;
  const link5headerNav = link4headerNav.nextElementSibling;
  const link6headerNav = link5headerNav.nextElementSibling;

//CTA Selectors
const cta = document.querySelector(".cta");
  const titleCTA = cta.querySelector("h1");
  const buttonCTA = cta.querySelector("button");
  const ctaImage = cta.querySelector("img");
  

//Main Content Selectors
const mainContent = document.querySelector(".main-content");
  const mainTop = mainContent.querySelector(".top-content");
    const topDiv = mainTop.querySelector(".text-content");
      const topDivTitle = topDiv.querySelector("h4");
      const topDivPar = topDivTitle.nextElementSibling;
    const topDiv2 = topDiv.nextElementSibling;
      const topDivTitle2 = topDiv2.querySelector("h4");
     const topDivPar2 = topDivTitle2.nextElementSibling;
  const mainBottom = mainContent.querySelector(".bottom-content");
    const bottomDiv = mainBottom.querySelector(".text-content");
      const bottomDivTitle = bottomDiv.querySelector("h4");
      const bottomDivPar = bottomDivTitle.nextElementSibling;
    const bottomDiv2 = bottomDiv.nextElementSibling;
      const bottomDivTitle2 = bottomDiv2.querySelector("h4");
      const bottomDivPar2 = bottomDivTitle2.nextElementSibling;
    const bottomDiv3 = bottomDiv2.nextElementSibling;
      const bottomDivTitle3 = bottomDiv3.querySelector("h4");
      const bottomDivPar3 = bottomDivTitle3.nextElementSibling;
  const mainContentImage = mainContent.querySelector("img");

//Contact Selectors
const contact = document.querySelector(".contact");
  const contactTitle = contact.querySelector("h4");
  const contactPar1 = contactTitle.nextElementSibling;
  const contactPar2 = contactPar1.nextElementSibling;
  const contactPar3 = contactPar2.nextElementSibling;

//Footer Selectors
const footer = document.querySelector("footer");
  const footerPar = footer.querySelector("p");

// --------------------- Changes -------------------
//Header Changes
link1headerNav.textContent = "Services";
link2headerNav.textContent = "Product";
link3headerNav.textContent = "Vision";
link4headerNav.textContent = "Features";
link5headerNav.textContent = "About";
link6headerNav.textContent = "Contact";

//CTA Changes
titleCTA.setAttribute('style', 'white-space: pre;');
titleCTA.textContent = "DOM \r\n";
titleCTA.textContent += "Is \r\n";
titleCTA.textContent += "Awesome";
ctaImage.src = "img/header-img.png";
buttonCTA.textContent = "Get Started";

//Main Content Changes
topDivTitle.textContent = "Features";
topDivPar.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
topDivTitle2.textContent = "About";
topDivPar2.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
mainContentImage.src = "img/mid-page-accent.jpg";
bottomDivTitle.textContent = "Services";
bottomDivPar.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottomDivTitle2.textContent = "Product";
bottomDivPar2.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottomDivTitle3.textContent = "Vision";
bottomDivPar3.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

//Contact Changes
contactTitle.textContent = "Contact";
contactPar1.setAttribute('style', 'white-space: pre;');
contactPar1.textContent = "123 Way 456 Street \r\n";
contactPar1.textContent += "Somewhere, USA";
contactPar2.textContent = "1 (888) 888-8888";
contactPar3.textContent = "sales@greatidea.io";

//Footer Changes
footerPar.textContent = "Copyright Great Idea! 2018";