var db = require('./databaseAPI');



module.exports = {
  getUserTweets: function(username, cb){
    var listOfTweets = [];
    db.getUserTwitterHandle(username).then((snapshot) => {
      if(!snapshot){
        console.log("error!");
      }else{
        var twitterHandle = snapshot.val();
        //request tweets for tweets, callback over list of tweets
      }

    });

  },

  stringifyAllTweets: function(tweets){
    var str = '';
    tweets.forEach((tweet)=>{
      str = str + ' ' + tweet.text;
      return str;
    });
  }



}