jQuery();
jQuery === $

$(document).ready(function() {
$("#tweet-text").on("input", function (event) {
  let charsRemain = 140 - event.target.value.length;
  $(".counter").text(charsRemain);
  if (charsRemain < 0) {
    $(".counter").css("color", "#ff0000");
  } else {
    $(".counter").css("color", "black");

  }
});
});
