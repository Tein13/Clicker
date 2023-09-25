var score = 0;
updating = 1;
alert('Ты герой из игры Dota2, твоя задача бить крипов.С крипов ты получаешь дублоны, за дублоны покупаешь улучшения.Смысл игры купить MOM(MASK OF MADNESS).Удачи!')
function clickBtn() {
  score = score + updating;
  document.getElementsByTagName("h1")[0].firstChild.data = score;
}
function if1 () {
  if (score < -100) {
    document.write("Вы проиграли, так-как Габен забрал последние дублоны");
  }
}
function update() {
  score = score - 50;
  document.getElementsByTagName("h1")[0].firstChild.data = score;
  if1();
  updating += 1;
}
function update1() {
  score = score - 100;
  document.getElementsByTagName("h1")[0].firstChild.data = score;
  if1();
  updating += 2;
}
function update2() {
  score = score - 150;
  document.getElementsByTagName("h1")[0].firstChild.data = score;
  if1();
  updating += 3;
}
function update3() {
  score = score - 200;
  document.getElementsByTagName("h1")[0].firstChild.data = score;
  if1();
  updating += 5;
}
function update4() {
  score = score -275;
  document.getElementsByTagName("h1")[0].firstChild.data = score;
  if1();
  updating += 10;
}
function update5() {
  score = score -100000;
  document.getElementsByTagName("h1")[0].firstChild.data = score;
  if1();
  document.write("Вы победили! Пудж нажал пердеж с момом и умер")
}
function auto() {
  score = score - 1000;
  document.getElementsByTagName("h1")[0].firstChild.data = score;
  if1();
  setTimeout("plusauto()", 1000);
}
function plusauto () {
  score += updating;
  document.getElementsByTagName("h1")[0].firstChild.data = score;
  setTimeout("auto1()", 1000);
}
function auto1 () {
  score += updating;
  setTimeout("plusauto()", 1000);
  document.getElementsByTagName("h1")[0].firstChild.data = score;
}
function pashalka () {
  score += 100000   ;
  document.getElementsByTagName("h1")[0].firstChild.data = score;
}
function reboot () {
  alert("Ваш уровень пуджа " + updating + ". Ваши дублоны " + score + " .")
}

