const express = require('express')
const mysql = require('mysql')

//create connection
const db = mysql.createConnection({
    host:'localhost',
    user:'mydatabase',
    password:'mypassword',
    database:'nodemysql'
})

//connect to database
db.connect((err)=>{
    if(err)
    {
        console.log(err);
        throw err;  
    }
   console.log('Mysql connected ...')
})
const app = express()
//create a database
app.get('/createdb',(req,res)=>{
    let sql = 'CREATE DATABASE nodemysql'
    db.query(sql,(err,result)=>{
        if(err) throw err
        console.log(result)
        res.send('Database created')
    })
})

app.get('/createproducttable',(req,res)=>{
    let sql = 'CREATE TABLE products(id INT AUTO_INCREMENT,name VARCHAR(30),PRIMARY KEY (id))';
   
    db.query(sql,(err,result)=>{
        if(err) throw err
        console.log(result)
        res.send('Created product table')
    })
})

//insert data into table
app.get('/addproduct',(req,res) =>{
    let product = {name:'IPhone'}
    let sql = 'INSERT INTO products SET ?'
    let query = db.query(sql,product,(err,result)=>
    {
        if(err) throw err
        console.log(result)
        res.send('Inserted into product table')
    })
 })
 app.get('/addproduct2',(req,res) =>{
    let product = {name:'TV'}
    let sql = 'INSERT INTO products SET ?'
    let query = db.query(sql,product,(err,result)=>
    {
        if(err) throw err
        console.log(result)
        res.send('Inserted into product table')
    })
 })

 //Select table data
 app.get('/getproducts',(req,res) =>{
    let sql = 'SELECT * FROM products'
    let query = db.query(sql,(err,result)=>
    {
        if(err) throw err
        console.log(result)
        res.send('Fetched data product table')
    })
 })

 //get individual dat by id
 app.get('/getproduct/:id',(req,res) =>{
    let sql = `SELECT * FROM products WHERE id = ${req.params.id}`;
    let query = db.query(sql,(err,result)=>
    {
        if(err) throw err
        console.log(result)
        res.send('Fetched data for given id from product table')
    })
 })

 app.get('/product/:id',(req,res) =>{
    let sql = `SELECT * FROM products WHERE id = ${req.params.id}`;
    let query = db.query(sql,(err,result)=>
    {
        if(err) throw err
        console.log(result)
        res.send('Fetched data for given id from product table')
    })
 })
 //Update given product
 app.get('/updateproduct/:id',(req,res) =>{
     let newName = 'Sony'
    let sql = `Update products SET name ='${newName}' WHERE id = ${req.params.id}`;
    let query = db.query(sql,(err,result)=>
    {
        if(err) throw err
        console.log(result)
        res.send('Updated data for given id from product table')
    })
 })

 //Delete given product with id
 app.get('/deleteproduct/:id',(req,res) =>{
   let sql = `DELETE FROM cproducts WHERE id = ${req.params.id}`;
   let query = db.query(sql,(err,result)=>
   {
       if(err) throw err
       console.log(result)
       res.send('Deleted data for given id from product table')
   })
})
 app.listen('3000',()=>{
    console.log('Server started and listening on Port:3000')
})