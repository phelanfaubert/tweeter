/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

createTweetElement = function(tweetData) {

const tweet = `
<article class="tweet-box">
<div class="tweet-header">
  <div>${tweetData.user.name}</div>
  <div>@${tweetData.user.name}</div>
</div>
<div class="tweet-body">
  <p>${tweetData.content.text}</p>
</div>
<div class="divider"></div>
<div class="tweet-footer">
  <div>${tweetData.created_at}</div>
  <div class="footer-icons">
    <i class="fa-solid fa-flag"></i>
    <i class="fa-solid fa-retweet"></i>
    <i class="fa-solid fa-heart"></i>
  </div>
</div>
</article>
`;
return tweet;
}

const $tweet = createTweetElement(tweetData);
// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); 

});