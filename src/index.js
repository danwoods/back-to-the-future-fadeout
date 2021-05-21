/** @file Fade-out effect for text */

/* Determine if the user has asked for reduced motion */
var prefersReducedMotion =
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)") &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Element containing text we want to fade */
var textElm = document.getElementById("text");

/** The text we want to fade, split into an array based on spaces */
var textArr = textElm.innerHTML.split(" ");

/** New array for updated text */
var newTextArr = [];

// Loop through array of text we want to fade, replacing each text with a span element that has the proper classes and styling
for (var i = 0; i < textArr.length; i++) {
  newTextArr.push(
    '<span class="fade-out" style="animation-delay: ' +
      (prefersReducedMotion ? 1.5 : Math.random() * 2.5) +
      's">' +
      textArr[i] +
      " </span>"
  );
}

// Join the newly created spans back together and set them as the text of the initial containing element
textElm.innerHTML = newTextArr.join("");

/**
 * Create aside to hold text and button
 * @returns {HTMLAsideElement} Newly created and styled aside
 */
function createContainerAside() {
  var aside = document.createElement("aside");

  aside.setAttribute("class", "cta");
  aside.setAttribute("style", "animation-delay: 550ms");

  return aside;
}

/**
 * Create text
 * @returns {HTMLDivElement} Newly created and styled div with CTA text
 */
function createTextDiv() {
  var div = document.createElement("div");

  div.textContent = "Don't let the knowledge fade";

  return div;
}

/**
 * Create button
 * @returns {HTMLButtonElement} Newly created and styled button
 */
function createButton() {
  var button = document.createElement("button");

  button.textContent = "Donate Now";

  return button;
}

// Set timeout for CTA so that it happens after everything is faded out
setTimeout(function showCTA() {
  var aside = createContainerAside();
  var text = createTextDiv();
  var button = createButton();

  aside.appendChild(text);
  aside.appendChild(button);
  textElm.appendChild(aside);
}, 5250);
