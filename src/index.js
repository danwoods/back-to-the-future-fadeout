var textElm = document.getElementById("text");

var textArr = textElm.innerHTML.split(" ");

// var newText = textArr
//   .map(
//     function(t){
//       return '<span class="fade-out" style="animation-delay: '+ Math.random() * 2.5 + 's">' + t + ' </span>'
//     }
//   )
//   .join("");

var newTextArr = []
console.log(textArr, textArr.length)
for (var i = 0; i < textArr.length; i++) {
  console.log(textArr[i])
  newTextArr.push('<span class="fade-out" style="animation-delay: ' + Math.random() * 2.5 + 's">' + textArr[i] + ' </span>')
}

textElm.innerHTML = newTextArr.join("");

setTimeout(() => {
  var span = document.createElement("span");
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

