var Studio = document.querySelector("#h1-studio");
var Studioimg = document.querySelector("#h1-studio video");

Studio.addEventListener("mousemove", function (dets) {
  Studioimg.style.top = dets.y + "px";
  Studioimg.style.left = dets.x + "px";
});
Studio.addEventListener("mouseenter", function (dets) {
  Studioimg.style.opacity = 1;
});
Studio.addEventListener("mouseleave", function (dets) {
  Studioimg.style.opacity = 0;
});
