module.exports = {
  getUserTweets: function(username){
    var listOfTweets = [];

    return listOfTweets;
  },

  stringifyAllTweets: function(tweets){
    var str = '';
    tweets.forEach((tweet)=>{
      str = str + ' ' + tweet.text;
      return str;
    });
  }



}