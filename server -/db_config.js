var db_string= "mongodb://localhost/hortasapp";
var mongoose = require('mongoose').connect(db_string);
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar'));
db.once('open', function () {
   var userSchema = mongoose.Schema({
      name: String,
      email: String,
      password: String,
      created_at: Date
   });
   exports.User = mongoose.model('User', userSchema);
});