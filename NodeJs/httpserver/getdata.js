const url = require('url');

function getdata(req, res) {
    res.write(`<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>index</title>
    </head>
    
    <body style="margin: 0; padding: 0;">
        <div style="width: 100vw;background-color:aqua;display: grid;grid-template-columns: repeat(2,50%);">
            <div style="width: 100%;height: 100%;background-color: teal;display: flex;
            justify-content: center;align-items: center;">
                <h1>ชื่อ : ${url.parse(req.url,true).query.fname} </h1>
            </div>
            <div style="width: 100%;background-color:tomato;text-align: center;">
                <h1>นามสกุล: ${url.parse(req.url,true).query.lname}  </h1>
            </div>
        </div>
    </body>
    
    </html>
   `)
    return res.end();
 };
 
 module.exports.getdata = getdata