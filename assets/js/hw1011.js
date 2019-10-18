// 日にちをしおりのタイトルに出力
let howlong = document.getElementById('howlong');
let setdate = document.getElementById('setdate');

// 行き先をしおりのタイトルに出力
let island = document.getElementById('island');
let setplace = document.getElementById('setplace');

// 行き先をしおりのボトムに出力
let setpicture = document.getElementById('setpicture');

let btn = document.getElementById('btn');

btn.addEventListener('click',function (){
  getDate(howlong.value);
  getPlace(island);
  let shiori = document.getElementById('shiori');
  shiori.style.display = "block";
});

function getDate(date) {
  setdate.textContent = date;
}

function getPlace(place) {
  setplace.textContent = place.value;
  setpicture.src='img/'+place.value+'.png';
}

$(".js-toggle").on("click", function() {
  $(this).toggleClass("on");
  $(this)
    .siblings()
    .slideToggle();
});
