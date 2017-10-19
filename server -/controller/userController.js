var db = require('../db_config.js');

exports.list = function(callback){
   db.User.find({}, function(error, users){
      if (error){
        callback({error: "Não foi possivel retornar os usuários"});
      }
      else{
        callback(users);
      }
   });
};

exports.user = function(id, callback){
  db.User.findById( id, function(error, user){
      if (error){
        callback({error: "Não foi possivel retornar o usuário"});
      }
      else{
        callback(user);
      }    
   });
};

exports.save = function(name, email, password, callback){
  new db.User({
    'name': name,
    'email': email,
    'password': password,
    'created_at': new Date()
  }).save(function(error, user){
    if (error){
      callback({error: "Não foi possivel salvar o usuário"});
    }
    else{
      callback(user);
    }
  });
};


exports.update = function(id, name, email, password, callback){
  db.User.findById(id, function(error, user){
    if(name){
      user.name = name;
    }
    if(email){
      user.email = email;
    }
    if(password){
      user.password = password;
    }
    user.save(function(error, user){
      if (error){
        callback({error: "Não foi possivel salvar o usuário"});
      }
      else{
        callback(user);
      }
    })  
  });
};


exports.delete = function(id, callback){
   db.User.findById( id, function(error, user){
      if (error){
        callback({error: "Não foi possivel retornar os usuários"});
      }
      else{
        user.remove(function(error){
          if (!error){
            callback({response: 'Usuário excuído com sucesso'});
          }
        });
      }
   });


};
