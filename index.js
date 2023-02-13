const express = require('express');
const app= express();
const port = 3000;
const bodyParser= require('body-parser');
const fs = require('fs');
const urlEncodedParser = bodyParser.urlencoded({extended:false});
const jsonParser = bodyParser.json();
const fileName = 'course.json';

// Load data from file
let rawData = fs.readFileSync(fileName);
let data = JSON.parse(rawData);


app.set('views', 'views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function(request, response){
    response.render('home');
});

app.post('/result',urlEncodedParser, function(request, response){
    //response.end(request.body.CourseList);
    console.log(request.body.CourseList);
    if(request.body.CourseList == "apt"){
        console.log("APT courses: " + data.APT.name);
        response.render('result', 
        {coursename: data.APT.name,
            1:data.APT.list[0],
            2:data.APT.list[1],
            3:data.APT.list[2],
            4:data.APT.list[3],
            5:data.APT.list[4],
            6:data.APT.list[5],
            7:data.APT.list[6],
            8:data.APT.list[7],
            9:data.APT.list[8],
            10:data.APT.list[9]
            });
    }
    else if(request.body.CourseList == "ist"){
        console.log("IST courses: " + data.IST.name);
        response.render('result', 
        {coursename: data.IST.name,
            1:data.IST.list[0],
            2:data.IST.list[1],
            3:data.IST.list[2],
            4:data.IST.list[3],
            5:data.IST.list[4],
            6:data.IST.list[5],
            7:data.IST.list[6],
            8:data.IST.list[7],
            9:data.IST.list[8],
            10:data.IST.list[9]
        });
        
    }
});

app.listen(port);
console.log('server is listening on port 3000');