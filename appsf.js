const jsforce = require('jsforce')
const express = require('express')
const app = express()

const username = 'update your username'
const password = 'update your password'

//create login for access token with username and password for first time and can use accesstoken and instant URL from next time  

//const conn = new jsforce.Connection('https://login.salesforce.com/')

const conn = new jsforce.Connection({
    instanceUrl:'',
    accessToken:''
})

function fetchRecords(){
    if(conn){
        var records = [];
  conn.query("SELECT Name FROM Contact", function(err, result) {
    if (err) { return console.error(err) }
    console.log("Total Records Found: " + result.totalSize)
    console.log("Total records Fetched : " + result.records.length)
    console.log('Total records done fetching ?'+result.done)
    console.log(JSON.stringify(result))
  })

    }
    else{
        console.log('Errored out')
    }
}
fetchRecords()
conn.login(username,password,(err, userInfo) =>{
    if (err) { return console.error(err) }
    // Now you can get the access token and instance URL information.
    // Save them to establish connection next time.
    console.log('Access Token: ',conn.accessToken);
    console.log('URL ',conn.instanceUrl);
    // logged in user property
    console.log("User ID: " + userInfo.id)
    console.log("Org ID: " + userInfo.organizationId)
    // ...
  });
  
 
 /* conn.logout(((err)=>{
    if(err){
        return console.log(err)
    }
}))*/
