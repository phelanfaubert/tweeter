/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {

  loadTweets();
  $('form').on('submit', function (event) {
    event.preventDefault();
    let data = $('form').serialize();
    let inputVal = $('#tweet-text').val()
    const error = $("#errorname");
    if (inputVal.length <= 0) {
      error.html("Form Empty!")
      error.slideDown();
      return;
    } else if (inputVal.length > 140) {
      error.html("Too Many Characters");
      error.slideDown();
      return;
    } else {
      error.slideUp();
      $.ajax({
        type: "POST",
        url: "/tweets",
        data: data,
      })
        .then(function () {
          loadTweets();
          $('#tweet-text').val('')
        })
    }
  })
});

const renderTweets = function (data) {
  // loops through tweets
  for (let element of data) {
    let $newTweet = createTweetElement(element)
    $('.tweets-container').prepend($newTweet);
  }
}

const loadTweets = function () {
  $.ajax("http://localhost:8080/tweets", {
    url: "/tweets",
    method: "GET",
    success: function (data) {
      renderTweets(data);
    }
  })
};

// $("<p>").text(tweetData.content.text)
// $("<div>").text(textFromUser);
const escape = function (text) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(text));
  return div.innerHTML;
};

const createTweetElement = function (tweetData) {
  const $tweets = `
<article class="tweet-box">
<div class="tweet-header">
<div id="image-name">
  <img src="${tweetData.user.avatars}">
  <div>${tweetData.user.name}</div>
  </div>
  <div class="handle">@${tweetData.user.name}</div>
</div>
<div class="tweet-body">
<p>${escape(tweetData.content.text)}</p>
</div>
<div class="divider"></div>
<div class="tweet-footer">
  <div>${timeago.format(tweetData.created_at)}</div>
  <div class="footer-icons">
    <i class="fa-solid fa-flag"></i>
    <i class="fa-solid fa-retweet"></i>
    <i class="fa-solid fa-heart"></i>
  </div>
</div>
</article>
`;
  return $tweets;
}



