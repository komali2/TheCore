module.exports = {
  getUserTweets = function(username){
    var listOfTweets = [];

    return listOfTweets;
  }

  stringifyAllTweets = function(tweets){
    var string = '';
    tweets.forEach(tweet){
      string = string + ' ' + tweet.text;
    }
    return string;
  }



}