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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Nav Items
const services = document.querySelector("a:nth-of-type(1)");
services.textContent = siteContent["nav"]["nav-item-1"];

const product = document.querySelector("a:nth-of-type(2)");
product.textContent = siteContent["nav"]["nav-item-2"];

const vision = document.querySelector("a:nth-of-type(3)");
vision.textContent = siteContent["nav"]["nav-item-3"]

const features = document.querySelector("a:nth-of-type(4)");
features.textContent = siteContent["nav"]["nav-item-4"]

const about = document.querySelector("a:nth-of-type(5)");
about.textContent = siteContent["nav"]["nav-item-5"];

const contact = document.querySelector("a:nth-of-type(6)");
contact.textContent = siteContent["nav"]["nav-item-6"];

//CTA Section Items
const ctaHead = document.querySelector("h1");
ctaHead.textContent = siteContent["cta"]["h1"];

const ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

//Main Content Items
const featuresH4 = document.querySelector(".text-content:nth-of-type(1) h4");
featuresH4.textContent = siteContent["main-content"]["features-h4"];

const featuresP = document.querySelector(".text-content:nth-of-type(1) p");
featuresP.textContent = siteContent["main-content"]["features-content"];

const aboutH4 = document.querySelector(".text-content:nth-of-type(2) h4");
aboutH4.textContent = siteContent["main-content"]["about-h4"];

const aboutP = document.querySelector(".text-content:nth-of-type(2) p");
aboutP.textContent = siteContent["main-content"]["about-content"];

let mainImg = document.getElementById("middle-img");
mainImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

const servicesH4 = document.querySelector(".text-content:nth-of-type(3) h4");
servicesH4.textContent = siteContent["main-content"]["services-h4"];

const servicesP = document.querySelector(".text-content:nth-of-type(3) p");
servicesP.textContent = siteContent["main-content"]["services-content"];

const productH4 = document.querySelector(".text-content:nth-of-type(4) h4");
productH4.textContent = siteContent["main-content"]["product-h4"];

const productP = document.querySelector(".text-content:nth-of-type(4) p");
productP.textContent = siteContent["main-content"]["product-content"];

const visionH4 = document.querySelector(".text-content:nth-of-type(5) h4");
visionH4.textContent = siteContent["main-content"]["vision-h4"];

const visionP = document.querySelector(".text-content:nth-of-type(5) p");
visionP.textContent = siteContent["main-content"]["vision-content"];

//Contact Content Items
const contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

const address = document.querySelector(".contact p:nth-of-type(1)");
address.textContent = siteContent["contact"]["address"];

const phone = document.querySelector(".contact p:nth-of-type(2)");
phone.textContent = siteContent["contact"]["phone"];

const email = document.querySelector(".contact p:nth-of-type(3)");
email.textContent = siteContent["contact"]["email"];

//Footer Items
const footerP = document.querySelector("footer p");
footerP.textContent = siteContent["footer"]["copyright"];

//Style changes
a.style.color = 'green';

const info = document.createElement('a');
info.textContent = 'Information';
info.href = '#';

const moreInfo = document.createElement('a');
moreInfo.textContent = 'More Information';
moreInfo.href = '#';

document.querySelector('nav').appendChild(moreInfo);
document.querySelector('nav').prepend(info);