var textElm = document.getElementById("text");

var textArr = textElm.innerHTML.split(" ");

var newTextArr = []

for (var i = 0; i < textArr.length; i++) {
  newTextArr.push('<span class="fade-out" style="animation-delay: ' + Math.random() * 2.5 + 's">' + textArr[i] + ' </span>')
}

textElm.innerHTML = newTextArr.join("");

/**
 * Create div to hold text and button
 * @returns {HTNLDivElement} Newly created and styled div
 */
function createContainerDiv (){
  var div = document.createElement("div");

  div.style.position = "absolute";
  div.style.bottom = "24%";
  div.style["margin-left"] = "auto";
  div.style["margin-right"] = "auto";
  div.style.left = 0;
  div.style.right = 0;
  div.style["text-align"] = "center";
  div.style["font-weight"] = "bold";
  div.style["text-transform"] = "capitalize";

  return div
}

/**
 * Create text
 * @returns {HTNLDivElement} Newly created and styled div with CTA text
 */
function createTextDiv (){
  var div = document.createElement("div");

  div.textContent = "Don't let the knowledge fade";

  return div
}

/**
 * Create button
 * @returns {HTNLButtonElement} Newly created and styled button
 */
function createButton (){
  var button = document.createElement("button");

  button.textContent = "Donate Now";
  button.style.display = "table-cell";
  button.style["vertical-align"] = "middle";
  button.style.height = "20px";
  button.style.color = "#36c";
  button.style["background-color"] = "#f8f9fa";
  button.style["border-radius"] = "10px";
  button.style.border = "1px solid #a2a9b1";
  button.style["text-align"] = "center";
  button.style.cursor = "pointer";
  button.style.transition = "all 0.2s ease";
  button.style["font-weight"] = "bold";
  button.style["margin-top"] = "4px";

  return button
}

setTimeout(function showCTA (){
  var div = createContainerDiv()
  var text = createTextDiv()
  var button = createButton()

  div.appendChild(text)
  div.appendChild(button)
  textElm.appendChild(div);
}, 5250);

