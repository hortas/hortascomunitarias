var app = require('./app_config.js');
var userController = require('./controller/userController.js');

app.get('/', function (req,res) {
    res.end('Servidor On');  
});

app.get('/users', function (req,res) {
  userController.list(function(resp){
    res.json(resp);
  });
});


app.get('/users/:id', function (req,res) {
   var id = req.param('id');
   userController.user(id,function(resp){
    res.json(resp);
  });
});


app.post('/users', function (req,res) {

  var name = req.param('name');
  var email = req.param('email');
  var password = req.param('password');

  userController.save(name, email, password, function(resp){
    res.json(resp);
  });
});


app.put('/users', function (req,res) {
  var id = req.param('id');
  var name = req.param('name');
  var email = req.param('email');
  var password =req.param('password');
  userController.update(id, name, email,password, function(resp){
    res.json(resp);
  });
});


app.delete('/users/:id', function (req,res) {
   var id = req.param('id');
   userController.delete(id, function(resp){
    res.json(resp);
  });
});



