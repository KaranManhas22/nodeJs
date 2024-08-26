const express = require('express')
const app = express()
const PORT = 6002
const studentArray=require('./data')

app.get('/appName',(req,res)=>
{
    res.send("Welcome to Market Minder")
})
app.get('/studentsDetail',(req,res)=>
    {
    res.send(studentArray)
})

app.get('/genderDetail',(req,res)=>
{
    let filteredArray=studentArray.filter((x)=>
    {
        return x.gender=='Male'
    })
    res.send(filteredArray)

})

app.get('/departmentDetail',(req,res) =>
{
    let filteredDepartment=studentArray.filter((x)=>
    {
        return x.department='cse'
    })
    res.send(filteredDepartment)
})

app.listen(PORT,(err)=>
{
    if(err)
    {
        console.log("Server is not running",err);
    }
    else{
        console.log("Server is running");
    }
    
})