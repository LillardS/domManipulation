var div1 = document.getElementById('div1');

var unicycle = document.getElementsByClassName('unicycle');

var paragraphs = document.getElementsByTagName('p');

var queryUnicycle = document.querySelector('.unicycle');

var queryAll = document.querySelectorAll('.unicycle, #div2');

// var text = "<h1>How's it going World?</h1>";

var text = "How's it going World?";

// queryUnicycle.innerHTML = text;

queryUnicycle.textContent = text;

// for (i = 0; i < queryAll.length; ++i) {
//     queryAll[i].innerHTML = text;
// }