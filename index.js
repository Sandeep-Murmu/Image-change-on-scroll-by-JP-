const itemText = document.querySelectorAll(".item-text");
const imageContainer = document.querySelector(".image-container");
const image = document.getElementById("item-image");
const container = document.querySelector(".container-main");
const footer = document.querySelector("footer");
const header = document.querySelector("header");

// array of image source 
let imgSrc = [
  "./image/dashboard-img.png",
  "./image/dashboard-img-4.png",
  "./image/dashboard-img-2.jpg",
  "./image/dashboard-img-3.jpg",
];

window.addEventListener("scroll", () => {
  for (let i = 0; i < itemText.length; i++) {

    // variables for height and top position of targeted element
    let itemTop = itemText[i].getBoundingClientRect().top;
    let containerTop = container.getBoundingClientRect().top;
    let containerHeight = container.getBoundingClientRect().height;
    let imageConatinerHeight = imageContainer.getBoundingClientRect().height;
    let footerTop = footer.getBoundingClientRect().top;
    let headerHeight = header.getBoundingClientRect().height;

    let topEnd = containerHeight - imageConatinerHeight + 140;

    // making image container sticky description is alight on screen
    if (containerTop <= 0) {
      if (footerTop <= window.innerHeight) {
        imageContainer.style.position = "absolute";
        imageContainer.style.top = `${topEnd}px`;
      } else if (!(footerTop <= window.innerHeight)) {
        imageContainer.style.position = "fixed";
        imageContainer.style.top = "100px";
      }
    } else {
      imageContainer.style.position = "absolute";
      imageContainer.style.top = "100px";
    }

    // chenging the image inside image container depending on description text
    // **---should'h use (itemTop + headerHeight >= 80 && itemTop + headerHeight <= window.innerHeight - 400) but is not working
    if (
      itemTop + headerHeight <= 80 ||
      itemTop + headerHeight >= window.innerHeight - 400
    ) {
      console.log(`${i}: not in position`);
    } else {
      image.src = imgSrc[i];
    }
    console.log(itemTop);
  }
});
