var Sequelize = require('sequelize');

var sequelize = new Sequelize('nodemysql', 'mydatabase','mypassword',{
    host: 'localhost',
    dialect: 'mysql',
    port:3306,
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
  });

  sequelize.authenticate()
            .then(()=>{
            console.log("Connected")    
            })

            sequelize
            .query(
              'SELECT * FROM products WHERE name = :status  ',
              { raw: true, replacements: { status: 'TV' } }
            )
            .then(products => {
              console.log(products)
            })           
  console.log("Reached end of file")























/*var Sequelize = require("sequelize");

//Setting up the config
var sequelize = new Sequelize('nodemysql','root', {
    host: "localhost",
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
});
//check connection establishment
sequelize.authenticate()
            .then(()=>{
                console.log('Success')
            }).catch((err)=>{
                console.log(err)
            })

            var User = sequelize.define('user',{
    username:Sequelize.STRING,
    birthday:Sequelize.DATE
});

sequelize.sync().then(function() {
    return User.create({
      username: 'janedoe',
      birthday: new Date(1990, 4, 9)
    });
  }).then(function(jane) {
    console.log(jane.get({
      plain: true
    }));
  });
  
module.exports = sequelize*/