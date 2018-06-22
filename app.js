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
