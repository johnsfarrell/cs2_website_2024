// const heading = document.querySelector("h1").querySelector("span");
// const subheading = document.getElementById("subheading");

// var count = 3;

// heading.addEventListener("click", () => {
//   heading.textContent = `CS${count++}`;
// });

/// 3D object perspective
// Source: https://armandocanals.com/posts/CSS-transform-rotating-a-3D-object-perspective-based-on-mouse-position.html
// (inspiration): https://github.com/jchen/site/blob/0ade8a3e5f174563974574eaf2cfc6b90cdf9bae/src/components/Fortune/Fortune.astro

// if on index.html, constrain = 150, else constrain = 300
let constrain = 500;
if (window.location.pathname === "/") {
  constrain = 150;
}
let mouseOverContainer = document.getElementsByTagName("html")[0];
let rotationalContainer = document.getElementById("rotational-container");

mouseOverContainer.onmousemove = function (e) {
  rotationalContainer &&
    window.requestAnimationFrame(function () {
      let box = rotationalContainer.getBoundingClientRect();
      let calcX = -(e.clientY - box.y - box.height / 2) / constrain;
      let calcY = (e.clientX - box.x - box.width / 2) / constrain;
      let transformation = `perspective(100px) rotateX(${calcX}deg) rotateY(${calcY}deg)`;
      rotationalContainer.style.transform = transformation;
    });
};

// Page always starts at the top
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
