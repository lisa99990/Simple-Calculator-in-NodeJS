output = function(res,val){
    var firstNum = parseInt(val.first);
    var secondNum = parseInt(val.second);
    var outputNum;
    if(val.operation=="add"){
        outputNum = firstNum+secondNum;
    }
    else if(val.operation=="sub"){
        outputNum = firstNum-secondNum;
    }
    else if(val.operation=="mul"){
        outputNum = firstNum*secondNum;
    }
    else if(val.operation=="div"){
        outputNum = firstNum/secondNum;
    }
     return outputNum;
    // res.writeHead(200,{'Content-Type':'text/html'});
    // res.write(`<!DOCTYPE html>
    // <html lang="en">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>Adder Output</title>
    // </head>
    // <body>
    // <h3>
    // The Answer is: ${outputNum}
    // </h3>
    // <form action="http://localhost:8080/goBack"  >
    // <input type="submit" value="Another Calculation" />
    // </form>
    // </body>
    // </html>`);
    // return res.end();

}

exports.output = output;