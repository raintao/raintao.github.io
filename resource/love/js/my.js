$("#words").hide();

var offsetX = $("#loveHeart").width() / 2;

var offsetY = $("#loveHeart").height() / 2 - 55;

var together = new Date();

together.setFullYear(2016, 5-1, 1);

together.setHours(11);

together.setMinutes(11);

together.setSeconds(0);

together.setMilliseconds(0);



if (!document.createElement('canvas').getContext) {

var msg = document.createElement("div");

msg.id = "errorMsg";

msg.innerHTML = "Your browser doesn't support HTML5!<br/>Recommend use Chrome 14+/IE 9+/Firefox 7+/Safari 4+";

document.body.appendChild(msg);

$("#code").css("display", "none")

$("#copyright").css("position", "absolute");

$("#copyright").css("bottom", "10px");

  document.execCommand("stop");

} else {

setTimeout(function () {

  startHeartAnimation();

}, 5000);


timeElapse(together);

setInterval(function () {

  timeElapse(together);
  $('#mints').html(parseInt((new Date().getTime()-together.getTime())/1000));

}, 500);



adjustCodePosition();

$("#code").typewriter();

}
