const textElm = document.getElementById("text");

const textArr = textElm.innerHTML.split(" ");

const newText = textArr
  .map(
    (t) =>
      `<span class="fade-out" style="animation-delay: ${
        Math.random() * 2.5
      }s">${t} </span>`
  )
  .join("");

textElm.innerHTML = newText;

setTimeout(() => {
  let span = document.createElement("span");
  span.style.position = "absolute";
  span.style.bottom = "35%";
  span.style["margin-left"] = "auto";
  span.style["margin-right"] = "auto";
  span.style.left = 0;
  span.style.right = 0;
  span.style["text-align"] = "center";
  span.textContent = "Don't let the knowledge fade";
  span.style["font-weight"] = "bold";
  span.style["text-transform"] = "capitalize";
  textElm.appendChild(span);
}, 5250);

