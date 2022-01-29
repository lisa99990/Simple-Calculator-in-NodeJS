const express = require('express');
const app = express();
const operationModule = require('./operationModule');
var path = require('path');

app.listen(8080, ()=>{
    console.log("Server is running");
});

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'public')))

app.get('/goBack', (req, res)=>{
    res.redirect('./index.html');
});

app.post('/calculator', (req,res,next)=>{
    operationModule.output(res,req.body);
    var outputNum = operationModule.output(res,req.body);
    req.app.set('outputNum',outputNum);
    res.redirect('/view');
});

app.get('/view',(req,res,next)=>{
    
    let view=
    `<!DOCTYPE html>
     <html lang="en">
   <head>
        <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Adder Output</title>
        <link href="/style.css" rel="stylesheet">
    </head>
     <body>
     <h2 class="output">
    The Answer is  : ${req.app.get('outputNum')}
    </h2>
    <form action="http://localhost:8080/goBack">
    <button type="submit" class="button button2">Another Calculation</button>
    </form>
    </body>
    </html>`
    res.send(view);
});


// app.get('/goBackHere', (req, res)=>{
//     var options = {
//         root: path.join(__dirname)
//     };
     
//     var fileName = 'index.html';
//     res.sendFile(fileName, options, function (err) {
//         if (err) {
//             next(err);
//         } else {
//             console.log('Sent:', fileName);
//         }
//     });
// });