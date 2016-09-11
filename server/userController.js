var request = require('request');


module.exports = {
  register: function(req, res){
    db.createUser(req.body.username, {
      facebook: req.body.facebook,
      uber: req.body.uber
    })
    res.send('got post for user/register');
  },

  getUser: function(req, res){
    console.log('got request for');
    res.send(`got get request for user/${req.params.username}`);
  }

};
