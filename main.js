const placeholder = document.querySelector(".img-placeholder");
const loading = document.querySelector(".loading-gif");
const image = document.querySelector(".img");
const range = document.querySelectorAll("input[type='range']");
const url = document.querySelector("#url");
const btn = document.querySelector("#submit");

let css = {
  brightness: 0.8,
  contrast: 0.8,
  "hue-rotate": "0turn",
  blur: "0px",
  saturate: 1,
  sepia: 0,
};

btn.addEventListener("click", (e) => {
  placeholder.style.display = "block";
  loading.style.display = "block";

  let tempImage = new Image();
  tempImage.src = url.value;

  tempImage.addEventListener("load", function () {
    image.src = url.value;
    placeholder.style.display = "none";
    loading.style.display = "none";
  });
});

range.forEach(function (e) {
  if (e.id === "hue-rotate") {
    e.value = 0;
  } else if (e.id === "blur") {
    e.value = 0;
  } else {
    e.value = css[e.id] * 100;
  }

  e.addEventListener("input", (event) => {
    let id = event.target.id;
    let value;

    if (id === "hue-rotate") {
      console.log("id: ", id);
      value = `${(event.target.value * 1) / 100}turn`;
      console.log("value: ", value);
    } else if (id === "blur") {
      console.log("id: ", id);
      value = `${event.target.value}px`;
      console.log("value: ", value);
    } else {
      console.log("id: ", id);

      value = (event.target.value * 1) / 100;
      console.log("value: ", value);
    }

    css[`${id}`] = value;
    console.table(css);

    image.style.filter = `brightness(${css.brightness}) contrast(${css.contrast}) hue-rotate(${css["hue-rotate"]}) blur(${css.blur}) saturate(${css.saturate}) sepia(${css.sepia})`;
  });
});
