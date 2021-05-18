const textElm = document.getElementById("text");

// Split text into individual elements
const text = textElm.innerHTML;

const textArr = text.split(" ");

const newText = textArr
  .map(
    (t) =>
      `<span class="fade-out" style="animation-delay: ${
        Math.random() * 2.5
      }s">${t} </span>`
  )
  .join("");

textElm.innerHTML = newText;

// const arrayChunks = (array, chunk_size) =>
//   Array(Math.ceil(array.length / chunk_size))
//     .fill()
//     .map((_, index) => index * chunk_size)
//     .map((begin) => {
//       return array.slice(begin, begin + chunk_size);
//     });

// Start fade out
// const animateElm = (elm) =>
//   elm.animate(
//     [
//       // keyframes
//       // end state
//       { opacity: 0 }
//     ],
//     {
//       // timing options
//       duration: 2000
//     }
//   );
// const wordElms = textElm.getElementsByTagName("span");

// const chunkedArr = arrayChunks(text.split(" "), 5);
// console.log(chunkedArr);

// let chunkedIdx = 0;
// const interval = setInterval(() => {
//   if (!chunkedArr[chunkedIdx]) {
//     clearInterval(interval);
//     return;
//   }
//   chunkedArr[chunkedIdx].forEach((element) => {
//     // animateElm(element);
//   });
//   chunkedIdx++;
// }, 1500);
